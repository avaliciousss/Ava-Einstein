# Quote OS — Notion Template Blueprint

> Your entire quote life, systemized. Collect, reflect, resurface, and share the words that shape your thinking.

---

## Product Positioning

**One-liner:** The operating system for your quote collection — capture, categorize, reflect, and resurface the best ideas from everything you read, watch, and hear.

**Target buyers:**
- Avid readers and lifelong learners
- Content creators who share quotes on social media
- Journalers and self-improvement practitioners
- Writers, coaches, and educators
- "Second brain" / PKM enthusiasts

**Problem it solves:**
People highlight and save quotes everywhere — Kindle, podcasts, books, tweets, conversations — but they never see them again. Quote OS turns scattered highlights into a living system that helps you think, create, and grow.

**Competitive edge:**
Most quote templates are flat databases. Quote OS is a *system* — it connects quotes to authors, books, themes, reflections, and daily resurfacing. It's the difference between a folder of screenshots and an actual operating system.

---

## Template Architecture

```
Quote OS/
├── Command Center (Dashboard)
│   ├── Daily Quote (random resurface)
│   ├── Recently Added
│   ├── Weekly Reflection Prompt
│   ├── Quick Capture Widget
│   ├── Stats (total quotes, authors, sources)
│   └── Favorites Carousel
│
├── Databases (Core)
│   ├── Quotes DB (master database)
│   ├── Authors DB (linked)
│   ├── Sources DB (linked — books, podcasts, articles, etc.)
│   ├── Collections DB (themed groups)
│   └── Reflections DB (journal entries tied to quotes)
│
├── Views
│   ├── Gallery View — visual quote cards
│   ├── By Author — grouped table
│   ├── By Source — grouped table
│   ├── By Theme/Tag — board view (kanban)
│   ├── Favorites — filtered gallery
│   ├── Random Quote — formula-driven resurface
│   └── Share-Ready — formatted for social media
│
├── Workflows
│   ├── Quick Capture (inline + mobile-friendly)
│   ├── Weekly Review (guided reflection)
│   ├── Daily Resurface (random quote ritual)
│   └── Social Share Prep (formatted output)
│
├── Documentation
│   ├── Getting Started
│   ├── How to Capture Quotes
│   ├── Using Collections & Tags
│   ├── Weekly Review Walkthrough
│   └── FAQ
│
└── Bonus
    ├── 50 Starter Quotes (pre-loaded)
    ├── 10 Pre-built Collections (Stoicism, Creativity, Leadership, etc.)
    ├── Social Media Quote Card Templates (Canva links)
    └── Notion Widgets for Quote Display
```

---

## Database Schemas

### 1. Quotes DB (Master)

| Property | Type | Purpose |
|----------|------|---------|
| Quote | Title | The quote text |
| Author | Relation → Authors DB | Who said it |
| Source | Relation → Sources DB | Where it came from |
| Collections | Relation → Collections DB | Themed groups |
| Tags | Multi-select | Quick categorization (life, work, love, courage, etc.) |
| Date Added | Date | When you captured it |
| Favorite | Checkbox | Your best quotes |
| Personal Note | Text | Why this quote matters to you |
| Mood | Select | Motivating / Calming / Provocative / Funny / Wise |
| Share Status | Select | Not shared / Scheduled / Shared |
| Reflections | Relation → Reflections DB | Journal entries about this quote |
| Rating | Select | 1-5 stars — how impactful is this quote |
| Image | Files & Media | For visual quote cards |
| Resurface Date | Formula | Random date generator for daily quote |

### 2. Authors DB

| Property | Type | Purpose |
|----------|------|---------|
| Name | Title | Author / speaker name |
| Bio | Text | Short description |
| Photo | Files & Media | Author headshot |
| Quotes | Relation → Quotes DB | All quotes by this author |
| Category | Select | Philosopher / Writer / Entrepreneur / Scientist / etc. |
| Wikipedia | URL | Quick reference link |
| Quote Count | Rollup | Number of quotes from this author |
| Era | Select | Ancient / Medieval / Modern / Contemporary |

### 3. Sources DB

