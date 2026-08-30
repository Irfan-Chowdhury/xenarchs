Create a new professional “Blogs” page for the existing Xenarchs website like previous. Follow the existing project structure, Bootstrap, HTML, CSS, JavaScript/jQuery, naming conventions, navbar behavior, responsive breakpoints, fonts, colors, route, method in controller and follow other exisitng structure. Footer will be same as it and add the footer part file jsut. and reusable components already used in the project. 

Do not redesign the existing navbar or footer. 

Remember when you designed make sure main layout, landing page, privacy-policy and term and other page should not conflict. ALL Pages should be on this same style.  use seoparate css,js files for blogs.

PAGE STRUCTURE

1. NAVBAR
- Reuse the exact existing navbar/header used on the Terms of Service and Privacy Policy pages.
- Keep all existing navbar functionality, responsive mobile menu, links, hover states and active-state behavior.
- Add/set “Blogs” as the active navigation item where appropriate.

2. BLOG HERO SECTION
Reuse the exact same hero section structure, dimensions, background treatment, spacing and responsive behavior already used on the Terms of Service / Privacy Policy pages.
Do not create a new hero design.

Only replace the hero content with:

Small outlined pill:
XENARCHS JOURNAL

Main heading:
Exploring the ideas
behind what comes next.

- “Exploring the ideas” and “behind” should use the existing bold heading font.
- “what comes next.” should be teal, italic/elegant serif style to create visual emphasis.

Description:
Thoughts, perspectives, and stories on design, technology, branding
and digital experiences.

Under the description add a very small decorative teal curved/wave line.

Keep the hero centered and maintain the same dark/navy visual style already used on the other inner pages.

3. BLOG FILTER / SEARCH SECTION
Immediately after the hero create a light/off-white blog-content background.

Use a centered Bootstrap container.

At the top create a horizontal category navigation:

All Articles
Branding
Design
Development
Technology
Strategy
Insights

- “All Articles” is active initially.
- Active item should have a teal rounded pill background with white text.
- Other items should be simple dark text without bordered buttons.
- Provide comfortable horizontal spacing.
- Categories should wrap or become horizontally usable on smaller screens.

On the right side place a rounded search field:
Placeholder: Search articles...
Search icon on the right.
Thin subtle gray border.
White/light transparent background.
Approx. 200–230px width on desktop.

Place a thin horizontal separator underneath this row.

4. FEATURED ARTICLES AREA
Below the filter row create a two-column desktop layout.

LEFT COLUMN:
One large featured article card taking approximately 52–55% width.

Featured image area:
- Large landscape image.
- Approximately 16:9 proportion.
- Top-left/top-right corners rounded.
- Use a suitable dummy technology/design image from an online placeholder/CDN if necessary.

Below the image inside the same card:
Small teal uppercase label:
FEATURED

Heading:
Building Digital Experiences
That Feel Ahead of Their Time

Description:
Great digital experiences don’t happen by chance. Here’s our
approach to building products and websites that are not only
beautiful but also purposeful and future-ready.

Bottom metadata:
Strategy   |   clock icon  8 min read

Card styling:
- White background.
- Very subtle gray border.
- Border-radius around 10–12px.
- Minimal soft shadow.
- Generous internal spacing.
- No excessive decoration.

RIGHT COLUMN:
Create three compact horizontal article items stacked vertically.

Each item contains:
- Thumbnail on the left, approx. 180px × 125px.
- Text information on the right.
- Thin divider between items.
- Vertically centered content.

Article 1:
Title:
The Future of AI in
Brand Building

Description:
How AI is shaping the way brands
connect, communicate and grow.

Category: Technology
Read time: 6 min read

Article 2:
Title:
Designing for Clarity
in a Noisy World

Description:
Why simplicity, clarity and focus
are more important than ever.

Category: Design
Read time: 7 min read

Article 3:
Title:
Brand Identity in 2024:
What’s Changed

Description:
Key shifts in branding and how
businesses can stay relevant.

Category: Branding
Read time: 5 min read

Use teal for category text and a small outlined clock icon before read time.

5. LATEST ARTICLES SECTION
Below the featured area add generous vertical spacing.

Create a large dark navy/near-black rounded container.

Container:
- Full available container width.
- Background similar to Xenarchs dark hero/navigation theme.
- Border radius approximately 14–16px.
- Padding around 24–28px desktop.

Heading:
Latest Articles

Use white text, approximately 20–22px.

