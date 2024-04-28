<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Banner from "../components/Banner.svelte";
</script>

<Header />
<main>

    <slot />
  
  <Banner />
</main>

<Footer />
