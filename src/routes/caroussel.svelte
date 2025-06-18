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
                        viewBox="0 0 241.13843 213.19534">
                        <g>
                            <path
                            style="fill:none;stroke-width:1.54853;stroke:#ffffff"
                            d="m 19.517464,167.67704 c 0,-0.30362 30.166829,-44.68813 83.132766,-122.313372 7.37968,-10.815422 13.74598,-19.659534 14.14736,-19.653584 0.40137,0.006 4.72802,5.764813 9.61478,12.797469 4.88677,7.032657 20.85014,29.922772 35.47415,50.866917 14.62402,20.94415 31.64524,45.3842 37.82495,54.31121 6.1797,8.92702 12.61615,18.05692 14.30325,20.28867 l 3.06742,4.05773 h -8.16055 -8.16057 L 159.94476,108.72674 C 137.4958,76.108806 118.70832,49.421402 118.19479,49.421402 c -0.51354,0 -2.85334,2.94966 -5.19956,6.554801 -2.34622,3.60514 -20.219063,30.29254 -39.717439,59.305337 l -35.451579,52.75054 h -9.154374 c -5.034906,0 -9.154374,-0.15977 -9.154374,-0.35504 z"
                            id="red_path" />
                            <path
                            style="fill:none;stroke-width:1.54853;stroke:#ffffff"
                            d="m 50.746996,165.22288 c 0.0094,-1.61797 10.107403,-17.10386 23.813798,-36.5196 C 87.649477,110.16255 102.3876,89.18945 107.31218,82.096381 l 8.95378,-12.896503 4.04559,4.781031 c 2.22507,2.629566 4.03275,5.623786 4.01707,6.653826 -0.0157,1.03004 -11.45262,17.885243 -25.415424,37.456005 l -25.386919,35.58321 50.304133,0.62427 50.30413,0.62426 4.47042,5.85564 c 2.45871,3.22059 4.4704,6.17025 4.4704,6.5548 0,0.38453 -29.77753,0.69916 -66.17228,0.69916 H 50.730802 Z"
                            id="black_path" />
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