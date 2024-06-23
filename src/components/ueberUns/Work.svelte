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
      <h2 class="text-display-md font-semibold">Warum cleys?</h2>
      <p class="mt-8 text-body-sm mr-16">
        Wir sind ein Team von Experten, die sich durch eine tiefe Leidenschaft für ihre Arbeit auszeichnen. 
        Unser vorrangiges Ziel ist es, unseren Kunden einen exzellenten Service zu bieten. 
        Das Team verfügt über langjährige Erfahrung in der Branche und setzt sich konsequent dafür ein, den Kunden zu ermöglichen, ihre Ziele zu erreichen. 
        Wir legen großen Wert darauf, dass unsere Kunden mit den erzielten Ergebnissen vollständig zufrieden sind.
      </p>
    </div>
    <div class="lg:w-1/2 flex flex-col justify-end">
      <div class="lg:p-[40px] py-[40px] mt-8 bg-black p-8">
        <img src={frame1} alt="frame1" />
        <p class="text-body mt-12">Wir entwerfen und entwickeln innovative digitale Produkte.</p>
      </div>
      <div class="lg:p-[40px] py-[40px] mt-8 bg-black p-8">
        <img src={frame2} alt="frame2" />
        <p class="text-body mt-12">
          Wir halten uns an UX- und UI-Regeln, die ein fesselndes Design gewährleisten.</p>
      </div>
      <div class="lg:p-[40px] py-[40px] mt-8 bg-black p-8">
        <img src={frame3} alt="frame3" />
        <p class="text-body mt-12">Wir helfen Ihnen, sich von der Masse abzuheben.</p>
      </div>
    </div>
  </div>
</section>
