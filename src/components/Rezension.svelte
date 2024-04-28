<script lang="ts">
    import { fly } from 'svelte/transition';
    import lar from "$lib/images/lar1.svg";
  
    let currentIndex = 0;
    let direction = 1; // 1 for forward, -1 for backward
    const slides = [
      {
        testimonial: "“Meine Erfahrung mit cleys war aussergewöhnlich. Wir beauftragten sie, unsere Marke vollständig neu zu gestalten und eine robuste Infrastruktur zu implementieren. Vom ersten Augenblick, als ich unsere neue Webseite sah, war ich überaus beeindruckt.”",
        name: "Liridon Ahmetaj",
        title: "Geschäftsinhaber",
        image: lar
      },

    ];
  
    function nextSlide() {
      direction = 1;
      currentIndex = (currentIndex + 1) % slides.length;
    }
  
    function prevSlide() {
      direction = -1;
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
  </script>
  
  <section class="flex justify-center text-white cleys-black">
    <div class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full ">
      <div class="lg:mt-24 mt-16"> 
        <p class="text-body">Unsere Ergebnisse</p>
        <h2 class="lg:text-[60px] text-[40px] mt-4 md:mt-6 lg:mt-8">Die Meinung unserer Kunden</h2>
      </div>
      <div class=" mt-8 md:mt-12 lg:mt-16">
        {#each slides as slide, index (slide)}
          {#if index === currentIndex}
            <div class="w-full" in:fly={{ x: direction * 200, duration: 300 }} out:fly={{ x: direction * -200, duration: 300 }} >
              <div class="italic text-[22px] md:text-[30px] lg:text-[40px] ">
                {slide.testimonial}
              </div>
              <div class="mt-16 pb-24">
                <img src="{slide.image}" alt="">
                <p class="mt-6 text-[16px] font-bold">{slide.name}</p>
                <p class="mt-1 text-[16px]">{slide.title}</p>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
  
