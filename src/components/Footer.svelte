<script>
  import linkedin from "../lib/images/linkedin.svg";
  import instagram from "../lib/images/instagram.svg";
  import logo from "../lib/images/logo.svg";
</script>

<footer class="flex justify-center">
  <div
    class="flex flex-col justify-between mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full mt-24 mb-8"
  >
    <div class="flex lg:flex-row flex-col justify-between">
      <div class="lg:w-3/12">
        <h2 class="text-heading-md font-bold">
          Deine Vision, unser Ziel, das digitale Erlebnis
        </h2>
      </div>
      <div
        class="flex lg:justify-between lg:flex-row flex-col lg:w-8/12 text-body lg:mt-0 mt-12 lg:space-x-0 flex-wrap"
      >
        <ul class="space-y-2">
          <li class="font-bold">Standort</li>
          <li>Industriestrasse 15</li>
          <li>9015 St. Gallen</li>
          <li><a href="mailto:info@cleys.ch">info@cleys.ch</a></li>
        </ul>
        <ul class="space-y-2 lg:flex-col lg:mt-0 mt-8">
          <li class="font-bold">Services</li>
          <a href="/services"><li>Webenwticklung</li></a>
          <a href="/services"><li>Plattformentwicklung</li></a>
          <a href="/services"><li>E-Commerce</li></a>
          <a href="/services"><li>IT-Consulting</li></a>
          <a href="/services"><li>Microsoft 365</li></a>
          <a href="/services"><li>Künstliche Intelligenz</li></a>
          <a href="/services"><li>Marketing & SEO</li></a>
          <a href="/services"><li>Branding</li></a>
        </ul>
        <ul class="space-y-2 lg:mt-0 mt-8">
          <li class="font-bold">Unternehmen</li>
          <li class=""><a href="/kontakt"><li>Kontakt</li></a>
          <!--
          <li class=""><a href="/blog">Blog</a></li>
          -->
          <li class=""><a href="/ueberuns">Über uns</a></li>
        </ul>
        <ul class="space-y-2 lg:mt-0 mt-8 lg:hidden">
  
          <li class="font-bold">Rechtliches</li>
          <li class=""><a href="/impressum"><li>Impressum</li></a>
          <li><a href="/datenschutz">Datenschutzerklärung</a></li>
          <li><a href="/credits">Credits</a></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-16">
      <div class="flex items-center">
        <img src={logo} alt="logo cleys" class="h-[50px]" />
      </div>

      <div class="flex justify-end flex-col">
        <div class="flex justify-end space-x-4">
          <a href="https://www.linkedin.com/company/cleys-ch/"
            ><img src={linkedin} alt="linkedin icon" class="h-[24px]" /></a
          >
          <a href="https://www.instagram.com/cleys.ch?igsh=MTdiMDBqZ3FlcWF6MQ=="
            ><img src={instagram} alt="instagram icon" class="h-[24px]" /></a
          >
        </div>
        <ul class="lg:flex hidden space-x-7 mt-4">
          <a href="/impressum"><li>Impressum</li></a>
          <a href="/datenschutz"><li>Datenschutzerklärung</li></a>
          <a href="/credits"><li>credits</li></a>
        </ul>
      </div>
    </div>
  </div>
</footer>
