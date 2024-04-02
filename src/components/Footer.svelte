<script>
  import linkedin from "../lib/images/linkedin.svg";
  import instagram from "../lib/images/instagram.svg";
  import logo from "../lib/images/logo.svg";
  let currentYear = new Date().getFullYear();
</script>

<footer class="flex justify-center">
  <div class="flex flex-col justify-between mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full mt-24 mb-8">
  <div class="flex lg:flex-row flex-col justify-between">
    <div class="lg:w-5/12">
      <h2 class="text-heading-md font-bold">Deine Vision, unser Ziel, das digitale Erlebnis</h2>
    </div>
    <div class="flex lg:justify-between lg:flex-row flex-col lg:w-7/12 text-body lg:mt-0 mt-12 lg:space-x-0">
      <ul class="space-y-2">
        <li class="font-bold">Standort</li>
        <li>Industriestrasse 15</li>
        <li>9015 St. Gallen</li>
        <li><a href="mailto:info@cleys.ch">info@cleys.ch</a></li>
      </ul>
      <ul class="space-y-2 lg:flex lg:flex-col hidden">
        <li class="font-bold">Site Map</li>
        <a href="/projects"><li>Projekte</li></a>
        <a href="/dienstleistungen"><li>Services</li></a>
        <a href="/ueberuns"><li>Über uns</li></a>
        <a href="/blog"><li>Blog</li></a>
        <a href="/kontakt"><li>Kontakt</li></a>
      </ul>
      <ul class="space-y-2 lg:mt-0 mt-8">
        <li class="font-bold">Unternehmen</li>
        <a href="/career"><li>Jobs & Karriere</li></a>
        <li><a href="/impressum">Impressum</a></li>
          <li><a href="/datenschutz">Datenschutzerklärung</a></li>
      </ul>
    </div>
  </div>
  <div class="flex justify-between mt-16">
    <div class="flex items-center"><img src="{logo}" alt="" class="h-[50px]"></div>
    <div class="flex items-center">
      <div class="flex space-x-4 justify-end items-center">
        <img src="{linkedin}" alt="">
        <img src="{instagram}" alt="">
      </div>
    </div>
  </div>
  </div>
</footer>