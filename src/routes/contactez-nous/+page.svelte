 <div class="container">
        <div class="header fade-in">
            <h1>Demande de Service Informatique</h1>
            <p>Décrivez votre besoin et nous vous proposerons la solution adaptée dans les plus brefs délais</p>
        </div>

        <div class="form-container fade-in">
            <div class="form-info">
                <h3>📋 Informations importantes</h3>
                <p>• Temps de réponse moyen : <strong>2-4</strong> heures ouvrables<br>
                • Support urgent disponible <strong>24/7</strong><br>
                • Tous les champs marqués d'un <strong>* </strong>sont obligatoires</p>
            </div>

            <form method="post" id="serviceForm" autocomplete="off">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nom">Nom complet</label>
                        <input autocomplete="off" type="text" id="nom" name="nom" required placeholder="Votre nom et prénom">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input autocomplete="off"  type="email" id="email" name="email" required placeholder="votre.email@exemple.com">
                    </div>

                    <div class="form-group">
                        <label for="telephone">Téléphone</label>
                        <input autocomplete="off"  type="tel" id="telephone" name="telephone" required placeholder="+33 6 XX XX XX XX">
                    </div>

                    <div class="form-group">
                        <label for="entreprise" class="optional">Entreprise</label>
                        <input autocomplete="off"  type="text" id="entreprise" name="entreprise" placeholder="Nom de votre entreprise">
                    </div>
                </div>
<hr class="hr">
                <div class="form-group full-width">
                    <label>Type de service demandé</label>
                    <div class="service-type-grid">
                        <div class="service-option">
                            <input type="checkbox" id="dev-web" name="services[]" value="Développement Web">
                            <label for="dev-web" class="service-label">🌐 Développement Web</label>
                        </div>
                        <div class="service-option">
                            <input type="checkbox" id="dev-mobile" name="services[]" value="Application Mobile">
                            <label for="dev-mobile" class="service-label">📱 Apps Mobile</label>
                        </div>
                        <div class="service-option">
                            <input type="checkbox" id="ecommerce" name="services[]" value="E-commerce">
                            <label for="ecommerce" class="service-label">🛒 E-commerce</label>
                        </div>
                        <div class="service-option">
                            <input type="checkbox" id="logiciel" name="services[]" value="Logiciel Desktop">
                            <label for="logiciel" class="service-label">💻 Logiciel Desktop</label>
                        </div>
                        <div class="service-option">
                            <input type="checkbox" id="maintenance" name="services[]" value="Maintenance">
                            <label for="maintenance" class="service-label">🔧 Maintenance</label>
                        </div>
                        <div class="service-option">
                            <input type="checkbox" id="consulting" name="services[]" value="Consulting">
                            <label for="consulting" class="service-label">💡 Consulting IT</label>
                        </div>
                    </div>
                </div>
<hr class="hr">
                <div class="form-group full-width">
                    <label>Priorité de la demande</label>
                    <div class="priority-group">
                        <div class="priority-option">
                            <input type="radio" id="urgent" name="priorite" value="Urgent" required>
                            <label for="urgent" class="priority-label">🔴 Urgent</label>
                        </div>
                        <div class="priority-option">
                            <input type="radio" id="haute" name="priorite" value="Haute">
                            <label for="haute" class="priority-label">🟡 Haute</label>
                        </div>
                        <div class="priority-option">
                            <input type="radio" id="normale" name="priorite" value="Normale">
                            <label for="normale" class="priority-label">🟢 Normale</label>
                        </div>
                        <div class="priority-option">
                            <input type="radio" id="basse" name="priorite" value="Basse">
                            <label for="basse" class="priority-label">🔵 Basse</label>
                        </div>
                    </div>
                </div>
