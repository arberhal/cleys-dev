<script>
  import { fade } from "svelte/transition";
  import PrimaryButton from "../primary-button.svelte";
  import emailjs from '@emailjs/browser';
  import FormButton from "./Form-Button.svelte";
  
  let form;
  let submissionSuccess = 0;

  const sendEmail = (e) => {
      emailjs
        .sendForm('service_lkg6jag', 'template_61hvh59', e.target, {
          publicKey: 'z3T9hSU5_sCj8jeqz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            submissionSuccess = 1;
            form.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            submissionSuccess = 2;
          },
        );
    };
</script>

<div class="mx-auto max-w-[1568px]">
    <div class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mx-4 lg:mx-16">
      <div class="lg:col-span-7 col-span-2">
        <div style="opacity: 1; transform: none;">
            <form bind:this={form} on:submit|preventDefault={sendEmail}>
                <h2 class="text-body font-bold text-neutral-950">
                    Kontaktformular
                </h2>
                <div class="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <div class="group relative z-0 transition-all focus-within:z-10">
                      <input
                        type="text"
                        id="name"
                        autocomplete="name"
                        placeholder=" "
                        class="peer block w-full border border-neutral-200 bg-transparent px-6 pb-4 pt-12 text-body-sm text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                        name="name"
                        value=""
                        aria-required="true"
                        required
                      /><label
                        for="name"
                        class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-body-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                        >Name<span class="text-red-500">*</span></label
                      >
                </div>
                <div class="group relative z-0 transition-all focus-within:z-10">
                    <input
                      type="email"
                      id="email"
                      autocomplete="email"
                      placeholder=" "
                      class="peer block w-full border border-neutral-200 bg-transparent px-6 pb-4 pt-12 text-body-sm text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                      name="email"
                      value=""
                      required
                    /><label
                      for="email"
                      class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-body-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                      >Email<span class="text-red-500">*</span></label
                    >
                </div>
                <div class="group relative z-0 transition-all focus-within:z-10">
                    <input
                      type="text"
                      id="firma"
                      autocomplete="organization"
                      placeholder=" "
                      class="peer block w-full border border-neutral-200 bg-transparent px-6 pb-4 pt-12 text-body-sm text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                      name="firma"
                      value=""
                    /><label
                      for="firma"
                      class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-body-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                      >Firma</label
                    >
                  </div>
                  <div class="group relative z-0 transition-all focus-within:z-10">
                    <input
                      type="date"
                      id="datum"
                      autocomplete=""
                      placeholder=" "
                      class="peer block w-full border border-neutral-200 bg-transparent px-6 pb-4 pt-12 text-body-sm text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                      name="datum"
                      value=""
                    /><label
                      for="datum"
                      class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-body-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                      >Gewünschtes Startdatum</label
                    >
                  </div>
                  <div
                class="border border-neutral-200 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <fieldset>
                    <legend class="text-body-sm text-neutral-500">Dienstleistung</legend>
                    <div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <label class="flex gap-x-3"
                            ><input
                                type="checkbox"
                                class="h-6 w-6 flex-none appearance-none rounded-xl border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                                name="webseite"
                                value="Webseite"
                            /><span class="text-body-sm text-neutral-950"
                                >Webseite</span
                            ></label
                        ><label class="flex gap-x-3"
                            ><input
                                type="checkbox"
                                class="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                                name="ecommerce"
                                value="E-Commerce"
                            /><span class="text-body-sm text-neutral-950"
                                >E-Commerce</span
                            ></label
                        ><label class="flex gap-x-3"
                            ><input
                                type="checkbox"
                                class="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                                name="branding"
                                value="Branding"
                            /><span class="text-body-sm text-neutral-950"
                                >Branding</span
                            ></label
                        ><label class="flex gap-x-3"
                            ><input
                                type="checkbox"
                                class="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                                name="andere"
                                value="Andere"
                            /><span class="text-body-sm text-neutral-950"
                                >Andere</span
                            ></label
                        >
                    </div>
                </fieldset>
                </div>
                  <div class="group relative z-0 transition-all focus-within:z-10">
                    <textarea
                      id="message"
                      placeholder=" "
                      class="resize-none peer block w-full border border-neutral-200 bg-transparent px-6 pb-32 pt-12 text-body-sm text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
                      name="message"
                      value=""
                      required
                    /><label
                      for="message"
                      class="pointer-events-none absolute left-6 top-[20%] -mt-3 origin-left text-body-sm text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
                      >Nachricht<span class="text-red-500">*</span></label
                    >
                  </div>
                </div>
                <div class="g-recaptcha" data-sitekey="6LdcfpUpAAAAAPB1MAf52bXcx0YhUwNr8tUkYd6Y"></div>
                <div class="pt-8">
                <FormButton text="Nachricht senden" />
                 </div>
                 {#if submissionSuccess === 1}
                 <div transition:fade={{ duration: 300 }} class="mt-8 mb-8 p-4 text-body-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                  <span class="font-medium">Erfolgreich!</span> Ihre Nachricht wurde übermittelt.
                </div>
                {:else if submissionSuccess === 2}
                  <div transition:fade={{ duration: 300 }} class="mt-8 mb-8 p-4 text-body-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span class="font-medium">Fehler!</span> Ihre Nachricht konnte nicht übermittelt werden.
                  </div>
                {/if}
            </form>
        </div>
      </div>
    <div class="lg:col-span-5 col-span-2 lg:pl-8">
        <div class="mt-14">
        <div class="">
        <svg class="h-10 w-10 mr-4" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9996 11.5C20.9996 16.1944 17.194 20 12.4996 20C11.4228 20 10.3928 19.7998 9.44478 19.4345C9.27145 19.3678 9.18478 19.3344 9.11586 19.3185C9.04807 19.3029 8.999 19.2963 8.92949 19.2937C8.85881 19.291 8.78127 19.299 8.62619 19.315L3.50517 19.8444C3.01692 19.8948 2.7728 19.9201 2.6288 19.8322C2.50337 19.7557 2.41794 19.6279 2.3952 19.4828C2.36909 19.3161 2.48575 19.1002 2.71906 18.6684L4.35472 15.6408C4.48942 15.3915 4.55677 15.2668 4.58728 15.1469C4.6174 15.0286 4.62469 14.9432 4.61505 14.8214C4.60529 14.6981 4.55119 14.5376 4.443 14.2166C4.15547 13.3636 3.99962 12.45 3.99962 11.5C3.99962 6.80558 7.8052 3 12.4996 3C17.194 3 20.9996 6.80558 20.9996 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        <div class="pt-4">
            <h2 class="text-body font-bold">Buchen Sie ein Gespräch</h2>
            <p class="pt-2 text-body-sm">Unser Team steht Ihnen für alle Fragen zur Verfügung.</p>
            <div class="pt-4">
            <PrimaryButton size="-sm" text="Jetzt Buchen"/>
            </div>
        </div>
        </div>
        <div class="mt-16">
            <svg class="h-10 w-10" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0497 6C15.0264 6.19057 15.924 6.66826 16.6277 7.37194C17.3314 8.07561 17.8091 8.97326 17.9997 9.95M14.0497 2C16.0789 2.22544 17.9713 3.13417 19.4159 4.57701C20.8606 6.01984 21.7717 7.91101 21.9997 9.94M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <div class="pt-4">
                <h2 class="text-body font-bold">Rufen Sie uns an</h2>
                <p class="pt-2 text-body-sm">Mo - Fr von 8:00 Uhr bis 17:00 Uhr.</p>
                <p class="pt-4 text-body-sm text-neutral-500">+41 78 317 48 44</p>
            </div>
            </div>
            <div class="mt-16">
                <svg class="h-10 w-10" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                <div class="pt-4">
                    <h2 class="text-body font-bold">Chatte mit uns</h2>
                    <p class="pt-2 text-body-sm">Unser Team steht Ihnen für alle Fragen zur Verfügung.</p>
                    <p class="pt-4 text-body-sm text-neutral-500">info@cleys.ch</p>
                </div>
                </div>
        </div>
    </div>
    </div>
</div>
