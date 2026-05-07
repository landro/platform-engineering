/* ============================================================
   Platform Engineering Manifesto — Client-side search
   ------------------------------------------------------------
   Loads /search.json (generated at build time) and performs
   a simple case-insensitive substring match against page
   titles and content. Results render in a dropdown beneath
   the search input.
   ============================================================ */
(function () {
  "use strict";

  var input = document.getElementById("site-search-input");
  var results = document.getElementById("site-search-results");
  var wrapper = document.getElementById("site-search");
  if (!input || !results || !wrapper) return;

  var indexUrl = wrapper.getAttribute("data-index-url") || "/search.json";
  var index = null;
  var indexPromise = null;
  var MAX_RESULTS = 8;
  var SNIPPET_LEN = 140;

  function loadIndex() {
    if (indexPromise) return indexPromise;
    indexPromise = fetch(indexUrl, { credentials: "same-origin" })
      .then(function (r) {
        if (!r.ok) throw new Error("Failed to load search index");
        return r.json();
      })
      .then(function (data) {
        index = data;
        return data;
      })
      .catch(function (err) {
        // Reset so a future keystroke can retry
        indexPromise = null;
        throw err;
      });
    return indexPromise;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function buildSnippet(content, query) {
    if (!content) return "";
    var lower = content.toLowerCase();
    var idx = lower.indexOf(query.toLowerCase());
    var start, snippet;
    if (idx === -1) {
      snippet = content.slice(0, SNIPPET_LEN);
      if (content.length > SNIPPET_LEN) snippet += "\u2026";
      return escapeHtml(snippet);
    }
    start = Math.max(0, idx - 40);
    snippet = content.slice(start, start + SNIPPET_LEN);
    if (start > 0) snippet = "\u2026" + snippet;
    if (start + SNIPPET_LEN < content.length) snippet += "\u2026";
    var safe = escapeHtml(snippet);
    var pattern = new RegExp("(" + escapeRegExp(escapeHtml(query)) + ")", "ig");
    return safe.replace(pattern, "<mark>$1</mark>");
  }

  function highlightTitle(title, query) {
    var safe = escapeHtml(title);
    var pattern = new RegExp("(" + escapeRegExp(escapeHtml(query)) + ")", "ig");
    return safe.replace(pattern, "<mark>$1</mark>");
  }

  function score(entry, query) {
    var q = query.toLowerCase();
    var title = (entry.title || "").toLowerCase();
    var content = (entry.content || "").toLowerCase();
    if (title === q) return 100;
    if (title.indexOf(q) === 0) return 80;
    if (title.indexOf(q) !== -1) return 60;
    if (content.indexOf(q) !== -1) return 20;
    return 0;
  }

  function search(query) {
    if (!index) return [];
    var matches = [];
    for (var i = 0; i < index.length; i++) {
      var s = score(index[i], query);
      if (s > 0) matches.push({ entry: index[i], score: s });
    }
    matches.sort(function (a, b) { return b.score - a.score; });
    return matches.slice(0, MAX_RESULTS);
  }

  function render(matches, query) {
    if (!matches.length) {
      results.innerHTML =
        '<li class="search-empty">No results for &ldquo;' +
        escapeHtml(query) + '&rdquo;</li>';
      showResults();
      return;
    }
    var html = "";
    for (var i = 0; i < matches.length; i++) {
      var e = matches[i].entry;
      var parentHtml = "";
      if (e.parent) {
        parentHtml =
          '<span class="search-result-parent">' +
            escapeHtml(e.parent) +
          '</span>';
      }
      html +=
        '<li class="search-result">' +
          '<a href="' + escapeHtml(e.url) + '">' +
            parentHtml +
            '<span class="search-result-title">' +
              highlightTitle(e.title || e.url, query) +
            '</span>' +
            '<span class="search-result-snippet">' +
              buildSnippet(e.content || "", query) +
            '</span>' +
          '</a>' +
        '</li>';
    }
    results.innerHTML = html;
    showResults();
  }

  function showResults() {
    results.hidden = false;
    wrapper.classList.add("is-open");
    input.setAttribute("aria-expanded", "true");
  }

  function hideResults() {
    results.hidden = true;
    wrapper.classList.remove("is-open");
    input.setAttribute("aria-expanded", "false");
  }

  function handleQuery() {
    var q = input.value.trim();
    if (q.length < 2) {
      hideResults();
      return;
    }
    loadIndex()
      .then(function () { render(search(q), q); })
      .catch(function () {
        results.innerHTML =
          '<li class="search-empty">Search index unavailable.</li>';
        showResults();
      });
  }

  input.addEventListener("input", handleQuery);
  input.addEventListener("focus", function () {
    if (input.value.trim().length >= 2) showResults();
  });

  document.addEventListener("click", function (e) {
    if (!wrapper.contains(e.target)) hideResults();
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      hideResults();
      input.blur();
    } else if (e.key === "ArrowDown") {
      var first = results.querySelector("a");
      if (first) { e.preventDefault(); first.focus(); }
    }
  });

  results.addEventListener("keydown", function (e) {
    var links = Array.prototype.slice.call(results.querySelectorAll("a"));
    var i = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && i < links.length - 1) {
      e.preventDefault(); links[i + 1].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (i <= 0) input.focus(); else links[i - 1].focus();
    } else if (e.key === "Escape") {
      hideResults(); input.focus();
    }
  });
})();
