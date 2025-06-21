<script>
	import {onMount} from 'svelte';
	import { run } from 'svelte/legacy';
	import { fade, fly } from 'svelte/transition'; // Importer des transitions prédéfinies
  import { page } from '$app/stores'; // Accéder au store de navigation
	import '../app.css';
	import Footer from './footer.svelte';
  import Header from './header.svelte';

  
	
	let { children } = $props();

let currentIndex = $state(0);
 // Variables pour gérer les transitions
let currentKey = $state(null);
let itemsToShow = $state(2);
let autoplayInterval;
let carouselContainer;
let isPaused = $state(false);

// Configuration équivalente à owlCarousel
const config = {
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 5 },
    1200: { items: 6 }
  }
};

function updateItemsToShow() {
  if (!carouselContainer) return;
  
  const width = carouselContainer.offsetWidth;
  if (width >= 1200) {
    itemsToShow = config.responsive[1200].items;
  } else if (width >= 1000) {
    itemsToShow = config.responsive[1000].items;
  } else if (width >= 600) {
    itemsToShow = config.responsive[600].items;
  } else {
    itemsToShow = config.responsive[0].items;
  }
}

function nextSlide() {
  if (config.loop) {
    currentIndex = (currentIndex + 1) % items.length;
  }
}

function startAutoplay() {
  if (config.autoplay && !isPaused) {
    autoplayInterval = setInterval(nextSlide, config.autoplayTimeout);
  }
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

function handleMouseEnter() {
  if (config.autoplayHoverPause) {
    isPaused = true;
    stopAutoplay();
  }
}

function handleMouseLeave() {
  if (config.autoplayHoverPause) {
    isPaused = false;
    startAutoplay();
  }
}


// Fonction pour détecter les changements de page
    run(() => {
          if ($page.url.pathname) {
            currentKey = $page.url.pathname; // Utiliser l'URL comme clé unique pour chaque page
          }
       });

    // Construire l'URL complète
    const fullUrl = $derived(`${$page.url.origin}${$page.url.pathname}`);
    const fullUrl2 = $derived($page.url.href);
    function showUrl() {
      alert(fullUrl);
    }

    function isActive(path) {
        return $page.url.pathname === path;
      }
      
      // Ou pour les routes avec paramètres
      function isActiveRoute(basePath) {
        return $page.url.pathname.startsWith(basePath);
      }



onMount(() => {
  updateItemsToShow();
  startAutoplay();
  
  window.addEventListener('resize', updateItemsToShow);
   startAutoSlide();
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeydown);
  
  return () => {
    stopAutoplay();
    window.removeEventListener('resize', updateItemsToShow);
	  stopAutoSlide();
    document.removeEventListener('keydown', handleKeydown);
  };

 
});


	
</script>
<svelte:head>
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</svelte:head>
<Header/>

{@render children()}

<Footer/>