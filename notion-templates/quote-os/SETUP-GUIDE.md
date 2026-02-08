# Quote OS — Notion Setup Guide

Step-by-step instructions for building Quote OS in Notion from scratch.

---

## Step 1: Create the Databases

Create these 5 databases in a new Notion page. Order matters — build them in this sequence so relations link correctly.

### 1A. Authors DB

Create a **full-page database** called "Authors"

| Property | Type | Config |
|----------|------|--------|
| Name | Title | — |
| Bio | Text | — |
| Photo | Files & Media | — |
| Category | Select | Options: Philosopher, Writer, Entrepreneur, Scientist, Artist, Politician, Coach, Athlete, Unknown |
| Era | Select | Options: Ancient, Medieval, Renaissance, Modern, Contemporary |
| Wikipedia | URL | — |

### 1B. Sources DB

Create a **full-page database** called "Sources"

| Property | Type | Config |
|----------|------|--------|
| Title | Title | — |
| Type | Select | Options: Book, Podcast, Article, Film, Speech, Conversation, Tweet, Song, TV Show, Other |
| Author | Relation | → Authors DB |
| URL | URL | — |
| Cover | Files & Media | — |
| Date Consumed | Date | — |
| Rating | Select | Options: 1, 2, 3, 4, 5 |
| Notes | Text | — |

### 1C. Collections DB

Create a **full-page database** called "Collections"

| Property | Type | Config |
|----------|------|--------|
| Name | Title | — |
| Description | Text | — |
| Cover Image | Files & Media | — |
| Icon | Text | Use emoji |
| Public | Checkbox | — |

### 1D. Reflections DB

Create a **full-page database** called "Reflections"

| Property | Type | Config |
|----------|------|--------|
| Title | Title | — |
| Reflection | Text | — |
| Date | Date | Default: Today |
| Prompt | Select | Options: Daily Resurface, Weekly Review, Spontaneous, Quote Discovery |
| Mood After | Select | Options: Inspired, Thoughtful, Motivated, Peaceful, Energized, Curious |

### 1E. Quotes DB (Master — create last)

Create a **full-page database** called "Quotes"

| Property | Type | Config |
|----------|------|--------|
| Quote | Title | The quote text |
| Author | Relation | → Authors DB (show on both) |
| Source | Relation | → Sources DB (show on both) |
| Collections | Relation | → Collections DB (show on both) |
| Reflections | Relation | → Reflections DB (show on both) |
| Tags | Multi-select | Options: Life, Work, Creativity, Courage, Love, Wisdom, Humor, Success, Failure, Growth, Simplicity, Leadership, Mindset, Writing, Nature |
| Date Added | Date | Default: Today |
| Favorite | Checkbox | — |
| Personal Note | Text | — |
| Mood | Select | Options: Motivating, Calming, Provocative, Funny, Wise, Melancholic, Empowering |
| Share Status | Select | Options: Not Shared, Scheduled, Shared |
| Rating | Select | Options: 1, 2, 3, 4, 5 |
| Image | Files & Media | — |

**Rollup properties to add after all relations are set:**

In **Authors DB**, add:
| Quote Count | Rollup | Relation: Quotes, Property: Quote, Calculate: Count all |

In **Sources DB**, add:
| Quote Count | Rollup | Relation: Quotes, Property: Quote, Calculate: Count all |

In **Collections DB**, add:
| Quote Count | Rollup | Relation: Quotes, Property: Quote, Calculate: Count all |

---

## Step 2: Create Views

### In Quotes DB, create these views:

**1. All Quotes (Table — default)**
- Show: Quote, Author, Tags, Mood, Favorite, Date Added
- Sort: Date Added, Descending
- Filter: none

**2. Gallery View**
- Layout: Gallery
- Card preview: Quote (title)
- Card size: Medium
- Show properties: Author, Tags, Mood
- Sort: Date Added, Descending

**3. By Author (Table)**
- Group by: Author
- Show: Quote, Source, Tags, Rating
- Sort: Date Added, Descending

**4. By Source (Table)**
- Group by: Source
- Show: Quote, Author, Tags, Date Added
- Sort: Date Added, Descending

**5. By Theme (Board)**
- Layout: Board
- Group by: Tags
- Show: Author, Mood
- Sort: Date Added, Descending

**6. Favorites (Gallery)**
- Layout: Gallery
- Filter: Favorite = Checked
- Show: Author, Mood, Rating
- Sort: Rating, Descending

**7. Share-Ready (Table)**
- Filter: Share Status = Not Shared, Favorite = Checked
- Show: Quote, Author, Tags, Share Status
- Sort: Date Added, Descending

---

## Step 3: Build the Command Center

Create a new page called **"Command Center"** — this is your dashboard.

### Layout Structure

Use Notion's column blocks to create this layout:

**Row 1: Header**
- Page icon: Use a brain or lightning emoji
- Cover: Dark gradient or abstract pattern
- Title: "Quote OS"
- Description: "Your entire quote life, systemized."

