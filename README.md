# Prompt 2 — Introduction and Client Logo Strip

Continue working on the existing Xenarchs creative agency website.

The responsive header and hero section already exist. Do not redesign, remove, or break them.

Use only:

- HTML5
- Bootstrap 5.3 CDN
- Bootstrap Icons CDN
- Google Fonts CDN
- Custom CSS
- Vanilla JavaScript

Add only the introduction and client logo strip immediately after the hero section.

SECTION ID

Use:

id="intro"

SECTION BACKGROUND

Use a warm off-white background:

#f6f1eb

The transition from the dark hero to this light section should feel clean and intentional.

INTRODUCTION LAYOUT

Use a Bootstrap container with a maximum width of approximately 1240px.

Create a responsive two-column layout.

Desktop:

- Left column approximately 8 Bootstrap columns
- Right column approximately 4 Bootstrap columns
- Align the content near the bottom
- Use generous top and bottom spacing

Mobile:

- Stack the columns
- Maintain comfortable spacing
- Keep text left-aligned

CONTENT

Small section label:

WHAT WE BELIEVE

Main heading:

We create experiences built for modern brands.

Highlight the word:

experiences

Styling for “experiences”:

- Cormorant Garamond
- Italic
- Dark turquoise
- Slightly larger visual emphasis

Supporting paragraph:

Clear thinking, expressive design and dependable execution—brought together as one focused creative partnership.

TYPOGRAPHY

Main heading:

- Responsive using clamp()
- Approximately 42px to 76px
- Bold Manrope for normal words
- Strong visual hierarchy
- Tight but readable line-height
- Slight negative letter spacing

Supporting paragraph:

- Approximately 16–18px
- Muted dark-gray color
- Line-height around 1.7–1.8
- Maximum width around 420px

CLIENT LOGO STRIP

Below the introduction, add a horizontal credibility strip.

Use these placeholder client names:

- Northstar
- Arcadia
- Vanta
- Monocle
- Solace
- Fieldnote

Desktop:

- Six equal columns
- Center-align every name

Tablet:

- Three columns

Mobile:

- Two columns

Logo-strip styling:

- Thin top and bottom borders
- Generous vertical padding
- Muted gray color
- Use a refined serif or slightly distinctive type style
- Do not use actual logos or external images
- Add subtle hover color change to turquoise
- The section should remain professional and understated

ANIMATION

Add the same scroll-reveal animation style used by the existing website.

The heading, paragraph and logo strip should fade upward when entering the viewport.

Respect prefers-reduced-motion.

ACCESSIBILITY

- Use semantic section markup
- Use a proper h2
- The client names can be plain text rather than links
- Maintain good contrast

CODE QUALITY

- Reuse existing CSS variables
- Reuse any existing reveal classes
- Do not add inline JavaScript
- Do not create the services section yet
- Do not leave a large empty gap after this section

After implementation:

1. List the files modified.
2. Confirm that only the introduction and logo strip were added.
3. Report any errors honestly.


# Prompt 3 — Services Section

Continue the existing Xenarchs creative agency website.

The header, hero, introduction and client logo strip already exist. Do not redesign or remove them.

Add only the complete services section immediately after the introduction section.

Use:

id="services"

TECHNOLOGY

Use only the existing:

- HTML5
- Bootstrap 5.3 CDN
- Custom CSS
- Vanilla JavaScript
- Bootstrap Icons if necessary

Do not install libraries or frameworks.

SECTION BACKGROUND

Continue using the warm off-white background:

#f6f1eb

SECTION INTRODUCTION

Create a responsive section header.

Small label:

OUR CAPABILITIES

Main heading:

Ideas translated into useful design.

Highlight:

useful design

Use Cormorant Garamond, italic and dark turquoise for the highlighted words.

Supporting paragraph:

From the first positioning decision to the final interaction, we create connected brand systems that work across every touchpoint.

Desktop layout:

- Heading on the left
- Supporting paragraph on the right
- Align both near the bottom

Mobile:

