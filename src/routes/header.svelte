<script>
    import { page } from '$app/stores'; // Accéder au store de navigation
    import logo from '$lib/img/logo_nia.svg';
</script>

<!-- Navigation Glassmorphisme -->
    <header class="glass-nav">
        <div class="container">
            <div id="branding">
                <a href="/" class="logo">
                    <img width="220" src="{logo}" alt="">
                </a>
            </div>
            <nav>
                 <!-- Menu de navigation -->
                <nav>
                    <ul class="nav-links">
                        <li><a href="/" class:active={$page.url.pathname === '/'}>Accueil</a></li>
                        <li><a href="/solutions" class:active={$page.url.pathname === '/solutions'}>Nos Solutions</a></li>
                        <li><a href="/formations" class:active={$page.url.pathname === '/formations'}>Formations</a></li>
                        <li><a href="/portfolio" class:active={$page.url.pathname === '/portfolio'}>Portfolio</a></li>
                        <li><a href="/qui-sommes-nous" class:active={$page.url.pathname === '/qui-sommes-nous'}>À propos</a></li>
                        <li><a href="/devis" class:active={$page.url.pathname === '/devis'}>Devis</a></li>
                    </ul>
                </nav>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>