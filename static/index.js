// place files you want to import through the `$lib` alias in this folder.
   // Tarifs mensuels et annuels
        const pricing = {
            essentiel: {
                monthly: 20000,
                yearly: 200000 // 20 * 10 (12 mois - 2 offerts)
            },
            avance: {
                monthly: 32000,
                yearly: 320000 // 32 * 10 (12 mois - 2 offerts)
            },
            illimite: {
                monthly: 57000,
                yearly: 570000 // 57 * 10 (12 mois - 2 offerts)
            }
        };

        let isAnnual = true; // Par défaut sur annuel

        function toggleBilling() {
            const toggle = document.getElementById('toggle-switch');
            const monthlyText = document.getElementById('monthly-text');
            const annualText = document.getElementById('annual-text');
            
            // Toggle les classes
            toggle.classList.toggle('tarif_toggle-active');
            monthlyText.classList.toggle('active');
            annualText.classList.toggle('active');
            
            // Changer le mode de facturation
            isAnnual = !isAnnual;
            updatePricing();
        }

        function updatePricing() {
            const plans = ['essentiel', 'avance', 'illimite'];
            
            plans.forEach((plan) => {
                const priceElement = document.getElementById(`price-${plan}`);
                const yearlyElement = document.getElementById(`yearly-${plan}`);
                
                if (isAnnual) {
                    // Affichage annuel - prix mensuel équivalent
                    const monthlyEquivalent = pricing[plan].yearly / 10;
                    priceElement.innerHTML = `<span class="tarif_price-currency"> Fcfa</span>${monthlyEquivalent}<span class="tarif_price-period">/mois</span>`;
                    yearlyElement.textContent = `soit ${pricing[plan].yearly} Fcfa/an (2 mois offerts)`;
                } else {
                    // Affichage mensuel
                    priceElement.innerHTML = `<span class="tarif_price-currency"> Fcfa</span>${pricing[plan].monthly}<span class="tarif_price-period">/mois</span>`;
                    yearlyElement.textContent = `soit ${pricing[plan].monthly * 12} Fcfa/an`;
                }
            });
        }

        function selectPlan(plan) {
            const billingType = isAnnual ? 'annuel' : 'mensuel';
            console.log(`Plan sélectionné: ${plan} - Facturation: ${billingType}`);
            alert(`Vous avez sélectionné le plan ${plan} en mode ${billingType}`);
            // Logique de redirection vers le système de paiement
        }

        // Initialiser les prix au chargement
        document.addEventListener('DOMContentLoaded', function() {
            updatePricing();
        });