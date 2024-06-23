<script>
  import PrimaryButton from "./primary-button.svelte";
  import LA from "$lib/images/LA-Reinigung.webp";
  import AS from "$lib/images/autosirnach.webp";
  import LV from "$lib/images/lvhairextension.webp";
</script>

<section class="flex justify-center mt-16 pt-16 pb-16 bg-[#F9FAFF]">
  <div class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full mb-16">
    <div class="mt-8">
      <h2 class="lg:text-[60px] md:text-[50px] text-[40px] lg:w-1/2 cleys font-semibold">
        Ausgewählte Kunden
      </h2>
      <p class="mt-3 mb-8 lg:w-1/2 text-body-sm">
        Wir arbeiten mit Start-ups und Unternehmen zusammen, um ihre digitalen
        Bedürfnisse zu erfüllen und zu verbessern. Überzeugen Sie sich selbst von unseren Projekten.
      </p>
      <PrimaryButton text="Alle Ansehen" link="/projects" />
    </div>
    <div class="w-full lg:flex lg:space-x-12">
      <div class="pt-32 lg:w-1/2">
        <div class="">
          <a href="https://autosirnach.ch/">
            <div class="zoom-container rounded-[10px]">
          <img src="{AS}" alt="Autosirnach-Webseite" class=" zoom  " />
        </div>
          <p class="font-bold mt-4">Autosirnach</p>
          <p class="text-body-sm">Autohändler in Sirnach</p>
        </a>
        </div>
        <div class="mt-12">
          <a href="https://www.lvhairextension.com/">
            <div class="rounded-[10px] zoom-container">
          <img src="{LV}" alt="LV-Hairextension-Webseite" class="zoom  " />
        </div>
          <p class="font-bold mt-4">LVHairextension</p>
          <p class="text-body-sm">E-Commerce Hairextension</p>
        </a>
        </div>
      </div>
      <div class="lg:w-1/2">
        <div class="mt-8 lg:mt-0 ">
          <a href="https://la-reinigung.ch/">
        <div class="rounded-[10px] zoom-container">
          <img src="{LA}" alt="LA-Reinigung-Webseite" class="zoom " />
        </div>
          <p class="font-bold mt-4">LA-Reinigung</p>
          <p class="text-body-sm">Reinigunservice & Facility Management</p>
        </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .zoom-container {
    overflow: hidden;
  }
  
  .zoom {
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
  }
  
  .zoom:hover {
    transform: scale(1.1);
  }
  </style>