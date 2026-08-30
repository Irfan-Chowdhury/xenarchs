Create a new Careers page for the existing website.

IMPORTANT:
- First inspect the existing Blogs page implementation and follow its page architecture, container width, responsive structure, CSS organization, naming conventions, shared navbar/footer usage, typography, colors and spacing conventions.
- This is an existing website. Do not redesign or modify unrelated pages.
- Reuse the existing navbar/header exactly.
- Reuse the existing footer exactly.
- Follow the same reusable inner-page architecture already established by the Blogs page.
- Create only page-specific Careers styles where required.
- Scope Careers-specific CSS under a `.career-page` wrapper so it cannot affect other pages.
- Do not modify Bootstrap globally.
- Do not change shared `.container`, `.row`, `.btn`, `h1`, `h2`, `section`, `img`, `input`, etc.
- Preserve all existing navbar/footer/mobile-menu functionality.

==================================================
PAGE STRUCTURE
==================================================

Navbar
↓
Career Hero
↓
Job Filter + Search
↓
Job Cards Grid
↓
Open Application CTA
↓
Existing Footer

==================================================
1. CAREER HERO
==================================================

Use the same dark inner-page hero architecture already established for the Blogs page.

The hero should have:
- full-width dark navy / near-black background;
- same existing Xenarchs dark background treatment;
- centered content;
- generous vertical spacing;
- approximately 390–420px total desktop height including spacing;
- no unnecessary graphics or cards.

Content must be vertically and horizontally centered.

TOP BADGE:

Career

Style:
- compact pill;
- transparent/dark background;
- thin gradient/teal-to-purple border;
- rounded 999px;
- teal text;
- approximately 16–18px;
- comfortable horizontal padding.

MAIN HEADING:

Open Roles at Xenarchs
Find Your Place on Our Growing Team

Desktop presentation:

Line 1:
Open Roles at Xenarchs

Line 2:
Find Your Place on Our Growing Team

Typography:
- very large bold Xenarchs heading font;
- centered;
- approximately 48–56px desktop;
- strong but clean line-height.

Special highlighted words:
- "Xenarchs"
- "Growing"

These two words should use the same elegant italic/serif accent treatment already used on the Blogs hero for highlighted phrases.

Highlight color:
existing Xenarchs teal/cyan.

All other heading words:
white/off-white.

DESCRIPTION:

We're looking for talented, curious, and driven people to join us and help create meaningful digital experiences.

Style:
- centered;
- white/light-muted;
- approximately 17–18px;
- max-width around 850px;
- margin-top approximately 24px.

Do not add unnecessary decoration under the description.

==================================================
2. CAREER CONTENT BACKGROUND
==================================================

After the hero, create a full-width warm off-white/light-cream content area.

Use the same light page background already established on the Blogs page.

Inside it use the same centered main container width used by Blogs.

Desktop:
- max-width approximately 1180–1240px;
- margin auto;
- horizontal padding approximately 24px;
- top padding around 38–44px;
- bottom padding around 55–65px.

==================================================
3. JOB FILTER + SEARCH BAR
==================================================

Create one horizontal control row at the top of the Careers content.

Desktop structure:

LEFT:
All Roles
Design
Development
Creative
Strategy
Operations

RIGHT:
Search positions...

Use:

display: flex;
align-items: center;
justify-content: space-between;
gap: 30px;

The category group must be horizontal.

Use:
display: flex;
align-items: center;
gap: approximately 42–48px;

Do not make categories into large pills.

ACTIVE FILTER:
All Roles

Style:
- dark bold text;
- approximately 15–16px;
- teal underline;
- underline width approximately 62px;
- 2px line;
- around 15px below text.

Inactive filters:
- dark navy/gray text;
- normal weight;
- subtle teal hover effect.

SEARCH BOX:

Place on far right.

Approximate dimensions:
width: 285–300px;
height: 48px;

Style:
- rounded 999px;
- transparent/light cream background;
- thin subtle gray border;
- search icon on left;
- placeholder after icon.

Placeholder:
Search positions...

Use the existing icon library already loaded by the project.

Do not add another search icon library.

Spacing below this row:
approximately 32px.

==================================================
4. JOB CARDS GRID
==================================================

Create exactly TWO equal-width job cards on desktop.

