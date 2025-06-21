<script>
 import { onMount } from 'svelte';

 let currentIndex = 0;
 let autoplayInterval;
 let isHovered = false;
 let carouselTrack;

 const originalItems = [
   {
     id: 1,
     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
     alt: "TypeScript",
     title: "TypeScript",
     description: "Language"
   },
   {
     id: 2,
     img: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
     alt: "TailwindCSS",
     title: "TailwindCSS",
     description: "Styles"
   },
   {
     id: 3,
     img: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
     alt: "Supabase",
     title: "Supabase",
     description: "Auth/Database"
   },
   {
     id: 4,
     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
     alt: "SvelteKit",
     title: "Svelte-Kit",
     description: "Meta-Framework"
   },
   {
     id: 5,
     img: "/img/laravel.svg",
     alt: "Laravel",
     title: "Laravel",
     description: "Backend"
   },
   {
     id: 6,
     img: "https://www.svgrepo.com/show/331592/stripe-v2.svg",
     alt: "Stripe",
     title: "Stripe",
     description: "Paiements"
   },
   {
     id: 7,
     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
     alt: "Vue JS",
     title: "Vue JS",
     description: "Framework"
   },
   {
     id: 8,
     img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
     alt: "NextJS",
     title: "NextJS",
     description: "Framework"
   },
   {
     id: 9,
     img: "https://framework7.io/i/logo.svg",
     alt: "Framework7",
     title: "Framework7",
     description: "UI Framework"
   },
   {
     id: 10,
     img: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png",
     alt: "Power BI",
     title: "Power BI",
     description: "Analyse de données"
   }
 ];

 // Créer un tableau infini en dupliquant les items
 const techItems = [
   ...originalItems,
   ...originalItems.map(item => ({...item, id: item.id + 100})),
   ...originalItems.map(item => ({...item, id: item.id + 200}))
 ];

 function getVisibleItems() {
   const width = window.innerWidth;
   if (width >= 1200) return 6;
   if (width >= 1000) return 5;
   if (width >= 600) return 3;
   return 2;
 }

 let visibleItems = 2;

 function nextSlide() {
   currentIndex++;
   
   // Reset pour créer l'effet loop infini
   if (currentIndex >= originalItems.length * 2) {
     setTimeout(() => {
       if (carouselTrack) {
         carouselTrack.style.transition = 'none';
         currentIndex = originalItems.length;
         setTimeout(() => {
           carouselTrack.style.transition = 'transform 0.3s ease';
         }, 50);
       }
     }, 300);
   }
 }

 function prevSlide() {
   currentIndex--;
   
   // Reset pour créer l'effet loop infini
   if (currentIndex < 0) {
     setTimeout(() => {
       if (carouselTrack) {
         carouselTrack.style.transition = 'none';
         currentIndex = originalItems.length - 1;
         setTimeout(() => {
           carouselTrack.style.transition = 'transform 0.3s ease';
         }, 50);
       }
     }, 300);
   }
 }

 function startAutoplay() {
   if (!isHovered) {
     autoplayInterval = setInterval(nextSlide, 3000);
   }
 }

 function stopAutoplay() {
   if (autoplayInterval) {
     clearInterval(autoplayInterval);
     autoplayInterval = null;
   }
 }

 function handleMouseEnter() {
   isHovered = true;
   stopAutoplay(); // Pause on hover
 }

 function handleMouseLeave() {
   isHovered = false;
   startAutoplay(); // Resume on hover out
 }

 function handleResize() {
   visibleItems = getVisibleItems();
 }

 onMount(() => {
   visibleItems = getVisibleItems();
   // Commencer au milieu pour permettre le loop infini
   currentIndex = originalItems.length;
   startAutoplay();

   window.addEventListener('resize', handleResize);

   return () => {
     stopAutoplay();
     window.removeEventListener('resize', handleResize);
   };
 });

 $: translateX = -currentIndex * (100 / visibleItems);
</script>

<svelte:window on:resize={handleResize} />