| Property | Type | Purpose |
|----------|------|---------|
| Title | Title | Book / podcast / article name |
| Type | Select | Book / Podcast / Article / Film / Speech / Conversation / Tweet |
| Author | Relation → Authors DB | Who created the source |
| Quotes | Relation → Quotes DB | All quotes from this source |
| URL | URL | Link to source |
| Cover | Files & Media | Book cover / thumbnail |
| Date Consumed | Date | When you read/watched/heard it |
| Quote Count | Rollup | How many quotes from this source |
| Rating | Select | 1-5 stars |
| Notes | Text | General notes about the source |

### 4. Collections DB

| Property | Type | Purpose |
|----------|------|---------|
| Name | Title | Collection theme (e.g., "Stoic Wisdom") |
| Description | Text | What this collection is about |
| Cover Image | Files & Media | Visual header |
| Quotes | Relation → Quotes DB | Quotes in this collection |
| Quote Count | Rollup | Total quotes in collection |
| Icon | Text | Emoji for the collection |
| Public | Checkbox | Shareable or personal |

### 5. Reflections DB

| Property | Type | Purpose |
|----------|------|---------|
| Title | Title | Reflection title / date |
| Quote | Relation → Quotes DB | Quote that sparked this reflection |
| Reflection | Text | Your written reflection |
| Date | Date | When you reflected |
| Prompt | Select | What prompt triggered this (daily resurface, weekly review, etc.) |
| Mood After | Select | Inspired / Thoughtful / Motivated / Peaceful |

---

## Key Views & How They Work

### Command Center (Dashboard)

The first thing users see. Designed for daily engagement.

**Layout:**
```
┌─────────────────────────────────────────────────┐
│              QUOTE OS — Command Center           │
├────────────────────┬────────────────────────────┤
│                    │                            │
│   DAILY QUOTE      │   QUICK CAPTURE            │
│   ──────────────   │   ──────────────            │
│   "The obstacle    │   [+ Add Quote]             │
│    is the way."    │                            │
│   — Marcus Aurelius│   STATS                     │
│                    │   ──────────────            │
│   [Reflect] [Save] │   742 Quotes | 89 Authors  │
│                    │   12 Collections | 23 Sources│
├────────────────────┴────────────────────────────┤
│   RECENTLY ADDED (Gallery — last 5)              │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│   │ Q1   │ │ Q2   │ │ Q3   │ │ Q4   │ │ Q5   │ │
│   └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ │
├─────────────────────────────────────────────────┤
│   WEEKLY REFLECTION PROMPT                       │
│   "What quote changed how you acted this week?"  │
│   [Start Reflection →]                           │
├─────────────────────────────────────────────────┤
│   FAVORITES (Gallery — filtered)                 │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│   │ F1   │ │ F2   │ │ F3   │ │ F4   │ │ F5   │ │
│   └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ │
└─────────────────────────────────────────────────┘
```

### Gallery View — Visual Quote Cards

- Card preview shows: Quote text (trimmed), Author name, Tags, Mood color
- Sort by: Date Added (newest first)
- Filter bar: by Tag, Author, Source, Mood
- Card cover: optional quote image or author photo

### Board View — By Theme/Tag

Kanban columns = Tags (Life, Work, Creativity, Courage, Love, Wisdom, Humor)
- Drag quotes between themes
- Great for visual thinkers

### Share-Ready View

- Filtered: Share Status = "Not shared"
- Shows: Quote text, Author, a formatted "copy-paste" block
- Purpose: prep quotes for Twitter/Instagram/LinkedIn

---

## Workflows

### 1. Quick Capture

**Trigger:** User finds a quote anywhere
**Flow:**
1. Open Quote OS on mobile or desktop
2. Click "+ Quick Capture" button on dashboard
3. Paste or type quote → auto-prompts for Author + Source
4. Tag with mood/theme
5. Done in <30 seconds

**Design notes:**
- Inline database on dashboard for zero-click capture
- Template button pre-fills Date Added = Today
- Mobile-friendly — single column layout works on phone

### 2. Daily Resurface

**Trigger:** User opens Quote OS each morning
**Flow:**
1. Dashboard shows "Daily Quote" — a random quote from collection
2. User reads and optionally hits [Reflect]
3. Reflection opens a linked entry in Reflections DB
4. Write 2-3 sentences about what the quote means today

