<script>
  import PrimaryButton from "./primary-button.svelte";
  import AS from "$lib/images/AS.png";
  import LA from "$lib/images/LA.png";
</script>

<section class="flex justify-center mt-16 bg-[#F9FAFF]">
  <div class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full">
    <div>
      <h2 class="lg:text-[60px] md:text-[50px] text-[40px]">
        Ausgewählte Kunden
      </h2>
      <p class="mt-3 mb-8">
        Wir arbeiten mit Start-ups und Unternehmen zusammen, um ihre digitalen
        Bedürfnisse zu erfüllen oder zu verbessern.
      </p>
      <PrimaryButton text="Alle Ansehen" link="/projects" />
    </div>
    <div class="w-full lg:flex">
      <div class="pt-32">
        <div class="lg:mr-6">
          <img src={AS} alt="" class="w-full rounded-[10px]" />
          <p class="font-bold mt-4">LA-Reinigung</p>
          <p class="text-body-sm">Webentwicklung</p>
        </div>
      </div>
      <div>
        <div class="lg:ml-6">
          <img src={AS} alt="" class="w-full rounded-[10px]" />
          <p class="font-bold mt-4">LA-Reinigung</p>
          <p class="text-body-sm">Webentwicklung</p>
        </div>
      </div>
    </div>
  </div>
</section>
