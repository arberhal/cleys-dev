<script>
    import Stats from "../../components/ueberUns/Stats.svelte";
    import Slogan from "../../components/ueberUns/Slogan.svelte";
    import Unternehmen from "../../components/ueberUns/Unternehmen.svelte"; 
    import Principals from "../../components/ueberUns/Principals.svelte";
    import Work from "../../components/ueberUns/Work.svelte";

    import { slide } from 'svelte/transition';
</script>
<svelte:head>
    <meta name="description" content="Lernen Sie Cleys kennen, ein junges und dynamisches Team aus St. Gallen, das sich durch Expertise und Leidenschaft für Technologie auszeichnet. Wir entwickeln massgeschneiderte IT-Lösungen, die Ihren digitalen Erfolg vorantreiben und Innovationen fördern.">
  <title>Über cleys</title>
</svelte:head>
<section class="flex justify-center cleys-black" in:slide={{ delay: 0, duration: 500 }}>
    <div class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full my-24 text-white">
      <div class="lg:w-2/3 md:w-2/3">
        <h2 class="text-display-lg font-bold">Wer ist cleys?</h2>
        <p class="mt-8 text-body">Wir sind ein junges, dynamisches Team, das Fachwissen mit Leidenschaft verbindet. Unsere Begeisterung für das, was wir tun, treibt uns an, stets innovative Lösungen zu entwickeln und herausragende Ergebnisse zu liefern. Mit modernsten Technologien und einer kreativen Herangehensweise helfen wir unseren Kunden, ihre Visionen in die Realität umzusetzen. Bei uns steht das gemeinsame Ziel im Vordergrund, Ihre Geschäftsprozesse zu optimieren und Sie erfolgreich in die Zukunft zu führen.</p>
      </div>
    </div>
    </section>

    <Stats />
    <Slogan />
    <Unternehmen />
    <Principals />
    <Work />