**Implementation:**
- Use `dateBetween(now(), prop("Date Added"), "days") % [prime number]` formula approach
- Or use a simple "Last Resurfaced" date property and filter for oldest

### 3. Weekly Review

**Trigger:** Sunday ritual (or any day)
**Flow:**
1. Dashboard shows "Weekly Reflection Prompt"
2. Review all quotes added this week (filtered view)
3. Star any new favorites
4. Write one weekly reflection
5. Prep 2-3 quotes for social sharing

### 4. Social Share Prep

**Trigger:** Content creation day
**Flow:**
1. Go to "Share-Ready" view
2. Pick quotes to share
3. Copy formatted text block (pre-styled in template)
4. Optionally use Canva templates (bonus) for visual cards
5. Mark as "Shared" when posted

---

## Starter Content (Pre-loaded)

### 50 Starter Quotes (across 10 collections)

**Stoicism (5)**
- "The obstacle is the way." — Marcus Aurelius
- "We suffer more in imagination than in reality." — Seneca
- "No man is free who is not master of himself." — Epictetus
- "You have power over your mind, not outside events." — Marcus Aurelius
- "Waste no more time arguing what a good man should be. Be one." — Marcus Aurelius

**Creativity (5)**
- "Creativity is intelligence having fun." — Albert Einstein
- "The chief enemy of creativity is good sense." — Pablo Picasso
- "Create with the heart; build with the mind." — Criss Jami
- "Originality is nothing but judicious imitation." — Voltaire
- "Art is not what you see, but what you make others see." — Edgar Degas

**Leadership (5)**
- "A leader is a dealer in hope." — Napoleon Bonaparte
- "The task of leadership is not to put greatness into people, but to elicit it." — John Buchan
- "Before you are a leader, success is all about growing yourself." — Jack Welch
- "Leadership is the capacity to translate vision into reality." — Warren Bennis
- "The greatest leader is not the one who does the greatest things, but the one who gets people to do the greatest things." — Ronald Reagan

**Mindset (5)**
- "Whether you think you can or think you can't, you're right." — Henry Ford
- "The mind is everything. What you think you become." — Buddha
- "Change your thoughts and you change your world." — Norman Vincent Peale
- "What lies behind us and what lies before us are tiny matters compared to what lies within us." — Ralph Waldo Emerson
- "You are not a drop in the ocean. You are the entire ocean in a drop." — Rumi

**Writing (5)**
- "There is nothing to writing. All you do is sit down at a typewriter and bleed." — Ernest Hemingway
- "Start writing, no matter what. The water does not flow until the faucet is turned on." — Louis L'Amour
- "The first draft is just you telling yourself the story." — Terry Pratchett
- "If you want to be a writer, you must do two things above all others: read a lot and write a lot." — Stephen King
- "Write drunk, edit sober." — (attributed to) Ernest Hemingway

**Courage (5)**
- "Courage is not the absence of fear, but the triumph over it." — Nelson Mandela
- "Life shrinks or expands in proportion to one's courage." — Anais Nin
- "Fortune favors the bold." — Virgil
- "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face." — Eleanor Roosevelt
- "It takes courage to grow up and become who you really are." — E.E. Cummings

**Simplicity (5)**
- "Simplicity is the ultimate sophistication." — Leonardo da Vinci
- "Less is more." — Ludwig Mies van der Rohe
- "The ability to simplify means to eliminate the unnecessary so that the necessary may speak." — Hans Hofmann
- "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupery
- "In character, in manner, in style, in all things, the supreme excellence is simplicity." — Henry Wadsworth Longfellow

**Business (5)**
- "Your most unhappy customers are your greatest source of learning." — Bill Gates
- "The way to get started is to quit talking and begin doing." — Walt Disney
- "Innovation distinguishes between a leader and a follower." — Steve Jobs
- "The best time to plant a tree was 20 years ago. The second best time is now." — Chinese Proverb
- "Risk more than others think is safe. Dream more than others think is practical." — Howard Schultz

**Love & Relationships (5)**
- "The greatest thing you'll ever learn is just to love and be loved in return." — Eden Ahbez
- "We accept the love we think we deserve." — Stephen Chbosky
- "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." — Lao Tzu
- "The best thing to hold onto in life is each other." — Audrey Hepburn
- "Love is not about possession. It's about appreciation." — Osho