- Stack both areas
- Left-align content

SERVICES STRUCTURE

Create six large responsive service panels stacked vertically.

Each service panel should contain:

- Service number and category
- Large headline
- Short description
- Three feature points
- Tool badges
- A visual mockup area

Desktop:

- Two-column layout
- Text approximately 55%
- Visual approximately 45%
- Minimum height approximately 440px

Tablet and mobile:

- Stack text above visual
- Reduce heading sizes
- Keep visual mockups readable

Use rounded corners around 16–20px.

Use thin borders and subtle shadows.

Do not use stock photographs or external images.

Create all visual mockups with:

- CSS
- HTML elements
- Bootstrap Icons
- Optional lightweight inline SVG created directly in the code

SERVICE 1

Category:

01 / UI & UX DESIGN

Heading:

Designing interfaces users actually enjoy.

Description:

Research-led product design for websites, platforms and digital services—structured around clarity, ease and real user behavior.

Features:

- User research and journey mapping
- Wireframes and interactive prototypes
- Interface systems and usability testing

Tool badges:

- Figma
- FigJam
- Framer
- Maze

Background:

Very light turquoise or pale cyan.

Visual:

Create a professional browser-dashboard mockup containing:

- Browser top bar
- Dark sidebar
- Small navigation lines
- Main dashboard area
- Header line
- Three small cards
- Turquoise accent elements

SERVICE 2

Category:

02 / BRANDING DESIGN

Heading:

Designing visual identities that stand out everywhere.

Description:

Distinct brand systems built around a clear idea—designed to remain recognizable across screens, spaces and campaigns.

Features:

- Positioning and visual direction
- Identity systems and brand guidelines
- Campaign and launch toolkits

Tool badges:

- Illustrator
- InDesign
- Photoshop

Background:

Pale mint green.

Visual:

Create an editorial brand presentation using overlapping cards:

- One tall dark logo card
- One horizontal wordmark card
- One abstract color-composition card
- Soft shadows
- Slight rotations

SERVICE 3

Category:

03 / WEB DEVELOPMENT

Heading:

Building websites that drive results.

Description:

Fast, accessible and responsive websites that preserve the design intent while making content easy to manage.

Features:

- Responsive front-end development
- CMS implementation and integrations
- Performance and accessibility reviews

Tool badges:

- HTML
- CSS
- Bootstrap
- JavaScript

Background:

Soft pale green.

Visual:

Create:

- Dark code editor card
- Several code lines
- Overlapping browser preview
- Small website hero and content cards
- Turquoise development accents

SERVICE 4

Category:

04 / MOTION & ANIMATION

Heading:

Creating motion visuals that capture attention.

Description:

Purposeful motion that explains, guides and adds energy—from short-form content to launch films and product animation.

Features:

- Motion identity and brand animation
- Social content and campaign films
- Interface and product motion

Tool badges:

- After Effects
- Premiere Pro
- Blender

Background:

Soft pale yellow.

Visual:

Create:

- Large circular motion ring
- Dark floating video card
- Play icon
- Curved dotted motion path
- Subtle floating effect

SERVICE 5

Category:

05 / DIGITAL MARKETING

Heading:

Creating campaigns that drive growth.

Description:

Creative systems and campaign assets designed to turn attention into action while keeping the brand consistent.

Features:

- Campaign concepts and content systems
- Social creative and landing pages
- Performance-ready design variants

Tool badges:

- Analytics
- Meta
- Google Ads

Background:

Soft pale violet.

Visual:

Create a campaign analytics card containing:

- Campaign reach label
- Large number: 2.4M
- Growth label: +38% this quarter
- Six responsive vertical bars
- White card with subtle shadow

SERVICE 6

Category:

06 / 3D PRODUCT DESIGN

Heading:

Bringing products to life with striking 3D visuals.

Description:

Art-directed product renders, spatial compositions and animation that make complex ideas instantly understandable.

Features:

- Product visualization and rendering
- 3D campaign art direction
- Animation and environment design

Tool badges:

