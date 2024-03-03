<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header/>
<main class="h-[500vh] z-999">
    <slot/>
</main>
<Footer/>