**Humor & Wit (5)**
- "I'm not superstitious, but I am a little stitious." — Michael Scott
- "Behind every great man is a woman rolling her eyes." — Jim Carrey
- "I have not failed. I've just found 10,000 ways that won't work." — Thomas Edison
- "The only way to do great work is to love what you do. If you haven't found it yet, keep looking." — Steve Jobs
- "Be yourself; everyone else is already taken." — Oscar Wilde

---

## Pricing Strategy

| Tier | Price | Includes |
|------|-------|----------|
| **Starter** (Free) | $0 | Dashboard + Quotes DB only (10 starter quotes). Lead magnet. |
| **Quote OS** | $19 | Full system: all 5 databases, all views, 50 starter quotes, documentation |
| **Quote OS Pro** | $39 | Everything + 10 pre-built collections, Canva social templates, weekly review system, lifetime updates |

**Value justification:**
- Replaces: scattered highlights, screenshot folders, random note files
- Time saved: ~2 hours/month finding and organizing quotes
- 2 hrs x $30/hr x 12 months = $720/year value
- $19-39 = massive ROI

---

## Marketing Strategy

### Launch Channels

| Channel | Action | Goal |
|---------|--------|------|
| Twitter/X | Thread: "I built an OS for my quote collection" + screenshots | Virality, DMs |
| Reddit | r/Notion, r/productivity, r/getdisciplined | Organic traffic |
| Gumroad | Optimize listing with preview images | Discovery |
| Notion Marketplace | Apply as creator, submit template | Volume |
| Product Hunt | Launch with demo video | Day-1 spike |
| Pinterest | Quote card images linking to product | Evergreen SEO |
| YouTube | "How I organize 1000+ quotes in Notion" tutorial | Long-term traffic |

### Content Marketing (Build in Public)

1. **Week 1-2:** Share quote screenshots, tease the template
2. **Week 3:** "Building in public" thread showing the design process
3. **Week 4:** Launch with free tier as lead magnet
4. **Ongoing:** Weekly "Quote of the Week" posts driving back to product

### SEO Keywords
- notion quote template
- notion quote tracker
- notion quotes database
- best notion templates for readers
- how to organize quotes in notion
- notion second brain quotes
- notion template for book quotes

---

## Listing Copy (Gumroad / Marketplace)

### Headline
**Quote OS — The Operating System for Your Quote Collection**

### Subheadline
Stop losing the quotes that change how you think. Capture, organize, reflect, and resurface the best ideas from everything you read, watch, and hear.

### Description

You've highlighted hundreds of passages. Saved screenshots of tweets. Scribbled quotes on napkins. But when you need that *one* quote that perfectly captures what you're feeling — you can't find it.

**Quote OS fixes this.**

It's not just a database. It's a complete system for your quote life:

- **Capture** quotes in under 30 seconds from any source
- **Organize** by author, source, theme, mood, and collection
- **Resurface** a random daily quote to start your morning
- **Reflect** with guided journaling prompts tied to quotes
- **Share** with pre-formatted text blocks for social media

**What's inside:**
- 5 connected databases (Quotes, Authors, Sources, Collections, Reflections)
- 7 custom views (Gallery, Board, Table, Share-Ready, and more)
- Command Center dashboard for daily engagement
- 50 pre-loaded starter quotes across 10 collections
- Complete documentation and setup guide

**Pro tier adds:**
- Weekly Review workflow
- Canva social media quote card templates
- Lifetime updates
- Priority support

---

## Support & Documentation Plan

### Getting Started Guide (included in template)
1. Duplicate the template
2. Explore the Command Center
3. Add your first quote using Quick Capture
4. Browse starter quotes and collections
5. Set up your Daily Resurface ritual

### FAQ
- **Can I import quotes from Kindle?** Yes — export highlights and paste into Quotes DB
- **Does it work on mobile?** Yes — the dashboard and Quick Capture are mobile-optimized
- **Can I share collections publicly?** Yes — toggle the "Public" checkbox and share the Notion page
- **How does the daily random quote work?** A formula-based system resurfaces quotes you haven't seen recently

### Support Tiers
| Tier | Support |
|------|---------|
| Free | Documentation only |
| Paid | Email support (48hr response) |
| Pro | Email support (24hr response) + video walkthrough |
