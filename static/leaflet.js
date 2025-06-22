
  

        // Gestion du formulaire
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi du formulaire
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            
            // Réinitialisation du formulaire
            this.reset();
            
            // Scroll vers le message de succès
            successMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });

        // Animation au survol des champs de formulaire
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateX(5px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateX(0)';
            });
        });

       