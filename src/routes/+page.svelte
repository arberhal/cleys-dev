<script>
import Faq from "../components/faq.svelte";
import Hero from "../components/Hero.svelte";
import Rezension from "../components/Rezension.svelte";
import Portfolio2 from "../components/Portfolio2.svelte";
import { slide } from 'svelte/transition';

</script>
<svelte:head>
    <meta name="description" content="Entdecken Sie massgeschneiderte IT-Lösungen von cleys, die Ihre Geschäftsprozesse optimieren und Ihre digitale Transformation vorantreiben.">
  <title>cleys - Driving Innovation.</title>
</svelte:head>

<div in:slide={{ delay: 0, duration: 2500 }}>
<Hero/>

<Portfolio2/>

<Rezension/>
<Faq/>
</div>