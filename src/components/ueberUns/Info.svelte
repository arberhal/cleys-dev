<script lang="ts">
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
  
    let teamMembers = writable(0);
    let yearsInBusiness = writable(0);
    let projectsCompleted = writable(0);
  
    const maxTeamMembers = 7;
    const maxYearsInBusiness = 4;
    const maxProjectsCompleted = 12;
  
    onMount(() => {
      setTimeout(() => {
        const interval = setInterval(() => {
          if ($teamMembers < maxTeamMembers) {
            $teamMembers += 1;
          }
          if ($yearsInBusiness < maxYearsInBusiness) {
            $yearsInBusiness += 1;
          }
          if ($projectsCompleted < maxProjectsCompleted) {
            $projectsCompleted += 1;
          }
        }, 90); // increment every second
  
        return () => {
          clearInterval(interval); // clear the interval when the component is unmounted
        }
      }, 1000); // delay before the counter starts
    });
  </script>

<section class="flex justify-center mt-48">
  <div class="mx-4 flex flex-col max-w-[1440px] lg:mx-16">
    <div class="lg:flex lg:flex-row ">
      <div class="lg:mr-48">
        <p class="text-display-lg text-[#0079C1] font-bold mt-8 lg:text-[80px]">{$teamMembers}</p>
        <p class="text-body mt-2">Team Members</p>
      </div>
      <div class="lg:mr-48">
        <p class="text-display-lg text-[#0079C1] font-bold mt-8 lg:text-[80px]">
          {$yearsInBusiness}
        </p>
        <p class="text-body mt-2">Years in Business</p>
      </div>
      <div>
        <p class="text-display-lg text-[#0079C1] font-bold mt-8 lg:text-[80px]">
          {$projectsCompleted}
        </p>
        <p class="text-body mt-2">Projects Completed</p>
      </div>
    </div>
    <div>
      <div class="mt-32">
        <p class="text-display-lg text-[#0079C1] font-bold mt-8 lg:text-[80px]">St. Gallen</p>
        <p class="text-body mt-2">Headquarters</p>
        <p class="mt-32 text-body lg:w-1/2">
          We're a global group of strategists, designers, and engineers building
          notable brands and premier digital experiences that captivate users
          worldwide. <br><br>Our unified, AI-infused creative approach ensures
          scalability and consistency across all brand touchpoints by building
          robust design systems.
        </p>
      </div>
    </div>
  </div>
</section>