Use:

display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: approximately 22px;

Cards should have equal visual height.

CARD STYLE:
- white / very subtle warm-white background;
- border: 1px solid subtle gray;
- border-radius: approximately 10px;
- very soft shadow;
- padding approximately 28px 30px;
- clean professional appearance;
- no oversized shadows;
- no gradient card backgrounds.

Each card must have the following hierarchy:

JOB TITLE

EMPLOYMENT + LOCATION

SHORT DESCRIPTION

separator

Responsibilities

bullet list

Requirements

bullet list

Apply Now button

==================================================
5. JOB CARD 1 — UI/UX DESIGNER
==================================================

Title:

UI/UX Designer

Style:
- strong bold heading;
- approximately 25–27px;
- dark navy/black.

Metadata row:

Contract / Part-time    •    Chittagong, Bangladesh (remote)

Use:
- approximately 14px;
- dark text;
- small teal circular separator/dot;
- horizontal layout;
- margin-top around 10px.

Description:

We're looking for a creative UI/UX Designer who can craft
beautiful, user-centered designs for web and mobile
applications. You'll work closely with our developers and
clients to turn ideas into visually engaging experiences.

Style:
- approximately 14–15px;
- comfortable line-height around 1.6;
- margin-top around 16px.

Add subtle horizontal divider afterward.

RESPONSIBILITIES

Heading:
Responsibilities

Style:
- teal;
- approximately 14px;
- medium/semi-bold.

Bullets:

• Design intuitive and visually stunning interfaces
• Conduct user research and usability testing
• Collaborate with developers to implement designs accurately
• Maintain consistency across all brand visuals

Bullet style:
- small teal bullets;
- dark text;
- consistent line-height;
- not Bootstrap's oversized default bullets.

Add approximately 22px spacing.

REQUIREMENTS

Heading:
Requirements

Bullets:

• Proficiency in Figma, Adobe XD, or similar tools
• Strong portfolio showcasing design projects
• Good understanding of UX principles
• Basic knowledge of front-end design (HTML/CSS) is a plus

BUTTON:

Apply Now   →

Style:
- teal background;
- white text;
- compact rounded pill;
- approximately 122–130px width;
- height approximately 42px;
- subtle teal hover effect;
- arrow icon on right;
- margin-top around 25px.

==================================================
6. JOB CARD 2 — MOTION DESIGNER
==================================================

Title:

Motion Designer

Metadata:

Contract / Part-time    •    Chittagong, Bangladesh (remote)

Description:

SoftAura is looking for a Motion Designer who can bring concepts
to life through engaging animations and motion graphics for
branding, social media, and product visuals.

Add the same divider.

RESPONSIBILITIES

• Create animated visuals for web, ads, and social platforms
• Collaborate with the creative team for storytelling visuals
• Deliver assets optimized for digital use

REQUIREMENTS

• Experience with After Effects, Premiere Pro, or similar tools
• Strong sense of timing and visual rhythm
• Creative approach to brand storytelling through motion

BUTTON:

Apply Now   →

Use exactly the same styling as card 1.

Keep both cards visually balanced even though content lengths differ.

The buttons should appear near the bottom in approximately the same vertical position.

Using flex layout inside cards is acceptable:

display: flex;
flex-direction: column;

and push button area toward the bottom if necessary.

==================================================
7. OPEN APPLICATION CTA
==================================================

Below the job cards add approximately 42–46px vertical spacing.

Create one full-width horizontal CTA block.

Background:
very subtle pale teal/light blue tint.

Border-radius:
approximately 10–12px.

Padding:
approximately 28px 32px.

Desktop layout:

[ icon ] [ text content ]                         [ Send Your Profile → ]

Use:

display: grid;
grid-template-columns: auto minmax(0, 1fr) auto;
align-items: center;
gap: approximately 28px;

LEFT ICON:

Use a clean outlined user/profile icon.

Place inside an approximately 65–72px square area.

Icon:
- teal outline;
- modern minimal style.

Do not create an overly decorative icon.

CENTER CONTENT:

Heading:

Don't see your role?

Style:
- approximately 21–22px;
- bold;
- dark.

Description:

We're always open to connecting with talented people.
Send us your profile and let's build something great together.

Style:
- approximately 14–15px;
- dark muted text;
- two short lines.

