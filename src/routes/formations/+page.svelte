
<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <!-- <script src="/formations.js"></script> -->
</svelte:head>
 <main>
       <!-- Loading Overlay -->
    <div class="loading-overlay" id="loading">
        <div class="loading-spinner"></div>
    </div>

    <!-- hero_ Section -->
    <section id="accueil" class="hero_">
        <div class="floating-elements">
            <div class="floating-element">
                <i class="fas fa-code" style="font-size: 3rem; color: rgba(255,255,255,0.1);"></i>
            </div>
            <div class="floating-element">
                <i class="fas fa-chart-bar" style="font-size: 3rem; color: rgba(255,255,255,0.1);"></i>
            </div>
            <div class="floating-element">
                <i class="fas fa-palette" style="font-size: 3rem; color: rgba(255,255,255,0.1);"></i>
            </div>
        </div>
        
        <div class="container">
            <div class="hero_-content">
                <h1>Transformez Votre Carrière avec Nos Formations d'Excellence</h1>
                <p class="hero_-subtitle">Rejoignez plus de 10 000 apprenants qui ont révolutionné leur parcours professionnel grâce à nos formations certifiantes et innovantes.</p>
                
                <div class="hero_-buttons">
                    <a href="#formations" class="btn-primary">
                        <i class="fas fa-rocket"></i>
                        Découvrir nos formations
                    </a>
                    <a href="#demo" class="btn-secondary">
                        <i class="fas fa-play"></i>
                        Voir la démo
                    </a>
                </div>
                
                <div class="hero_-stats">
                    <div class="hero_-stat">
                        <span class="hero_-stat-number">10K+</span>
                        <span class="hero_-stat-label">Étudiants formés</span>
                    </div>
                    <div class="hero_-stat">
                        <span class="hero_-stat-number">95%</span>
                        <span class="hero_-stat-label">Taux de réussite</span>
                    </div>
                    <div class="hero_-stat">
                        <span class="hero_-stat-number">4.9/5</span>
                        <span class="hero_-stat-label">Note moyenne</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