**Row 2: Two columns**

Left column (60% width):
- Heading 2: "Daily Quote"
- Linked view of Quotes DB → Gallery, filtered to 1 random quote
  - Tip: Filter by a date formula or manually rotate
- Divider
- Heading 2: "Recently Added"
- Linked view of Quotes DB → Gallery, sorted by Date Added desc, limit 5

Right column (40% width):
- Heading 2: "Quick Capture"
- Linked view of Quotes DB → Table, with "New" button prominent
  - Show only: Quote, Author, Tags
  - This is the fast-entry point
- Divider
- Heading 2: "Stats"
- Create a callout block with your stats (manually updated or use formulas):
  - Total Quotes | Total Authors | Total Sources | Total Collections

**Row 3: Full width**
- Heading 2: "Weekly Reflection"
- Callout block with a rotating prompt:
  - "What quote changed how you acted this week?"
  - "Which quote do you most want to live by?"
  - "What quote challenged your assumptions?"
- Button/link to create new Reflection entry

**Row 4: Full width**
- Heading 2: "Favorites"
- Linked view of Quotes DB → Gallery, filtered: Favorite = checked
- Card size: Small, show 6-8 cards

---

## Step 4: Create Template Buttons

### Quick Capture Button

In the Quotes DB, create a **template** called "Quick Capture":
- Quote: empty (cursor starts here)
- Date Added: Today (auto-fill)
- Share Status: Not Shared (auto-fill)
- Mood: empty
- Tags: empty

### Reflection Button

In the Reflections DB, create a **template** called "Daily Reflection":
- Title: Auto-fill with today's date
- Date: Today
- Prompt: Daily Resurface
- Body content:

```
## The Quote
[Link the quote that resonated]

## What it means to me today


## How I'll apply this


## Mood after reflecting

```

### Weekly Review Button

In the Reflections DB, create a **template** called "Weekly Review":
- Title: "Week of [date]"
- Date: Today
- Prompt: Weekly Review
- Body content:

```
## Quotes Added This Week
[Link to filtered view]

## Favorite Discovery


## Quote I Lived By


## Quote I Want to Explore More


## Quotes to Share This Week
1.
2.
3.
```

---

## Step 5: Add Starter Content

Load the 50 starter quotes from the BLUEPRINT.md file. For each quote:

1. Add the quote text as the title
2. Create the Author in Authors DB (if not already there)
3. Assign to the matching Collection
4. Add appropriate Tags and Mood
5. Mark 5-10 as Favorites

### Pre-built Collections to create:

| Collection | Icon | Description |
|------------|------|-------------|
| Stoic Wisdom | :classical_building: | Ancient philosophy for modern life |
| Creative Fire | :art: | On creativity, art, and making things |
| Leadership | :compass: | Guiding others and yourself |
| Mindset | :brain: | How you think changes everything |
| The Writer's Desk | :fountain_pen: | On the craft of writing |
| Courage & Fear | :lion_face: | Facing what scares you |
| Keep It Simple | :white_circle: | The power of simplicity |
| Business & Hustle | :rocket: | Building, shipping, growing |
| Love & Connection | :heart: | On relationships and love |
| Wit & Humor | :zany_face: | The lighter side of wisdom |

---

## Step 6: Polish & Style

### Design Touches
- Use consistent emoji for each Tag (e.g., Life = :seedling:, Work = :briefcase:)
- Set a dark or minimal cover image on the Command Center
- Use dividers between sections
- Add callout blocks for tips and prompts
- Use toggle blocks in documentation pages

### Color Coding (Mood)
- Motivating: Orange/Red
- Calming: Blue/Teal
- Provocative: Purple
- Funny: Yellow
- Wise: Green
- Melancholic: Gray
- Empowering: Gold

### Mobile Optimization
- Test the Command Center on mobile
- Ensure Quick Capture works with one hand
- Gallery views should show 1 card per row on mobile
- Keep the daily quote front and center

---

## Step 7: Documentation Pages

Create these as sub-pages of the template:

### Getting Started
1. Welcome message
2. Quick tour of the Command Center
3. Add your first quote walkthrough
4. Set up your daily ritual

### Tips & Tricks
- Import Kindle highlights
- Capture quotes from podcasts (timestamp trick)
- Use Notion Web Clipper for articles
- Screenshot → OCR → paste workflow
- Share collections publicly

### FAQ
- Address common questions (see BLUEPRINT.md)

---

## Launch Checklist

- [ ] All 5 databases created with correct properties
- [ ] All relations and rollups working
- [ ] 7 views created in Quotes DB
- [ ] Command Center dashboard built
- [ ] 3 template buttons working
- [ ] 50 starter quotes loaded
- [ ] 10 collections created
- [ ] Documentation pages written
- [ ] Tested on mobile
- [ ] Tested duplicate (share link works)
- [ ] Preview images/screenshots taken
- [ ] Listing copy written
- [ ] Price set
- [ ] Published on Gumroad / marketplace