RIGHT BUTTON:

Send Your Profile   →

Style:
- transparent/light background;
- teal border;
- teal text;
- rounded pill;
- approximately 210–225px wide;
- height approximately 48px;
- arrow icon on right.

Hover:
- teal background;
- white text;
- subtle transition.

==================================================
8. FOOTER
==================================================

Reuse the exact existing reusable footer already used by the Blogs page and other Xenarchs pages.

Do NOT:
- redesign it;
- copy unnecessary footer CSS;
- alter its dimensions;
- change navigation;
- change typography;
- modify newsletter/footer functionality;
- create a second footer implementation.

Use the existing footer component/include/markup architecture.

==================================================
9. FILTER FUNCTIONALITY
==================================================

Implement lightweight client-side filtering using existing JavaScript/jQuery conventions.

Categories:

All Roles
Design
Development
Creative
Strategy
Operations

Requirements:
- clicking category changes active underline;
- only matching jobs remain visible;
- All Roles displays everything;
- no page reload;
- smooth simple behavior.

Assign job categories through data attributes.

Example concept:

data-category="design"
data-category="creative"

Do not hardcode filtering based on visible title text.

==================================================
10. SEARCH FUNCTIONALITY
==================================================

The search box should dynamically search jobs.

Match against:
- title;
- category;
- location;
- description;
- responsibilities;
- requirements.

Filtering happens while typing.

Search and category filtering must work together.

Example:

If "Design" is active and user searches "Motion",
only matching Design-category results should appear.

If no jobs match, show a simple centered message:

No open positions found.

Do not display this message by default.

==================================================
11. RESPONSIVE LAYOUT
==================================================

DESKTOP >= 992px

Hero:
- centered two-line heading.

Filter:
- categories left;
- search right.

Job cards:
- exactly 2 columns.

CTA:
- icon + text + button horizontally.

TABLET 768px–991px

Hero:
- slightly smaller heading.

Filter:
- allow categories and search to wrap cleanly.

Job cards:
- 2 columns where sufficient width exists;
- otherwise allow safe transition to 1 column.

CTA:
- icon + text first row;
- button may wrap if required.

MOBILE < 768px

Hero:
- compact height;
- heading approximately 34–38px;
- natural line wrapping;
- preserve highlighted serif words.

Filters:
- horizontal wrapping or safe horizontal category scroll;
- search field width: 100%;
- place search below categories.

Job cards:
- 1 column.

Cards:
- padding approximately 20–22px;
- metadata may wrap naturally;
- bullets remain aligned.

CTA:
- 1 column;
- icon;
- text;
- button;
- all aligned cleanly.

Send Your Profile button:
width: 100% where necessary.

Never allow horizontal page overflow.

Use approximately 20px mobile page-side padding.

==================================================
12. VISUAL PROPORTIONS
==================================================

The desktop page should visually follow this structure:

┌──────────────────────────────────────────────────────────┐
│                     DARK HERO                            │
│                                                          │
│                       Career                             │
│                                                          │
│              Open Roles at Xenarchs                     │
│        Find Your Place on Our Growing Team               │
│                                                          │
│      We're looking for talented, curious...              │
│                                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                                                          │
│ All Roles   Design   Development ...      [ Search ]     │
│ ────────                                                 │
│                                                          │
│ ┌───────────────────────┐ ┌───────────────────────┐      │
│ │ UI/UX Designer        │ │ Motion Designer       │      │
│ │ metadata              │ │ metadata              │      │
│ │ description           │ │ description           │      │
│ │ --------------------- │ │ --------------------- │      │
│ │ Responsibilities      │ │ Responsibilities      │      │
│ │ • ...                 │ │ • ...                 │      │
│ │ • ...                 │ │ • ...                 │      │
│ │                       │ │                       │      │
│ │ Requirements          │ │ Requirements          │      │
│ │ • ...                 │ │ • ...                 │      │
│ │ • ...                 │ │ • ...                 │      │
│ │                       │ │                       │      │
│ │ [ Apply Now → ]       │ │ [ Apply Now → ]       │      │
│ └───────────────────────┘ └───────────────────────┘      │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [icon] Don't see your role?      [Send Profile →]   │ │
│ │        Supporting description                       │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘

Footer