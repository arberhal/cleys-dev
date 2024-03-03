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
<div class="mx-auto max-w-[1568px]">
  <div
    class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 lg:mt-64 mt-32 mx-4 lg:mx-16"
  >
    <div class="lg:col-span-4 col-span-2">
      <p class="text-gray-500 text-body">
        Software for Ventures & Private Equity
      </p>
      <h2 class="text-display-md font-bold pt-3 pb-2">
        Häufig gestellte Fragen
      </h2>
      <p class="text-body pb-2">Brauchen Sie weitere Hilfe?</p>
      <PrimaryButton text="Kontaktiere uns"></PrimaryButton>
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
          <p class="text-body">Can i cancel anytime?</p>
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
              Yes, you can cancel anytime no questions are asked while you
              cancel but we would highly appreciate if you will give us some
              feedback.
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
          <p class="text-body">How does cleys pricing work?</p>
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
              Yes, you can cancel anytime no questions are asked while you
              cancel but we would highly appreciate if you will give us some
              feedback.
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
          <p class="text-body">How secure is cleys?</p>
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
              Yes, you can cancel anytime no questions are asked while you
              cancel but we would highly appreciate if you will give us some
              feedback.
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
          <p class="text-body">How do i get acces to a theme Purchased?</p>
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
              Yes, you can cancel anytime no questions are asked while you
              cancel but we would highly appreciate if you will give us some
              feedback.
            </p>
          </div>
        {/if}
      </div>
      <!-- Fourth Accordion Item end-->
    </div>
  </div>
</div>