<!-- Features Section -->
    <section class="features">
        <div class="container">
            <div class="section-header fade-in">
                <h2 class="section-title">Pourquoi Choisir FormaX ?</h2>
                <p class="section-subtitle">Découvrez les avantages qui font de nous le leader de la formation professionnelle en ligne.</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card fade-in">
                    <div class="feature-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3 class="feature-title">Certification Reconnue</h3>
                    <p class="feature-description">Travaillez sur des projets concrets et constituez un portfolio professionnel impressionnant.</p>
                </div>
                
                <div class="feature-card fade-in">
                    <div class="feature-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3 class="feature-title">Flexibilité Totale</h3>
                    <p class="feature-description">Apprenez à votre rythme, 24h/24 et 7j/7, selon votre emploi du temps.</p>
                </div>
                
                <div class="feature-card fade-in">
                    <div class="feature-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <h3 class="feature-title">Insertion Professionnelle</h3>
                    <p class="feature-description">Accédez à notre réseau d'entreprises partenaires pour booster votre carrière.</p>
                </div>
                
                <!-- <div class="feature-card fade-in">
                    <div class="feature-icon">
                        <i class="fas fa-infinity"></i>
                    </div>
                    <h3 class="feature-title">Accès à Vie</h3>
                    <p class="feature-description">Gardez l'accès à tous les contenus et mises à jour même après votre formation.</p>
                </div> -->
            </div>
        </div>
    </section>
       <!-- Formations Section -->
    <section id="formations" class="formations">
        <div class="container">
            <div class="section-header fade-in">
                <h2 class="section-title">Nos Formations d'Excellence</h2>
                <p class="section-subtitle">Choisissez parmi notre catalogue de formations conçues pour les métiers d'avenir.</p>
            </div>
            
            <div class="formations-filter fade-in">
                <button class="filter-btn active" data-filter="all">Toutes</button>
                <button class="filter-btn" data-filter="tech">Tech</button>
                <button class="filter-btn" data-filter="design">Design</button>
                <button class="filter-btn" data-filter="business">Business</button>
            </div>
            
            <div class="formations-grid">
                <div class="formation-card fade-in" data-category="tech">
                    <div class="card-header dev">
                        <div class="card-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="card-badge">Populaire</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Développement Web Full-Stack</h3>
                        <p class="card-description">Maîtrisez les technologies modernes : React, Node.js, MongoDB, et devenez développeur full-stack recherché.</p>
                        <ul class="card-features">
                            <li>6 mois de formation intensive</li>
                            <li>15 projets pratiques</li>
                            <li>Certification professionnelle</li>
                            <li>Stage en entreprise inclus</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">2 990€</span>
                                <!-- <span class="price-period">ou 3x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>

                <div class="formation-card fade-in" data-category="tech">
                    <div class="card-header data">
                        <div class="card-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="card-badge">Nouveau</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Data Science & IA</h3>
                        <p class="card-description">Explorez l'intelligence artificielle, le machine learning et l'analyse de données avec Python et TensorFlow.</p>
                        <ul class="card-features">
                            <li>5 mois de formation</li>
                            <li>Projets IA réels</li>
                            <li>Certification Google Cloud</li>
                            <li>Accompagnement expert</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">3 490€</span>
                                <!-- <span class="price-period">ou 4x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>

                <div class="formation-card fade-in" data-category="design">
                    <div class="card-header design">
                        <div class="card-icon">
                            <i class="fas fa-palette"></i>
                        </div>
                        <div class="card-badge">Créatif</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">UX/UI Design Avancé</h3>
                        <p class="card-description">Créez des expériences utilisateur exceptionnelles avec Figma, Adobe XD et les dernières méthodologies design.</p>
                        <ul class="card-features">
                            <li>4 mois de formation</li>
                            <li>Portfolio professionnel</li>
                            <li>Design thinking & prototypage</li>
                            <li>Projets clients réels</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">2 790€</span>
                                <!-- <span class="price-period">ou 3x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>

                <div class="formation-card fade-in" data-category="business">
                    <div class="card-header marketing">
                        <div class="card-icon">
                            <i class="fas fa-bullhorn"></i>
                        </div>
                        <div class="card-badge">ROI Garanti</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Marketing Digital & Growth</h3>
                        <p class="card-description">Devenez expert en marketing digital : SEO, SEA, Social Media, Analytics et stratégies de croissance.</p>
                        <ul class="card-features">
                            <li>3 mois de formation</li>
                            <li>Campagnes réelles</li>
                            <li>Certifications Google & Facebook</li>
                            <li>Outils pros inclus</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">1 990€</span>
                                <!-- <span class="price-period">ou 2x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>

                <div class="formation-card fade-in" data-category="tech">
                    <div class="card-header dev">
                        <div class="card-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="card-badge">Tendance</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Développement Mobile</h3>
                        <p class="card-description">Créez des applications mobiles natives et cross-platform avec React Native, Flutter et les APIs modernes.</p>
                        <ul class="card-features">
                            <li>5 mois de formation</li>
                            <li>Apps publiées sur stores</li>
                            <li>iOS & Android</li>
                            <li>Monétisation incluse</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">3 190€</span>
                                <!-- <span class="price-period">ou 3x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>

                <div class="formation-card fade-in" data-category="business">
                    <div class="card-header marketing">
                        <div class="card-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <div class="card-badge">Exclusif</div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Entrepreneuriat & Startup</h3>
                        <p class="card-description">Lancez votre startup avec succès : business model, levée de fonds, growth hacking et management d'équipe.</p>
                        <ul class="card-features">
                            <li>6 mois d'accompagnement</li>
                            <li>Pitch deck professionnel</li>
                            <li>Réseau d'investisseurs</li>
                            <li>Incubation possible</li>
                        </ul>
                        <div class="card-footer">
                            <div class="card-price">
                                <span class="price-amount">4 990€</span>
                                <!-- <span class="price-period">ou 5x sans frais</span> -->
                            </div>
                            <button class="card-button">
                                <i class="fas fa-arrow-right"></i>
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <!-- Testimonials Section -->
    <section id="temoignages" class="testimonials">
        <div class="container">
            <div class="section-header fade-in">
                <h2 class="section-title">Ce Que Disent Nos Étudiants</h2>
                <p class="section-subtitle">Découvrez les témoignages de ceux qui ont transformé leur carrière avec FormaX.</p>
            </div>
            
            <div class="testimonials-container">
                <div class="testimonial fade-in">
                    <div class="testimonial-avatar">M</div>
                    <div class="testimonial-rating">
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="testimonial-text">"FormaX a complètement changé ma vie professionnelle. En 6 mois, je suis passée de comptable à développeuse full-stack dans une startup parisienne. L'accompagnement est exceptionnel !"</p>
                    <div class="testimonial-author">Marie Dubois</div>
                    <div class="testimonial-role">Développeuse Full-Stack chez TechStart</div>
                </div>
                
                <div class="testimonial fade-in">
                    <div class="testimonial-avatar">T</div>
                    <div class="testimonial-rating">
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="testimonial-text">"La formation Data Science m'a ouvert les portes de l'IA. Aujourd'hui, je dirige une équipe de data scientists et je gagne 3 fois plus qu'avant. Merci FormaX !"</p>
                    <div class="testimonial-author">Thomas Chen</div>
                    <div class="testimonial-role">Lead Data Scientist chez DataCorp</div>
                </div>
                
                <div class="testimonial fade-in">
                    <div class="testimonial-avatar">S</div>
                    <div class="testimonial-rating">
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                    </div>
                    <p class="testimonial-text">"En tant que designer, je cherchais à me spécialiser en UX. FormaX m'a donné toutes les clés pour exceller dans ce domaine. Je travaille maintenant pour des clients internationaux."</p>
                    <div class="testimonial-author">Sarah Johnson</div>
                    <div class="testimonial-role">UX Designer Freelance</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq">
        <div class="container">
            <div class="section-header fade-in">
                <h2 class="section-title">Questions Fréquentes</h2>
                <p class="section-subtitle">Trouvez rapidement les réponses à vos questions les plus courantes.</p>
            </div>
            
            <div class="faq-container">
                <div class="faq-item fade-in">
                    <div class="faq-question">
                        <span>Quel est le niveau prérequis pour suivre les formations ?</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Nos formations sont conçues pour être accessibles à tous les niveaux. Pour les formations techniques, des bases en informatique sont recommandées mais pas obligatoires. Nous proposons des modules de mise à niveau pour vous accompagner dès le début.</p>
                    </div>
                </div>
                
                <div class="faq-item fade-in">
                    <div class="faq-question">
                        <span>Les formations sont-elles reconnues par l'État ?</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Oui, FormaX est un organisme de formation certifié Qualiopi. Nos formations sont éligibles au CPF et peuvent être prises en charge par votre employeur ou Pôle Emploi. Vous recevrez une certification reconnue par l'industrie.</p>
                    </div>
                </div>
                
                <div class="faq-item fade-in">
                    <div class="faq-question">
                        <span>Puis-je suivre la formation tout en travaillant ?</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Absolument ! Nos formations sont conçues pour s'adapter à votre rythme. Vous pouvez étudier le soir, le week-end ou pendant vos pauses. Comptez environ 10-15h par semaine pour un apprentissage optimal.</p>
                    </div>
                </div>
                
                <div class="faq-item fade-in">
                    <div class="faq-question">
                        <span>Y a-t-il un accompagnement personnalisé ?</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Chaque étudiant est accompagné par un mentor expert dans son domaine. Vous bénéficiez de sessions individuelles hebdomadaires, d'un suivi personnalisé de vos projets et d'un accès direct à notre communauté d'entraide.</p>
                    </div>
                </div>
                
                <div class="faq-item fade-in">
                    <div class="faq-question">
                        <span>Que se passe-t-il après la formation ?</span>
                        <i class="fas fa-chevron-down faq-icon"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Nous vous accompagnons dans votre recherche d'emploi avec notre service carrière : optimisation CV/LinkedIn, préparation aux entretiens, mise en relation avec nos entreprises partenaires. 85% de nos étudiants trouvent un emploi dans les 3 mois.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <!-- CTA Section -->
    <section id="contact" class="cta">
        <div class="container">
            <div class="cta-content fade-in">
                <h2>Prêt à Transformer Votre Carrière ?</h2>
                <p>Rejoignez des milliers d'étudiants qui ont déjà fait le choix de l'excellence avec FormaX. Votre nouvelle carrière vous attend !</p>
                
                <div class="cta-buttons">
                    <a href="#" class="btn-white">
                        <i class="fas fa-phone"></i>
                        Être rappelé gratuitement
                    </a>
                    <a href="#formations" class="btn-secondary">
                        <i class="fas fa-graduation-cap"></i>
                        Choisir ma formation
                    </a>
                </div>
            </div>
        </div>
    </section>
 </main>
 <style>
    :root {
            --primary-gradient: linear-gradient(135deg, #ff003c 0%, #e40220 100%);
            --primary-gradient2: linear-gradient(155deg, #ff3300 4%,#000000 100%);
            --secondary-gradient: linear-gradient(135deg, #050405 0%,#050405 100%);
            --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --success-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            --warning-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            --text-dark: #2c3e50;
            --text-light: #718096;
            --bg-light: #f8fafc;
            --shadow-light: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-heavy: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        main{
        margin-top: 83px;
        min-height:200px;
        
        }
        /* hero_ Section */
        .hero_ {
            min-height: 70vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 15px;
            position: relative;
            background: var(--primary-gradient);
            overflow: hidden;
        }

        .hero_::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            animation: float 20s ease-in-out infinite;
        }

        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }

        .floating-element {
            position: absolute;
            opacity: 0.1;
            animation: floatUpDown 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
        .floating-element:nth-child(3) { top: 40%; left: 60%; animation-delay: 4s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
        }

        @keyframes floatUpDown {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
        }

        .hero_-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            padding-top: 0; /* Modifié car pas de navbar */
            animation: fadeInUp 1s ease-out;
            margin: 0 auto;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero_ h1 {
            font-size: clamp(1.5rem, 4vw, 2.3rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            color: white;
            line-height: 1.1;
        }

        .hero_-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.4rem);
            color: rgba(255,255,255,0.9);
            margin-bottom: 2.5rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 300;
        }

        .hero_-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 3rem;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 18px 35px;
            background: var(--secondary-gradient);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-medium);
            position: relative;
            overflow: hidden;
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 18px 35px;
            background: rgba(255,255,255,0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.3);
        }

        .btn-primary:hover, .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-heavy);
        }

        .hero_-stats {
            display: flex;
            justify-content: center;
            gap: 50px;
            flex-wrap: wrap;
            margin-top: 40px;
        }

        .hero_-stat {
            text-align: center;
            color: white;
        }

        .hero_-stat-number {
            font-size: 2.0rem;
            font-weight: 800;
            display: block;
        }

        .hero_-stat-label {
            font-size: 1rem;
            opacity: 0.8;
        }
       .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 18px 35px;
            background: var(--secondary-gradient);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-medium);
            position: relative;
            overflow: hidden;
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 18px 35px;
            background: rgba(255,255,255,0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255,255,255,0.3);
        }

        .btn-primary:hover, .btn-secondary:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-heavy);
        }

         /* Features Section */
        .features {
            padding: 100px 0;
            background: var(--bg-light);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 50px;
        }

        .feature-card {
            background: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            box-shadow: var(--shadow-light);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--primary-gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-medium);
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: var(--primary-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
        }

        .feature-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--text-dark);
        }

        .feature-description {
            color: var(--text-light);
            line-height: 1.6;
        }

          /* Formations Section */
        .formations {
            padding: 60px 0;
            background: white;
        }

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 40px;
        }

        .section-title {
            font-size: clamp(1.5rem, 4vw, 1.2rem);
            font-weight: 800;
            margin-bottom: 20px;
            background: var(--text-dark);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: var(--text-light);
            line-height: 1.6;
        }

        .formations-filter {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 50px;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 12px 25px;
            background: white;
            border: 2px solid #e2e8f0;
            border-radius: 25px;
            color: var(--text-dark);
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .filter-btn.active {
            background: var(--primary-gradient);
            color: white;
            border-color: transparent;
        }

        .formations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }

        .formation-card {
            background: white;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: var(--shadow-light);
            transition: all 0.4s ease;
            position: relative;
            cursor: pointer;
            border: 1px solid rgba(0,0,0,0.05);
        }

        .formation-card:hover {
            transform: translateY(-15px);
            box-shadow: var(--shadow-heavy);
        }

        .card-header {
            height: 220px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .card-header.dev { background: var(--primary-gradient); }
        .card-header.data { background: var(--accent-gradient); }
        .card-header.design { background: var(--secondary-gradient); }
        .card-header.marketing { background: var(--warning-gradient); }

        .card-icon {
            font-size: 4rem;
            color: white;
            z-index: 2;
            position: relative;
        }

        .card-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            backdrop-filter: blur(10px);
        }

        .card-content {
            padding: 35px;
        }

        .card-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--text-dark);
        }

        .card-description {
            color: var(--text-light);
            margin-bottom: 20px;
            line-height: 1.6;
        }

        .card-features {
            list-style: none;
            margin-bottom: 30px;
        }

        .card-features li {
            padding: 4px 0;
            color: var(--text-dark);
            position: relative;
            padding-left: 25px;
            font-weight: 500;
        }

        .card-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
            font-size: 1.1rem;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 25px;
        }

        .card-price {
            display: flex;
            align-items: baseline;
            gap: 5px;
        }

        .price-amount {
            font-size: 2rem;
            font-weight: 800;
            color: var(--text-dark);
        }

        .price-period {
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .card-button {
            padding: 12px 25px;
            background: var(--primary-gradient);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .card-button:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-medium);
        }

  /* Testimonials Section */
        .testimonials {
            padding: 60px 0;
            background: var(--bg-light);
        }

        .testimonials-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial {
            background: white;
            padding: 40px;
            text-align: center;
            border-radius: 20px;
            box-shadow: var(--shadow-light);
        }

        .testimonial-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: var(--primary-gradient);
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            font-weight: bold;
        }

        .testimonial-text {
            font-size: 1.1rem;
            font-style: italic;
            margin-bottom: 30px;
            color: var(--text-dark);
            line-height: 1.6;
        }

        .testimonial-author {
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--text-dark);
            margin-bottom: 5px;
        }

        .testimonial-role {
            color: var(--text-light);
        }

        .testimonial-rating {
            margin-bottom: 20px;
        }

        .star {
            color: #fbbf24;
            font-size: 1.2rem;
        }

        /* FAQ Section */
        .faq {
            padding: 100px 0;
            background: white;
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            margin-bottom: 20px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow-light);
        }

        .faq-question {
            background: white;
            padding: 25px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: var(--text-dark);
            transition: all 0.3s ease;
        }

        .faq-question:hover {
            background: var(--bg-light);
        }

        .faq-answer {
            padding: 0 25px;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
            background: var(--bg-light);
        }

        .faq-item.active .faq-answer {
            padding: 25px;
            max-height: 200px;
        }

        .faq-icon {
            transition: transform 0.3s ease;
        }

        .faq-item.active .faq-icon {
            transform: rotate(180deg);
        }

        /* CTA Section */
        .cta {
            padding: 60px 0;
            background: #6b6b6d;
            text-align: center;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
            animation: float 15s ease-in-out infinite;
        }

        .cta-content {
            position: relative;
            z-index: 2;
            max-width: 600px;
            margin: 0 auto;
        }

        .cta h2 {
            font-size: clamp(2.5rem, 4vw, 2.1rem);
            font-weight: 800;
            margin-bottom: 20px;
        }

        .cta p {
            font-size: 1.3rem;
            margin-bottom: 40px;
            opacity: 0.9;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-white {
            background: white;
            color: var(--text-dark);
            padding: 18px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-medium);
        }

        .btn-white:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-heavy);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
             main{
            margin-top: 70px;
    
            
            }
            .hero_-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .hero_-stats {
                gap: 30px;
            }
            
            .formations-grid {
                grid-template-columns: 1fr;
            }
            
            .testimonial {
                padding: 30px 20px;
            }
            
            .section-title {
                font-size: 1.7rem;
            }

            .features {
                padding: 40px 0;
                background: var(--bg-light);
            }
            .container {
                padding: 10px 0;
            }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .feature-card {
            background: white;
            padding: 20px;
            border-radius: 20px;
            text-align: center;
            box-shadow: var(--shadow-light);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--primary-gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-medium);
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

       

        .feature-title {
            font-size: 1.5rem !important;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--text-dark);
        }

        }

        /* Animations */
        /* .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        } */

        /* Loading Animation */
        /* .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--primary-gradient);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        } */

        /* .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        } */

        /* @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        } */
 
 </style>