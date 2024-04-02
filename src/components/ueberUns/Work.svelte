<script>
  import frame1 from "$lib/images/frame1.svg";
  import frame2 from "$lib/images/frame2.svg";
  import frame3 from "$lib/images/frame3.svg";
</script>

<section class="flex justify-center cleys-black">
  <div
    class="flex lg:flex-row flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full my-24 text-white"
  >
    <div class="lg:w-1/2">
      <h2 class="text-display-md font-semibold">Why work with us?</h2>
      <p class="mt-8">
        We are a team of experts who are passionate about what we do. We are
        committed to providing the best possible service to our clients. Our
        team is made up of professionals who have years of experience in the
        industry. We are dedicated to helping our clients achieve their goals
        and we work hard to ensure that they are satisfied with the results.
      </p>
    </div>
    <div class="lg:w-1/2 flex flex-col justify-end">
      <div class="lg:p-[40px] py-[40px] mt-8">
        <img src={frame1} alt="" />
        <p class="text-body mt-12">We design & build innovative digital products.</p>
      </div>
      <div class="lg:p-[40px] py-[40px] mt-8">
        <img src={frame2} alt="" />
        <p class="text-body mt-12">We create visual guidelines & digital design systems.</p>
      </div>
      <div class="lg:p-[40px] py-[40px] mt-8">
        <img src={frame3} alt="" />
        <p class="text-body mt-12">We help you stand out from the crowd with a first MVP.        </p>
      </div>
    </div>
  </div>
</section>
