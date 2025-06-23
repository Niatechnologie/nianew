<script>
  import { onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  
  // Variables du formulaire
  let nom = '';
  let email = '';
  let telephone = '';
  let sujet = '';
  let message = '';
  let showSuccess = false;
  let showError = false;
  let isSubmitting = false;
  
  // Variable pour la carte
  let mapContainer;
  let map;
  
  // Fonction d'initialisation de la carte
  function initMap() {
    if (typeof window !== 'undefined' && window.L && mapContainer) {
      const L = window.L;
      
      // Initialisation de la carte
      map = L.map(mapContainer).setView([7.6898, -5.0335], 13);
      
      // Ajout des tuiles OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      
      // Création d'une icône personnalisée
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="marker-pin">
            <i class="bi bi-geo-alt-fill"></i>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });
      
      // Ajout du marqueur
      L.marker([7.6898, -5.0335], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div class="popup-content">
            <h3><i class="bi bi-building"></i> Notre Bureau</h3>
            <p><i class="bi bi-geo-alt"></i> Bouaké, Vallée du Bandama<br>Côte d'Ivoire</p>
          </div>
        `)
        .openPopup();
      
      // Ajout d'un cercle pour la zone de service
      L.circle([7.6898, -5.0335], {
        color: '#667eea',
        fillColor: '#667eea',
        fillOpacity: 0.1,
        radius: 2000
      }).addTo(map);
      
      // Redimensionnement de la carte après un court délai
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    } else {
      // Si Leaflet n'est pas encore chargé, réessayer après un délai
      setTimeout(initMap, 500);
    }
  }

  // Initialisation de Leaflet au montage du composant
  onMount(() => {
    // Attendre que le DOM soit prêt et que Leaflet soit chargé
    const checkAndInit = () => {
      if (window.L && mapContainer) {
        initMap();
      } else {
        setTimeout(checkAndInit, 100);
      }
    };
    
    // Démarrer la vérification après un petit délai
    setTimeout(checkAndInit, 200);
    
    // Fonction de nettoyage
    return () => {
      if (map) {
        map.remove();
      }
    };
  });
  
  // Fonction de soumission du formulaire avec AJAX
  async function handleSubmit() {
    // Validation basique côté client
    if (!nom.trim() || !email.trim() || !sujet || !message.trim()) {
      showError = true;
      setTimeout(() => {
        showError = false;
      }, 5000);
      return;
    }

    isSubmitting = true;
    showError = false;
    showSuccess = false;

    // Préparer les données à envoyer
    const formData = {
      nom: nom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      sujet: sujet,
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    try {
      // Envoi AJAX avec fetch
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        
        // Succès
        showSuccess = true;
        
        // Réinitialisation du formulaire
        nom = '';
        email = '';
        telephone = '';
        sujet = '';
        message = '';
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
          showSuccess = false;
        }, 5000);
        
      } else {
        // Erreur serveur
        throw new Error(`Erreur serveur: ${response.status}`);
      }
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      showError = true;
      
      // Masquer le message d'erreur après 5 secondes
      setTimeout(() => {
        showError = false;
      }, 5000);
    } finally {
      isSubmitting = false;
    }
  }
  
  // Options pour le select
  const sujets = [
    { value: 'information', label: 'Demande d\'information', icon: 'bi-info-circle' },
    { value: 'support', label: 'Support technique', icon: 'bi-tools' },
    { value: 'commercial', label: 'Question commerciale', icon: 'bi-briefcase' },
    { value: 'partenariat', label: 'Partenariat', icon: 'bi-handshake' },
    { value: 'autre', label: 'Autre', icon: 'bi-three-dots' }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.1/font/bootstrap-icons.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>
</svelte:head>
<main>
<div class="floating-elements">
  <div class="floating-circle circle-1"></div>
  <div class="floating-circle circle-2"></div>
  <div class="floating-circle circle-3"></div>
</div>

<div class="container">
  <div class="header">
    <h1>Contactez-nous</h1>
    <p>Nous sommes là pour vous aider. N'hésitez pas à nous faire parvenir vos questions.</p>
  </div>

  <div class="content2">
    <div class="form-section">
      <div class="contact-info">
        <h3><i class="bi bi-info-circle"></i> Informations de contact</h3>
        <div class="contact-item">
          <i class="bi bi-geo-alt-fill"></i>
          <span>Abidjan, Cocody 2 Plateaux,commissariat du 12e Arr., Côte d'Ivoire</span>
        </div>
        <div class="contact-item">
          <i class="bi bi-telephone-fill"></i>
          <span>05 54 51 32 99 | +225 07 59 73 84 27</span>
        </div>
        <div class="contact-item">
          <i class="bi bi-envelope-fill"></i>
          <span>contact@niatechnologie.com</span>
        </div>
        <div class="contact-item">
          <i class="bi bi-clock-fill"></i>
          <span>Lun - Ven: 8h00 - 17h30</span>
        </div>
      </div>

      {#if showSuccess}
        <div class="success-message" transition:slide>
          <i class="bi bi-check-circle-fill"></i>
          Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      {/if}

      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="nom">
            <i class="bi bi-person-fill"></i> Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            bind:value={nom}
            required
            class:filled={nom}
          />
        </div>

        <div class="form-group">
          <label for="email">
            <i class="bi bi-envelope-at-fill"></i> Adresse e-mail *
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            class:filled={email}
          />
        </div>

        <div class="form-group">
          <label for="telephone">
            <i class="bi bi-phone-fill"></i> Numéro de téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            bind:value={telephone}
            class:filled={telephone}
          />
        </div>

        <div class="form-group">
          <label for="sujet">
            <i class="bi bi-tag-fill"></i> Sujet *
          </label>
          <select id="sujet" bind:value={sujet} required class:filled={sujet}>
            <option value="">Sélectionnez un sujet</option>
            {#each sujets as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div>

        <div class="form-group">
          <label for="message">
            <i class="bi bi-chat-dots-fill"></i> Message *
          </label>
          <textarea
            id="message"
            bind:value={message}
            placeholder="Décrivez votre demande en détail..."
            required
            class:filled={message}
          ></textarea>
        </div>

        <button type="submit" class="btn-submit">
          <i class="bi bi-send-fill"></i> Envoyer le message
        </button>
      </form>
    </div>

    <div class="map-section">
      <div bind:this={mapContainer} class="map"></div>
    </div>
  </div>
</div>
</main>
<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    
  }
  main{
    margin-top: 115px;
    margin-bottom: 40px;
    
}

  .container {
    max-width: 1200px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
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

  .content2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 600px;
  }

  .form-section {
    padding: 40px;
    background: white;
  }

  .map-section {
    position: relative;
    background: #f8f9fa;
  }

  .map {
    width: 100%;
    height: 100%;
    min-height: 600px;
    position: relative;
    z-index: 1;
  }

  .form-group {
    margin-bottom: 25px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
    font-size: 0.95rem;
  }

  .form-group label i {
    margin-right: 8px;
    color: #ff0000;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 15px;
    border: 2px solid #e1e5e9;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #fafbfc;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus,
  .form-group input.filled,
  .form-group textarea.filled,
  .form-group select.filled {
    outline: none;
    border-color: #f00;
    background: white;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
    transform: translateY(-2px);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-submit {
    width: 100%;
    padding: 18px;
    background:#f00;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-submit:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }

  .btn-submit:active {
    transform: translateY(-1px);
  }

  .btn-submit i {
    margin-right: 8px;
  }

  .contact-info {
    background: #f00;
    padding: 30px;
    color: white;
    margin-bottom: 30px;
    border-radius: 15px;
  }

  .contact-info h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .contact-item i {
    margin-right: 15px;
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
  }

  .success-message {
    background: #d4edda;
    color: #155724;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid #c3e6cb;
  }

  .success-message i {
    margin-right: 10px;
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

  .floating-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
  }

  .circle-1 {
    width: 80px;
    height: 80px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .circle-2 {
    width: 120px;
    height: 120px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }

  .circle-3 {
    width: 60px;
    height: 60px;
    bottom: 20%;
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

  /* Styles pour le marqueur personnalisé */
  :global(.marker-pin) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 3px solid white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.marker-pin i) {
    color: white;
    font-size: 14px;
    transform: rotate(45deg);
  }

  /* Styles pour la popup */
  :global(.popup-content2) {
    text-align: center;
    padding: 10px;
  }

  :global(.popup-content2 h3) {
    margin: 0 0 10px 0;
    color: #333;
  }

  :global(.popup-content2 p) {
    margin: 0;
    color: #666;
  }

  /* Assurer que Leaflet fonctionne correctement */
  :global(.leaflet-container) {
    height: 100% !important;
    width: 100% !important;
  }

  @media (max-width: 768px) {
    .content2 {
      grid-template-columns: 1fr;
    }
    
    .header h1 {
      font-size: 2rem;
    }
    
    .form-section {
      padding: 20px;
    }
    
    .map {
      min-height: 400px;
    }
  }
</style>