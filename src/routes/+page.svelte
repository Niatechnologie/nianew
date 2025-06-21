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

</svelte:head>
<main>

    <!-- Hero Section -->
     <Caroussel/>
 
    <!-- Services Section -->
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h2>Expert Digital & Formation</h2>
                <p><strong>E-commerce <span style="color:#f00">•</span> Applications Mobiles <span style="color:#f00">•</span> Développement Logiciel <span style="color:#f00">•</span> Développement Web <span style="color:#f00">•</span> Formation VBA & Power BI <span style="color:#f00">•</span> Conseil</strong></p>
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