- Blender
- Cinema 4D
- After Effects

Background:

Soft pale pink.

Visual:

Create an abstract 3D product composition using CSS:

- Rounded rectangular 3D object
- Turquoise-to-dark gradient
- Soft shadow underneath
- Thin elliptical orbit around it
- Perspective and rotation effects

COLOR CONSISTENCY

Although each card has a different pastel background:

- Keep turquoise as the main interactive accent
- Keep heading colors consistent
- Keep tool badges consistent
- Use the same border radius
- Use the same text hierarchy
- Avoid making each card look like a different website

TYPOGRAPHY

Service heading:

- Responsive approximately 34–64px
- Tight line-height
- Strong negative letter spacing
- Bold Manrope

Descriptions:

- 16px minimum
- Comfortable line-height
- Maximum readable width

Tool badges:

- Small but readable
- Minimum approximately 12px
- Rounded rectangle appearance

ANIMATION

Apply subtle scroll reveal to every service panel.

Do not animate every small object excessively.

Optional:

- Slight visual mockup movement on card hover
- Very small transform only

ACCESSIBILITY

- Use article elements for service panels
- Use h3 headings
- Decorative visual mockups should use aria-hidden="true"
- Do not rely only on pastel color to identify a service
- Maintain readable contrast

RESPONSIVENESS

Test conceptually at:

- 1440px
- 1200px
- 992px
- 768px
- 576px
- 390px
- 360px

Avoid:

- Horizontal overflow
- Text becoming too small
- Visual mockups being cut off
- Large empty white spaces

Do not create the portfolio section yet.

After implementation:

1. List modified files.
2. Confirm all six service panels were added.
3. Report any errors.


# Prompt 4 — Selected Work Section

Continue the existing Xenarchs agency website.

Add only the selected work or portfolio section immediately after the services section.

Do not modify the previous sections except where necessary for anchor navigation.

SECTION ID

id="work"

BACKGROUND

Use the main dark background:

#02090d

Add:

- Very subtle grid texture
- Soft turquoise radial glow
- Low-opacity border details

Keep all decorative elements behind the content.

SECTION HEADER

Small label:

SELECTED PROJECTS

Main heading:

Work made to help brands stand out.

Highlight:

brands stand out

Use Cormorant Garamond, italic and turquoise.

Right-side link:

Discuss a similar project

Add a Bootstrap arrow-up-right icon.

Desktop:

- Heading left
- Link right
- Align near the bottom

Mobile:

- Stack vertically

PROJECT LAYOUT

Create four project cards:

1. One full-width featured project
2. Two equal half-width projects
3. One final wide project

Use CSS Grid or Bootstrap rows where appropriate.

PROJECT 1

Category:

Restaurant platform

Title:

Tableo — A simpler booking experience

Services:

Strategy · UI/UX · Development

Create an abstract restaurant booking website mockup using CSS or inline SVG.

The mockup should include:

- Large browser frame
- Dark green side panel
- Restaurant booking CTA
- Food-inspired warm colors
- Several interface cards

PROJECT 2

Category:

Financial technology

Title:

NorthPay — Money made clear

Services:

Branding · Product Design

Create a fintech mobile-app mockup:

- Smartphone frame
- Balance amount
- Card component
- Payment shortcut cards
- Purple and turquoise color combination

PROJECT 3

Category:

Beauty & wellness

Title:

Solace — A calmer kind of skincare

Services:

Brand Strategy · Packaging

Create an abstract skincare packaging composition:

- Bottle
- Product box
- Warm neutral colors
- Premium editorial styling
- Soft shadows

PROJECT 4

Category:

Architecture & place

Title:

Formline — Digital space for physical ideas

Services:

Identity · Website · Motion

Create an architecture website mockup:

- Large browser frame
- Architectural image represented by abstract geometric shapes
- Editorial serif heading
- Dark gray and stone color palette

CARD BEHAVIOR

Each project card should include:

- Project visual
- Category
- Project title
- Services
- Circular arrow button over the visual

Hover effect:

- Slight visual zoom
- Circular arrow appears or moves upward
- Border becomes slightly brighter
- Keep animation subtle

Do not make the entire section feel like a template.

TYPOGRAPHY

Project title:

- Approximately 20–28px
- White
- Strong but not oversized

Category:

- Turquoise
- Uppercase
- Small letter spacing

Services:

- Muted white
- Approximately 12–14px

RESPONSIVENESS

Desktop:

- Featured project spans full width
- Middle two projects use two columns

Mobile:

- All projects stack vertically
- Maintain readable image aspect ratios
- Keep project information below the image

ACCESSIBILITY

- Use article elements
- Every project visual must have an accessible description
- Use actual links
- Provide visible keyboard focus styles
- Do not use empty href values

Add the same scroll-reveal animation system.

Do not build the process section yet.

After implementation:

1. List modified files.
2. Confirm four portfolio projects were added.
3. Report any errors honestly.

# Prompt 5 — Working Process Section

Continue the existing Xenarchs website.

Add only the working process section immediately after the selected work section.

SECTION ID

id="process"

BACKGROUND

Use white or very light warm white.

LAYOUT

Desktop:

- Two columns
- Left column approximately 5 Bootstrap columns
- Right column approximately 7 Bootstrap columns

Mobile:

- Stack vertically

LEFT COLUMN

Small label:

HOW WE WORK

Main heading:

A clear process with room for discovery.

Highlight:

room for discovery

Use italic Cormorant Garamond and dark turquoise.

Paragraph:

Every engagement is collaborative, focused and transparent. We keep the right people close to the work from start to finish.

CTA button:

Plan your project

Use a dark button with a small arrow-up-right icon.

RIGHT COLUMN

Create a vertical process list with four steps.

Use thin top and bottom borders.

Every step should contain:

- Number
- Heading
- Description

STEP 1

Number:

01

Heading:

Discover

Description:

We align around your audience, market, goals and the real problem the project needs to solve.

STEP 2

Number:

02

Heading:

Define

Description:

We shape a focused strategy, creative direction and practical roadmap before production begins.

STEP 3

Number:

03

Heading:

Design & Build

Description:

Ideas become identity systems, interfaces, motion and working digital experiences through fast feedback loops.

STEP 4

Number:

04

Heading:

Launch & Evolve

Description:

We prepare the final system, support the launch and help your brand improve as new needs emerge.

DESIGN

- Step numbers should be small and turquoise
- Step headings should be approximately 24–30px
- Descriptions should be muted gray
- Provide generous vertical spacing
- Use consistent thin borders
- Do not use large icons for every step
- Keep the design editorial and minimal

INTERACTION

Optional desktop hover:

- Step heading shifts slightly right
- Border changes subtly to turquoise
- Description remains stable

Do not create excessive animation.

ACCESSIBILITY

- Use an ordered list or semantic article structure
- Maintain correct heading order
- Button must have a real target
- Ensure keyboard accessibility

Apply scroll reveal.

Do not build the about section yet.

After completion:

1. List modified files.
2. Confirm only the process section was added.
3. Report any errors.

# Prompt 6 — About and Statistics Section

Continue the existing Xenarchs agency website.

Add only the about and statistics section immediately after the process section.

SECTION ID

id="about"

OUTER BACKGROUND

Use white.

INNER FEATURE CARD

Create a large dark rounded feature card inside a Bootstrap container.

Card styling:

- Background gradient from #061114 to #0c2326
- Large rounded corners approximately 28–32px
- Generous responsive padding
- Subtle shadow
- Overflow hidden
- Soft turquoise glow entering from the lower-right
- All text must remain readable

LAYOUT

Desktop:

- Left content approximately 7 columns
- Statistics approximately 5 columns

Mobile:

- Stack vertically

LEFT CONTENT

Small label:

A SMALL SENIOR TEAM

Main heading:

Strategy meets craft. Technology meets taste.

Highlight:

taste

Use Cormorant Garamond, italic and turquoise.

Paragraph:

