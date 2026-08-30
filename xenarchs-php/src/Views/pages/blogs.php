  <main class="blog-main-wrapper">
    <!-- 2. BLOG HERO SECTION -->
    <section class="terms-hero-section blog-hero-section" id="blog-hero" aria-labelledby="blog-hero-title">
      <div class="terms-hero-video-background" aria-hidden="true">
        <video class="terms-hero-background-video" id="blogHeroVideo" autoplay loop playsinline preload="metadata" tabindex="-1">
          <source src="/assets/videos/dark-veil.webm" type="video/webm">
          <source src="/assets/videos/dark-veil.mp4" type="video/mp4">
        </video>
        <div class="terms-hero-overlay"></div>
      </div>

      <div class="container-xl terms-hero-container text-center">
        <!-- Small outlined pill -->
        <div class="terms-hero-badge reveal-up">
          <span>XENARCHS JOURNAL</span>
        </div>

        <!-- Main heading -->
        <h1 class="terms-hero-title reveal-up" id="blog-hero-title">
          Exploring the ideas<br>behind <em>what comes next.</em>
        </h1>

        <!-- Description -->
        <p class="terms-hero-subtitle reveal-up">
          Thoughts, perspectives, and stories on design, technology, branding and digital experiences.
        </p>

        <!-- Decorative teal curved/wave line -->
        <div class="blog-hero-wave reveal-up" aria-hidden="true">
          <svg width="64" height="8" viewBox="0 0 64 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4C11 1 21 7 32 4C43 1 53 7 63 4" stroke="#19d5d1" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- BLOG CONTENT SECTION (Light/off-white background) -->
    <section class="blog-content-section">
      <!-- CENTERED MAIN CONTENT CONTAINER (max 1200px) -->
      <div class="blog-main-container">
        
        <!-- 2. CATEGORY + SEARCH ROW -->
        <div class="blog-filter-bar">
          <!-- Horizontal Category Navigation -->
          <ul class="blog-categories" role="tablist">
            <li>
              <button type="button" class="blog-cat-btn active" data-category="all">All Articles</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Branding">Branding</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Design">Design</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Development">Development</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Technology">Technology</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Strategy">Strategy</button>
            </li>
            <li>
              <button type="button" class="blog-cat-btn" data-category="Insights">Insights</button>
            </li>
          </ul>

          <!-- Search Field -->
          <div class="blog-search-wrap">
            <input type="text" id="blogSearchInput" class="blog-search-input" placeholder="Search articles..." aria-label="Search articles">
            <i class="bi bi-search blog-search-icon" aria-hidden="true"></i>
          </div>
        </div>

        <!-- Subtle horizontal divider -->
        <hr class="blog-filter-divider">

        <!-- 3. FEATURED ARTICLES DESKTOP LAYOUT (2 Columns) -->
        <div class="blog-featured-layout">
          
          <!-- LEFT COLUMN: Large Featured Article Card -->
          <article class="featured-blog-card blog-article-card" data-category="Strategy" data-search-text="Building Digital Experiences That Feel Ahead of Their Time Great digital experiences don’t happen by chance. Here’s our approach to building products and websites that are not only beautiful but also purposeful and future-ready. Strategy">
            <div class="featured-card-image-wrap">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" alt="Building Digital Experiences That Feel Ahead of Their Time" class="featured-card-image" loading="lazy">
            </div>
            <div class="featured-card-body">
              <span class="featured-badge">FEATURED</span>
              <h2 class="featured-title">
                <a href="#">Building Digital Experiences<br>That Feel Ahead of Their Time</a>
              </h2>
              <p class="featured-desc">
                Great digital experiences don’t happen by chance. Here’s our approach to building products and websites that are not only beautiful but also purposeful and future-ready.
              </p>
              <div class="blog-meta-row">
                <span class="blog-meta-category">Strategy</span>
                <span class="blog-meta-sep">|</span>
                <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 8 min read</span>
              </div>
            </div>
          </article>

          <!-- RIGHT COLUMN: Four Compact Horizontal Article Items -->
          <div class="blog-side-list">
            
            <!-- Article 1 -->
            <article class="blog-side-item blog-article-card" data-category="Technology" data-search-text="The Future of AI in Brand Building How AI is shaping the way brands connect, communicate and grow. Technology">
              <div class="blog-side-thumb-wrap">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop" alt="The Future of AI in Brand Building" class="blog-side-thumb" loading="lazy">
              </div>
              <div class="blog-side-content">
                <h3 class="blog-side-title">
                  <a href="#">The Future of AI in Brand Building</a>
                </h3>
                <p class="blog-side-desc">
                  How AI is shaping the way brands connect, communicate and grow.
                </p>
                <div class="blog-meta-row">
                  <span class="blog-meta-category">Technology</span>
                  <span class="blog-meta-sep">|</span>
                  <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 6 min read</span>
                </div>
              </div>
            </article>

            <hr class="blog-side-divider">

            <!-- Article 2 -->
            <article class="blog-side-item blog-article-card" data-category="Design" data-search-text="Designing for Clarity in a Noisy World Why simplicity, clarity and focus are more important than ever. Design">
              <div class="blog-side-thumb-wrap">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop" alt="Designing for Clarity in a Noisy World" class="blog-side-thumb" loading="lazy">
              </div>
              <div class="blog-side-content">
                <h3 class="blog-side-title">
                  <a href="#">Designing for Clarity in a Noisy World</a>
                </h3>
                <p class="blog-side-desc">
                  Why simplicity, clarity and focus are more important than ever.
                </p>
                <div class="blog-meta-row">
                  <span class="blog-meta-category">Design</span>
                  <span class="blog-meta-sep">|</span>
                  <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 7 min read</span>
                </div>
              </div>
            </article>

            <hr class="blog-side-divider">

            <!-- Article 3 -->
            <article class="blog-side-item blog-article-card" data-category="Branding" data-search-text="Brand Identity in 2024: What’s Changed Key shifts in branding and how businesses can stay relevant. Branding">
              <div class="blog-side-thumb-wrap">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop" alt="Brand Identity in 2024: What’s Changed" class="blog-side-thumb" loading="lazy">
              </div>
              <div class="blog-side-content">
                <h3 class="blog-side-title">
                  <a href="#">Brand Identity in 2024: What’s Changed</a>
                </h3>
                <p class="blog-side-desc">
                  Key shifts in branding and how businesses can stay relevant.
                </p>
                <div class="blog-meta-row">
                  <span class="blog-meta-category">Branding</span>
                  <span class="blog-meta-sep">|</span>
                  <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 5 min read</span>
                </div>
              </div>
            </article>

            <hr class="blog-side-divider">

            <!-- Article 4 -->
            <article class="blog-side-item blog-article-card" data-category="Design" data-search-text="Mastering Design Systems at Scale How unified component libraries accelerate product velocity and brand consistency. Design">
              <div class="blog-side-thumb-wrap">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop" alt="Mastering Design Systems at Scale" class="blog-side-thumb" loading="lazy">
              </div>
              <div class="blog-side-content">
                <h3 class="blog-side-title">
                  <a href="#">Mastering Design Systems at Scale</a>
                </h3>
                <p class="blog-side-desc">
                  How unified component libraries accelerate product velocity and brand consistency.
                </p>
                <div class="blog-meta-row">
                  <span class="blog-meta-category">Design</span>
                  <span class="blog-meta-sep">|</span>
                  <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 5 min read</span>
                </div>
              </div>
            </article>

          </div>

        </div>

        <!-- 7. LATEST ARTICLES SECTION -->
        <div class="blog-latest-section">
          <div class="latest-articles-container">
            <h2 class="latest-articles-heading">Latest Articles</h2>
            
            <div class="latest-articles-grid">
              
              <!-- CARD 1: Development -->
              <article class="latest-article-card blog-article-card" data-category="Development" data-search-text="How Headless CMS Is Changing The Web Why more businesses are moving towards headless and what it means for performance and flexibility. Development">
                <div class="latest-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" alt="How Headless CMS Is Changing The Web" class="latest-card-img" loading="lazy">
                </div>
                <div class="latest-card-body">
                  <div class="blog-meta-row mb-2">
                    <span class="blog-meta-category">Development</span>
                    <span class="blog-meta-sep">|</span>
                    <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 10 min read</span>
                  </div>
                  <h3 class="latest-card-title">
                    <a href="#">How Headless CMS Is<br>Changing The Web</a>
                  </h3>
                  <p class="latest-card-desc">
                    Why more businesses are moving towards headless and what it means for performance and flexibility.
                  </p>
                </div>
              </article>

              <!-- CARD 2: Strategy -->
              <article class="latest-article-card blog-article-card" data-category="Strategy" data-search-text="From Idea to Impact: A Better Strategy A practical framework to turn ideas into strategies that drive real results. Strategy">
                <div class="latest-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="From Idea to Impact: A Better Strategy" class="latest-card-img" loading="lazy">
                </div>
                <div class="latest-card-body">
                  <div class="blog-meta-row mb-2">
                    <span class="blog-meta-category">Strategy</span>
                    <span class="blog-meta-sep">|</span>
                    <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 6 min read</span>
                  </div>
                  <h3 class="latest-card-title">
                    <a href="#">From Idea to Impact:<br>A Better Strategy</a>
                  </h3>
                  <p class="latest-card-desc">
                    A practical framework to turn ideas into strategies that drive real results.
                  </p>
                </div>
              </article>

              <!-- CARD 3: Insights -->
              <article class="latest-article-card blog-article-card" data-category="Insights" data-search-text="Digital Trends Worth Watching in 2024 The technologies and trends shaping the next wave of digital experiences. Insights">
                <div class="latest-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" alt="Digital Trends Worth Watching in 2024" class="latest-card-img" loading="lazy">
                </div>
                <div class="latest-card-body">
                  <div class="blog-meta-row mb-2">
                    <span class="blog-meta-category">Insights</span>
                    <span class="blog-meta-sep">|</span>
                    <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 7 min read</span>
                  </div>
                  <h3 class="latest-card-title">
                    <a href="#">Digital Trends Worth<br>Watching in 2024</a>
                  </h3>
                  <p class="latest-card-desc">
                    The technologies and trends shaping the next wave of digital experiences.
                  </p>
                </div>
              </article>

              <!-- CARD 4: Design -->
              <article class="latest-article-card blog-article-card" data-category="Design" data-search-text="The Role of Motion in Modern Websites How subtle motion creates emotion, guides users and elevates experiences. Design">
                <div class="latest-card-img-wrap">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop" alt="The Role of Motion in Modern Websites" class="latest-card-img" loading="lazy">
                </div>
                <div class="latest-card-body">
                  <div class="blog-meta-row mb-2">
                    <span class="blog-meta-category">Design</span>
                    <span class="blog-meta-sep">|</span>
                    <span class="blog-meta-readtime"><i class="bi bi-clock" aria-hidden="true"></i> 5 min read</span>
                  </div>
                  <h3 class="latest-card-title">
                    <a href="#">The Role of Motion in<br>Modern Websites</a>
                  </h3>
                  <p class="latest-card-desc">
                    How subtle motion creates emotion, guides users and elevates experiences.
                  </p>
                </div>
              </article>

            </div>

            <!-- Dynamic Empty State (shown only when no articles match filter/search) -->
            <div id="blogNoResults" class="blog-no-results d-none text-center py-5">
              <i class="bi bi-journal-x display-4 text-muted" aria-hidden="true"></i>
              <p class="mt-3 text-muted fs-5">No articles found matching your criteria.</p>
            </div>
          </div>
        </div>

        <!-- 8. NEWSLETTER SECTION (Single Horizontal Desktop Row) -->
        <div class="newsletter-section">
          <form id="blogSubscribeForm" novalidate>
            <div class="newsletter-card">
              
              <div class="newsletter-icon-box">
                <i class="bi bi-envelope-fill" aria-hidden="true"></i>
              </div>

              <div class="newsletter-text-box">
                <h3 class="newsletter-heading">
                  Get ideas, insights <span class="accent-teal">&amp;</span> updates straight to your inbox.
                </h3>
                <p class="newsletter-desc">
                  No spam. Just thoughtful content on design, technology and growth.
                </p>
              </div>

              <div class="newsletter-input-box">
                <label for="blogSubscribeEmail" class="visually-hidden">Your email address</label>
                <input type="email" id="blogSubscribeEmail" class="newsletter-input" placeholder="Your email address" required>
              </div>

              <button type="submit" class="newsletter-btn">
                <span>Subscribe</span>
                <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </button>

            </div>
          </form>
        </div>

      </div>
    </section>
  </main>
