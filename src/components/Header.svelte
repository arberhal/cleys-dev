<script>
    import { onMount } from 'svelte';
    import linkedin from '../lib/images/linkedin.png';
    import instagram from '../lib/images/instagram.png';
  
    let lastScrollTop = 0;
    let headerClass = 'header-visible';

  
    function handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100){ // 100 is the scroll distance after which the header will be hidden
          headerClass = 'header-hidden';
      } else {
          headerClass = 'header-visible';
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }
  
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    });
  
    let showMenu = false;
    let menuAnimationClass = ''; 
    let logoColor = "fill-[#0079C1]"
    let hamburgerClass = "";
    let iconColor = "bg-black";
    let headerBG = 'bg-white';
  
    function toggleMenu() {
    if (showMenu) {
      menuAnimationClass = 'slide-out'; 
      hamburgerClass = "reverse";
      logoColor = "fill-[#0079C1]";
      iconColor = "bg-black";
      setTimeout(() => {
        showMenu = false;
      }, 500); // This is when the menu is actually set to be not shown
      setTimeout(() => {
        headerBG = 'bg-white'; // Change header background to white after a delay
      },350); // Change background color after 1000ms
      document.body.style.overflow = '';
    } else {
      showMenu = true;
      menuAnimationClass = 'slide-in';
      logoColor = "fill-white";
      iconColor = "bg-white";
      document.body.style.overflow = 'hidden';
      hamburgerClass = "animate";
      headerBG = 'bg-transparent'; // Keep header transparent when menu is open
    }
  }
   
  
  </script>

  <style>
    .header {
	  position: sticky;
	  top: 0;
	  z-index: 101;
	  transition: transform 0.3s linear, opacity 0.5s linear;
	  transform: translateY(0);
	  opacity: 1;
	}
  
	.header-hidden {
	  transform: translateY(-100%);
	  opacity: 0;
	}
  
	.header-visible {
	  transform: translateY(0);
	  opacity: 1;
	}
  
  .menu {
	top: 0;
	left: 0;
	transform: translateX(-100%);
	z-index: 100; 
	max-height: 100vh;
    overflow-y: auto;
  }

  @keyframes slideInFromLeft {
	from {
	  transform: translateX(-100%);
	  opacity: 0; 
	}
	to {
	  transform: translateX(0);
	  opacity: 1; 
	}
  }
  .slide-in {
	animation: slideInFromLeft 0.5s ease forwards;
	opacity: 0; 
}

@keyframes slideOutFromLeft {
	from {
	  transform: translateX(0);
	  opacity: 1; 
	}
	to {
	  transform: translateX(-100%);
	  opacity: 0; 
	}
  }
  .slide-out {
	animation: slideInFromLeft 0.5s ease forwards;
	opacity: 1; 
}

@keyframes slideOutToLeft {
	from {
	  transform: translateX(0);
	  opacity: 1;
	}
	to {
	  transform: translateX(-100%);
	  opacity: 0;
	}
  }
  
  .slide-out {
	animation: slideOutToLeft 0.5s ease forwards;
  }

  .animate-border {
        position: relative;
        overflow: hidden;
    }

    .animate-border::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .animate-border:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }




