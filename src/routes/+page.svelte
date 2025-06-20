<script>
    import Caroussel from "./caroussel.svelte";
    // import formationimage from "../img/training.jpg";
   
</script>
<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="/greensockjs/src/minified/TweenMax.min.js"></script>
<script src="/greensockjs/src/minified/TweenLite.min"></script>
<script src="/greensockjs/src/minified/plugins/MorphSVGPlugin.min.js"></script>
<script src="/greensockjs/src/minified/plugins/DrawSVGPlugin.min.js"></script>
<script src="/gs.js"></script>
<script src="/script_tech.js"></script>
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
    <section id="technologies" class="technologies services-section">
        <div class="container">
          <h2>Technologies Utilisées</h2>
          <p class="section-intro">Nous utilisons les technologies les plus modernes et performantes pour nos projets</p>
          
          <!-- Owl Carousel Container -->
          <div class="owl-carousel tech-carousel">
            <div class="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              <h3>TypeScript</h3>
              <p>Language</p>
            </div>
            <div class="tech-card">
              <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" alt="TailwindCSS" />
              <h3>TailwindCSS</h3>
              <p>Styles</p>
            </div>
            <div class="tech-card">
              <img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" alt="Supabase" />
              <h3>Supabase</h3>
              <p>Auth/Database</p>
            </div>
            <div class="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="SvelteKit" />
              <h3>Svelte-Kit</h3>
              <p>Meta-Framework</p>
            </div>
            <div class="tech-card">
                <img src="/img/laravel.svg" alt="Laravel" />
                <h3>Laravel</h3>
                <p>Backend</p>
              </div>
               <div class="tech-card">
              <img src="https://www.svgrepo.com/show/331592/stripe-v2.svg" alt="Stripe" />
              <h3>Stripe</h3>
              <p>Paiements</p>
            </div>
            <!-- Nouvelles technologies ajoutées -->
            <div class="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue JS" />
              <h3>Vue JS</h3>
              <p>Framework</p>
            </div>
            <div class="tech-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" />
              <h3>NextJS</h3>
              <p>Framework</p>
            </div>
            <div class="tech-card">
              <img src="https://framework7.io/i/logo.svg" alt="Framework7" />
              <h3>Framework7</h3>
              <p>UI Framework</p>
            </div>
            <div class="tech-card">
              <img src="https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png" alt="Power BI" />
              <h3>Power BI</h3>
              <p>Analyse de données</p>
            </div>
          </div>
        </div>
      </section>
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