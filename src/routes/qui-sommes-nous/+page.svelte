<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  // États réactifs
  let isModalOpen = false;
  let isLoginMode = true;
  let showEmailForm = false;
  
  // Données du formulaire
  let formData = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  };
  
  // Fonctions de gestion de la modale
  export function openLoginModal() {
    isLoginMode = true;
    showEmailForm = false;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  export function openSignupModal() {
    isLoginMode = false;
    showEmailForm = false;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    isModalOpen = false;
    showEmailForm = false;
    document.body.style.overflow = 'auto';
    resetForm();
  }
  
  function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    showEmailForm = false;
    resetForm();
  }
  
  function showEmailFormView() {
    showEmailForm = true;
  }
  
  function hideEmailForm() {
    showEmailForm = false;
    resetForm();
  }
  
  function resetForm() {
    formData = {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    };
  }
  
  // Gestion de la soumission du formulaire
  function handleFormSubmit(event) {
    event.preventDefault();
    
    if (!isLoginMode) {
      // Validation pour l'inscription
      if (formData.password !== formData.confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      
      if (formData.password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères !');
        return;
      }
      
      // Dispatch de l'événement d'inscription
      dispatch('signup', {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName
      });
      
      alert(`Inscription réussie pour ${formData.fullName} (${formData.email}) !`);
    } else {
      // Dispatch de l'événement de connexion
      dispatch('login', {
        email: formData.email,
        password: formData.password
      });
      
      alert(`Connexion réussie pour ${formData.email} !`);
    }
    
    closeModal();
  }
  
  // Fonctions de connexion sociale
  function loginWithGoogle() {
    const action = isLoginMode ? 'login' : 'signup';
    dispatch('socialAuth', { provider: 'google', action });
    alert(`${isLoginMode ? 'Connexion' : 'Inscription'} avec Google`);
  }
  
  function loginWithFacebook() {
    const action = isLoginMode ? 'login' : 'signup';
    dispatch('socialAuth', { provider: 'facebook', action });
    alert(`${isLoginMode ? 'Connexion' : 'Inscription'} avec Facebook`);
  }
  
  // Gestion des touches clavier
  function handleKeydown(event) {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  }
  
  // Gestion du clic sur l'overlay
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="main">
  <div class="main-content">
    <h1>Mon Site Web</h1>
    <button class="login-btn" on:click={openLoginModal}>Se Connecter</button>
    <button class="login-btn signup-btn" on:click={openSignupModal}>S'inscrire</button>
  </div>
</main>

<!-- Modale de connexion -->
{#if isModalOpen}
  <div class="modal-overlay" on:click={handleOverlayClick}>
    <div class="modal-content">
      <button class="close-btn" on:click={closeModal}>&times;</button>
      
      <div class="login-container">
        <h2>{isLoginMode ? 'Connexion' : 'Inscription'}</h2>
        
        {#if !showEmailForm}
          <!-- Vue principale avec boutons sociaux -->
          <div class="social-login">
            <div class="auth-toggle">
              <p>{isLoginMode ? 'Pas encore membre ?' : 'Déjà membre ?'}</p>
              <button class="toggle-btn" on:click={toggleAuthMode}>
                {isLoginMode ? "S'inscrire" : 'Se connecter'}
              </button>
            </div>
            
            <button class="social-btn google-btn" on:click={loginWithGoogle}>
              <span class="btn-icon">📧</span>
              {isLoginMode ? 'Se connecter avec Google' : "S'inscrire avec Google"}
            </button>
            
            <button class="social-btn facebook-btn" on:click={loginWithFacebook}>
              <span class="btn-icon">📘</span>
              {isLoginMode ? 'Se connecter avec Facebook' : "S'inscrire avec Facebook"}
            </button>
            
            <div class="divider">
              <span>ou</span>
            </div>
            
            <button class="social-btn email-btn" on:click={showEmailFormView}>
              <span class="btn-icon">✉️</span>
              {isLoginMode ? 'Se connecter par email' : "S'inscrire par email"}
            </button>
          </div>
        {:else}
          <!-- Formulaire d'email -->
          <div class="email-form">
            <button class="back-btn" on:click={hideEmailForm}>Retour</button>
            
            <form on:submit={handleFormSubmit}>
              <div class="form-group">
                <label for="email">Adresse email</label>
                <input 
                  type="email" 
                  id="email" 
                  bind:value={formData.email}
                  placeholder="votre@email.com" 
                  required 
                />
              </div>
              
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <input 
                  type="password" 
                  id="password" 
                  bind:value={formData.password}
                  placeholder="••••••••" 
                  required 
                />
              </div>
              
              {#if !isLoginMode}
                <div class="form-group">
                  <label for="confirmPassword">Confirmer le mot de passe</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    bind:value={formData.confirmPassword}
                    placeholder="••••••••" 
                    required 
                  />
                </div>
                
                <div class="form-group">
                  <label for="fullName">Nom complet</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    bind:value={formData.fullName}
                    placeholder="Votre nom complet" 
                    required 
                  />
                </div>
              {/if}
              
              <button type="submit" class="submit-btn">
                {isLoginMode ? 'Se connecter' : "S'inscrire"}
              </button>
            </form>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: white;
    min-height: 100vh;
  }

  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    text-align: center;
    color: #333;
  }

  .main-content h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .login-btn {
    background: #4285f4;
    border: 2px solid #4285f4;
    color: white;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 10px;
  }

  .login-btn:hover {
    background: #357ae8;
    border-color: #357ae8;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(66, 133, 244, 0.3);
  }

  .signup-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #4285f4;
    color: #4285f4;
  }

  .signup-btn:hover {
    background: #4285f4;
    color: white;
  }

  /* Modale fullscreen */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .modal-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: white;
  }

  .close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    background: none;
    border: none;
    color: #333;
    font-size: 2rem;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    background: #f8f9fa;
  }

  .close-btn:hover {
    background: #e9ecef;
    transform: rotate(90deg);
  }

  .login-container {
    background: white;
    padding: 60px;
    border-radius: 20px;
    border: 1px solid #e9ecef;
    text-align: center;
    max-width: 500px;
    width: 90%;
    animation: slideIn 0.5s ease;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .login-container h2 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: 300;
  }

  .auth-toggle {
    text-align: center;
    margin-bottom: 30px;
  }

  .auth-toggle p {
    color: #6c757d;
    margin-bottom: 15px;
  }

  .toggle-btn {
    background: none;
    border: none;
    color: #4285f4;
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .toggle-btn:hover {
    color: #357ae8;
  }

  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px 20px;
    margin: 15px 0;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .social-btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .social-btn:hover:before {
    left: 100%;
  }

  .google-btn {
    background: #4285f4;
    color: white;
  }

  .google-btn:hover {
    background: #357ae8;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(66, 133, 244, 0.3);
  }

  .facebook-btn {
    background: #1877f2;
    color: white;
  }

  .facebook-btn:hover {
    background: #166fe5;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
  }

  .email-btn {
    background: #34495e;
    color: white;
  }

  .email-btn:hover {
    background: #2c3e50;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(52, 73, 94, 0.3);
  }

  .btn-icon {
    margin-right: 12px;
    font-size: 1.3rem;
  }

  .divider {
    margin: 30px 0;
    position: relative;
    color: #6c757d;
  }

  .divider:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #dee2e6;
  }

  .divider span {
    background: white;
    padding: 0 20px;
    position: relative;
  }

  /* Formulaire d'email */
  .email-form {
    animation: fadeIn 0.3s ease;
  }

  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  .form-group label {
    display: block;
    color: #495057;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .form-group input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    background: #f8f9fa;
    color: #495057;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .form-group input::placeholder {
    color: #6c757d;
  }

  .form-group input:focus {
    outline: none;
    border-color: #4285f4;
    background: white;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.2);
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #4285f4, #357ae8);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
  }

  .submit-btn:hover {
    background: linear-gradient(135deg, #357ae8, #2c5aa0);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(66, 133, 244, 0.3);
  }

  .back-btn {
    background: none;
    border: none;
    color: #6c757d;
    font-size: 0.9rem;
    cursor: pointer;
    margin-bottom: 20px;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
  }

  .back-btn:hover {
    color: #495057;
  }

  .back-btn::before {
    content: '←';
    margin-right: 8px;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .login-container {
      padding: 40px 30px;
      margin: 20px;
    }
    
    .login-container h2 {
      font-size: 2rem;
    }
    
    .close-btn {
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
    }

    .main-content h1 {
      font-size: 2rem;
    }

    .login-btn {
      display: block;
      margin: 10px auto;
    }
  }
</style>