Under it create FOUR equal article cards in one row on desktop.

Each card:
- Dark/navy background matching the section.
- Thin teal/dark-teal border.
- Rounded 10–12px corners.
- Overflow hidden.
- Article image on top.
- Content below.
- Equal heights.

CARD 1:
Category: Development
Read time: 10 min read
Title:
How Headless CMS Is
Changing The Web
Description:
Why more businesses are moving
towards headless and what it means
for performance and flexibility.

CARD 2:
Category: Strategy
Read time: 6 min read
Title:
From Idea to Impact:
A Better Strategy
Description:
A practical framework to turn ideas
into strategies that drive real results.

CARD 3:
Category: Insights
Read time: 7 min read
Title:
Digital Trends Worth
Watching in 2024
Description:
The technologies and trends shaping
the next wave of digital experiences.

CARD 4:
Category: Design
Read time: 5 min read
Title:
The Role of Motion in
Modern Websites
Description:
How subtle motion creates emotion,
guides users and elevates experiences.

Card styling:
- White title.
- Light muted description.
- Teal category.
- Small clock icon/read time.
- Image height consistent across all cards.
- On hover slightly translate card upward and subtly brighten border.
- Keep animation professional and minimal.

Responsive:
4 columns desktop
2 columns tablet
1 column mobile

6. NEWSLETTER SECTION
After Latest Articles create a newsletter subscription block.

Use a very light teal/off-white tinted background.
Rounded 12–14px container.

Desktop layout:
Left icon area | text area | email field | subscribe button

LEFT:
Small white rounded square containing a teal envelope icon.

TEXT:
Heading:
Get ideas, insights & updates
straight to your inbox.

Make the “&” teal.

Description:
No spam. Just thoughtful content on design,
technology and growth.

EMAIL:
Large rounded white input.
Placeholder:
Your email address

BUTTON:
Teal gradient/solid teal rounded button.
Text:
Subscribe
Add right-arrow icon.

Keep everything vertically centered.

On mobile:
Stack content vertically with the email field and Subscribe button becoming full width.

7. FOOTER
Reuse the EXACT existing reusable footer implementation used on other pages such as Terms of Service and Privacy Policy.

Do not duplicate footer HTML unnecessarily if the project already has a shared footer/component/include.
Do not redesign or alter footer styling.

8. BLOG INTERACTION
Implement simple client-side category filtering using JavaScript/jQuery:
- All Articles shows everything.
- Clicking a category filters relevant article cards/items.
- Update active category pill.
- Search input filters articles by title/category/description.
- No page reload.

Keep this implementation lightweight.

9. RESPONSIVE REQUIREMENTS
Desktop:
- Featured area = large card left + three articles right.
- Latest Articles = 4 columns.

Tablet:
- Featured area may become 55/45 or stack where necessary.
- Latest Articles = 2 columns.

Mobile:
- All major sections stack vertically.
- Featured article becomes full width.
- Right-side article thumbnail/content layout should remain readable and may stack if required.
- Latest Articles = 1 column.
- Newsletter stacks.
- No horizontal page overflow.
- Maintain professional spacing approximately 20px from screen edges.

10. DESIGN RULES
- Match Xenarchs’ existing visual identity.
- Primary dark color: existing Xenarchs dark/navy.
- Primary accent: existing teal/cyan.
- Main blog background: warm off-white/light cream.
- Headings: strong black/dark navy.
- Body text: dark gray.
- Border colors should be subtle.
- Use existing project fonts.
- Maintain generous whitespace.
- Do not use excessive gradients, shadows, animations or decorative elements.
- Do not introduce a completely different design system.
- Reuse existing utility/classes wherever possible.

11. FILE STRUCTURE
First inspect the existing project and follow its current architecture.

Create the Blogs page using the same structure followed by Terms of Service and Privacy Policy pages.

Create a dedicated blog stylesheet only if necessary, for example:
assets/css/blog.css

Reuse existing global/navbar/footer CSS instead of copying styles into blog.css.

Link the Blogs page correctly from the existing navbar/footer wherever a Blogs link exists.

IMPORTANT:
- Do not modify working functionality of existing pages.
- Do not unnecessarily duplicate CSS.
- Do not unnecessarily duplicate navbar/footer markup if reusable implementation already exists.
- Keep code clean and maintainable.
- Use Bootstrap 5 grid/flex utilities where practical.
- The final result must closely follow the specified section proportions, typography hierarchy, card arrangement, spacing and responsive behavior.