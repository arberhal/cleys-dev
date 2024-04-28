<script>
function scheduleTime() {
    Calendly.initPopupWidget({ url: "https://calendly.com/bookcleys" });
    return false;
  }
</script>

<style>
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px; /* Adjust space between text and icon */
    padding-bottom: 4px;
    padding-top: 4px;
    border: none;
    background: transparent;
    cursor: pointer;
    overflow: hidden;
  }

  .text-container {
    position: relative;
    color: #000000;
  }

  .text-container::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #cbd5e1; /* Grayish underline */
  }

  .text-container::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: white; /* Animated underline */
    transition: width 0.3s ease-out;
  }

  .button:hover .text-container::after {
    width: 100%;
  }

  .icon-container {
    transition: transform 0.3s ease-out, color 0.3s ease-out;
    color: #cbd5e1; /* Initial icon color */
  }

  .button:hover .icon-container {
    transform: translateX(4px);
    color: white;
  }
</style>

<section class="flex justify-center lg:flex cleys-black">
  <div class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full my-24">
    <div class="lg:w-3/5">
    <p class="cleys text-heading-lg">Let's get in touch.</p>
    <p class="text-white text-display-md mt-8">Verwirkliche deine Idee, wir freuen uns dich bei uns zu begrüssen</p>
    <a href="/kontakt">
      <div class="flex lg:space-x-8">
        <div class="lg:block hidden">
      <button class="button mt-8">
        <span class="text-container text-body"><p class="text-white">Kontakt aufnehmen</p></span>
        <span class="icon-container">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
      </button>
    </div>
    <a href="https://calendly.com/bookcleys/beratung-vor-ort" target="_blank">
      <button class="button mt-8">
        <span class="text-container text-body"><p class="text-white">Kostenlose Erstberatung</p></span>
        <span class="icon-container">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
      </button>
    </a>>
    </div>
    </a>
  </div>  
  </div>
  </section>


  
    
 