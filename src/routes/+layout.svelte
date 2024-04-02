<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
import Maint from "../components/Maint.svelte";
import { fade } from 'svelte/transition';
  import Banner from "../components/Banner.svelte";
</script>


<Header/>
<main>
    <div class="" in:fade={{ duration: 200 }}>
    <slot/>
</div>
<Banner/>
</main>

<Footer/>