@keyframes slideInFromLeft {
	0% {
	  transform: translateX(-100%);
	  opacity: 0;
	}
	100% {
	  transform: translateX(0);
	  opacity: 1;
	}
  }
  
  .menu .animated-item {
	opacity: 0;
	animation: slideInFromLeft 0.5s ease-out forwards;
  }
  
  .menu .animated-item:nth-child(1) { animation-delay: 0.1s; }
  .menu .animated-item:nth-child(2) { animation-delay: 0.2s; }
  .menu .animated-item:nth-child(3) { animation-delay: 0.3s; }
  .menu .animated-item:nth-child(4) { animation-delay: 0.4s; }

  .hamburger {
        width: 40px;
        height: 40px;
        position: relative;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        transition: all 0.5s linear;
        border-radius: 3px;
    }
    .hamburger span:first-child {
        top: 12px;
    }
    .hamburger span:last-child {
        top: 24px;
    }

    @keyframes combineToMiddleFirst {
        to { top: 18px; }
    }
    @keyframes combineToMiddleLast {
        to { top: 18px; }
    }
    @keyframes toCross {
        to { transform: rotate(45deg); }
    }
    @keyframes toCrossInverse {
        to { transform: rotate(-45deg); }
    }
    /* Reverse animations */


    @keyframes fromCrossToSingleBar {
        0% { transform: rotate(45deg); top: 18px; }
        100% { transform: rotate(0deg); top: 18px; }
    }

    @keyframes fromCrossToSingleBarInverse {
        0% { transform: rotate(-45deg); top: 18px; }
        100% { transform: rotate(0deg); top: 18px; }
    }

    @keyframes fromSingleBarToMiddle {
        to { top: 12px; }
    }

    @keyframes fromSingleBarToMiddleLast {
        to { top: 24px; }
    }


    .animate span:first-child {
        animation: combineToMiddleFirst 0.5s forwards, toCross 0.5s 0.5s forwards;
    }
    .animate span:last-child {
        animation: combineToMiddleLast 0.5s forwards, toCrossInverse 0.5s 0.5s forwards;
    }
    /* Trigger reverse animations */
    .reverse span:first-child {
        animation: fromCrossToSingleBar 0.5s forwards, fromSingleBarToMiddle 0.5s 0.5s forwards;
    }
    .reverse span:last-child {
        animation: fromCrossToSingleBarInverse 0.5s forwards, fromSingleBarToMiddleLast 0.5s 0.5s forwards;
    }
  </style>
  
  <header class="header {headerClass} {headerBG} lg:flex lg:justify-center fixed ">
      <div class="flex justify-between lg:w-[1280px] mx-4 py-8 lg:mx-16 md:mx-10">
          <div class="h-[40px]"> 
        <a href="/" class="items-center"> 
            <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.37 138.26" class="{logoColor} fill- h-[40px]">
  
                <g>
                  <path class="cls-1" d="m197.47,72.73c0-19.44,15.84-35.16,35.4-35.16,10.08,0,19.32,4.32,25.68,11.04l-9.72,9.96c-3.72-4.2-9.24-6.84-15.96-6.84-11.28,0-20.28,9.12-20.28,21s9,21.12,20.28,21.12c6.36,0,11.4-2.28,15.12-6l9.72,9.84c-6.36,6.48-15.12,10.32-24.84,10.32-19.56,0-35.4-15.72-35.4-35.28Z"/>
                  <path class="cls-1" d="m266.82,21.13h14.88v85.08h-14.88V21.13Z"/>
                  <path class="cls-1" d="m292.74,72.73c0-19.44,15.84-34.68,36.12-34.68s36.12,15.24,36.12,35.16c0,1.08-.12,3-.48,4.8h-55.68c1.68,9.12,10.2,15.96,20.28,15.96,7.92,0,14.52-3.72,17.64-10.44h16.56c-4.68,14.28-17.88,24.48-34.44,24.48-20.28,0-36.12-15.84-36.12-35.28Zm55.56-6.12c-1.32-7.92-9.12-14.52-19.68-14.52s-18.48,6.12-19.56,14.52h39.24Z"/>
                  <path class="cls-1" d="m392.45,96.24l-26.28-56.4h16.32l18.36,39.12,16.32-39.12h16.32l-38.52,85.32h-16.44l13.92-28.92Z"/>
                  <path class="cls-1" d="m435.17,86.76h15c.12,4.32,4.44,7.44,9.96,7.44,5.88,0,9.6-2.88,9.6-7.2,0-5.52-5.88-6.72-11.88-8.28-12.48-3.12-21.36-8.28-21.36-20.4,0-11.4,10.32-20.28,23.88-20.28s23.88,9,23.88,20.76l-15-.12c0-4.44-4.2-6.96-8.88-6.96s-8.88,2.4-8.88,6.48c0,4.92,5.76,6.12,11.76,7.68,8.88,2.28,21.12,5.28,21.12,20.88,0,11.76-11.04,21.24-24.48,21.24-14.16,0-24.72-9.6-24.72-21.24Z"/>
                </g>
                <g>
                  <path class="cls-1" d="m153.8,71.17c-.1.52-.21,1-.3,1.48-.28,1.45-.72,2.85-1.33,4.2-.64,1.41-1.39,2.76-2.39,3.93-.82.96-1.76,1.84-2.69,2.71-1.09,1.03-2.39,1.79-3.73,2.45-1.6.79-3.28,1.39-5.06,1.62-1.23.16-2.48.32-3.72.29-2.28-.05-4.49-.52-6.6-1.4-1.45-.6-2.92-1.15-4.37-1.74-1.67-.67-3.33-1.37-5-2.04-2.07-.83-4.14-1.64-6.2-2.47-1.6-.64-3.2-1.31-4.8-1.95-2.34-.93-4.68-1.85-7.02-2.78-1.46-.58-2.93-1.14-4.38-1.73-.71-.29-1.45-.55-2.07-.98-1.14-.8-1.77-1.93-1.84-3.36-.07-1.44.39-2.66,1.44-3.65.5-.48,1.12-.77,1.77-1.02,1.41-.54,2.81-1.09,4.22-1.64,2.11-.83,4.21-1.65,6.32-2.49,1.8-.71,3.59-1.44,5.39-2.16,2.39-.96,4.79-1.91,7.19-2.87,1.98-.79,3.94-1.61,5.92-2.39,1.75-.69,3.5-1.41,5.28-2.02.93-.32,1.92-.49,2.89-.6,1.22-.13,2.46-.21,3.68-.15,1.97.1,3.88.57,5.73,1.3,1.61.64,3.11,1.48,4.47,2.55,1.45,1.14,2.74,2.46,3.81,3.99,1.09,1.55,1.94,3.21,2.53,5.01.41,1.23.66,2.5.86,3.79.03,1.37.03,2.72.03,4.11Z"/>
                  <path class="cls-1" d="m0,67.48c.05-.11.14-.2.14-.29.15-1.74.58-3.41,1.22-5.03.69-1.75,1.63-3.37,2.81-4.83.85-1.05,1.81-1.98,2.87-2.83,1.12-.91,2.33-1.66,3.62-2.28,1.49-.71,3.05-1.19,4.68-1.52,1.56-.31,3.13-.36,4.7-.27,1.98.11,3.91.57,5.76,1.32,2.51,1.02,5.04,2.01,7.56,3.02,1.91.77,3.81,1.56,5.72,2.32,2.31.93,4.63,1.85,6.95,2.78,1.55.62,3.09,1.25,4.64,1.87,1.93.76,3.88,1.51,5.81,2.27.8.31,1.63.58,2.41.95,1.7.81,2.66,2.15,2.7,4.08.04,1.87-.81,3.25-2.42,4.11-.83.45-1.75.72-2.64,1.07-1.97.78-3.94,1.55-5.91,2.33-2.15.85-4.3,1.7-6.45,2.56-1.73.69-3.45,1.4-5.18,2.09-1.33.53-2.67,1.05-4,1.59-1.92.77-3.83,1.58-5.75,2.34-1.68.67-3.36,1.36-5.09,1.92-1.07.35-2.21.51-3.33.68-.82.12-1.66.18-2.48.15-1.68-.06-3.35-.25-4.95-.81-1.11-.39-2.25-.76-3.28-1.31-1.13-.61-2.19-1.38-3.23-2.15-.64-.48-1.23-1.04-1.78-1.63-1.08-1.16-2.01-2.44-2.77-3.83-.83-1.52-1.43-3.12-1.82-4.8-.17-.73-.24-1.47-.36-2.21-.01-.09-.06-.18-.12-.28-.03-.04-.03-.08,0-.15,0-.3,0-.57-.03-.84,0-.48,0-.95.03-1.48,0-.29,0-.53-.03-.77,0-.03,0-.07,0-.13Z"/>
                  <path class="cls-1" d="m124.66,20.31c-.13.93-.21,1.84-.4,2.72-.35,1.64-.93,3.21-1.78,4.66-.61,1.03-1.3,2.01-2.01,2.97-.41.56-.88,1.08-1.39,1.54-.89.79-1.83,1.53-2.76,2.28-.86.69-1.73,1.37-2.6,2.05-.86.67-1.72,1.34-2.58,2.01-.99.78-1.98,1.57-2.98,2.35-.86.67-1.72,1.34-2.58,2.01-.99.78-1.98,1.57-2.98,2.35-.88.69-1.75,1.38-2.63,2.08-.89.7-1.78,1.39-2.66,2.09-.89.7-1.77,1.41-2.65,2.11-.83.66-1.65,1.31-2.48,1.97-.93.74-1.85,1.49-2.81,2.2-1.51,1.12-4.11.93-5.5-.37-1.04-.97-1.53-2.14-1.54-3.51,0-.59.16-1.19.24-1.78.11-.75.23-1.5.34-2.25.11-.73.22-1.45.33-2.18.09-.61.18-1.21.27-1.82.12-.79.24-1.57.36-2.36.11-.75.21-1.51.32-2.26.12-.8.24-1.6.36-2.4.11-.78.21-1.56.32-2.33.11-.8.24-1.6.36-2.4.11-.78.21-1.56.32-2.33.11-.8.24-1.6.36-2.4.09-.63.16-1.27.25-1.9.11-.78.22-1.55.33-2.33.09-.62.18-1.24.27-1.85.12-.8.24-1.6.35-2.4.11-.76.23-1.53.32-2.29.17-1.55.54-3.05,1.1-4.5.55-1.44,1.27-2.8,2.17-4.06.93-1.31,2.02-2.46,3.22-3.52,1.19-1.05,2.52-1.9,3.95-2.58,1.53-.74,3.14-1.26,4.82-1.56,1.42-.25,2.85-.36,4.29-.29,2.05.1,4.04.54,5.96,1.28,1.59.62,3.07,1.46,4.42,2.49,1.14.87,2.17,1.86,3.1,2.97,1.08,1.3,1.95,2.72,2.66,4.25.63,1.37,1.05,2.8,1.35,4.27.3,1.51.32,3.03.3,4.55,0,.15-.05.29-.07.47Z"/>
                  <path class="cls-1" d="m110.55,137.67c-.85.15-1.66.32-2.48.44-.65.09-1.3.15-1.96.15-.65,0-1.31-.06-1.96-.14-.8-.1-1.61-.2-2.39-.38-2.67-.6-5.1-1.74-7.24-3.45-.79-.63-1.56-1.31-2.26-2.04-.99-1.05-1.89-2.2-2.54-3.5-.54-1.09-1.04-2.2-1.48-3.34-.46-1.2-.68-2.46-.84-3.74-.17-1.34-.4-2.66-.59-4-.16-1.14-.3-2.29-.46-3.43-.16-1.16-.35-2.32-.52-3.49-.16-1.14-.29-2.29-.46-3.43-.19-1.31-.4-2.61-.59-3.92-.16-1.12-.3-2.24-.46-3.35-.16-1.13-.35-2.25-.52-3.38-.19-1.27-.34-2.55-.54-3.82-.26-1.71-.55-3.41-.81-5.11-.17-1.11-.24-2.21.27-3.28.67-1.41,1.74-2.27,3.26-2.59,1.28-.26,2.47.03,3.53.76.72.49,1.37,1.08,2.05,1.63.81.65,1.63,1.31,2.44,1.96.79.63,1.58,1.25,2.37,1.87.89.7,1.77,1.4,2.66,2.1.89.7,1.78,1.39,2.66,2.09.87.68,1.74,1.36,2.61,2.04.88.69,1.75,1.38,2.63,2.07.98.76,1.95,1.52,2.93,2.29.87.68,1.74,1.37,2.61,2.05.86.67,1.72,1.34,2.58,2.01.88.69,1.77,1.36,2.63,2.08.69.58,1.36,1.2,2,1.84,1.03,1.03,1.86,2.22,2.59,3.47.71,1.21,1.28,2.47,1.64,3.82.27,1.02.54,2.06.66,3.11.14,1.21.22,2.44.14,3.64-.08,1.24-.29,2.49-.61,3.68-.34,1.22-.83,2.42-1.37,3.57-.64,1.36-1.51,2.59-2.51,3.74-1.18,1.37-2.51,2.56-4.02,3.54-1.64,1.06-3.42,1.82-5.3,2.34-.11.03-.21.05-.35.08Z"/>
                  <path class="cls-1" d="m54.42,90.48c.68-.53,1.34-1.03,2-1.55,1.01-.8,2.02-1.6,3.03-2.41.83-.66,1.64-1.33,2.48-1.97,1.06-.79,1.97-1.79,3.18-2.36,1.11-.52,2.26-.56,3.4-.16,1.46.52,2.41,1.56,2.85,3.04.21.7.21,1.42.08,2.14-.15.89-.27,1.79-.41,2.69-.14.91-.29,1.81-.42,2.72-.11.75-.22,1.5-.33,2.26-.11.78-.24,1.55-.35,2.32-.09.61-.16,1.22-.25,1.82-.14.94-.29,1.89-.42,2.83-.09.62-.16,1.24-.25,1.86-.12.8-.25,1.6-.37,2.39-.11.8-.2,1.61-.31,2.41-.11.79-.24,1.57-.35,2.36-.11.78-.21,1.56-.32,2.33-.11.8-.24,1.6-.36,2.4-.09.61-.16,1.22-.25,1.82-.12.84-.25,1.67-.37,2.51-.11.81-.15,1.64-.32,2.45-.24,1.14-.54,2.27-.89,3.39-.63,2.02-1.7,3.81-3,5.45-1.25,1.58-2.74,2.9-4.43,3.99-1.96,1.26-4.07,2.11-6.35,2.6-1.76.38-3.52.43-5.29.34-2.08-.12-4.09-.64-6.01-1.48-1.44-.63-2.8-1.4-4.03-2.38-1.44-1.14-2.71-2.45-3.78-3.96-1.22-1.72-2.14-3.58-2.71-5.6-.26-.92-.46-1.88-.56-2.83-.12-1.11-.18-2.23-.15-3.34.03-1.8.41-3.54,1-5.24.69-2.03,1.71-3.88,3.07-5.55,1.04-1.28,2.22-2.42,3.55-3.41,1.01-.76,1.98-1.57,2.98-2.35,1.06-.84,2.12-1.67,3.19-2.5.98-.76,1.96-1.51,2.93-2.27,1.49-1.16,2.98-2.32,4.46-3.49,1.31-1.03,2.62-2.07,3.93-3.1.06-.05.11-.1.18-.18Z"/>
                  <path class="cls-1" d="m30.64,11.35c.71-1.62,1.59-3.11,2.7-4.47,1.19-1.46,2.56-2.7,4.12-3.74,1.96-1.3,4.08-2.24,6.4-2.68.83-.16,1.67-.29,2.51-.37.85-.07,1.72-.13,2.57-.07,1.06.08,2.12.26,3.16.47,1.63.33,3.17.96,4.64,1.75,1.17.63,2.26,1.36,3.27,2.23,1.42,1.23,2.67,2.6,3.67,4.2,1.2,1.91,2.08,3.95,2.48,6.17.24,1.31.41,2.64.61,3.96.2,1.31.41,2.61.59,3.92.17,1.17.29,2.34.46,3.5.19,1.31.4,2.61.59,3.92.16,1.14.3,2.29.46,3.43.16,1.14.35,2.27.52,3.41.19,1.3.34,2.6.53,3.9.21,1.43.45,2.85.67,4.28.19,1.27.35,2.55.53,3.82.14.94.37,1.88.42,2.83.04.85-.17,1.7-.65,2.44-.74,1.15-1.77,1.92-3.13,2.11-1.35.2-2.61-.11-3.7-.99-1.12-.91-2.24-1.8-3.36-2.69-1.14-.91-2.28-1.83-3.42-2.74-1.36-1.07-2.73-2.12-4.09-3.19-1.24-.98-2.47-1.98-3.72-2.96-1.08-.85-2.18-1.67-3.26-2.52-1.22-.95-2.42-1.92-3.64-2.88-1.08-.85-2.18-1.67-3.26-2.52-1.12-.88-2.24-1.76-3.34-2.66-.61-.5-1.21-1.03-1.75-1.61-1.61-1.71-2.9-3.64-3.71-5.85-.4-1.09-.78-2.21-1.02-3.34-.22-1.02-.28-2.07-.33-3.12-.13-2.54.31-4.99,1.24-7.36.08-.19.17-.38.25-.6Z"/>
                </g>
              </svg>
        </a>
          </div>
          <nav class="lg:flex text-black">
            <div class="lg:flex hidden">
          <ul class="lg:flex max-h-[40px] items-center">
            <li class="text-[20px] lg:ml-12 animate-border"><a href="/projects">Projekte</a></li>
            <li class="text-[20px] lg:ml-12 animate-border"><a href="/dienstleistungen">Services</a></li>
            <li class="text-[20px] lg:ml-12 animate-border"><a href="/ueberuns">Über uns</a></li>
            <li class="text-[20px] lg:ml-12 animate-border"><a href="/projects">Blog</a></li>
            <li class="text-[20px] lg:ml-12 animate-border"><a href="/kontakt">Kontakt</a></li>
          </ul>
            </div>
        <div class="lg:hidden">
        
        <button class="hamburger {hamburgerClass}" on:click={toggleMenu} type="button" aria-label="Toggle Menu">
            <span class="{iconColor}"></span>
            <span class="{iconColor}"></span>
    
        </button>
        </div>
          </nav>
      </div>


  </header>
  
  {#if showMenu}
  <div class="menu bg-[#17191E] text-white pt-[104px] fixed w-[100vw] h-[100vh] {menuAnimationClass} overflow-y-scroll flex flex-col justify-between">
    
    <div class="mx-4 pt-16 animated-item">
      <ul>
        <li class="mb-2 text-[30px] " on:click={toggleMenu}><a href="/ueberuns">Über uns</a></li>
        <li class="mb-2 text-[30px]" on:click={toggleMenu}><a href="/projects">Projekte</a></li>
        <li class="mb-2 text-[30px]" on:click={toggleMenu}><a href="/dienstleistungen">Services</a></li>
        <li class="mb-2 text-[30px]" on:click={toggleMenu}><a href="/contact">Kontakt</a></li>
      </ul>
    </div>
    <div class="mx-4  mb-[40px] animated-item">
      <p class="text-sm mb-[5px]">Kontaktiere uns direkt</p>
      <a href="mailto:info@cleys.ch" class="text-3xl">info@cleys.ch</a>
      <div class="flex animated-item pb-16 pt-8">
        <a href="https://instagram.com/cleys.ch" target="_blank">
         <img src="{instagram}" alt="" class="h-[25px] w-[25px] mr-6">
        </a>
        <a href="https://linkedin.com/cleys" target="_blank">
          <img src="{linkedin}" alt="" class="h-[25px] w-[25px]">
        </a>
      </div>
    </div>
    
  </div>
  {/if}