Xenarchs brings together designers, developers, strategists and motion artists around one shared standard: make the idea clear, make the work distinctive and make every detail useful.

STATISTICS GRID

Create a 2 × 2 statistics grid.

Statistic 1:

42
Projects launched

Statistic 2:

11
Industries explored

Statistic 3:

08
Countries reached

Statistic 4:

91%
Referral-led work

Statistics styling:

- Large turquoise numbers
- Smaller muted white labels
- Semi-transparent dark cells
- Thin translucent borders
- Equal cell heights
- Rounded outer container
- Subtle backdrop blur

Do not animate the numbers unless the implementation is lightweight and accurate.

If using number animation:

- Run only once when visible
- Keep the final value correct
- Respect prefers-reduced-motion

RESPONSIVENESS

On very narrow mobile screens:

- Keep two columns if readable
- Otherwise switch to one column
- Do not allow number text to overflow

ACCESSIBILITY

- Use a proper h2
- Statistics should remain readable without animation
- Decorative glow must be aria-hidden
- Maintain strong contrast

Apply scroll reveal to the card.

Do not build the team section yet.

After implementation:

1. List modified files.
2. Confirm the about card and four statistics were added.
3. Report errors honestly.

# Prompt 7 — Team Section

Continue the existing Xenarchs website.

Add only the team section immediately after the about section.

Use a white background.

SECTION INTRODUCTION

Small label:

THE PEOPLE BEHIND THE WORK

Main heading:

A multidisciplinary team, built to stay close.

Highlight:

built to stay close

Use Cormorant Garamond, italic and dark turquoise.

Supporting paragraph:

Senior thinking without the layers of a large agency. You work directly with the people shaping the outcome.

LAYOUT

Create four equal team cards.

Desktop:

- Four columns

Tablet:

- Two columns

Mobile:

- One or two columns depending on available width

TEAM MEMBERS

1.

Name:

Amina Rahman

Role:

Creative Director

2.

Name:

Daniel Kim

Role:

Design Director

3.

Name:

Leo Martins

Role:

Technology Lead

4.

Name:

Noor Ahmed

Role:

Motion & 3D Lead

PORTRAITS

Do not use external photographs.

Create four abstract editorial portraits using:

- CSS shapes
- Inline SVG
- Or locally generated SVG files created directly by Codex

The portraits should:

- Look professional
- Use different pastel backgrounds
- Show abstract human illustrations
- Maintain the same visual style
- Use a 4:5 portrait aspect ratio
- Have rounded corners
- Avoid looking childish

CARD CONTENT

Below every portrait show:

- Name
- Role

Add a circular arrow-up-right button positioned near the top-right of the portrait.

Button hover:

- Change from dark translucent to turquoise
- Move slightly upward

Accessibility:

- Every portrait must have appropriate alternative text
- Every circular button must have a specific aria-label
- Maintain readable focus styles

Do not add social links unless there are real destinations.

Apply scroll reveal to each card with a small stagger.

Do not build testimonials yet.

After implementation:

1. List modified files.
2. Confirm four team cards were added.
3. Report any errors.

# Prompt 8 — Testimonials Section

Continue the existing Xenarchs website.

Add only the testimonials section immediately after the team section.

BACKGROUND

Use the dark brand background:

#02090d

Add a very subtle turquoise glow or grid texture.

SECTION HEADER

Small label:

CLIENT PERSPECTIVE

Main heading:

Real partnerships. Real progress.

Supporting paragraph:

A few words from teams that trusted us with an important next step.

Desktop:

- Heading on the left
- Supporting paragraph on the right

Mobile:

- Stack vertically

TESTIMONIAL CARDS

Create three equal testimonial cards.

Desktop:

- Three columns

Tablet and mobile:

- Stack when necessary

CARD STYLE

- Dark translucent surface
- Thin white translucent border
- Rounded corners around 18px
- Padding approximately 30–36px
- Equal height
- Large turquoise quotation mark
- White quotation text
- Muted client details

TESTIMONIAL 1

