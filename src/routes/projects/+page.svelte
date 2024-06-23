<script>
  
  import LA from "$lib/images/LA-Reinigung.webp";
  import AS from "$lib/images/autosirnach.webp";
  import LV from "$lib/images/lvhairextension.webp";
  import { slide, fade } from "svelte/transition";
  let projects = [
    {
      id: 1,
      category: "business",
      name: "LA-Reinigung",
      url: "https://la-reinigung.ch/",
      imageName: LA, // Replace with your image path
      description: "Reinigunservice & Facility Management",
    },
    {
      id: 2,
      category: "business",
      name: "Autosirnach",
      url: "https://autosirnach.ch/",
      imageName: AS, // Replace with your second image path
      description: "Autohändler in Sirnach",
    },
    {
      id: 3,
      category: "ecommerce",
      name: "LV-Hairextension",
      url: "https://www.lvhairextension.com/",
      imageName: LV, // Replace with your second image path
      description: "E-Commerce Hairextension",
    },
  ];
  let filteredProjects = projects;
  let selectedCategory = "all"; // Tracks the currently selected category

  function filterProjects(category) {
    selectedCategory = category; // Update the selected category
    filteredProjects =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);
  }
  let isOpen = false;
  let selectedOption = '';

  const options = ['Option 1', 'Option 2', 'Option 3'];

  function selectOption(option) {
    selectedOption = option;
    isOpen = false;
  }

</script>

<svelte:head>
    <meta name="description" content="Entdecken Sie unsere umfangreiche Palette an Projekten, von Webseiten über Plattformen bis hin zum Aufbau neuer Infrastrukturen. Cleys verwandelt Ihre Vision in Realität mit branchenführender Expertise.">
  <title>IT-Lösungen für jede Branche</title>
</svelte:head>

<section class="flex justify-center mb-32" in:slide={{ delay: 0, duration: 1000 }}>
  <div
    class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full lg:my-24 pt-20"
  >
    <div class="lg:w-2/3 md:w-2/3 mb-32">
      <h2 class="lg:text-[64px] md:text-[48px] text-display-lg font-bold cleys">
        Unsere Projekte!
      </h2>
      <p class="mt-8 text-body">
       Entdecken sie unsere massgeschneiderten Projekte, die für unsere Kunden aus allen Branchen entwickelt wurden.
       Ob es sich um eine Webseite, eine Platform oder Aufbau von neuer Infrastruktur handelt, wir haben die Erfahrung und das Fachwissen, um Ihre Vision zum Leben zu erwecken.
      </p>
    </div>
    <div class="lg:flex space-x-8 pb-4 border-b mb-24 hidden">
      <button
        on:click={() => filterProjects("all")}
        class="button lg:mt-0 mt-4 {selectedCategory === 'all' ? 'button-selected' : ''}"
      >
        Alle Projekte
      </button>
      <button
        on:click={() => filterProjects("ecommerce")}
        class="button {selectedCategory === 'ecommerce'
          ? 'button-selected'
          : ''}"
      >
        Ecommerce
      </button>
      <button
        on:click={() => filterProjects("business")}
        class="button {selectedCategory === 'business'
          ? 'button-selected'
          : ''}"
      >
        Business
      </button>
    
    </div>

 <!-- Dropdown menu zum filtern -->

    <div class="w-full lg:flex lg:space-x-12">
      <!-- Column 1 -->
      <div class="lg:w-1/2 " in:fade={{ delay: 0, duration: 900 }}>
        {#each filteredProjects as project, index}
          {#if index % 2 === 0}
            <!-- Even index projects go here -->
            <div class={index === 0 ? "pt-32" : "mt-12"}>
              <a href={project.url}>
                <div class="zoom-container rounded-[10px]"> 
                <img src={project.imageName} alt="projekt-bilder" class="zoom" />
              </div>
                <p class="font-bold mt-4">{project.name}</p>
                <p class="text-body-sm">{project.description}</p>
              </a>
            </div>
          {/if}
        {/each}
      </div>

      <!-- Column 2 -->
      <div class="lg:w-1/2 " in:fade={{ delay: 0, duration: 900 }}>
        {#each filteredProjects as project, index}
          {#if index % 2 === 1}
            <!-- Odd index projects go here -->
            <div class="mt-8 lg:mt-0">
              <a href={project.url}>
                <div class="zoom-container rounded-[10px]">
                <img src={project.imageName} alt="" class="zoom" />
              </div>
                <p class="font-bold mt-4">{project.name}</p>
                <p class="text-body-sm">{project.description}</p>
              </a>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .button {
    transition:
      background-color 0.3s,
      color 0.3s,
      border-color 0.3s;
    border: 1px solid black;
    padding: 8px 16px;
    border-radius: 9999px; /* rounded-full */
    cursor: pointer;
  }

  .button-selected {
    background-color: black;
    color: white;
    border-color: white;
  }


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
