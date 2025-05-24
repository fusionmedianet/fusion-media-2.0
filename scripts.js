document.addEventListener('DOMContentLoaded', function() {
    // ===== Fade-in Effect =====
    const elements = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after element becomes visible
            }
        });
    }, options);
    
    elements.forEach(element => {
        observer.observe(element); // Observe all elements with 'fade-in' class
    });
    
    // ===== Back to Top Button =====
    const backToTopBtn = document.querySelector('.btn-back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scrolling
            });
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // FAQ Toggle Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');

            // Close other open items
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.parentNode.classList.remove('active');
                }
            });
        });
    });

    // Optional: Close menu when clicking outside
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenuBtn.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.classList.remove('menu-open'); // Better to use `remove` instead of setting overflow
            }
        });
    }
});