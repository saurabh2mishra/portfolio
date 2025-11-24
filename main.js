// Main JavaScript for GitHub Profile Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initTypewriter();
    initScrollReveal();
    initStatsCounter();
    initProjectCarousel();
    initMobileMenu();
    initSmoothScrolling();
    initFormHandling();
    
    // Typewriter effect for hero section
    function initTypewriter() {
        const typed = new Typed('#typed-text', {
            strings: [
                'Solution Architect',
                'Data Engineer',
                'ML Engineer'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 4000,
            loop: true,
            showCursor: true,
            cursorChar: ''
        });
    }
    
    // Scroll reveal animations
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };``
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Animated stats counter
    function initStatsCounter() {
        const counters = document.querySelectorAll('.stats-counter');
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
        
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const duration = 2000;
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current);
            }, stepTime);
        }
    }
    
    // Project carousel initialization
    function initProjectCarousel() {
        if (document.getElementById('projects-carousel')) {
            new Splide('#projects-carousel', {
                type: 'loop',
                perPage: 1,
                perMove: 1,
                gap: '2rem',
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                breakpoints: {
                    768: {
                        perPage: 1,
                        gap: '1rem'
                    }
                }
            }).mount();
        }
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                // Create mobile menu if it doesn't exist
                let mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu) {
                    mobileMenu = createMobileMenu();
                    nav.appendChild(mobileMenu);
                }
                
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        function createMobileMenu() {
            const menu = document.createElement('div');
            menu.id = 'mobile-menu';
            menu.className = 'md:hidden absolute top-full left-0 w-full glass-card hidden';
                menu.innerHTML = `
                <div class="px-4 py-6 space-y-4">
                    <a href="index.html#home" class="block text-slate-300 hover:text-white nav-link">Home</a>
                    <a href="skills.html" class="block text-slate-300 hover:text-white nav-link">Skills</a>
                    <a href="blog.html" class="block text-slate-300 hover:text-white nav-link">Blog</a>
                </div>
                <div class="px-4 pb-6 flex items-center space-x-4">
                    <a href="https://github.com/saurabh2mishra" target="_blank" aria-label="GitHub" class="text-slate-300 hover:text-white">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0.5C5.73 0.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.21 1.18a11.1 11.1 0 012.92-.39c.99.01 1.99.13 2.92.39 2.23-1.49 3.21-1.18 3.21-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/saurabh-mishra-2a788379/" target="_blank" aria-label="LinkedIn" class="text-slate-300 hover:text-white">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.47 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.99h4.94V24H0V8.99zM8.27 8.99h4.73v2.02h.07c.66-1.25 2.28-2.56 4.7-2.56 5.03 0 5.96 3.31 5.96 7.62V24h-4.94v-6.88c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V24H8.27V8.99z"/>
                        </svg>
                    </a>
                    <a href="https://x.com/mksaurabh" target="_blank" aria-label="Twitter" class="text-slate-300 hover:text-white">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 4.56c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 3.15a4.28 4.28 0 001.32 5.71c-.66-.02-1.28-.2-1.82-.5v.05a4.28 4.28 0 003.43 4.19c-.5.14-1.02.17-1.56.06a4.28 4.28 0 003.99 2.97A8.59 8.59 0 012 19.54 12.12 12.12 0 008.29 21c7.55 0 11.69-6.26 11.69-11.69v-.53A8.36 8.36 0 0023 4.56z"/>
                        </svg>
                    </a>
                </div>
            `;
            return menu;
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Form handling
    function initFormHandling() {
        const form = document.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                handleFormSubmission(this);
            });
        }
        
        function handleFormSubmission(form) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`;
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                    ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                </div>
                <div class="text-white font-medium">${message}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }
    
    // Parallax effect for floating elements
    function initParallax() {
        const floatingElements = document.querySelectorAll('.floating');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            floatingElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }
    
    // Initialize parallax
    initParallax();
    
    // Skill card hover effects
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Blog card hover effects
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -5,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
    
    // Navigation background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('bg-slate-900/90');
        } else {
            nav.classList.remove('bg-slate-900/90');
        }
    });
    
    // Loading animation
    window.addEventListener('load', () => {
        anime({
            targets: '.scroll-reveal',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuad'
        });
    });
    
    // Add click handlers for external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hostname !== window.location.hostname) {
                e.preventDefault();
                window.open(this.href, '_blank', 'noopener,noreferrer');
            }
        });
    });
    
    // Console easter egg
    console.log('%c👋 Hello there, fellow developer!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
    console.log('%cWelcome to my GitHub profile page! 🚀', 'color: #06b6d4; font-size: 14px;');
    console.log('%cBuilt with: HTML5, CSS3, JavaScript, Tailwind CSS, Anime.js', 'color: #64748b; font-size: 12px;');
    console.log('%cFeel free to explore the code and reach out if you have any questions!', 'color: #3b82f6; font-size: 12px;');
});