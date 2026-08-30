(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var categoryBtns = document.querySelectorAll(".career-cat-btn");
    var searchInput = document.getElementById("careerSearchInput");
    var jobCards = document.querySelectorAll(".career-job-card");
    var noResultsMsg = document.getElementById("careerNoResults");

    var currentCategory = "all";
    var currentSearchQuery = "";

    function filterJobs() {
      var visibleCount = 0;

      jobCards.forEach(function (card) {
        var cardCategories = (card.getAttribute("data-category") || "").toLowerCase().split(" ");
        var cardSearchText = (card.getAttribute("data-search-text") || card.textContent || "").toLowerCase();

        // 1. Check Category Match
        var matchesCategory = (currentCategory === "all") || cardCategories.includes(currentCategory.toLowerCase());

        // 2. Check Search Match
        var matchesSearch = !currentSearchQuery || cardSearchText.includes(currentSearchQuery.toLowerCase());

        if (matchesCategory && matchesSearch) {
          card.classList.remove("d-none");
          card.style.display = "";
          visibleCount++;
        } else {
          card.classList.add("d-none");
          card.style.display = "none";
        }
      });

      // 3. Show/Hide Empty State Message
      if (noResultsMsg) {
        if (visibleCount === 0) {
          noResultsMsg.classList.remove("d-none");
        } else {
          noResultsMsg.classList.add("d-none");
        }
      }
    }

    // Category Button Click Listeners
    categoryBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        categoryBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        currentCategory = btn.getAttribute("data-category") || "all";
        filterJobs();
      });
    });

    // Search Input Listener
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        currentSearchQuery = e.target.value.trim();
        filterJobs();
      });
    }
  });
})();
