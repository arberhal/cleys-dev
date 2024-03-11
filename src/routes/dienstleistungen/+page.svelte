<script>
    import Webentwicklung from "../../components/services/Webentwicklung.svelte";
    import Ai from "../../components/services/AI.svelte";
    import Seo from "../../components/services/SEO.svelte";
    import Branding from "../../components/services/Branding.svelte";
    import Modern from "../../components/services/Modern.svelte";
    import Ecommerce from "../../components/services/Ecommerce.svelte";
</script>

<section class="flex lg:justify-center mt-12 h-[80vh] pt-32">
  <div class="mx-4 flex flex-col lg:flex-row lg:mx-16 lg:w-[1440px]">
    <div  class="lg:w-3/5">
      <div class="text-display-md text-[#0079C1] font-bold lg:text-[52px]">
        <h2>We transform brands through elevated digital experiences</h2>
      </div>
      <div class="text-body mt-2">
        <p>
          Our rich design and technology expertise delivers top brands and
          digital experiences.
        </p>
      </div>
    </div>  
  </div>
</section>
<Webentwicklung />
<Ecommerce />
<Seo />
<Branding />
<Modern/>
<Ai/>


