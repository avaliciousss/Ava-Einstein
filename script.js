// ================================
// GLOBAL VARIABLES
// ================================
let currentReviewIndex = 0;
let reviewInterval;

// ================================
// UTILITY FUNCTIONS
// ================================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ================================
// NAVIGATION
// ================================
const navbar = document.querySelector('.navbar');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Navbar scroll effect
const handleNavbarScroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', debounce(handleNavbarScroll, 10));

// Mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// SEARCH BAR FUNCTIONALITY
// ================================
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

if (searchButton) {
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            console.log('Searching for:', searchValue);
            // In production, this would redirect to a search results page or trigger a search
            alert(`Searching for properties in: ${searchValue}`);
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });
}

// ================================
// SCROLL ANIMATIONS
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('.about, .listings, .market, .process, .reviews, .faq, .contact').forEach(section => {
    section.classList.add('fade-in-on-scroll');
    observer.observe(section);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ================================
// LISTING CARDS HOVER EFFECT
// ================================
const listingCards = document.querySelectorAll('.listing-card');

listingCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });

    // Add tilt effect on mouse move
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// ================================
// MARKET CHART
// ================================
const createMarketChart = () => {
    const canvas = document.getElementById('marketChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    const data = [650, 680, 720, 740, 760, 775, 790, 785, 775, 770, 775, 775];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const valueRange = maxValue - minValue;

    const pointSpacing = chartWidth / (data.length - 1);

    // Draw grid lines
    ctx.strokeStyle = 'rgba(138, 154, 123, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }

    // Draw line
    ctx.strokeStyle = '#B85C38';
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((value, index) => {
        const x = padding + index * pointSpacing;
        const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();

    // Draw area fill
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.closePath();
    ctx.fillStyle = 'rgba(184, 92, 56, 0.1)';
    ctx.fill();

    // Draw points
    data.forEach((value, index) => {
        const x = padding + index * pointSpacing;
        const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#B85C38';
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // Draw labels
    ctx.fillStyle = '#8A9A7B';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';

    labels.forEach((label, index) => {
        const x = padding + index * pointSpacing;
        ctx.fillText(label, x, canvas.height - 15);
    });
};

// ================================
// MARKET CARDS ANIMATION
// ================================
const animateMarketValues = () => {
    const marketValues = document.querySelectorAll('.market-value');

    marketValues.forEach(valueEl => {
        const targetText = valueEl.textContent;
        const targetValue = parseFloat(targetText.replace(/[^0-9.]/g, ''));
        const suffix = targetText.replace(/[0-9.,]/g, '');

        if (!isNaN(targetValue)) {
            let currentValue = 0;
            const increment = targetValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(timer);
                }
                valueEl.textContent = Math.floor(currentValue) + suffix;
            }, 30);
        }
    });
};

// Trigger market animation when section is visible
const marketSection = document.querySelector('.market');
if (marketSection) {
    const marketObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMarketValues();
                createMarketChart();
                marketObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    marketObserver.observe(marketSection);
}

// ================================
// PROCESS STEP ANIMATIONS
// ================================
const processSteps = document.querySelectorAll('.process-step');

processSteps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';

    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    step.style.transition = 'all 0.6s ease';
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, index * 150);
                stepObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    stepObserver.observe(step);
});

// ================================
// REVIEWS CAROUSEL
// ================================
const reviewItems = document.querySelectorAll('.review-item');
const dots = document.querySelectorAll('.carousel-dots .dot');

const showReview = (index) => {
    reviewItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
};

const nextReview = () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviewItems.length;
    showReview(currentReviewIndex);
};

const startReviewCarousel = () => {
    reviewInterval = setInterval(nextReview, 5000);
};

const stopReviewCarousel = () => {
    clearInterval(reviewInterval);
};

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentReviewIndex = index;
        showReview(currentReviewIndex);
        stopReviewCarousel();
        startReviewCarousel();
    });
});

// Start carousel
if (reviewItems.length > 0) {
    showReview(0);
    startReviewCarousel();
}

// Pause carousel on hover
const reviewsSection = document.querySelector('.reviews-carousel');
if (reviewsSection) {
    reviewsSection.addEventListener('mouseenter', stopReviewCarousel);
    reviewsSection.addEventListener('mouseleave', startReviewCarousel);
}

// ================================
// FAQ ACCORDION
// ================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't already open
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ================================
// CONTACT FORM
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your inquiry! We will respond within 2 hours.');

        // Reset form
        contactForm.reset();

        // In production, this would send data to a server or CRM
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(data => console.log('Success:', data))
        //   .catch(error => console.error('Error:', error));
    });
}

// ================================
// FORM INPUT ANIMATIONS
// ================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ================================
// CURSOR TRAIL EFFECT (OPTIONAL SUBTLE INTERACTION)
// ================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ================================
// PAGE LOAD ANIMATIONS
// ================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .search-bar, .hero-ctas, .scroll-indicator');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
});

// ================================
// RESIZE HANDLER
// ================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        createMarketChart();
    }, 250);
});

// ================================
// SMOOTH REVEAL ON SCROLL
// ================================
const revealElements = document.querySelectorAll('.listing-card, .market-card, .process-step');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(element);
});

// ================================
// EASTER EGG: KONAMI CODE
// ================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            console.log('🏠 Ken Anderson Realty - Built with precision and dedication!');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// ================================
// PERFORMANCE MONITORING
// ================================
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.renderTime || entry.loadTime);
            }
        }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// ================================
// ANALYTICS (PLACEHOLDER)
// ================================
const trackEvent = (category, action, label) => {
    // In production, integrate with Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', { category, action, label });

    // Example GA4 tracking:
    // gtag('event', action, {
    //     'event_category': category,
    //     'event_label': label
    // });
};

// Track listing card clicks
listingCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        trackEvent('Listings', 'View Property', `Property ${index + 1}`);
    });
});

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('CTA', 'Click', e.target.textContent.trim());
    });
});

console.log('%c🏠 Ken Anderson Realty', 'font-size: 20px; font-weight: bold; color: #B85C38;');
console.log('%cSarasota Real Estate. Refined.', 'font-size: 14px; color: #8A9A7B; font-style: italic;');