Quote:

Xenarchs turned a complicated service into a brand people understood immediately. The work felt thoughtful at every stage.

Client:

Maya Chen

Role:

Co-founder, NorthPay

TESTIMONIAL 2

Quote:

They balanced ambition with practicality. The final website is distinctive, fast and much easier for our team to manage.

Client:

Jon Bell

Role:

Managing Director, Formline

TESTIMONIAL 3

Quote:

The process was clear, collaborative and refreshingly direct. We launched with a stronger story and a system we can grow.

Client:

Priya Shah

Role:

Brand Lead, Solace

TYPOGRAPHY

- Quote approximately 17–19px
- Line-height around 1.7–1.8
- Client name bold
- Role approximately 12–14px

Do not add fake star ratings.

Do not claim the testimonials are verified.

Use semantic blockquote and footer elements.

Apply scroll reveal.

Do not build insights yet.

After implementation:

1. List modified files.
2. Confirm three testimonial cards were added.
3. Report any errors.

# Prompt 9 — Insights Section

Continue the existing Xenarchs website.

Add only the insights or articles section immediately after testimonials.

BACKGROUND

Use warm off-white:

#f6f1eb

SECTION HEADER

Small label:

IDEAS & OBSERVATIONS

Main heading:

Notes from the studio floor.

Highlight:

studio floor

Use italic Cormorant Garamond and dark turquoise.

Right-side link:

View all insights

Add an arrow-up-right icon.

INSIGHT CARDS

Create three responsive article cards.

Desktop:

- Three columns

Mobile:

- Stack vertically

Do not use external images.

Create abstract visual covers using CSS.

ARTICLE 1

Category and reading time:

Brand strategy · 7 min read

Title:

Why distinctive brands are built from decisions, not decoration

Visual:

- Dark teal background
- Turquoise radial glow
- Circular outline
- Number 01

ARTICLE 2

Category and reading time:

Digital products · 5 min read

Title:

Designing interfaces that feel simple without becoming generic

Visual:

- Soft violet background
- Rotated white interface card
- Number 02

ARTICLE 3

Category and reading time:

Creative technology · 6 min read

Title:

Where motion adds meaning—and where it only adds noise

Visual:

- Warm orange/yellow background
- Dark circular or ring composition
- Number 03

CARD CONTENT

Each card should contain:

- Abstract cover
- Category and reading time
- Article title
- “Read article” link
- Arrow-up-right icon

STYLE

- Visual cover ratio approximately 1.4:1
- Rounded corners around 16px
- Strong title hierarchy
- Article titles should align consistently
- Use subtle hover movement
- Avoid exaggerated shadows

ACCESSIBILITY

- Use article elements
- Links should have useful accessible text
- Abstract visuals should be marked decorative unless conveying required content
- Maintain keyboard focus states

Apply scroll reveal.

Do not create the FAQ yet.

After implementation:

1. List modified files.
2. Confirm three insight cards were added.
3. Report errors honestly.

# Prompt 10 — FAQ Section

Continue the existing Xenarchs website.

Add only the FAQ section immediately after the insights section.

Use the warm off-white background.

LAYOUT

Desktop:

- Left column approximately 5 columns
- Right column approximately 7 columns

Mobile:

- Stack vertically

LEFT CONTENT

Small label:

FREQUENTLY ASKED

Main heading:

A few things clients ask before we begin.

Highlight:

before we begin

Use italic Cormorant Garamond and dark turquoise.

RIGHT CONTENT

Use a Bootstrap 5 accordion.

Improve the default Bootstrap appearance with custom CSS.

FAQ 1

Question:

What kind of projects are the best fit?

Answer:

Brand launches, rebrands, websites and product experiences where strategy, design and implementation need to work as one connected system.

FAQ 2

Question:

How long does a typical engagement take?

Answer:

Most focused projects take 6–12 weeks. Larger identity and digital programs may run longer depending on scope, content and technical requirements.

FAQ 3

Question:

Can you work with our internal team?

Answer:

