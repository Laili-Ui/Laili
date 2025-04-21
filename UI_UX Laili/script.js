document.addEventListener('DOMContentLoaded', () => {
    // Navigation smooth scroll
    initSmoothScroll();
    
    // Image effects
    initImageEffects();
    
    // Navbar scroll effects
    initNavbarScroll();
    
    // Section animations
    initSectionAnimations();
    
    // Template filters
    initTemplateFilters();
    
    // Social media interactions
    initSocialInteractions();
});

// Add to your initSmoothScroll function
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    const valueLink = document.querySelector('.value-link');
    if (valueLink) {
        valueLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

function initImageEffects() {
    // Gallery images hover effect
    const galleryImages = document.querySelectorAll('.hero-gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            galleryImages.forEach(otherImg => {
                if (otherImg !== img) otherImg.style.opacity = '0.7';
            });
        });
        
        img.addEventListener('mouseleave', () => {
            galleryImages.forEach(otherImg => {
                otherImg.style.opacity = '1';
            });
        });
    });

    // General image hover effects
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'translateY(-5px)';
            img.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translateY(0)';
            img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.style.background = window.scrollY > 50 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.8)';
    });
}

function initSectionAnimations() {
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
        section.classList.add('scroll-animate');
    });
}

function initTemplateFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const templateItems = document.querySelectorAll('.template-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            templateItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initSocialInteractions() {
    const socialPosts = document.querySelectorAll('.social-post');
    
    socialPosts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            const overlay = post.querySelector('.post-overlay');
            const heart = overlay.querySelector('i');
            overlay.style.opacity = '1';
            heart.style.transform = 'scale(1)';
        });
        
        post.addEventListener('mouseleave', () => {
            const overlay = post.querySelector('.post-overlay');
            const heart = overlay.querySelector('i');
            overlay.style.opacity = '0';
            heart.style.transform = 'scale(0)';
        });
    });
}