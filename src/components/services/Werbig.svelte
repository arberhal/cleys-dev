<script lang="ts">
  import svelteicon from "$lib/images/sveltelogo.svg";
  import bubbles from "$lib/images/bubbles.svg";
  import tilted from "$lib/images/tilted-plates.png";
</script>

<section class="flex justify-center mb-12">
  <div
    class="flex lg:flex-row flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full lg:space-x-4 mt-16 lg:space-y-0 space-y-4 max-h-max"
  >
    <div class="lg:w-1/2">
      <div class="bg-[#f7f8f9] lg:p-12 p-8 rounded-xl h-full">
        <div class="">
          <h2 class="text-heading-lg">Dein Auftritt</h2>
          <p class="text-body-sm mt-4">
            Wir entwickeln intuitive Benutzeroberflächen und Nutzererfahrungen,
            indem wir Ästhetik und Funktionalität geschickt kombinieren, um
            wirkungsvolle digitale Präsenzen zu erschaffen, die bei den
            Zielgruppen gut ankommen.
          </p>
          <div class="flex justify-center items-center">
            <img src={tilted} alt="" class="m" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="lg:w-1/2">
      <div class="bg-[#f7f8f9] lg:p-12 p-8 rounded-xl">
        <div class="">
          <h2 class="text-heading-lg">Kundenorientiert</h2>
          <p class="text-body-sm mt-4">
            Wir richten unser Handeln konsequent an den Bedürfnissen unserer
            Kunden aus, um individuelle Lösungen und erstklassigen Service zu
            bieten. Kundenzufriedenheit steht bei uns an erster Stelle, und wir
            streben stets danach, die Erwartungen zu übertreffen.
          </p>
        </div>
        <div class="mt-14">
          <div class="flex items-center justify-between">
            <p class="lg:text-[76px] font-bold text-[48px]">100%</p>
            <p class="lg:text-[28px] text-body">Zufriedenheitsgarantie</p>
          </div>
          <div class="flex items-center justify-between mt-14">
            <p class="lg:text-[76px] font-bold text-[48px]">12+</p>
            <p class="lg:text-[28px] text-body">Erfolgreiche Projekte</p>
          </div>
        </div>
      </div>
      <div class="bg-[#f7f8f9] lg:p-12 mt-4 p-8 rounded-xl">
        <div>
          <h2 class="text-heading-lg">Die neusten Technologien</h2>
          <p class="text-body-sm mt-4">
            Wir nutzen die neuesten Technologien, um innovativ zu bleiben und
            den Anforderungen der Zeit stets gerecht zu werden. Wir setzen auf
            fortschrittliche Lösungen, um Effizienz und Qualität zu optimieren.
          </p>
        </div>
        <div class="flex justify-center items-center pt-16">
          <img src={bubbles} alt="" class="" />
        </div>
      </div>
    </div>
  </div>
</section>