Yes. We regularly collaborate with internal marketing, product and engineering teams, adapting our role to complement the skills already in place.

FAQ 4

Question:

Do you provide development as well as design?

Answer:

Yes. We design and build responsive websites, reusable interface systems and lightweight front-end experiences, or collaborate with your existing development partner.

ACCORDION STYLE

- Transparent background
- No heavy card borders
- Thin horizontal separators
- Large readable question text
- Dark question color
- Turquoise active question color
- Muted answer text
- Comfortable padding
- Smooth Bootstrap collapse behavior
- No jQuery

ACCESSIBILITY

- Preserve Bootstrap accordion accessibility
- Use proper aria-controls and aria-expanded values
- Use h3 elements for questions
- Ensure focus styles are visible

Do not build the CTA section yet.

After implementation:

1. List modified files.
2. Confirm all four questions were added.
3. Report errors honestly.

# Prompt 11 — Final Contact CTA Section

Continue the existing Xenarchs website.

Add only the final contact CTA section immediately after the FAQ.

SECTION ID

id="contact"

OUTER BACKGROUND

Use the same warm off-white background as the FAQ.

CTA CARD

Create a large dark rounded card inside a Bootstrap container.

Card style:

- Background #041013
- Rounded corners approximately 28–32px
- Generous responsive padding
- Overflow hidden
- Soft turquoise glow entering from the lower-right
- Premium visual appearance
- No external image

LAYOUT

Desktop:

- Main message on the left
- Contact button and email on the right
- Align near the bottom

Mobile:

- Stack vertically
- Left-align everything
- Keep the CTA button full-width only on very narrow screens

CONTENT

Small label:

HAVE A PROJECT IN MIND?

Main heading:

Let’s create something remarkable.

Highlight:

remarkable

Use Cormorant Garamond, italic and turquoise.

Primary CTA button:

Start a Project

Use an arrow-up-right icon.

Button link:

mailto:hello@xenarchs.studio

Email displayed under the button:

hello@xenarchs.studio

TYPOGRAPHY

Heading:

- Responsive approximately 48px to 106px
- Tight line-height around 0.9
- Strong negative letter spacing
- White normal text
- Turquoise highlighted word

BUTTON

- Turquoise background
- Dark text
- Clear focus state
- Professional hover lift
- Minimum height approximately 52px

DECORATIVE GLOW

Create a large blurred turquoise orb.

- Position partly outside the lower-right corner
- Keep opacity low
- Add aria-hidden="true"
- Do not reduce text readability

Apply scroll reveal.

Do not build the footer yet.

After implementation:

1. List modified files.
2. Confirm only the contact CTA was added.
3. Report any errors.

# Prompt 12 — Footer

Continue the existing Xenarchs website.

Add the complete footer immediately after the contact CTA.

Do not redesign previous sections.

BACKGROUND

Use:

#02090d

Add generous top padding and smaller bottom padding.

FOOTER LAYOUT

Use a Bootstrap container.

Desktop columns:

1. Brand information
2. Explore navigation
3. Studio navigation
4. Location

Mobile:

- Stack logically
- Navigation columns may remain side-by-side where space allows

BRAND COLUMN

Show the same Xenarchs logo or text mark used in the header.

Text:

Independent creative studio building brands, digital products and experiences that feel ahead of their time.

Add social icons:

- Instagram
- Behance
- LinkedIn
- Dribbble

Use Bootstrap Icons.

Use placeholder # links only if no real destination exists, but prevent the page from jumping unexpectedly using JavaScript or replace them with clearly marked placeholders.

Better option:

Use href="#" temporarily and add aria-labels.

Social buttons:

- Circular
- Thin translucent border
- White icon
- Turquoise hover background
- Visible keyboard focus

EXPLORE COLUMN

Heading:

EXPLORE

Links:

- Work
- Services
- Process
- About

Use the existing section anchors.

STUDIO COLUMN

Heading:

STUDIO

Links:

- Insights
- Contact
- Privacy
- Terms

