<script>
import Faq from "../components/faq.svelte";
import Hero from "../components/Hero.svelte";
import Rezension from "../components/Rezension.svelte";
import Portfolio2 from "../components/Portfolio2.svelte";
import { slide } from 'svelte/transition';
</script>

<div in:slide={{ delay: 0, duration: 2500 }}>
<Hero/>

<Portfolio2/>

<Rezension/>
<Faq/>
</div>