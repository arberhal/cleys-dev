<script>
  import LaReinigung from "../lib/images/LA-Reinigung.png";
  import PrimaryButton from "./primary-button.svelte";
  import lvhair from "../lib/images/LvHair.jpg";
  import AS from "../lib/images/LA.png";
</script>

<style>
  img {
  transition: all 0.5s ease-in-out;
  transform: scale(1);
}

img:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}


</style>

<section class=" flex justify-center">
  <div class="lg:w-[1440px] mx-4 lg:mx-16 lg:max-w-[1440px]">
    <div>
      <p class="text-gray-500 text-body">
        Software for Ventures & Private Equity
      </p>
      <h2 class="text-display-md font-bold pt-3 pb-2 cleys">Our Work</h2>
    </div>
    
    <div class="portfolio lg:flex lg:justify-between mt-14">
      
      <div class="lg:mx-16 lg:mt-0 mt-10">
        <a href="/LA-Reinigung">
        <img
          src={LaReinigung}
          alt="apple"
          class="lg:max-w-[768px] max-w-[400px] w-full rounded-[10px]"
        />
      </a>
        <ul class="flex text-white flex-wrap">
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">UI/UX</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">Branding</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">Text-to-Speech</li>
        </ul>
        <div class="w-full mb-4">
          <h2 class="text-heading-lg font-bold pt-3 pb-2">LA Reinigungen</h2>
          <p class="text-gray-500 text-body">
            Software for Ventures & Private Equity
          </p>
        </div>
        <PrimaryButton text="View Case Study"/>
      </div>
    
      <div class="lg:mx-16 lg:pt-[120px] lg:mt-0 mt-16">
        <a href="/LV-Hairextension">
        <img
          src={lvhair}
          alt="apple"
          class="lg:max-w-[768px] max-w-[400px] w-full bg-gray-200 rounded-[10px]"
        />
      </a>
        <ul class="flex text-white flex-wrap">
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">UI/UX</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">Branding</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">E-Commerce</li>
        </ul>
        <div class="w-full mb-4">
          <h2 class="text-heading-lg font-bold pt-3 pb-2">LV Hairextension</h2>
          <p class="text-gray-500 text-body">
            Software for Ventures & Private Equity
          </p>
        </div>
        <PrimaryButton text="View Case Study" />
      </div>
    </div>
  </div>
</section>

<section class=" flex justify-center">
  <div class="lg:w-[1440px] mx-4 lg:mx-16 lg:max-w-[1440px]">
    <div class="lg:flex lg:justify-between mt-14 lg:px-16">
      <div class="lg:px-16 lg:mt-0 mt-10">
        <a href="/LA-Reinigung">
        <img
          src={AS}
          alt="apple"
          class="w-full rounded-[10px]"
        />
      </a>
        <ul class="flex text-white flex-wrap">
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">UI/UX</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">Branding</li>
          <li class="bg-black py-2 px-4 rounded-[50px] mr-4 mt-4">Text-to-Speech</li>
        </ul>
        <div class="w-full mb-4">
          <h2 class="text-heading-lg font-bold pt-3 pb-2">LA Reinigungen</h2>
          <p class="text-gray-500 text-body">
            Software for Ventures & Private Equity
          </p>
        </div>
        <PrimaryButton text="View Case Study"/>
      </div>   
    </div>
  </div>
</section>

