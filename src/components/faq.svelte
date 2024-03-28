<script>
  import PrimaryButton from "./primary-button.svelte";
  import { slide } from "svelte/transition";

  /**
   * @type {number | null}
   */
  let openItem = null;

  // Function to toggle accordion item
  /**
   * @param {number | null} itemId
   */
  function toggleItem(itemId) {
    openItem = openItem === itemId ? null : itemId;
  }
</script>
<!-- Layout START -->
<div class="mx-auto max-w-[1408px] mb-48">
  <div
    class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 lg:mt-64 mt-32 mx-4 lg:mx-16 md:mx-10"
  >
    <div class="lg:col-span-4 col-span-2">
      <p class="text-gray-500 text-body">
        Noch nicht überzeugt?
      </p>
      <h2 class="text-display-md font-bold pt-3 pb-2 cleys">
        Häufig gestellte Fragen
      </h2>
    </div>
<!-- Layout END -->
    <!-- Accordion START-->
    <div class="col-span-2 gap-2 lg:col-span-8 flex flex-col">
      <!-- First Accordion Item-->
      <div class="border-gray-200 border-b pb-4 pt-8 lg:pt-0">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(1)}
        >
          <p class="text-body">Auf welcher Basis kalkuliert ihr eure Preismodelle für Dienstleistungen?</p>
          {#if openItem === 1}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 1}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
              Die Abrechnung nach tatsächlich aufgewendeten Stunden hat sich bei uns als die gerechteste Methode etabliert. Sie zahlen lediglich für das, was Ihren individuellen Bedürfnissen entspricht, und haben so die volle Kontrolle über die entstehenden Kosten.
            </p>
          </div>
        {/if}
      </div>
      <!-- First Accordion Item end-->
      <!-- Third Accordion Item-->
      <div class="border-gray-200 border-b pb-4 pt-4">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(2)}
        >
          <p class="text-body">Welchen Zeitrahmen sollte ich für die Realisierung eines Projektes einplanen?</p>
          {#if openItem === 2}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 2}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
              Die Dauer eines Projekts variiert und ist spezifisch auf die jeweiligen Bedürfnisse abgestimmt. Einige Projekte können innerhalb eines Monats abgeschlossen sein, während andere bis zu einem halben Jahr in Anspruch nehmen können. Entscheidend ist auch die Mitwirkung der Kundinnen und Kunden im Projektprozess.
            </p>
          </div>
        {/if}
      </div>
      <!-- Second Accordion Item end-->
      <!-- Third Accordion Item-->
      <div class="border-gray-200 border-b pb-4 pt-4">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(3)}
        >
          <p class="text-body">Aus welchen Gründen ist cleys der richtige IT-Partner für mein Unternehmen?</p>
          {#if openItem === 3}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 3}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
             
Als IT-Dienstleister aus der Schweiz glauben wir fest daran, dass unser Erfolg eng mit dem unserer Kunden verknüpft ist. Wir setzen auf dauerhafte Partnerschaften, die sich auf Vertrauen und gemeinsames Wachstum stützen, und sind bestrebt, durch innovative Ansätze neue Standards in der Technologiebranche zu etablieren.

Die Entscheidung für uns bedeutet eine enge Zusammenarbeit mit unserem motivierten Team, das sich leidenschaftlich für Ihren Erfolg einsetzt. Unsere Gründer sind persönlich in jedem Projekt involviert und gewährleisten eine individuelle Betreuung.

Die Eckpfeiler unserer Zusammenarbeit sind Kommunikation und Transparenz, die eine hervorragende Kundenerfahrung von der ersten Kontaktaufnahme bis zum Projektabschluss sicherstellen.

            </p>
          </div>
        {/if}
      </div>
      <!-- Third Accordion Item end-->
      <!-- Fourth Accordion Item-->
      <div class="border-gray-200 border-b pb-4 pt-4">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(4)}
        >
          <p class="text-body">An Unternehmen welcher Grösse und Branchen richtet sich das Serviceangebot von cleys?</p>
          {#if openItem === 4}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 4}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
              Unser Serviceangebot richtet sich an Unternehmen unterschiedlichster Grössen und Branchen. Wir sind darauf spezialisiert, mit Start-ups sowie etablierten Grossunternehmen zusammenzuarbeiten und bauen massgeschneiderte Partnerschaften auf, die auf gegenseitigem Wachstum und Vertrauen basieren.
            </p>
          </div>
        {/if}
      </div>
      <div class="border-gray-200 border-b pb-4 pt-4">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(6)}
        >
          <p class="text-body">Muss ich mich selbst um das Hosting meiner Webseite kümmern?

          </p>
          {#if openItem === 6}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 6}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
              Nein, das ist nicht nötig. Wir bieten Hosting-Dienste an, die durch unsere zuverlässigen Partner ermöglicht werden. Dadurch können Sie nicht nur von Preisermässigungen profitieren, sondern auch eine schnelle Reaktionszeit erwarten. Auf Wunsch ist es jedoch auch möglich, dass Sie das Hosting selbst übernehmen.            </p>
          </div>
        {/if}
      </div>
      <div class="border-gray-200 border-b pb-4 pt-4">
        <button
          class="inline-flex items-center justify-between w-full font-semibold text-start transition hover:text-gray-500"
          on:click={() => toggleItem(5)}
        >
          <p class="text-body">Besteht die Option, dass cleys die kontinuierliche Betreuung meiner Webseite übernimmt?</p>
          {#if openItem === 5}
            <!-- Icon for "open" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
            >
          {:else}
            <!-- Icon for "closed" state -->
            <svg
              class="block flex-shrink-0 size-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
            >
          {/if}
        </button>
        {#if openItem === 5}
          <div class="w-full overflow-hidden" transition:slide>
            <p class="pt-4 text-body">
              In unserem Serviceangebot ist auch ein Managed Hosting-Vertrag enthalten. Dieser umfasst die fortlaufende Pflege und Wartung Ihrer Webseite, damit Sie sich voll und ganz auf Ihr Kerngeschäft konzentrieren können, während wir uns um die technischen Details kümmern.            </p>
          </div>
        {/if}
      </div>
      <!-- Fourth Accordion Item end-->
    </div>
  </div>
</div>
