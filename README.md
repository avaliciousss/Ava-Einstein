# Ken Anderson Real Estate Website

A sophisticated, modern real estate website for Ken Anderson of The Furlan Group at Keller Williams Coastal Living III.

## Design Philosophy

**Tagline:** "Sarasota Real Estate. Refined."

This website embodies editorial minimalism with a focus on:
- Clean, brutalist design language
- Data-driven presentation
- Professional sophistication without Florida clichés
- Interactive, motion-rich user experience

## Color Palette

- **Charcoal** (#1A1A1A) - Primary text and authority
- **White** (#FFFFFF) - Clean backgrounds
- **Off-White** (#FAFAFA) - Subtle backgrounds
- **Terracotta** (#B85C38) - CTAs and accents
- **Sage Green** (#8A9A7B) - Secondary text and dividers

## Typography

- **Display/Headlines:** Playfair Display (serif) - Bold, editorial style
- **Body/Interface:** Inter (sans-serif) - Clean, modern readability

## Features

### 1. Hero Section with Unicorn Studio Animation
- Full-screen hero with interactive background animation
- Prominent search bar for property searches
- Clear CTAs for property viewing and consultation scheduling

### 2. About Section
- Split-screen layout showcasing Ken's portrait and credentials
- Team statistics: 26+ years experience, 462+ transactions, $20M+ volume
- Grayscale to color image transition on hover

### 3. Featured Listings
- 3-column grid of current properties
- Interactive cards with hover effects and 3D tilt
- Featured properties include:
  - 20830 Valprato Ct, Venice ($775,000)
  - Lots 7 & 8 S Briggs Avenue, Sarasota ($650,000)
  - 331 Bearded Oaks Circle, Sarasota ($1,200,000)

### 4. Market Intelligence
- Real-time market data visualization
- Animated statistics cards
- Interactive line chart showing 12-month trends
- Median price, days on market, and inventory statistics

### 5. Process Timeline
- 4-step horizontal process flow
- Consult → Prepare → Market → Close
- Animated icons with hover effects

### 6. Client Reviews Carousel
- Auto-rotating testimonials (5-second intervals)
- Manual navigation with dots
- Large, editorial-style quote presentation

### 7. FAQ Accordion
- Common questions about team experience, pricing strategy, technology, and team structure
- Smooth accordion animations
- One-at-a-time expansion

### 8. Contact Form
- Professional lead capture form
- Split layout with contact information
- Response time indicator (2 hours average)
- Direct contact: (941) 217-9417 | Ken@furlangroup.com

## Interactive Elements

### Animations
- Scroll-triggered fade-in animations for all sections
- Parallax effect on hero background
- Counter animations for market statistics
- Smooth carousel transitions
- 3D tilt effect on listing cards
- Form input focus animations

### Navigation
- Fixed navbar with scroll effect
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Active state indicators

### Chart Visualization
- Custom canvas-based market trend chart
- Responsive design that adapts to screen size
- Animated line drawing on scroll into view

## Technical Stack

- **HTML5** - Semantic markup with Schema.org structured data
- **CSS3** - Modern CSS with custom properties, Grid, and Flexbox
- **JavaScript (Vanilla)** - No frameworks, pure performance
- **Unicorn Studio** - Interactive background animation in hero section

## SEO Optimization

- Semantic HTML structure
- Schema.org RealEstateAgent markup
- Meta descriptions and keywords
- Performance-optimized (target: <2.5s LCP, >90 PageSpeed)
- Mobile-first responsive design

## Setup Instructions

### Basic Setup

1. Clone or download the repository
2. Place Ken Anderson's professional headshot in `/images/ken-anderson.jpg`
3. Open `index.html` in a modern browser

### Adding Real Property Images

Replace placeholder images in the listings section:
1. Add property photos to `/images/properties/`
2. Update the `listing-image` divs in `index.html` with actual image paths

### Unicorn Studio Animation

The interactive animation in the hero section uses Unicorn Studio:
- Project ID: `nRNhOTWhT5SmiKQxf26d`
- The animation loads automatically from Unicorn Studio CDN
- Positioned in hero background with 40% opacity for subtle effect
- You can customize the animation at [Unicorn Studio](https://unicornstudio.io/)

### Customization

#### Update Contact Information
Edit the contact section in `index.html`:
```html
<a href="tel:9412179417" class="info-phone">(941) 217-9417</a>
<a href="mailto:Ken@furlangroup.com">Ken@furlangroup.com</a>
```

#### Update Listings
Edit the listings in `index.html` or integrate with an IDX/MLS feed:
```html
<div class="listing-price">$775,000</div>
<div class="listing-address">20830 Valprato Ct, Venice</div>
<div class="listing-specs">4 BD · 3 BA · 2,365 SQFT</div>
```

#### Update Market Data
Edit market statistics in `index.html`:
```html
<div class="market-value">$775K</div>
<div class="market-trend positive">+12%</div>
```

Update chart data in `script.js`:
```javascript
const data = [650, 680, 720, 740, 760, 775, 790, 785, 775, 770, 775, 775];
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

## Integration Recommendations

### IDX/MLS Integration
- **Recommended:** iHomefinder or IDX Broker
- Provides automatic listing updates
- Ensures compliance with MLS regulations

### CRM Integration
- **Recommended:** KW Command or Follow Up Boss
- Use webhook in contact form submission
- Instant lead routing to Ken Anderson

### Scheduling
- **Recommended:** Calendly embedded in contact section
- Syncs with Ken's calendar
- Automated appointment booking

### Email Marketing
- **Recommended:** Mailchimp
- Automated market report distribution
- Newsletter campaigns

### Analytics
- Google Analytics 4 (GA4)
- Facebook Pixel
- LinkedIn Insight Tag
- Track: property views, form submissions, CTA clicks

## Performance Optimization

### Current Optimizations
- Minimal external dependencies
- Debounced scroll handlers
- Lazy loading for animations
- Efficient CSS animations
- Reduced motion support for accessibility

### Recommended Enhancements
- Image optimization (WebP format with fallbacks)
- CDN hosting for static assets
- Gzip compression
- Browser caching headers
- Service worker for offline capability

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
├── images/             # Image assets
│   ├── ken-anderson.jpg
│   └── properties/     # Property photos
└── README.md           # This file
```

## Deployment

### Quick Deploy Options

1. **GitHub Pages**
   - Push to GitHub repository
   - Enable Pages in repository settings
   - Select source branch

2. **Netlify**
   - Drag and drop folder to Netlify
   - Automatic SSL and CDN
   - Custom domain support

3. **Vercel**
   - Import GitHub repository
   - Zero-config deployment
   - Automatic HTTPS

4. **Custom Hosting**
   - Upload files via FTP to web host
   - Point domain to hosting directory
   - Ensure HTTPS is enabled

## Content Updates

### Regular Updates Needed
- **Weekly:** New property listings
- **Monthly:** Market intelligence data and chart
- **Quarterly:** Client testimonials
- **Annually:** Team statistics and achievements

### Blog Content Ideas
- Sarasota Luxury Market: 2025 Forecast
- Why Team-Based Real Estate Outperforms Solo Agents
- Investment Opportunities in Sarasota's Emerging Neighborhoods
- Architectural Trends in Modern Sarasota Homes

## Contact & Support

**Ken Anderson**
The Furlan Group | Keller Williams Coastal Living III
Phone: (941) 217-9417
Email: Ken@furlangroup.com
Office: 2001 Siesta Drive, Suite 202, Sarasota, FL

---

## Design Credits

Design follows editorial minimalism principles inspired by:
- Architectural Digest
- Kinfolk Magazine
- Modern luxury real estate platforms

Built with precision and dedication. Sarasota Real Estate. Refined.

## License

© 2025 Ken Anderson | The Furlan Group | Keller Williams Coastal Living III
Equal Housing Opportunity
