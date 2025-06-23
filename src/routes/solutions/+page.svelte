
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
    <div class="floating-elements">
        <div class="floating-element">💻</div>
        <div class="floating-element">⚡</div>
        <div class="floating-element">🔐</div>
    </div>

    <div class="container">
        <div class="header">
            <h1>Solutions Informatiques Innovantes</h1>
            <p>Transformez votre entreprise avec nos solutions technologiques sur mesure</p>
        </div>

        <div class="services-grid">
            <div class="service-card">
                 <div class="service-image"><img src="/img/web.jpg" alt="" srcset=""></div>
                <h3>Applications Web</h3>
                <p>Des applications web modernes et performantes pour digitaliser votre activité</p>
                <ul class="features">
                    <li>Interfaces utilisateur intuitives et responsive</li>
                    <!-- <li>Technologies dernière génération (React, Vue.js)</li> -->
                    <li>Optimisation SEO et performances</li>
                    <li>Intégration API et bases de données</li>
                    <li>Hébergement et maintenance inclus</li>
                </ul>
             
            </div>

            <div class="service-card">
                <div class="service-image"><img src="/img/software.jpg" alt="" srcset=""></div>
                <h3>Logiciels de Gestion</h3>
                <p>Solutions complètes pour optimiser vos processus métier</p>
                <ul class="features">
                    <li>ERP personnalisés selon vos besoins</li>
                    <li>Gestion des stocks et facturation</li>
                    <li>Suivi client et CRM intégré</li>
                    <li>Reporting automatisé en temps réel</li>
                    <li>Interface multi-utilisateurs sécurisée</li>
                </ul>
             
            </div>

            <div class="service-card">
               <div class="service-image"><img src="/img/vba.jpg" alt="" srcset=""></div>
                <h3>Automatisation VBA</h3>
                <p>Automatisez vos tâches répétitives avec des solutions VBA sur mesure</p>
                <ul class="features">
                    <li>Macros Excel personnalisées</li>
                    <li>Automatisation de rapports complexes</li>
                    <li>Intégration multi-applications Office</li>
                    <li>Interfaces utilisateur avancées</li>
                    <li>Gain de temps considérable</li>
                </ul>
             
            </div>

            <div class="service-card">
                 <div class="service-image"><img src="/img/powerbi.jpg" alt="" srcset=""></div>
                <h3>Tableaux de Bord Power BI</h3>
                <p>Visualisez vos données et prenez des décisions éclairées</p>
                <ul class="features">
                    <li>Dashboards interactifs et dynamiques</li>
                    <li>Connexion à vos sources de données</li>
                    <li>Analyses prédictives avancées</li>
                    <li>Rapports automatisés et programmés</li>
                    <li>Accès mobile et partage sécurisé</li>
                </ul>
                
            </div>


            <div class="service-card">
                <div class="service-image"><img src="/img/formation.jpg" alt="" srcset=""></div>
                <h3>Formation Informatique</h3>
                <p>Développez les compétences de vos équipes avec nos formations</p>
                <ul class="features">
                    <li>Formations sur mesure selon vos besoins</li>
                    <li>Sessions en présentiel ou à distance</li>
                    <li>Support pédagogique complet</li>
                    <li>Certification des compétences acquises</li>
                    <li>Suivi post-formation personnalisé</li>
                </ul>
              
            </div>

            <div class="service-card">
                 <div class="service-image"><img src="/img/security.jpg" alt="" srcset=""></div>
                <h3>Sécurité Informatique</h3>
                <p>Protégez vos données et systèmes contre les menaces cyber</p>
                <ul class="features">
                    <li>Audit de sécurité complet</li>
                    <li>Mise en place de pare-feu avancés</li>
                    <li>Sauvegarde et plan de reprise</li>
                    <li>Formation sensibilisation cyber-sécurité</li>
                    <li>Surveillance et monitoring 24/7</li>
                </ul>
              
            </div>
            <div class="service-card">
                <div class="service-image"><img src="/img/mobile.jpg" alt="" srcset=""></div>
                <h3>Développement Mobile</h3>
                <p>Applications mobiles natives et hybrides pour iOS et Android</p>
                <ul class="features">
                    <li>Applications natives (Swift, Kotlin)</li>
                    <li>Solutions hybrides (React Native, Flutter)</li>
                    <li>Interface utilisateur moderne et intuitive</li>
                    <li>Intégration API et services cloud</li>
                    <li>Publication sur App Store et Google Play</li>
                </ul>
              
            </div>

            <div class="service-card">
                <div class="service-image"><img src="/img/consulting.jpg" alt="" srcset=""></div>
                <h3>Consulting IT</h3>
                <p>Accompagnement stratégique pour optimiser votre infrastructure informatique</p>
                <ul class="features">
                    <li>Audit et diagnostic de votre SI</li>
                    <li>Stratégie de transformation digitale</li>
                    <li>Conseil en architecture système</li>
                    <li>Optimisation des coûts IT</li>
                    <li>Accompagnement projets technologiques</li>
                </ul>
               
            </div>
        </div>

        
    </div>
    <div class="cta-section">
            <h2>Prêt à Transformer Votre Entreprise ?</h2>
            <p>Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nos solutions peuvent propulser votre activité vers de nouveaux sommets.</p>
            <div class="cta-buttons">
                <a href="tel:+33123456789" class="cta-button primary">📞 Nous Contacter</a>
                <a href="mailto:contact@votreentreprise.com" class="cta-button secondary">📧 Demander un Devis</a>
            </div>
        </div>
