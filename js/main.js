/**
 * Template 1: Mystical Emergence - JavaScript
 * Bioluminescent interactions and cosmic animations
 */

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#0') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Active nav highlighting
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage ||
        (currentPage === '' && link.getAttribute('href') === 'index.html')) {
        link.style.color = 'var(--soft-cyan)';
        link.style.textShadow = '0 0 10px var(--glow-green)';
    }
});

// Dynamic mycelial network connections (advanced effect)
function createMycelialEffect() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';

    // This is optional - creates additional animated mycelial connections
    // Uncomment if you want more dynamic visual effects
    // document.body.appendChild(canvas);
}

// Call on load if you want the extra effect
// createMycelialEffect();

// ============================================
// ACCORDION FUNCTIONALITY
// ============================================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');

            // Close all other accordions in the same group
            const accordion = item.closest('.accordion');
            accordion.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current accordion
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });
}

// ============================================
// TOGGLE FUNCTIONALITY
// ============================================
function initToggles() {
    const toggleTriggers = document.querySelectorAll('.toggle-trigger');

    toggleTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const content = trigger.nextElementSibling;
            if (content && content.classList.contains('toggle-content')) {
                content.classList.toggle('active');
            }
        });
    });
}

// ============================================
// TAB FUNCTIONALITY
// ============================================
function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('.tab-button');
        const contents = container.querySelectorAll('.tab-content');

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove active from all
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));

                // Add active to clicked
                button.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
            });
        });

        // Activate first tab by default
        if (buttons.length > 0 && contents.length > 0) {
            buttons[0].classList.add('active');
            contents[0].classList.add('active');
        }
    });
}

// ============================================
// INITIALIZE ALL INTERACTIVE ELEMENTS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Existing animations
    const animatedElements = document.querySelectorAll('.feature-card, .image-text-section, .protocol-step, .guild-card');
    animatedElements.forEach(el => observer.observe(el));

    // New interactive components
    initAccordions();
    initToggles();
    initTabs();
});
