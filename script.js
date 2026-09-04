document.addEventListener("DOMContentLoaded", function () {
  var pdfPath = "Investor%20Pitch%20Deck.pdf";
  var embedEl = document.getElementById("pdf-embed");

  if (embedEl) {
    embedEl.setAttribute("src", pdfPath);
  }

  // Simple fallback: if the embed fails to load within 3 seconds,
  // show a direct download/open link instead.
  setTimeout(function () {
    var fallback = document.getElementById("fallback");
    if (fallback) {
      fallback.style.display = "block";
    }
  }, 3000);
});
