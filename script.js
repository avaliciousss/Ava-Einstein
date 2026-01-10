/**
 * KEN ANDERSON REAL ESTATE WEBSITE
 * Sophisticated JavaScript for Animations & Interactions
 */

// ================================
// UTILITY FUNCTIONS
// ================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0
    );
}

// ================================
// NAVIGATION
// ================================

/**
 * Sticky navigation with scroll effect
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', debounce(() => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, 10));

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================================
// STATISTICS COUNTER ANIMATION
// ================================

/**
 * Animate counting up for statistics
 */
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, observerOptions);

    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].closest('.stats-bar'));
    }

    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const prefix = stat.getAttribute('data-prefix') || '';
            const suffix = stat.getAttribute('data-suffix') || '';
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            let step = 0;

            const timer = setInterval(() => {
                step++;
                current += increment;

                if (step >= steps) {
                    clearInterval(timer);
                    stat.textContent = prefix + target + suffix;
                } else {
                    stat.textContent = prefix + Math.floor(current) + suffix;
                }
            }, duration / steps);
        });
    }
}

// ================================
// SCROLL REVEAL ANIMATIONS
// ================================

/**
 * Reveal elements on scroll
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

// ================================
// TESTIMONIAL CAROUSEL
// ================================

/**
 * Testimonial carousel functionality
 */
function initTestimonialCarousel() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('#testimonialDots .dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let currentIndex = 0;
    let autoplayInterval;

    if (cards.length === 0) return;

    function showSlide(index) {
        // Remove active class from all
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current
        cards[index].classList.add('active');
        dots[index].classList.add('active');

        currentIndex = index;
    }

    function nextSlide() {
        const next = (currentIndex + 1) % cards.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentIndex - 1 + cards.length) % cards.length;
        showSlide(prev);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoplay();
            showSlide(index);
            startAutoplay();
        });
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                stopAutoplay();
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                startAutoplay();
            }
        }
    }

    // Start autoplay
    startAutoplay();

    // Pause on hover
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }
}

// ================================
// FAQ ACCORDION
// ================================

/**
 * FAQ accordion functionality
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all FAQs
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ================================
// FORM HANDLING
// ================================

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Simulate form submission (replace with actual API call)
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Log form data (for development)
                console.log('Form submitted:', data);

                // Show success message
                showFormMessage(form, 'success', 'Thank you! We\'ll be in touch within 2 hours.');

                // Reset form
                form.reset();

                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;

            } catch (error) {
                console.error('Form submission error:', error);

                // Show error message
                showFormMessage(form, 'error', 'Something went wrong. Please try again or call (941) 217-9417.');

                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // Search bar functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchInput.value.trim()) {
                console.log('Search query:', searchInput.value);
                // Scroll to properties section
                const propertiesSection = document.getElementById('properties');
                if (propertiesSection) {
                    propertiesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }
}

/**
 * Show form submission message
 */
function showFormMessage(form, type, message) {
    // Remove existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        padding: 16px;
        margin-top: 16px;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        background-color: ${type === 'success' ? '#00FF88' : '#FF6B6B'};
        color: ${type === 'success' ? '#0A0A0A' : '#FFFFFF'};
        animation: fadeInUp 0.5s ease;
    `;

    form.appendChild(messageEl);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(-20px)';
        messageEl.style.transition = 'all 0.5s ease';
        setTimeout(() => messageEl.remove(), 500);
    }, 5000);
}

// ================================
// MARKET REPORT BUTTON
// ================================

/**
 * Market report button functionality
 */
function initMarketReport() {
    const marketReportBtn = document.getElementById('marketReportBtn');

    if (marketReportBtn) {
        marketReportBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });

                // Pre-fill the interest dropdown
                setTimeout(() => {
                    const interestSelect = document.querySelector('select[name="interest"]');
                    if (interestSelect) {
                        // Find or create market report option
                        let reportOption = Array.from(interestSelect.options).find(
                            opt => opt.value === 'market-report'
                        );

                        if (!reportOption) {
                            const newOption = document.createElement('option');
                            newOption.value = 'market-report';
                            newOption.textContent = 'Request Market Report';
                            interestSelect.appendChild(newOption);
                        }

                        interestSelect.value = 'market-report';
                    }
                }, 800);
            }
        });
    }
}

// ================================
// PARALLAX EFFECTS
// ================================

/**
 * Simple parallax effect for hero section
 */
function initParallax() {
    const heroBg = document.querySelector('.hero-bg-image');

    if (heroBg) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroBg.style.transform = `translateY(${rate}px)`;
        }, 10));
    }
}

// ================================
// PROPERTY CARDS INTERACTIONS
// ================================

/**
 * Enhanced property card interactions
 */
function initPropertyCards() {
    const propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => {
        // Handle click
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A') return;

            // Get property details
            const price = this.querySelector('.property-price')?.textContent;
            const address = this.querySelector('.property-address')?.textContent;

            console.log('Property clicked:', { price, address });

            // You could open a modal with property details here
            // or navigate to a dedicated property page
        });
    });
}

// ================================
// ANIMATION ON LOAD
// ================================

/**
 * Trigger animations on page load
 */
function initLoadAnimations() {
    // Add a loaded class to body after a short delay
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// ================================
// PERFORMANCE MONITORING
// ================================

/**
 * Log performance metrics (optional)
 */
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                const connectTime = perfData.responseEnd - perfData.requestStart;
                const renderTime = perfData.domComplete - perfData.domLoading;

                console.log('Performance Metrics:', {
                    'Page Load Time': `${(pageLoadTime / 1000).toFixed(2)}s`,
                    'Connect Time': `${(connectTime / 1000).toFixed(2)}s`,
                    'Render Time': `${(renderTime / 1000).toFixed(2)}s`
                });
            }, 0);
        });
    }
}

// ================================
// EASTER EGGS & ENHANCEMENTS
// ================================

/**
 * Add subtle enhancements and easter eggs
 */
function initEnhancements() {
    // Console greeting
    console.log(
        '%cKen Anderson Real Estate',
        'font-size: 24px; font-weight: bold; color: #B8860B; font-family: "Playfair Display", serif;'
    );
    console.log(
        '%cSarasota Real Estate. Refined.',
        'font-size: 14px; color: #666; font-style: italic;'
    );
    console.log(
        '%c(941) 217-9417 | Ken@furlangroup.com',
        'font-size: 12px; color: #999;'
    );
}

// ================================
// INITIALIZATION
// ================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Ken Anderson Real Estate Website...');

    // Initialize all modules
    initNavigation();
    initStatCounters();
    initScrollReveal();
    initTestimonialCarousel();
    initFAQ();
    initContactForm();
    initMarketReport();
    initParallax();
    initPropertyCards();
    initLoadAnimations();
    initEnhancements();

    // Performance monitoring (optional, can be disabled in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        monitorPerformance();
    }

    console.log('✓ Website initialized successfully');
});

// ================================
// WINDOW RESIZE HANDLER
// ================================

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(() => {
    // Recalculate any position-dependent elements
    // This is debounced for performance
}, 250));
