<script>
    import cubic from "$lib/images/cubic.png";
    import PrimaryButton from "./primary-button.svelte";
  </script>
  
  <section class="flex justify-center mt-64">
    <div class="mx-4 flex flex-col lg:flex-row lg:mx-16 md:mx-10 lg:max-w-[1280px]">
      <div class="w-3/5">
        <div class="text-display-md text-[#0079C1] font-bold lg:text-[52px]">
          <h2>Deine Idee, unsere Expertise?</h2>
        </div>
        <div class="mt-12 text-heading-md">
            <p>Dein Projekt kann bei einem Kaffee, bei uns an der Industriestrasse 15, beginnen!</p>
        </div>
        <div class="space-x-16 mt-12">
            <PrimaryButton text="Kontaktiere uns" link="/contact"/>
            <PrimaryButton text="Beratungstermin anfordern" link="/contact"/>
        </div>
      </div>
      <div class="w-2/5 h-full border-teal-100">
    <p >arber</p>
      </div>
    </div>
  </section>
  