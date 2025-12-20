/**
 * Template 1: Mystical Emergence - JavaScript
 * Bioluminescent interactions and cosmic animations
 */

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');

        // Update toggle icon
        if (navLinks.classList.contains('active')) {
            mobileMenuToggle.innerHTML = '✕';
        } else {
            mobileMenuToggle.innerHTML = '☰';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuToggle) {
            mobileMenuToggle.innerHTML = '☰';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.innerHTML = '☰';
            }
        }
    }
});

// Prevent body scroll when mobile menu is open
if (navLinks) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (navLinks.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            }
        });
    });

    observer.observe(navLinks, { attributes: true });
}

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
// IMAGE LIGHTBOX WITH ZOOM & PAN
// ============================================
class ImageLightbox {
    constructor() {
        this.currentZoom = 1;
        this.minZoom = 1;
        this.maxZoom = 5;
        this.zoomStep = 0.5;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.currentImage = null;

        this.createLightbox();
        this.initImageClickHandlers();
    }

    createLightbox() {
        // Create lightbox HTML structure
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <div class="lightbox-image-container">
                    <img src="" alt="" class="lightbox-image">
                </div>
            </div>
            <button class="lightbox-close" aria-label="Close lightbox">✕</button>
            <div class="lightbox-zoom-level">100%</div>
            <div class="lightbox-caption"></div>
            <div class="lightbox-controls">
                <button class="lightbox-control-btn" data-action="zoom-out" aria-label="Zoom out">−</button>
                <button class="lightbox-control-btn" data-action="reset" aria-label="Reset zoom">⟲</button>
                <button class="lightbox-control-btn" data-action="zoom-in" aria-label="Zoom in">+</button>
            </div>
        `;

        document.body.appendChild(lightbox);

        this.lightbox = lightbox;
        this.image = lightbox.querySelector('.lightbox-image');
        this.imageContainer = lightbox.querySelector('.lightbox-image-container');
        this.zoomLevel = lightbox.querySelector('.lightbox-zoom-level');
        this.caption = lightbox.querySelector('.lightbox-caption');

        this.bindEvents();
    }

    initImageClickHandlers() {
        // Make content images clickable (exclude icons)
        const imageSelectors = '.image-text-section img, .protocol-step img, .feature-card img, .summary-card img';
        document.addEventListener('click', (e) => {
            if (e.target.matches(imageSelectors)) {
                e.preventDefault();
                this.open(e.target);
            }
        });
    }

    bindEvents() {
        // Close button
        this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());

        // Click outside to close
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // Control buttons
        this.lightbox.querySelectorAll('.lightbox-control-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                if (action === 'zoom-in') this.zoomIn();
                else if (action === 'zoom-out') this.zoomOut();
                else if (action === 'reset') this.reset();
            });
        });

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.close();
            else if (e.key === '+' || e.key === '=') this.zoomIn();
            else if (e.key === '-' || e.key === '_') this.zoomOut();
            else if (e.key === '0') this.reset();
        });

        // Mouse wheel zoom
        this.imageContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY < 0) this.zoomIn();
            else this.zoomOut();
        });

        // Drag to pan (mouse)
        this.imageContainer.addEventListener('mousedown', (e) => this.startDrag(e));
        this.imageContainer.addEventListener('mousemove', (e) => this.drag(e));
        this.imageContainer.addEventListener('mouseup', () => this.endDrag());
        this.imageContainer.addEventListener('mouseleave', () => this.endDrag());

        // Touch support for mobile
        this.imageContainer.addEventListener('touchstart', (e) => this.startDrag(e));
        this.imageContainer.addEventListener('touchmove', (e) => this.drag(e));
        this.imageContainer.addEventListener('touchend', () => this.endDrag());

        // Pinch to zoom on mobile
        let initialDistance = 0;
        let initialZoom = 1;

        this.imageContainer.addEventListener('touchstart', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                initialDistance = this.getDistance(e.touches[0], e.touches[1]);
                initialZoom = this.currentZoom;
            }
        });

        this.imageContainer.addEventListener('touchmove', (e) => {
            if (e.touches.length === 2) {
                e.preventDefault();
                const currentDistance = this.getDistance(e.touches[0], e.touches[1]);
                const scale = currentDistance / initialDistance;
                this.currentZoom = Math.max(this.minZoom, Math.min(this.maxZoom, initialZoom * scale));
                this.updateTransform();
            }
        });
    }

    getDistance(touch1, touch2) {
        const dx = touch2.clientX - touch1.clientX;
        const dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    startDrag(e) {
        if (this.currentZoom <= 1) return;

        this.isDragging = true;
        this.imageContainer.classList.add('dragging');

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        this.startX = clientX - this.translateX;
        this.startY = clientY - this.translateY;
    }

    drag(e) {
        if (!this.isDragging) return;

        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        this.translateX = clientX - this.startX;
        this.translateY = clientY - this.startY;

        this.updateTransform();
    }

    endDrag() {
        this.isDragging = false;
        this.imageContainer.classList.remove('dragging');
    }

    open(img) {
        this.currentImage = img;
        this.image.src = img.src;
        this.image.alt = img.alt;

        // Set caption from alt text
        this.caption.textContent = img.alt;
        this.caption.style.display = img.alt ? 'block' : 'none';

        // Reset state
        this.reset();

        // Show lightbox
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
        this.reset();
    }

    zoomIn() {
        this.currentZoom = Math.min(this.maxZoom, this.currentZoom + this.zoomStep);
        this.updateTransform();
    }

    zoomOut() {
        this.currentZoom = Math.max(this.minZoom, this.currentZoom - this.zoomStep);
        if (this.currentZoom === 1) {
            this.translateX = 0;
            this.translateY = 0;
        }
        this.updateTransform();
    }

    reset() {
        this.currentZoom = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.updateTransform();
    }

    updateTransform() {
        this.image.style.transform = `scale(${this.currentZoom}) translate(${this.translateX / this.currentZoom}px, ${this.translateY / this.currentZoom}px)`;
        this.zoomLevel.textContent = `${Math.round(this.currentZoom * 100)}%`;

        if (this.currentZoom > 1) {
            this.imageContainer.classList.add('zoomed');
        } else {
            this.imageContainer.classList.remove('zoomed');
        }
    }
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

    // Initialize image lightbox
    new ImageLightbox();
});
