<script>
  import PrimaryButton from "./primary-button.svelte";
  import Shopify from "../lib/images/Shopify.png";
  import Hostpoint from "../lib/images/Hostpoint.png";
  import Shore from "../lib/images/shore.png";

 
</script>

<section class="flex lg:items-center justify-center items-start pt-20 lg:pt-0 mb-60 lg:h-[90vh] h-[30vh]">
  <div class="flex flex-col justify-center items-center w-full">
    <svg
      aria-hidden="true"
      class="opacity-5 absolute inset-x-0 -top-28 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
      ><rect width="100%" height="100%" fill="url(#:r5:)" stroke-width="0"
      ></rect><svg></svg><defs
        ><pattern
          id="a"
          patternUnits="userSpaceOnUse"
          width="69.141"
          height="40"
          patternTransform="scale(2) rotate(0)"
          ><rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="hsla(0,0%,100%,1)"
          /><path
            d="M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z"
            stroke-width="1"
            stroke="hsla(259, 100%, 0%, 1)"
            fill="none"
          /></pattern
        ></defs
      ><rect
        width="800%"
        height="800%"
        transform="translate(0,0)"
        fill="url(#a)"
      /></svg
    >
    <div
      class="flex flex-col mx-4 md:mx-10  lg:mx-16 lg:max-w-[1280px]"
    >
      <div class="lg:w-3/5">
        <div class="text-display-lg text-[#0079C1] font-bold lg:text-[64px]">
          <h1>Innovative IT-Lösungen, für Ihren Erfolg</h1>
        </div>
        <div class="text-body mt-2">
          <p>
            Wir bieten massgeschneiderte Lösungen, die Ihre Geschäftsprozesse <br
            /> optimieren und Sie in die Zukunft führen. Erleben Sie den Unterschied
            mit unseren spezialisierten Services, die auf Ihre Bedürfnisse zugeschnitten
            sind.
          </p>
        </div>
        <div class="mt-8">

            <PrimaryButton text="Jetzt Beratung anfordern" link="https://calendly.com/bookcleys/beratung-vor-ort" target="_blank"></PrimaryButton>
          
        </div>
      </div>
      <!---
      <div class="flex justify-between w-full mt-32 space-x-4 overflow-hidden h-[60px]">
        <img src={Shore} alt="" class="h-full" />
        <img src={Shopify} alt="" class="h-full" />
        <img src={Hostpoint} alt="" class="h-full" />
      </div>
      -->
    </div>
  </div>
</section>
