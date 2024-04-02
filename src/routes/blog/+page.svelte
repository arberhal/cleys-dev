<script>
    import PrimaryButton from "../../components/primary-button.svelte";
    import { slide } from 'svelte/transition';
  </script>
  
  <section class="flex justify-center cleys-black text-white " in:slide={{ delay: 0, duration: 300 }}>
    <div class="mx-4 flex flex-col lg:mx-16 md:mx-10 w-full lg:max-w-[1280px]">

        <div class="">
            <h2>blog</h2>
            <p>News und Einblicke in allen Bereichen der IT</p>
        </div>
      <div>
        <ul>
            <li></li>
        </ul>
      </div>
    </div>
  </section>