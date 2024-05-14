<script>
    import { slide } from 'svelte/transition';
    import PrimaryButton from '../components/primary-button.svelte';
</script>

<section class="flex justify-center mb-32" in:slide={{ delay: 0, duration: 1000 }}>
    <div
      class="flex flex-col mx-4 md:mx-10 lg:mx-16 lg:max-w-[1280px] w-full lg:my-24 pt-20 justify-center items-center text-center	" 
    >
      
    <p class="text-heading-lg mb-2">Diese Seite existiert nicht.</p>
    <p class="text-[18px] mb-8 text-">
        Wir können die von Ihnen gesuchte Seite leider nicht finden. Versuchen Sie, zur vorherigen Seite zurückzukehren.</p>
    <PrimaryButton text="Zurück zur Startseite" link="/" />
    </div>
  </section>