Privacy and Terms can temporarily use placeholder links.

LOCATION COLUMN

Heading:

BASED IN

Text:

Dhaka, Bangladesh
Working worldwide

FOOTER BOTTOM

Add a horizontal border above the bottom row.

Left:

© [current year] Xenarchs Studio

Use JavaScript to insert the current year.

Right:

Back to top

Add an upward arrow icon and link it to:

#home

STYLE

- Main text white
- Supporting text muted white
- Section labels uppercase with letter spacing
- Links should have subtle turquoise hover color
- Keep spacing generous and organized
- Do not make the footer excessively tall

ACCESSIBILITY

- Use a footer element
- Add aria-labels to social icons
- Maintain visible focus styles
- Use meaningful navigation links
- Ensure the back-to-top link is keyboard accessible

JAVASCRIPT

In assets/js/script.js:

- Insert the current year
- Do not duplicate existing code
- Keep the script inside the existing safe initialization pattern

After implementation:

1. List modified files.
2. Confirm the footer was added.
3. Report errors honestly.


# Final Prompt — Full Website Quality Check and Polish

Perform a complete professional quality review of the existing Xenarchs one-page agency website.

Do not redesign the site from scratch.

The website already contains:

- Header
- Hero
- Introduction
- Client logo strip
- Services
- Selected work
- Process
- About and statistics
- Team
- Testimonials
- Insights
- FAQ
- Contact CTA
- Footer

TECHNOLOGY MUST REMAIN

- HTML5
- Bootstrap 5.3 CDN
- Bootstrap Icons CDN
- Google Fonts CDN
- Custom CSS
- Vanilla JavaScript

Do not add React, Vue, Tailwind, jQuery, npm packages or build tools.

REVIEW AND FIX

1. HTML structure

- Check heading order
- Ensure only one h1 exists
- Check semantic section, article, nav, header, main and footer elements
- Remove unnecessary wrappers
- Check every opening and closing tag
- Ensure section IDs match navigation links

2. Responsive layout

Test conceptually at:

- 1440px
- 1200px
- 992px
- 768px
- 576px
- 390px
- 360px

Fix:

- Horizontal overflow
- Text touching viewport edges
- Broken grids
- Oversized headings
- Buttons being cut off
- Cards becoming too narrow
- Mobile navigation problems
- Excessive vertical gaps

3. Visual consistency

Check:

- Border-radius consistency
- Section spacing
- Typography scale
- Button sizes
- Accent color usage
- Card borders
- Shadow intensity
- Heading line-height
- Container widths

Keep turquoise as the primary accent.

4. Accessibility

Check:

- Color contrast
- Alt text
- Aria labels
- Accordion accessibility
- Mobile navigation state
- Visible focus indicators
- Keyboard navigation
- Decorative elements marked aria-hidden
- Touch target sizes

5. JavaScript

Check:

- Header scroll behavior
- Mobile menu closing
- Escape-key behavior
- Reveal animations
- Active navigation state
- Current-year output
- Null checks
- Console errors

Do not duplicate Bootstrap functionality.

6. Performance

- Remove unused CSS
- Remove duplicate rules
- Avoid excessive box shadows
- Avoid oversized blur effects on mobile
- Reduce animation complexity
- Prevent layout shift
- Use local lightweight visual elements
- Do not add large external image files

7. Motion

- Keep animations subtle
- Ensure prefers-reduced-motion is implemented
- Prevent animations from hiding content if JavaScript fails

8. Content quality

- Remove lorem ipsum
- Correct spelling and punctuation
- Keep button wording consistent
- Ensure no unfinished placeholder text is visible
- Do not add unsupported awards, ratings or customer claims

9. Final verification

Run any available HTML, CSS or JavaScript checks that do not require installing a large toolchain.

Open the website in a browser if browser preview is available.

After finishing:

1. List every file modified.
2. Summarize important fixes.
3. Report any remaining limitations.
4. Mention exactly what was tested.
5. Do not claim browser or device testing unless it was actually performed.# xenarchs
