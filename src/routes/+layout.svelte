<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Hamburger from "../components/Hamburger.svelte";
</script>

<Header/>
<main class="h-[500vh]">
    <slot/>
</main>