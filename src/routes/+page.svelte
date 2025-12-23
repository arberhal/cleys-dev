<script lang="ts">
  import Logo from "$lib/images/logo.svg";
</script>

<div class="page">
  <img src={Logo} alt="Logo" class="logo" />

  <p class="headline">Hier entsteht etwas Wundervolles</p>

  <div class="contact">
    <a href="mailto:info@cleys.ch">info@cleys.ch</a>
    <a href="tel:+41715752355">+41&nbsp;71&nbsp;575&nbsp;23&nbsp;55</a>
  </div>
</div>

<style>
  .page {
    height: 100vh;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .logo {
    width: 240px;
    margin-bottom: 2.5rem;
    filter: invert(1);
  }

  .headline {
    font-family: "Proxima Nova", Arial, sans-serif;
    font-size: 1.6rem;
    letter-spacing: 0.08em;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-family: "Proxima Nova", Arial, sans-serif;
    font-size: 1rem;
    letter-spacing: 0.06em;
  }

  .contact a {
    color: white;
    text-decoration: none;
  }

  .contact a:hover {
    text-decoration: underline;
  }
</style>