<section id="technologies" class="technologies services-section">
 <div class="container">
   <h2>Technologies Utilisées</h2>
   <p class="section-intro">Nous utilisons les technologies les plus modernes et performantes pour nos projets</p>
   
   <div class="carousel-container">
     <button class="carousel-btn carousel-btn-prev" on:click={prevSlide} aria-label="Previous">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
     </button>
     
     <div 
       class="tech-carousel"
       on:mouseenter={handleMouseEnter}
       on:mouseleave={handleMouseLeave}
     >
       <div class="carousel-wrapper">
         <div 
           class="carousel-track"
           style="transform: translateX({translateX}%);"
           bind:this={carouselTrack}
         >
           {#each techItems as tech (tech.id)}
             <div class="tech-card" style="flex: 0 0 {100 / visibleItems}%;">
               <img src={tech.img} alt={tech.alt} />
               <h3>{tech.title}</h3>
               <p>{tech.description}</p>
             </div>
           {/each}
         </div>
       </div>
     </div>
     
     <button class="carousel-btn carousel-btn-next" on:click={nextSlide} aria-label="Next">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
     </button>
   </div>
 </div>
</section>

<style>
 .carousel-container {
   position: relative;
   display: flex;
   align-items: center;
   gap: 20px;
 }

 .tech-carousel {
   overflow: hidden;
   width: 100%;
   margin-top: 2rem;
   flex: 1;
 }

 .carousel-wrapper {
   position: relative;
 }

 .carousel-btn {
   background: rgba(255, 255, 255, 0.9);
   border: none;
   border-radius: 50%;
   width: 48px;
   height: 48px;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all 0.3s ease;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   color: #333;
   flex-shrink: 0;
 }

 .carousel-btn:hover {
   background: white;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
   transform: scale(1.05);
 }

 .carousel-btn:active {
   transform: scale(0.95);
 }

 .carousel-btn svg {
   flex-shrink: 0;
 }

 .carousel-track {
   display: flex;
   transition: transform 0.3s ease;
   gap: 20px;
 }

 .tech-card {
   box-sizing: border-box;
   text-align: center;
   padding: 1.5rem;
   background: white;
   border-radius: 10px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease;
   min-height: 200px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }

 .tech-card:hover {
   transform: translateY(-5px);
 }

 .tech-card img {
   width: 60px;
   height: 60px;
   margin-bottom: 1rem;
   object-fit: contain;
   object-position: center;
 }

 .tech-card h3 {
   font-size: 1.1rem;
   font-weight: 600;
   margin-bottom: 0.5rem;
   color: #333;
 }

 /* Responsive adjustments */
 @media (max-width: 1200px) {
   .tech-card {
     padding: 1.2rem;
     min-height: 180px;
   }
   
   .tech-card img {
     width: 50px;
     height: 50px;
   }
   
   .tech-card h3 {
     font-size: 1rem;
   }
   
   .tech-card p {
     font-size: 0.85rem;
   }
 }

 @media (max-width: 768px) {
   .carousel-container {
     gap: 15px;
   }
   
   .carousel-btn {
     width: 40px;
     height: 40px;
   }
   
   .carousel-btn svg {
     width: 20px;
     height: 20px;
   }
   
   .tech-card {
     padding: 1rem;
     min-height: 160px;
   }
   
   .tech-card img {
     width: 45px;
     height: 45px;
     margin-bottom: 0.8rem;
   }
   
   .tech-card h3 {
     font-size: 0.95rem;
     margin-bottom: 0.4rem;
   }
   
   .tech-card p {
     font-size: 0.8rem;
   }
 }

 @media (max-width: 480px) {
   .carousel-container {
     gap: 10px;
   }
   
   .carousel-btn {
     width: 36px;
     height: 36px;
   }
   
   .carousel-btn svg {
     width: 18px;
     height: 18px;
   }
   
   .tech-card {
     padding: 0.8rem;
     min-height: 140px;
   }
   
   .tech-card img {
     width: 40px;
     height: 40px;
     margin-bottom: 0.6rem;
   }
   
   .tech-card h3 {
     font-size: 0.9rem;
     margin-bottom: 0.3rem;
   }
   
   .tech-card p {
     font-size: 0.75rem;
   }
 }
</style>