<script>
    import Footer from '../components/Footer.svelte';
  import '../globals.css';
</script>

<svelte:head>
  <title>Lilith Discord Bot</title>

  <link href="/fonts/Diablo.woff2" rel="preload" as="style" >

  <meta name="title" content="Lilith Discord Bot" />
  <meta
    name="description"
    content="An open-source, intuitive and user-friendly Discord bot for Diablo 4."
  />

  <meta name="keywords" content="diablo 4,d4,diablo,lilith,lilith discord bot,discord,bot" />
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lilith.mom/" />
  <meta property="og:image" content="/lilith.png" />
  <meta property="og:title" content="Lilith Discord Bot" />
  <meta
    property="og:description"
    content="An open-source, intuitive and user-friendly Discord bot for Diablo 4"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://lilith.mom/" />
  <meta property="twitter:image" content="/lilith.png" />
  <meta property="twitter:title" content="Lilith Discord Bot" />
  <meta
    property="twitter:description"
    content="An open-source, intuitive and user-friendly Discord bot for Diablo 4"
  />
</svelte:head>

<div>
  <main>
    <slot />
  </main>

  <div class="bg-black">
    <div class="mx-auto max-w-6xl py-10 px-5">
      <Footer/>
    </div>
  </div>
</div>