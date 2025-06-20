// Loading Animation
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loading').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loading').style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Scroll Animations
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

        // Observe all animated elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // FAQ Accordion
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Button Click Effects
        document.querySelectorAll('.btn-primary, .btn-secondary, .btn-white, .card-button').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#' || this.tagName === 'BUTTON') {
                    e.preventDefault();
                }
                
                // Show success message for form buttons
                if (this.classList.contains('card-button') || this.textContent.includes('inscrire')) {
                    this.innerHTML = '<i class="fas fa-check"></i> Demande envoyée !';
                    this.style.background = 'var(--success-gradient)';
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-arrow-right"></i> S\'inscrire';
                        this.style.background = 'var(--primary-gradient)';
                    }, 2000);
                }
            });
        });