<script>
  import Services from "../../components/services/services.svelte";
  import Werbig from "../../components/services/Werbig.svelte";
  import { slide } from "svelte/transition";
</script>
<svelte:head>
    <meta name="description" content="Erkunden Sie unser breites Angebot an IT-Dienstleistungen, einschließlich Webentwicklung, E-Commerce-Plattformen, IT-Consulting, und mehr. Cleys nutzt modernste Technologien, um maßgeschneiderte Lösungen zu schaffen, die Ihr Unternehmen voranbringen und die Kundenzufriedenheit sicherstellen.">
  <title>IT-Services für digitale Exzellenz</title>
</svelte:head>
<section
  class="flex justify-center cleys-black"
  in:slide={{ delay: 0, duration: 500 }}
>
  <div
    class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full my-24 text-white"
  >
    <div class="lg:w-2/3 md:w-2/3">
      <h2 class="text-display-lg font-bold">
        Für eine digitale Zukunft
      </h2>
      <p class="mt-8 text-body">
        Wir bieten ein breites Spektrum an massgeschneiderten Dienstleistungen,
        um die spezifischen Bedürfnisse unserer Kunden zu erfüllen. Unsere
        Expertise umfasst Web- und E-Commerce-Entwicklung, massgeschneiderte
        Softwarelösungen, strategisches IT-Consulting und mehr. Mit modernster
        Technologie schaffen wir effiziente Lösungen, die Ihr Unternehmen
        voranbringen.
      </p>
    </div>
  </div>
</section>

<Services />
<Werbig />
