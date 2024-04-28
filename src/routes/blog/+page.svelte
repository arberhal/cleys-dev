<script>
  import PrimaryButton from "../../components/primary-button.svelte";
  import { slide } from "svelte/transition";
  import Content from "../../components/Blog/Content.svelte";
</script>

<section
  class="flex justify-center cleys-black text-white"
  in:slide={{ delay: 0, duration: 500 }}
>
  <div class="mx-4 flex flex-col lg:mx-16 md:mx-10 w-full lg:max-w-[1280px]">
    <div class="my-16">
      <h2 class="text-display-lg font-semibold">Blog</h2>
      <p class="text-body mt-4">News and insights on all things by cleys</p>

      <Content />
    </div>
  </div>
</section>
