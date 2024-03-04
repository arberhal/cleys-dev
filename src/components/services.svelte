<script lang="ts">
    let selectedContent = 'Webentwicklung';
    let contents = ['Webentwicklung', 'Branding', 'E-Commerce'];
    let index = 0;
    let timer;

    function selectContent() {
        selectedContent = contents[index];
        index = (index + 1) % contents.length;
        clearTimeout(timer);
        timer = setTimeout(selectContent, 2000);
    }

    function handleClick(content) {
        index = contents.indexOf(content);
        selectContent();
    }

    // Start the automatic selection of buttons immediately
    selectContent();
</script>

<style>
    .button {
      position: relative;
      overflow: hidden;
    }

    .selected:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: black;
      animation: slide 2s forwards;
    }

    @keyframes slide {
      100% { width: 100%; }
    }
</style>

<section class="flex justify-center">

    <div class="max-w-[1440px] w-[1440px] lg:flex mx-16 hidden flex-col">
        <div class="mb-16 w-full">
            <p class="text-gray-500 text-body">
              Software for Ventures & Private Equity
            </p>
            <h2 class="text-display-md font-bold pt-3 pb-2">We help to build and <br> transform digital products</h2>
          </div>
          <div class="flex">
        <div class="w-1/3 flex flex-col justify-between mr-3">
          <div>
            <button class=" text-heading-md button flex py-4 border-t-[1px] border-b-[1px] w-full {selectedContent === 'Webentwicklung' ? 'selected' : ''}" on:click={() => handleClick('Webentwicklung')}>Webentwicklung</button>
            <button class="text-heading-md button flex py-4 border-b-[1px] w-full {selectedContent === 'Branding' ? 'selected' : ''}" on:click={() => handleClick('Branding')}>Branding</button>
            <button class="text-heading-md button flex py-4 border-b-[1px] w-full {selectedContent === 'E-Commerce' ? 'selected' : ''}" on:click={() => handleClick('E-Commerce')}>E-Commerce</button>
            <div>
              <p>{selectedContent}</p>
            </div>
          </div>
        </div>
        <div class="ml-3">
          <p>{selectedContent}</p>
          {#if selectedContent === 'Webentwicklung'}
            <div>Extra content for Webentwicklung</div>
          {/if}
          {#if selectedContent === 'Branding'}
            <div>Extra content for Branding</div>
          {/if}
          {#if selectedContent === 'E-Commerce'}
            <div>Extra content for E-Commerce</div>
          {/if}
        </div>
    </div>
    </div>
    <div class="lg:hidden mx-4 flex flex-col">
        <div class="mb-12">
            <p class="text-gray-500 text-body">
              Software for Ventures & Private Equity
            </p>
            <h2 class="text-display-md font-bold pt-3 pb-2">We help to build and transform digital products</h2>
          </div>
        <p class="text-body">Webentwicklung</p>
        <div class="h-[300px] w-full bg-gray-300 mt-6">
            <img src="" alt="">
        </div>
        <div class="mt-4">
            <p>A branded, secure doc sharing experience for your LPs.</p>
        </div>
        <div class="mt-4">
            <button class="py-3 px-4 bg-black text-white rounded-[5px] text-xxs">Explore Webentwicklung</button>
        </div>
      </div>
</section>