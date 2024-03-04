<script>
    import PrimaryButton from "./primary-button.svelte";
    import Shopify from "../lib/images/Shopify_Secondary.png";
    import Hostpoint from "../lib/images/Hostpoint.png";
    import Shore from "../lib/images/shore.png";

    function scheduleTime() {
        Calendly.initPopupWidget({url: 'https://calendly.com/bookcleys'});
        return false;
    }
</script>

<div class="flex items-center justify-center mx-auto max-w-[1568px]">
    <div class="flex flex-col justify-center items-center w-full lg:pt-32 pt-8">
        <div class="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 mx-4 lg:mx-16 relative">
            <div class="lg:col-span-7 col-span-2">
                <h2 class="text-display-lg font-bold pt-3 pb-2">
                    cleys is a global branding and UX design agency
                </h2>
                <p class="text-body pb-2">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <a href="#" on:click={scheduleTime}>
                    <PrimaryButton text="Jetzt Beratung anfordern"></PrimaryButton>
                <p class="text-body pt-16">Trusted by the world's most innovative Teams</p>
                <div class="flex justify-start items-center space-x-4 pt-8 overflow-hidden">
                    <img src={Shopify} alt="Shopify Logo" class="lg:h-[40px] h-[25px] opacity-50">
                    <img src={Hostpoint} alt="Hostpoint Logo" class="lg:h-[35px] h-[20px] opacity-50">
                    <img src={Shore} alt="Shore Logo" class="lg:h-[35px] h-[20px] opacity-50">
                </div>
            </div>
            <div class="border-black border-2 rounded-xl col-span-5 -mt-16 hidden lg:flex"></div>
        </div>
    </div>
</div>
