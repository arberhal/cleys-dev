<script>
  import PrimaryButton from "./primary-button.svelte";

  let tiltContainers = [];

  let mouseX = 0;
  let mouseY = 0;
  let isHovering = [false, false];

  function handleMouseMove(event, index) {
    const rect = tiltContainers[index].getBoundingClientRect();
    mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    isHovering[index] = true;
  }

  function handleMouseLeave(index) {
    isHovering[index] = false;
  }

  $: transformStyles = isHovering.map((hover, index) =>
    hover
      ? `perspective(1000px) rotateY(${mouseX * 60}deg) rotateX(${
          -mouseY * 60
        }deg) scale(1.1)`
      : ""
  );

  $: svgTransformStyles = isHovering.map((hover) =>
    hover ? "scale(1.2)" : ""
  );
</script>

<div class="mx-auto max-w-[1568px] mb-48">
  <div
    class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 lg:mt-64 mt-32 mx-4 lg:mx-16"
  >
    <div class="lg:col-span-6 col-span-2">
      <p class="text-gray-500 text-body">
        Software for Ventures & Private Equity
      </p>
      <h2 class="text-display-md font-bold pt-3 pb-2 cleys">
        Wir beherrschen die neusten Technologien
      </h2>
      <p class="text-body pb-2">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <PrimaryButton text="Über uns"></PrimaryButton>
    </div>
    <!-- Squares Section -->
    <div class="lg:col-span-6 col-span-2 lg:gap-6 grid grid-cols-3 gap-4 pt-8">

      <!-- Tailwind Square -->
      <a href="https://tailwindcss.com/" target="_blank">
        <div
          bind:this={tiltContainers[0]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[0]};`}
          on:mousemove={(event) => handleMouseMove(event, 0)}
          on:mouseleave={() => handleMouseLeave(0)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[0]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>file_type_tailwind</title>
              <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                style="fill:#44a8b3"
              />
            </svg>
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              TailwindCSS
            </p>
          </div>
        </div>
      </a>

      <!-- Svelte Square -->
      <a href="https://svelte.dev/" target="_blank">
        <div
          bind:this={tiltContainers[1]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[1]};`}
          on:mousemove={(event) => handleMouseMove(event, 1)}
          on:mouseleave={() => handleMouseLeave(1)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[1]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 107 128"
              ><title>svelte-logo</title><path
                d="M94.1566,22.8189c-10.4-14.8851-30.94-19.2971-45.7914-9.8348L22.2825,29.6078A29.9234,29.9234,0,0,0,8.7639,49.6506a31.5136,31.5136,0,0,0,3.1076,20.2318A30.0061,30.0061,0,0,0,7.3953,81.0653a31.8886,31.8886,0,0,0,5.4473,24.1157c10.4022,14.8865,30.9423,19.2966,45.7914,9.8348L84.7167,98.3921A29.9177,29.9177,0,0,0,98.2353,78.3493,31.5263,31.5263,0,0,0,95.13,58.117a30,30,0,0,0,4.4743-11.1824,31.88,31.88,0,0,0-5.4473-24.1157"
                style="fill:#ff3e00"
              /><path
                d="M45.8171,106.5815A20.7182,20.7182,0,0,1,23.58,98.3389a19.1739,19.1739,0,0,1-3.2766-14.5025,18.1886,18.1886,0,0,1,.6233-2.4357l.4912-1.4978,1.3363.9815a33.6443,33.6443,0,0,0,10.203,5.0978l.9694.2941-.0893.9675a5.8474,5.8474,0,0,0,1.052,3.8781,6.2389,6.2389,0,0,0,6.6952,2.485,5.7449,5.7449,0,0,0,1.6021-.7041L69.27,76.281a5.4306,5.4306,0,0,0,2.4506-3.631,5.7948,5.7948,0,0,0-.9875-4.3712,6.2436,6.2436,0,0,0-6.6978-2.4864,5.7427,5.7427,0,0,0-1.6.7036l-9.9532,6.3449a19.0329,19.0329,0,0,1-5.2965,2.3259,20.7181,20.7181,0,0,1-22.2368-8.2427,19.1725,19.1725,0,0,1-3.2766-14.5024,17.9885,17.9885,0,0,1,8.13-12.0513L55.8833,23.7472a19.0038,19.0038,0,0,1,5.3-2.3287A20.7182,20.7182,0,0,1,83.42,29.6611a19.1739,19.1739,0,0,1,3.2766,14.5025,18.4,18.4,0,0,1-.6233,2.4357l-.4912,1.4978-1.3356-.98a33.6175,33.6175,0,0,0-10.2037-5.1l-.9694-.2942.0893-.9675a5.8588,5.8588,0,0,0-1.052-3.878,6.2389,6.2389,0,0,0-6.6952-2.485,5.7449,5.7449,0,0,0-1.6021.7041L37.73,51.719a5.4218,5.4218,0,0,0-2.4487,3.63,5.7862,5.7862,0,0,0,.9856,4.3717,6.2437,6.2437,0,0,0,6.6978,2.4864,5.7652,5.7652,0,0,0,1.602-.7041l9.9519-6.3425a18.978,18.978,0,0,1,5.2959-2.3278,20.7181,20.7181,0,0,1,22.2368,8.2427,19.1725,19.1725,0,0,1,3.2766,14.5024,17.9977,17.9977,0,0,1-8.13,12.0532L51.1167,104.2528a19.0038,19.0038,0,0,1-5.3,2.3287"
                style="fill:#fff"
              /></svg
            >
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Svelte
            </p>
          </div>
        </div>
      </a>

      <!-- Wordpress Square -->
      <a href="https://wordpress.com/de/" target="_blank">
        <div
          bind:this={tiltContainers[2]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[2]};`}
          on:mousemove={(event) => handleMouseMove(event, 2)}
          on:mouseleave={() => handleMouseLeave(2)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[2]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 0 256 255"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g fill="#464342">
                <path
                  d="M18.1239675,127.500488 C18.1239675,170.795707 43.284813,208.211252 79.7700163,225.941854 L27.5938862,82.985626 C21.524813,96.5890081 18.1239675,111.643057 18.1239675,127.500488 L18.1239675,127.500488 Z M201.345041,121.980878 C201.345041,108.462829 196.489366,99.1011382 192.324683,91.8145041 C186.780098,82.8045528 181.583089,75.1745041 181.583089,66.1645528 C181.583089,56.1097886 189.208976,46.7501789 199.950569,46.7501789 C200.435512,46.7501789 200.89548,46.8105366 201.367935,46.8375935 C181.907772,29.0091707 155.981008,18.1239675 127.50465,18.1239675 C89.2919675,18.1239675 55.6727154,37.7298211 36.1147317,67.4258211 C38.6809756,67.5028293 41.0994472,67.5569431 43.1536911,67.5569431 C54.5946016,67.5569431 72.3043902,66.1687154 72.3043902,66.1687154 C78.2007154,65.8211382 78.8958699,74.4814309 73.0057886,75.1786667 C73.0057886,75.1786667 67.0803252,75.8759024 60.4867642,76.2213984 L100.318699,194.699447 L124.25574,122.909138 L107.214049,76.2172358 C101.323967,75.8717398 95.744,75.1745041 95.744,75.1745041 C89.8497561,74.8290081 90.540748,65.8169756 96.4349919,66.1645528 C96.4349919,66.1645528 114.498602,67.5527805 125.246439,67.5527805 C136.685268,67.5527805 154.397138,66.1645528 154.397138,66.1645528 C160.297626,65.8169756 160.990699,74.4772683 155.098537,75.1745041 C155.098537,75.1745041 149.160585,75.8717398 142.579512,76.2172358 L182.107577,193.798244 L193.017756,157.340098 C197.746472,142.211122 201.345041,131.34465 201.345041,121.980878 L201.345041,121.980878 Z M129.42361,137.068228 L96.6056585,232.43135 C106.404423,235.31187 116.76722,236.887415 127.50465,236.887415 C140.242211,236.887415 152.457366,234.685398 163.827512,230.68722 C163.534049,230.218927 163.267642,229.721496 163.049106,229.180358 L129.42361,137.068228 L129.42361,137.068228 Z M223.481756,75.0225691 C223.95213,78.5066667 224.218537,82.2467642 224.218537,86.2699187 C224.218537,97.3694959 222.145561,109.846894 215.901659,125.448325 L182.490537,222.04774 C215.00878,203.085008 236.881171,167.854829 236.881171,127.502569 C236.883252,108.485724 232.025496,90.603187 223.481756,75.0225691 L223.481756,75.0225691 Z M127.50465,0 C57.2003902,0 0,57.1962276 0,127.500488 C0,197.813073 57.2003902,255.00722 127.50465,255.00722 C197.806829,255.00722 255.015545,197.813073 255.015545,127.500488 C255.013463,57.1962276 197.806829,0 127.50465,0 L127.50465,0 Z M127.50465,249.162927 C60.4243252,249.162927 5.84637398,194.584976 5.84637398,127.500488 C5.84637398,60.4201626 60.4222439,5.84637398 127.50465,5.84637398 C194.582894,5.84637398 249.156683,60.4201626 249.156683,127.500488 C249.156683,194.584976 194.582894,249.162927 127.50465,249.162927 L127.50465,249.162927 Z"
                ></path>
              </g>
            </svg>
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Wordpress
            </p>
          </div>
        </div>
      </a>

      <!-- Elementor Square -->
      <a href="https://elementor.com/" target="_blank">
        <div
          bind:this={tiltContainers[3]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[3]};`}
          on:mousemove={(event) => handleMouseMove(event, 3)}
          on:mouseleave={() => handleMouseLeave(3)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[3]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              fill="none"
              ><g clip-path="url(#clip0)"
                ><path
                  d="M200 0C89.5321 0 0 89.5321 0 200C0 310.431 89.5321 400 200 400C310.468 400 400 310.468 400 200C399.964 89.5321 310.431 0 200 0ZM150.009 283.306H116.694V116.658H150.009V283.306ZM283.306 283.306H183.324V249.991H283.306V283.306ZM283.306 216.639H183.324V183.324H283.306V216.639ZM283.306 149.973H183.324V116.658H283.306V149.973Z"
                  fill="#92003B"
                ></path></g
              ><defs
                ><clipPath id="clip0"
                  ><rect width="400" height="400" fill="white"></rect></clipPath
                ></defs
              ></svg
            >
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Elementor
            </p>
          </div>
        </div>
      </a>

      <!-- Shopify Square -->
      <a href="https://www.shopify.com/" target="_blank">
        <div
          bind:this={tiltContainers[4]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[4]};`}
          on:mousemove={(event) => handleMouseMove(event, 4)}
          on:mouseleave={() => handleMouseLeave(4)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[4]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 0 256 292"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M223.773626,57.3402078 C223.572932,55.8793405 222.29409,55.0718963 221.236945,54.9832175 C220.182133,54.8945386 197.853734,53.2399781 197.853734,53.2399781 C197.853734,53.2399781 182.346604,37.8448639 180.64537,36.1412966 C178.941803,34.4377293 175.616346,34.9558004 174.325836,35.336186 C174.134476,35.3921937 170.937371,36.3793293 165.646977,38.0152206 C160.466266,23.1101737 151.325344,9.41162582 135.241802,9.41162582 C134.798408,9.41162582 134.341011,9.43029505 133.883615,9.45596525 C129.309654,3.40713457 123.643542,0.779440373 118.74987,0.779440373 C81.285392,0.779440373 63.3862673,47.6135387 57.7738299,71.414474 C43.2164974,75.9254268 32.8737437,79.1318671 31.5528956,79.5472575 C23.4271131,82.0956074 23.1704111,82.3523094 22.1039313,90.0090275 C21.2988208,95.8058236 0.0369009009,260.235071 0.0369009009,260.235071 L165.714653,291.277334 L255.485648,271.856667 C255.485648,271.856667 223.971987,58.8010751 223.773626,57.3402078 L223.773626,57.3402078 Z M156.48972,40.8482763 C152.328815,42.1364532 147.598499,43.5996542 142.471461,45.1865388 C142.476129,44.1994032 142.480796,43.2262696 142.480796,42.1644571 C142.480796,32.8998514 141.194953,25.4414939 139.132003,19.5280151 C147.418807,20.5688247 152.937899,29.9967861 156.48972,40.8482763 L156.48972,40.8482763 Z M128.852258,21.3646006 C131.155574,27.1380602 132.65378,35.4225312 132.65378,46.6030666 C132.65378,47.1748118 132.649112,47.6975503 132.644445,48.2272897 C123.52686,51.0510108 113.620499,54.1174319 103.690802,57.1931876 C109.265901,35.6768995 119.716003,25.2851391 128.852258,21.3646006 L128.852258,21.3646006 Z M117.720729,10.8281537 C119.337951,10.8281537 120.966841,11.3765623 122.525722,12.4500431 C110.519073,18.099819 97.6489725,32.3304399 92.2138928,60.7473424 C84.2701352,63.2070135 76.506069,65.6106769 69.3277499,67.834649 C75.6939575,46.1596724 90.8113669,10.8281537 117.720729,10.8281537 L117.720729,10.8281537 Z"
                  fill="#95BF46"
                ></path>
                <path
                  d="M221.236945,54.9832175 C220.182133,54.8945386 197.853734,53.2399781 197.853734,53.2399781 C197.853734,53.2399781 182.346604,37.8448639 180.64537,36.1412966 C180.008283,35.5065427 179.149498,35.1821649 178.251042,35.0421456 L165.723988,291.275001 L255.485648,271.856667 C255.485648,271.856667 223.971987,58.8010751 223.773626,57.3402078 C223.572932,55.8793405 222.29409,55.0718963 221.236945,54.9832175"
                  fill="#5E8E3E"
                ></path>
                <path
                  d="M135.241802,104.585029 L124.173282,137.510551 C124.173282,137.510551 114.474617,132.334507 102.586984,132.334507 C85.1592573,132.334507 84.2818035,143.272342 84.2818035,146.028387 C84.2818035,161.066452 123.48252,166.828244 123.48252,202.052414 C123.48252,229.764553 105.90544,247.610004 82.2048516,247.610004 C53.7646126,247.610004 39.2212821,229.90924 39.2212821,229.90924 L46.8359944,204.750118 C46.8359944,204.750118 61.7853808,217.585214 74.4011133,217.585214 C82.6435785,217.585214 85.9970391,211.095323 85.9970391,206.353338 C85.9970391,186.736644 53.8369559,185.861524 53.8369559,153.629098 C53.8369559,126.500372 73.3089633,100.246767 112.614694,100.246767 C127.760108,100.246767 135.241802,104.585029 135.241802,104.585029"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Shopify
            </p>
          </div>
        </div>
      </a>

      <!-- Azure Square -->
      <a href="https://azure.microsoft.com/de-de" target="_blank">
        <div
          bind:this={tiltContainers[5]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[5]};`}
          on:mousemove={(event) => handleMouseMove(event, 5)}
          on:mouseleave={() => handleMouseLeave(5)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[5]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 -16.33 161.67 161.67"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                d="m88.33 0-47.66 41.33-40.67 73h36.67zm6.34 9.67-20.34 57.33 39 49-75.66 13h124z"
                fill="#0072c6"
              /></svg
            >
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Azure
            </p>
          </div>
        </div>
      </a>

      <!-- Figma Square -->
      <a href="https://www.figma.com/de/" target="_blank">
        <div
          bind:this={tiltContainers[6]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[6]};`}
          on:mousemove={(event) => handleMouseMove(event, 6)}
          on:mouseleave={() => handleMouseLeave(6)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[6]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7.678 7.68"
              ><path
                d="M2.56 7.68A1.28 1.28 0 0 0 3.84 6.4V5.12H2.56a1.28 1.28 0 0 0 0 2.56z"
                fill="#0acf83"
              /><path
                d="M1.28 3.84a1.28 1.28 0 0 1 1.28-1.28h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
                fill="#a259ff"
              /><path
                d="M1.28 1.28A1.28 1.28 0 0 1 2.559 0h1.28v2.56H2.56a1.28 1.28 0 0 1-1.28-1.28z"
                fill="#f24e1e"
              /><path
                d="M3.84 0h1.28a1.28 1.28 0 0 1 0 2.56H3.84z"
                fill="#ff7262"
              /><path
                d="M6.4 3.84a1.28 1.28 0 0 1-2.56 0 1.28 1.28 0 0 1 2.56 0z"
                fill="#1abcfe"
              /></svg
            >
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Figma
            </p>
          </div>
        </div>
      </a>

      <!-- MongoDB Square -->
      <a href="https://www.mongodb.com/de-de" target="_blank">
        <div
          bind:this={tiltContainers[7]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[7]};`}
          on:mousemove={(event) => handleMouseMove(event, 7)}
          on:mouseleave={() => handleMouseLeave(7)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[7]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 0 120 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.0089 28.7559C72.1328 15.9086 62.7673 2.86053 60.8539 0.150554C60.6525 -0.0501848 60.3503 -0.0501848 60.1489 0.150554C58.2355 2.86053 48.8699 15.9086 37.9938 28.7559C-55.3594 147.292 52.6968 227.287 52.6968 227.287L53.6031 227.889C54.4087 240.235 56.4228 258 56.4228 258H60.451H64.4792C64.4792 258 66.4934 240.335 67.299 227.889L68.2052 227.187C68.306 227.187 176.362 147.292 83.0089 28.7559ZM60.451 225.48C60.451 225.48 55.6172 221.365 54.3081 219.257V219.057L60.1489 89.9813C60.1489 89.5798 60.7532 89.5798 60.7532 89.9813L66.594 219.057V219.257C65.2848 221.365 60.451 225.48 60.451 225.48Z"
                fill="#00684A"
              />
            </svg>
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              MongoDB
            </p>
          </div>
        </div>
      </a>

      <!-- Strapi Square -->
      <a href="https://strapi.io/" target="_blank">
        <div
          bind:this={tiltContainers[8]}
          class="group rounded-2xl relative w-full pb-[100%] border flex items-center justify-center transition-transform duration-10"
          style={`transform: ${transformStyles[8]};`}
          on:mousemove={(event) => handleMouseMove(event, 8)}
          on:mouseleave={() => handleMouseLeave(8)}
          role="presentation"
        >
          <div
            style={`transform: ${svgTransformStyles[8]};`}
            class="absolute inset-0 flex items-center justify-center transition-transform duration-50"
          >
            <svg
              class="transition-transform duration-300 transform group-hover:-translate-y-1 w-1/3 h-1/3"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 22.1867C0 11.7278 0 6.49832 3.24916 3.24916C6.49832 0 11.7278 0 22.1867 0H41.8133C52.2722 0 57.5017 0 60.7508 3.24916C64 6.49832 64 11.7278 64 22.1867V41.8133C64 52.2722 64 57.5017 60.7508 60.7508C57.5017 64 52.2722 64 41.8133 64H22.1867C11.7278 64 6.49832 64 3.24916 60.7508C0 57.5017 0 52.2722 0 41.8133V22.1867Z"
                fill="#4945FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44.156 19.4131H22.6094V30.4004H33.596V41.3864H44.5827V19.8398C44.5827 19.6041 44.3917 19.4131 44.156 19.4131Z"
                fill="white"
              />
              <rect
                x="33.1719"
                y="30.4004"
                width="0.426667"
                height="0.426667"
                fill="white"
              />
              <path
                d="M22.6172 30.4004H33.1772C33.4128 30.4004 33.6039 30.5914 33.6039 30.8271V41.3871H23.0439C22.8082 41.3871 22.6172 41.196 22.6172 40.9604V30.4004Z"
                fill="#9593FF"
              />
              <path
                d="M33.6016 41.3867H44.5882L33.9657 52.0092C33.8314 52.1436 33.6016 52.0484 33.6016 51.8584V41.3867Z"
                fill="#9593FF"
              />
              <path
                d="M22.6151 30.3998H12.1434C11.9534 30.3998 11.8582 30.17 11.9926 30.0356L22.6151 19.4131V30.3998Z"
                fill="#9593FF"
              />
            </svg>
          </div>
          <div
            class="absolute lg:bottom-4 bottom-2 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p class="text-body-sm font-semibold text-black text-center">
              Strapi
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
