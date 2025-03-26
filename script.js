// script.js - Portfolio Interactions & Animations
document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. Mobile Navigation
    // ======================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ======================
    // 2. Smooth Scrolling
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================
    // 3. Header Scroll Effect
    // ======================
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 100) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Scroll down
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Scroll up
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });

    // ======================
    // 4. Scroll Animations
    // ======================
    const animateElements = () => {
        const elements = document.querySelectorAll('.animate');
        const windowHeight = window.innerHeight;
        const triggerPoint = 150;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - triggerPoint) {
                element.classList.add('animated');
            }
        });
    };

    // Run on load and scroll
    window.addEventListener('load', animateElements);
    window.addEventListener('scroll', animateElements);

    // ======================
    // 5. Dynamic Year in Footer
    // ======================
    document.getElementById('year').textContent = new Date().getFullYear();

    // ======================
    // 6. Project Card Hover Effects
    // ======================
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});