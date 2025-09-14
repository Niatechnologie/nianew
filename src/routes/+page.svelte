<script>
    import Caroussel from "./caroussel.svelte";
    import Tech from "./tech.svelte";
    // import formationimage from "../img/training.jpg";

</script>
<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="/greensockjs/src/minified/TweenMax.min.js"></script>
  <script src="/greensockjs/src/minified/TweenLite.min"></script>
  <script src="/greensockjs/src/minified/plugins/MorphSVGPlugin.min.js"></script>
  <script src="/greensockjs/src/minified/plugins/DrawSVGPlugin.min.js"></script>
  <script src="/gs.js"></script>
  <script src="/script.js"></script>
  <script src="/index.js"></script>

</svelte:head>
<main>

    <!-- Hero Section -->
     <Caroussel/>
 
    <!-- Services Section -->
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h2>Expert Digital & Formation</h2>
                <p><strong>E-commerce <span style="color:#f00">•</span> Applications Mobiles <span style="color:#f00">•</span> Développement Logiciel <span style="color:#f00">•</span> Développement Web <span style="color:#f00">•</span> Solutions Cloud <span style="color:#f00">•</span> Formation VBA & Power BI <span style="color:#f00">•</span> Conseil</strong></p>
                <p>De l'idée au lancement, nous créons vos solutions digitales complètes. Sites e-commerce performants, applications mobiles natives et hybrides, développement web et logiciel sur mesure, formations pratiques Python/VBA/Power BI pour autonomiser vos équipes dans l'analyse de données.</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Développement Sur Mesure</h3>
                    <p>Applications logiciel, web et mobiles personnalisées pour votre entreprise</p>
                    <a href="services.html#dev" class="btn-link">En savoir plus →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-cloud"></i>
                    </div>
                    <h3>Solutions Cloud</h3>
                    <p>Migration, optimisation et gestion de votre infrastructure cloud</p>
                    <a href="services.html#cloud" class="btn-link">En savoir plus →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Sécurité Informatique</h3>
                    <p>Protection de vos données et systèmes contre les cybermenaces</p>
                    <a href="services.html#security" class="btn-link">En savoir plus →</a>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                    <h3>Consultance IT</h3>
                    <p>Expertise stratégique pour votre transformation digitale</p>
                    <a href="services.html#consulting" class="btn-link">En savoir plus →</a>
                </div>
            </div>
        </div>
    </section>
    <section class="abonnement">
        <div class="container">
            <div class="tarif_pricing-container">
                <div class="tarif_pricing-header">
                    <div class="tarif_toggle-container">
                        <span class="tarif_toggle-text" id="monthly-text">Mensuel</span>
                        <div class="tarif_toggle-switch tarif_toggle-active" id="toggle-switch" onclick={toggleBilling()}>
                            <div class="tarif_toggle-slider"></div>
                        </div>
                        <span class="tarif_toggle-text active" id="annual-text">Annuel</span>
                        <span class="tarif_offer-badge">2 Mois offerts</span>
                    </div>
                </div>

                <div class="tarif_pricing-grid">
                    <!-- Plan Essentiel -->
                    <div class="tarif_pricing-card">
                        <h3 class="tarif_plan-name">Essentiel</h3>
                        <div class="tarif_price-container">
                            <div class="tarif_price" id="price-essentiel">
                                <span class="tarif_price-currency">€</span>20
                                <span class="tarif_price-period">/mois</span>
                            </div>
                            <div class="tarif_price-yearly" id="yearly-essentiel">soit 240€/an</div>
                        </div>
                        <div class="tarif_plan-description">
                            Toutes les fonctionnalités de base :
                        </div>
                        <div class="tarif_features-section">
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Petite boutique en ligne</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">25</span>
                                <span class="tarif_feature-text">Produits</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">5</span>
                                <span class="tarif_feature-text">Catégories</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">2</span>
                                <span class="tarif_feature-text">Prestataires de paiement</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">0%</span>
                                <span class="tarif_feature-text">Commission sur les ventes</span>
                            </div>
                        </div>
                        <button class="tarif_show-all-features">+ Voir toutes les fonctionnalités</button>
                        <button class="tarif_cta-button" onclick={selectPlan('essentiel')}>Mettre à niveau</button>
                    </div>

                    <!-- Plan Avancé -->
                    <div class="tarif_pricing-card tarif_featured">
                        <div class="tarif_popular-badge">Formule la plus populaire</div>
                        <h3 class="tarif_plan-name">Avancé</h3>
                        <div class="tarif_price-container">
                            <div class="tarif_price" id="price-avance">
                                <span class="tarif_price-currency">€</span>32
                                <span class="tarif_price-period">/mois</span>
                            </div>
                            <div class="tarif_price-yearly" id="yearly-avance">soit 390€/an</div>
                        </div>
                        <div class="tarif_plan-description">
                            Toutes les fonctionnalités de la formule Essentiel et :
                        </div>
                        <div class="tarif_features-section">
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Boutique en ligne complète</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">100</span>
                                <span class="tarif_feature-text">Produits</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_feature-number">50</span>
                                <span class="tarif_feature-text">Catégories</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Gestion des frais de port</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Campagnes d'emailing</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Prestataires de paiement illimités</span>
                            </div>
                        </div>
                        <button class="tarif_show-all-features">+ Voir toutes les fonctionnalités</button>
                        <button class="tarif_cta-button" onclick={selectPlan('avance')}>Mettre à niveau</button>
                    </div>

                    <!-- Plan Illimité -->
                    <div class="tarif_pricing-card">
                        <h3 class="tarif_plan-name">Illimité</h3>
                        <div class="tarif_price-container">
                            <div class="tarif_price" id="price-illimite">
                                <span class="tarif_price-currency">€</span>47.5
                                <span class="tarif_price-period">/mois</span>
                            </div>
                            <div class="tarif_price-yearly" id="yearly-illimite">soit 570€/an (2 mois offerts)</div>
                        </div>
                        <div class="tarif_plan-description">
                            Toutes les fonctionnalités de la formule Avancé et :
                        </div>
                        <div class="tarif_features-section">
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">E-commerce illimité</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Produits illimités</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Catégories illimitées</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Statistiques avancées</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Accès multi-utilisateurs</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Assistance prioritaire</span>
                            </div>
                            <div class="tarif_feature-item">
                                <span class="tarif_check">✓</span>
                                <span class="tarif_feature-text">Contact téléphonique</span>
                            </div>
                        </div>
                        <button class="tarif_show-all-features">+ Voir toutes les fonctionnalités</button>
                        <button class="tarif_cta-button" onclick={selectPlan('illimite')}>Mettre à niveau</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Formations Highlights -->
    <section class="training-highlight">
        <div class="container">
            <div class="training-content">
                <h2>Formations <span>Certifiantes</span></h2>
                <p>Développez les compétences de vos équipes avec nos programmes adaptés aux dernières technologies</p>
                <ul class="training-features">
                    <li><i class="fas fa-check-circle"></i> Formateurs experts en activité</li>
                    <li><i class="fas fa-check-circle"></i> Approche 100% pratique</li>
                    <li><i class="fas fa-check-circle"></i> Supports pédagogiques complets</li>
                </ul>
                <a href="nos-formations" class="btn-primary btn-large">Voir le Catalogue</a>
            </div>
            <div class="training-image">
                <div class="price-tag">
                    <span>À partir de</span>
                    <strong>100€</strong>
                    <span>par module</span>
                </div>
            </div>
        </div>
    </section>
    <Tech/>
    <!-- Call to Action -->
    <section class="cta-section">
        <div class="container">
            <h2>Prêt à transformer votre entreprise ?</h2>
            <p>Contactez-nous pour une consultation gratuite et sans engagement</p>
            <a href="contact.html" class="btn-primary btn-large">Prendre rendez-vous</a>
        </div>
    </section>
</main>

<style>
   .training-image {
    flex: 1;
    position: relative;
    height: 400px;
    background: url('/img/training.jpg') center/cover;
    border-radius: 10px;
    box-shadow: var(--shadow-xl);
}
</style>