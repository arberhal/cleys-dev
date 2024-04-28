<script>
  import Contactform from "../../components/kontakt/Contactform.svelte";
  import { slide } from 'svelte/transition';
</script>
<div class="relative isolate flex w-full flex-col pt-9"
style="transform: none; transform-origin: 50% 50% 0px;" >
<svg
    aria-hidden="true"
    class="opacity-5 absolute inset-x-0 -top-28 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
    ><rect width="100%" height="100%" fill="url(#:r5:)" stroke-width="0"
    ></rect><svg></svg
    ><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(259, 100%, 0%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'/></svg>
<div class="mx-auto max-w-[1408px] mb-16" in:slide={{ delay: 0, duration: 1000 }}>
  <div
    class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mx-4 lg:mt-16 lg:mb-16 mt-8 mb-8 lg:mx-16"
  >
    <div class="col-span-6">
      <h1 class="text-display-lg font-bold text-[#0079C1]">
        Your Project <br />Take the next step
      </h1>
      <p class="text-body pt-4">
        Sie haben eine grosse Idee oder eine Marke zu entwickeln und brauchen
        Hilfe? Dann melden Sie sich bei uns, wir würden gerne mehr über Ihr
        Projekt erfahren und Ihnen helfen
      </p>
    </div>
    <div class="col-span-6"></div> 
  </div>
  <Contactform />
</div>

</div>

