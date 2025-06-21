<!-- 1. Créez un fichier Carousel.svelte -->
<script>
import { onMount } from 'svelte';

let currentSlide = $state(0);
let isAnimating = $state(false);
let autoSlideInterval;

// Données des slides
let slides = $state([
  {
    id: 0,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Web Development",
    title: "Développement Web",
    description: "Création d'applications Web performantes modernes et réactives.",
    tags: ["Svelte", "Next.js", "Vue.js", "Node.js", "TypeScript"],
    ctaText: "Démarrer un projet",
    ctaLink: "/contact"
  },
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
    alt: "Data Analysis",
    title: "Data Science & Analytics",
    description: "Transformez vos données en insights actionnables avec nos solutions d'analyse avancée.",
    tags: ["Pandas", "Power BI", "SQL", "Big Data"],
    ctaText: "Optimiser vos données",
    ctaLink: "#contact"
  },
  // ... autres slides
]);

function goToSlide(index) {
  if (isAnimating) return;
  isAnimating = true;
  currentSlide = index;
  setTimeout(() => { isAnimating = false; }, 700);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

function handleDotClick(index) {
  if (isAnimating || currentSlide === index) return;
  goToSlide(index);
}

function handleKeydown(e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
}

onMount(() => {
  const autoSlideInterval = setInterval(nextSlide, 5000);
  document.addEventListener('keydown', handleKeydown);
  
  return () => {
    clearInterval(autoSlideInterval);
    document.removeEventListener('keydown', handleKeydown);
  };
});
</script>

<!-- Template du carousel -->
<div class="carousel">
  <!-- Logo SVG -->
  <div id="logo-anim">
                      
                    <svg
                    id="symbole"
                    viewBox="0 0 308.1823 302.30002">
                    
                    <g  transform="translate(-377.19412,-34.547064)">
                    <path
                        id="red_path"
                        style="fill:none;stroke:#ff0000;stroke-width:14.4536"
                        transform="matrix(0.71279806,0.70136932,-0.72485537,0.68890107,0,0)"
                        d="m 381.76021,-290.66 h 232.28814 c 25.34984,0 45.75783,20.40799 45.75783,45.75783 v 4.16946 c 0,25.34984 -20.40799,45.75783 -45.75783,45.75783 H 381.76021 c -25.34984,0 -45.75783,-20.40799 -45.75783,-45.75783 v -4.16946 c 0,-25.34984 20.40799,-45.75783 45.75783,-45.75783 z" />
                    <path
                        id="red_path2"
                        style="fill:none;stroke:#ff0000;stroke-width:13.0352"
                        transform="matrix(0.01022545,0.99994772,-0.99979808,-0.02009468,0,0)"
                        d="M 89.901253,-660.51044 H 246.13562 c 28.35125,0 51.17554,21.64294 51.17554,48.52678 0,26.88383 -22.82429,48.52677 -51.17554,48.52677 H 89.901253 c -28.35125,0 -51.175541,-21.64294 -51.175541,-48.52677 0,-26.88384 22.824291,-48.52678 51.175541,-48.52678 z" />
                    <path
                        id="black_path"
                        style="fill:none;stroke:#ffffff;stroke-width:12.5186"
                        d="m 487.26101,255.02688 c 12.29576,24.62483 -13.09197,56.4827 -38.92216,55.95212 -25.83019,-0.53059 -47.19823,-14.88336 -47.12211,-50.65173 l 0.20982,-98.58855 c 59.60055,62.13168 77.28496,76.166 85.23911,92.09586 7.95415,15.92986 0.59534,1.1923 0.59534,1.1923 z"
                         />
                    </g>
                    </svg>

            </div>

  <!-- Slides Container -->
  <div class="slides-container">
    {#each slides as slide, index}
      <div 
        class="slide {index === currentSlide ? 'active' : ''}" 
        data-index={index}
      >
        <img src={slide.image} alt={slide.alt}>
        <div class="overlay"></div>
        <div class="content">
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
          <div class="tech-tags">
            {#each slide.tags as tag}
              <span class="tech-tag">{tag}</span>
            {/each}
          </div>
          <a href={slide.ctaLink} class="cta-button">{slide.ctaText}</a>
        </div>
      </div>
    {/each}
  </div>

  <!-- Navigation Buttons -->
  <button class="nav-button prev" on:click={prevSlide} disabled={isAnimating}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  </button>
  
  <button class="nav-button next" on:click={nextSlide} disabled={isAnimating}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  </button>

  <!-- Dots -->
  <div class="dots">
    {#each slides as _, index}
      <button 
        class="dot {index === currentSlide ? 'active' : ''}"
        on:click={() => handleDotClick(index)}
        disabled={isAnimating}
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>
</div>

<!-- <style>
  /* Vos styles CSS existants ici */
  .carousel {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  /* ... autres styles ... */
</style> -->