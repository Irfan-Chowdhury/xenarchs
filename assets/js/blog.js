(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var categoryBtns = document.querySelectorAll('.blog-cat-btn, .blog-category-btn');
    var searchInput = document.getElementById('blogSearchInput');
    var articleCards = document.querySelectorAll('.blog-article-card');
    var compactDividers = document.querySelectorAll('.blog-side-divider, .blog-compact-divider');
    var noResults = document.getElementById('blogNoResults');
    var subscribeForm = document.getElementById('blogSubscribeForm');

    var currentCategory = 'all';
    var currentSearchQuery = '';

    function filterArticles() {
      var visibleCount = 0;

      articleCards.forEach(function (card) {
        var cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        var searchText = (card.getAttribute('data-search-text') || card.textContent || '').toLowerCase();

        var matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory.toLowerCase());
        var matchesSearch = (!currentSearchQuery || searchText.indexOf(currentSearchQuery.toLowerCase()) !== -1);

        if (matchesCategory && matchesSearch) {
          card.style.display = '';
          card.classList.remove('d-none');
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.classList.add('d-none');
        }
      });

      // Handle dividers visibility in compact right column list
      compactDividers.forEach(function (divider) {
        var prevItem = divider.previousElementSibling;
        var nextItem = divider.nextElementSibling;
        if (prevItem && nextItem && prevItem.style.display !== 'none' && !prevItem.classList.contains('d-none') && nextItem.style.display !== 'none' && !nextItem.classList.contains('d-none')) {
          divider.style.display = '';
          divider.classList.remove('d-none');
        } else {
          divider.style.display = 'none';
          divider.classList.add('d-none');
        }
      });

      if (noResults) {
        if (visibleCount === 0) {
          noResults.style.display = 'block';
          noResults.classList.remove('d-none');
        } else {
          noResults.style.display = 'none';
          noResults.classList.add('d-none');
        }
      }
    }

    categoryBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        categoryBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'all';
        filterArticles();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        currentSearchQuery = e.target.value.trim();
        filterArticles();
      });
    }

    if (subscribeForm) {
      subscribeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailInput = document.getElementById('blogSubscribeEmail');
        if (emailInput && emailInput.value.trim() !== '') {
          alert('Thank you for subscribing to Xenarchs Journal!');
          emailInput.value = '';
        }
      });
    }
  });
})();
