/**
 * XENARCHS JOURNAL - BLOG JAVASCRIPT
 * Handles Category Filtering, Live Search, and Newsletter Subscription
 */

document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const searchInput = document.querySelector('.search-input');
  const newsletterForm = document.querySelector('.newsletter-form-row');
  
  // Select all filterable cards
  const allCards = document.querySelectorAll('.main-featured-card, .small-featured-card, .dark-article-card');

  let activeCategory = 'All Articles';
  let searchQuery = '';

  // 1. CATEGORY FILTERING
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Update active state on buttons
      categoryButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      activeCategory = btn.textContent.trim();
      filterArticles();
    });
  });

  // 2. LIVE SEARCH FILTERING
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterArticles();
    });
  }

  // Combined Filter Function
  function filterArticles() {
    allCards.forEach(card => {
      // Find category text inside the card
      const categoryEl = card.querySelector('.meta-category, .dark-meta-category, .featured-label');
      const cardCategory = categoryEl ? categoryEl.textContent.trim() : '';

      // Find title and excerpt text
      const titleEl = card.querySelector('.main-card-title, .small-card-title, .dark-card-title');
      const excerptEl = card.querySelector('.main-card-excerpt, .small-card-excerpt, .dark-card-excerpt');

      const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
      const excerptText = excerptEl ? excerptEl.textContent.toLowerCase() : '';

      // Match category
      const matchesCategory = (activeCategory === 'All Articles') || 
                              (cardCategory.toLowerCase() === activeCategory.toLowerCase());

      // Match search
      const matchesSearch = searchQuery === '' || 
                            titleText.includes(searchQuery) || 
                            excerptText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('article-hidden');
      } else {
        card.classList.add('article-hidden');
      }
    });
  }

  // 3. NEWSLETTER SUBMISSION
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('.newsletter-email-input');
      const emailValue = emailInput ? emailInput.value.trim() : '';

      if (emailValue) {
        alert(`Thank you for subscribing to Xenarchs Journal with ${emailValue}!`);
        newsletterForm.reset();
      }
    });
  }
});
