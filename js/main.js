/**
 * Main JavaScript - Portfolio Template
 * Handles navigation, scroll effects, and form interactions
 */

document.addEventListener('DOMContentLoaded', function () {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Update profile image based on theme
    function updateProfileImage(theme) {
        const profileImage = document.getElementById('heroProfileImage');
        if (profileImage) {
            if (theme === 'dark') {
                profileImage.src = 'assets/dprofile.png';
            } else {
                profileImage.src = 'assets/lprofile.png';
            }
        }
    }

    // Apply theme
    function setTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
        updateProfileImage(theme);
    }

    // Initialize theme
    setTheme(getPreferredTheme());

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    }

    window.addEventListener('scroll', handleScroll);

    // --- Active Navigation Link ---
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // --- Footer Year ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Contact Form Handler ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // For now, just log the data (integrate with your backend/email service later)
            console.log('Form submitted:', data);

            // Show success message (you can customize this)
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    // Animation variants
    const animations = {
        slideUp: {
            initial: { opacity: 0, transform: 'translateY(60px)' },
            animate: { opacity: 1, transform: 'translateY(0)' }
        },
        slideLeft: {
            initial: { opacity: 0, transform: 'translateX(-60px)' },
            animate: { opacity: 1, transform: 'translateX(0)' }
        },
        slideRight: {
            initial: { opacity: 0, transform: 'translateX(60px)' },
            animate: { opacity: 1, transform: 'translateX(0)' }
        },
        scaleUp: {
            initial: { opacity: 0, transform: 'scale(0.85)' },
            animate: { opacity: 1, transform: 'scale(1)' }
        },
        blurIn: {
            initial: { opacity: 0, filter: 'blur(10px)', transform: 'translateY(30px)' },
            animate: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }
        }
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const anim = animations[el.dataset.animation] || animations.slideUp;

                Object.assign(el.style, {
                    opacity: anim.animate.opacity,
                    transform: anim.animate.transform,
                    filter: anim.animate.filter || ''
                });

                animationObserver.unobserve(el);
            }
        });
    }, observerOptions);

    // Apply animations to different elements with variety
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        const animType = index % 2 === 0 ? 'slideLeft' : 'slideRight';
        const anim = animations[animType];
        card.dataset.animation = animType;
        Object.assign(card.style, {
            opacity: anim.initial.opacity,
            transform: anim.initial.transform,
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
        });
        animationObserver.observe(card);
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const anim = animations.scaleUp;
        card.dataset.animation = 'scaleUp';
        Object.assign(card.style, {
            opacity: anim.initial.opacity,
            transform: anim.initial.transform,
            transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
        });
        animationObserver.observe(card);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const animType = index % 2 === 0 ? 'slideLeft' : 'slideRight';
        const anim = animations[animType];
        item.dataset.animation = animType;
        Object.assign(item.style, {
            opacity: anim.initial.opacity,
            transform: anim.initial.transform,
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`
        });
        animationObserver.observe(item);
    });

    // Section titles with blur effect
    document.querySelectorAll('.section-header').forEach((header, index) => {
        const anim = animations.blurIn;
        header.dataset.animation = 'blurIn';
        Object.assign(header.style, {
            opacity: anim.initial.opacity,
            transform: anim.initial.transform,
            filter: anim.initial.filter,
            transition: 'opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease'
        });
        animationObserver.observe(header);
    });
});