<hr class="hr">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="budget" class="optional">Budget estimé</label>
                        <select id="budget" name="budget">
                            <option value="">Sélectionnez votre budget</option>
                            <option value="< 1000€">Moins de 1 000€</option>
                            <option value="1000€ - 5000€">1 000€ - 5 000€</option>
                            <option value="5000€ - 15000€">5 000€ - 15 000€</option>
                            <option value="15000€ - 50000€">15 000€ - 50 000€</option>
                            <option value="> 50000€">Plus de 50 000€</option>
                            <option value="Proposez moi">Proposez moi</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="delai" class="optional">Délai souhaité</label>
                        <select id="delai" name="delai">
                            <option value="">Sélectionnez le délai</option>
                            <option value="ASAP">Dès que possible</option>
                            <option value="1 semaine">Dans la semaine</option>
                            <option value="1 mois">Dans le mois</option>
                            <option value="3 mois">Dans les 3 mois</option>
                            <option value="6 mois">Dans les 6 mois</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label for="description">Description détaillée du projet</label>
                    <textarea id="description" name="description" required placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, contraintes techniques, etc."></textarea>
                </div>

                <div class="form-group full-width">
                    <label for="fichiers" class="optional">Documents joints</label>
                    <div class="file-upload">
                        <input type="file" id="fichiers" name="fichiers[]" multiple accept=".pdf,.doc,.docx,.jpg,.png,.zip">
                        <label for="fichiers" class="file-upload-label">
                            📎 Cliquez pour joindre des fichiers<br>
                            <small>PDF, DOC, Images, ZIP (max 10MB par fichier)</small>
                        </label>
                    </div>
                </div>

                <div class="submit-container">
                    <button type="submit" class="submit-btn">Envoyer la demande</button>
                    <button type="reset" class="reset-btn">Réinitialiser</button>
                </div>

                <div class="required-note">
                    * Champs obligatoires - Nous nous engageons à répondre dans les 24h
                </div>
            </form>

            <div id="successMessage" class="success-message">
                ✅ Votre demande a été envoyée avec succès ! Nous vous contactons très bientôt.
            </div>
        </div>
    </div>
     <style>
     
         .container {
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 100px;
            padding: 40px 20px;
            background: #fff;
        }

        .header {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }

       
        .header h1 {
            font-size: 1.7rem;
            font-weight: 800;
            margin-bottom: 15px;
           
            background-clip: text;
            color: #000 !important;
        }

        .header p {
            font-size: 1.1rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
        }

        .form-container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 25px;
            padding: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
        }

       .hr{
        margin: 20px -30px;
        border: 0;
        border-bottom: 1px solid;
        border-color: #e3e3e3;
       }
        .form-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }

        .form-group {
            position: relative;
        }

        .form-group.full-width {
            grid-column: 1 / -1;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
            font-size: 1rem;
            position: relative;
        }

        label::after {
            content: '*';
            color: #ef4444;
            margin-left: 4px;
            font-weight: bold;
        }

        label.optional::after {
            display: none;
        }

        input, select, textarea {
            width: 100%;
            padding: 15px 18px;
            border-radius: 12px;
            border: none;
            background: rgba(248, 250, 252, 0.8);
            color: #374151;
            font-size: 1rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: #dc2626;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.2);
            transform: translateY(-2px);
        }

        input::placeholder, textarea::placeholder {
            color: #9ca3af;
        }

        textarea {
            resize: vertical;
            min-height: 120px;
        }

        .priority-group {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }

        .priority-option {
            position: relative;
        }

        .priority-option input[type="radio"] {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }

        .priority-label {
            display: block;
            padding: 12px 20px;
            border-radius: 10px;
            background: rgba(248, 250, 252, 0.8);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            color: #64748b;
        }

        .priority-option input[type="radio"]:checked + .priority-label {
            border-color: #dc2626;
            border: 1px solid;
            color: rgb(255, 0, 0);
            box-shadow: 0 5px 10px rgba(220, 38, 38, 0.1);
        }

        .priority-label:hover {
            border-color: rgb(220, 38, 38);
            background: rgba(241, 245, 249, 0.9);
        }

        .service-type-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 10px;
        }

        .service-option {
            position: relative;
        }

        .service-option input[type="checkbox"] {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }

        .service-label {
            display: block;
            padding: 15px;
            border-radius: 12px;
            background: rgba(248, 250, 252, 0.8);
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            font-weight: 500;
            color: #64748b;
        }

        .service-option input[type="checkbox"]:checked + .service-label {
            background: linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(185, 28, 28, 0.9) 100%);
            border-color: #dc2626;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(220, 38, 38, 0.25);
        }

        .service-label:hover {
            border-color: rgba(220, 38, 38, 0.4);
            background: rgba(241, 245, 249, 0.9);
        }

        .file-upload {
            position: relative;
            display: inline-block;
            width: 100%;
        }

        .file-upload input[type="file"] {
            position: absolute;
            opacity: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }

        .file-upload-label {
            display: block;
            padding: 20px;
            border-radius: 12px;
            background: rgba(248, 250, 252, 0.6);
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #64748b;
        }

        .file-upload:hover .file-upload-label {
            border-color: #dc2626;
            background: rgba(241, 245, 249, 0.8);
            transform: translateY(-2px);
        }

        .submit-container {
            text-align: center;
            margin-top: 40px;
        }

        .submit-btn {
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            color: white;
            border: none;
            padding: 18px 50px;
            font-size: 0.9rem;
            font-weight: 700;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .submit-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            transition: left 0.4s ease;
            z-index: -1;
        }

        .submit-btn:hover::before {
            left: 0;
        }

        .submit-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(220, 38, 38, 0.4);
        }

        .reset-btn {
            background: transparent;
            color: #64748b;
            padding: 16px 40px;
            padding: 16px 40px;
            padding: 16px 40px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .reset-btn:hover {
            background: rgba(220, 38, 38, 0.1);
            border-color: #dc2626;
            color: #b91c1c;
            transform: translateY(-3px);
        }

        .form-info {
            background: rgba(220, 38, 38, 0.08);
            border-radius: 12px;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            color: #374151;
        }

        .form-info h3 {
            color: #dc2626;
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .required-note {
            font-size: 0.9rem;
            color: #6b7280;
            margin-top: 20px;
            text-align: center;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2.2rem;
            }
            
            .form-container {
                padding: 25px;
            }
            
            .form-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .priority-group {
                grid-template-columns: 1fr;
            }
            
            .service-type-grid {
                grid-template-columns: 1fr;
            }
            
            .reset-btn {
                margin-left: 0;
                margin-top: 15px;
            }
        }

        .fade-in {
            animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .success-message {
            display: none;
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%);
            color: #166534;
            padding: 20px;
            border-radius: 12px;
            margin-top: 20px;
            text-align: center;
            font-weight: 600;
        }
    </style>