</main>   
<style>
        main{
            margin-top: 85px;
           
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 30px 0;
            color: rgb(0, 0, 0);
            animation: fadeInDown 1s ease-out;
        }

        .header h1 {
            font-size: 2.0rem;
            margin-bottom: 20px;
  
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
            max-width: 700px;
            margin: 0 auto;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }

        .service-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 40px 30px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s ease;
        }

        .service-card:hover::before {
            left: 100%;
        }

        .service-card:hover {
            transform: translateY(-1px) scale(1.01);
            box-shadow: 0 10px 10px rgba(0,0,0,0.10);
        }

        .service-image {
            margin:-40px -30px 0 -30px ;
        }

        .service-card h3 {
            color: #2c3e50;
            font-size: 1.4rem;
            margin-bottom: 15px;
            text-align: center;
            position: relative;
        }

        .service-card h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #ff0000, #a24b4b);
            border-radius: 2px;
        }

        .service-card p {
            color: #000000;
            text-align: center;
            font-weight: 600;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        .features {
            list-style: none;
            margin: 10px 0;
        }

        .features li {
            padding: 2px 0;
            position: relative;
            padding-left: 25px;
            color: #666;
            text-align: left;
            transition: color 0.3s ease;
        }

        .features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #ff0000;
            font-weight: bold;
            font-size: 1rem;
        }

        .service-card:hover .features li {
            color: #333;
        }

        .cta-section {
            text-align: center;
            padding: 60px 0;
            background: rgba(255, 0, 0, 0.855);
            
            backdrop-filter: blur(10px);
           
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-size: 1.2rem;
            font-weight: bold;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            min-width: 200px;
            text-align: center;
        }

        .cta-button.primary {
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            box-shadow: 0 10px 30px rgba(255,107,107,0.3);
        }

        .cta-button.secondary {
            background: linear-gradient(45deg, #667eea, #764ba2);
            box-shadow: 0 10px 30px rgba(102,126,234,0.3);
        }

        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.6s ease;
        }

        .cta-button:hover::before {
            left: 100%;
        }

        .cta-button:hover {
            transform: translateY(-3px);
        }

        .cta-button.primary:hover {
            box-shadow: 0 15px 40px rgba(255,107,107,0.4);
        }

        .cta-button.secondary:hover {
            box-shadow: 0 15px 40px rgba(102,126,234,0.4);
        }

        .cta-section h2 {
            color: white;
            font-size: 2.0rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .cta-section p {
            color: rgba(255,255,255,0.9);
            font-size: 1.2rem;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

     

        .floating-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .floating-element {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 20%;
            right: 10%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 10%;
            left: 20%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
            }
        }

        @media (max-width: 768px) {
            .container {
              padding: 10px;
        }
            
        .header {
         
            padding: 20px 0;
        
        }

        .header h1 {
                font-size: 1.5rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .service-card {
                padding: 20px 20px;
            }

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }

            .cta-button {
                width: 100%;
                max-width: 300px;
            }

            .service-buttons {
                flex-direction: column;
                gap: 8px;
            }

            .service-btn {
                min-width: 100%;
            }
        }
    </style>