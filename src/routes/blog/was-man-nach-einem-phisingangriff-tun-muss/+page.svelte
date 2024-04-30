<script>
  import phising from "$lib/images/blog/phising.webp";
</script>
<svelte:head>
  <meta name="robots" content="noindex, nofollow">
</svelte:head>

<section class="flex justify-center">
  <div class="mx-4 flex flex-col lg:mx-16 md:mx-10 w-full lg:max-w-[1280px]">
    <div>
      <h2 class="text-display-lg font-semibold">
        Aktueller Cyber-Threat Report warnt vor anhaltenden Gefahren
      </h2>
      <p class="text-body mt-4">Phishing bleibt ein großes Risiko</p>
    </div>
    <div>
      <img src={phising} alt="hacker bild" />
    </div>
    <div class="text-body max-w-[1024px] mx-auto">
      <p>Sie werden Sie erwischen, wenn sie können.</p>
      <p>
        <br />
        Phishing-Angriffe stellen weiterhin eine große Bedrohung für Unternehmen
        und Nutzer dar. Der neue Annual Cyber-Threat Report des Cybersicherheitsunternehmens
        <a
          href="https://www.reliaquest.com/wp-content/uploads/2024/03/2024-ReliaQuest-Annual-Threat-Report-4.pdf"
          class="border-b font-semibold">ReliaQuest</a
        >, der am 26. März veröffentlicht wurde, zeigt, dass böswillige Akteure
        im Jahr 2023 bei 71,1 % der Angriffe den Hack für den Zugriff auf
        Systeme nutzen.
      </p>
      <p>
        <br />
        Die Runde macht's. Phishing wird von Drittanbietern als eine Art Software-as-a-Service
        (SaaS) angeboten, so dass Angreifer vorgefertigte Software für Business-E-Mail-Compromise
        (BEC)-Phishing-Hacks nutzen können. ReliaQuest stellte fest, dass dieses
        Geschäftsmodell, auch bekannt als PhaaS, weit verbreitet ist.
      </p>
      <p>
        <br>
        "Phishing-Kits und -Dienste sind auf kriminellen Plattformen weit
        verbreitet, was die Durchführung von BEC erleichtert", heißt es in dem
        Bericht. "Ein bemerkenswerter Phishing-'Shop' ist W3LL Store, eine
        Website, auf der Bedrohungsakteure eine breite Palette von Phishing-Kits
        anbieten.
      </p>
      <p>
        <br>
        Nieder mit der Krankheit. Einer der produktivsten PhaaS-Anbieter ist
        "darcula", eine Plattform, die Textnachrichten verwendet, um Ziele zu
        täuschen und auf deren Systeme zuzugreifen. Bei darcula handelt es sich
        um eine chinesischsprachige Plattform, die das
        RCS-Kommunikationsprotokoll (Rich Communication Services) manipuliert,
        um die iMessage- und Android-Sicherheitsvorkehrungen zu umgehen, wie ein
        Forscher des britischen Cybercrime-Unternehmens Netcraft am 27. März
        beschrieb.
      </p>
      <p>
        <br>
        "Die Verwendung von iMessage und RCS anstelle von SMS zum Versenden von
        Textnachrichten hat den Nebeneffekt, dass SMS-Firewalls umgangen werden,
        was mit großem Erfolg genutzt wird, um USPS zusammen mit Postdiensten
        und anderen etablierten Organisationen in mehr als 100 Ländern
        anzugreifen", heißt es in einem Netcraft-Blogpost zur Erläuterung der
        Bedrohung.
      </p>
      <p>
        <br>
        Netcraft rät Anwendern und Unternehmen außerdem zur Vorsicht im Umgang
        mit verdächtig erscheinenden Kontakten.
      </p>
      <p>
        <br>
        "Seien Sie äußerst skeptisch bei Links, die Sie von unbekannten
        Absendern erhalten", heißt es in dem Blogpost. Achten Sie auf ungenaue
        Grammatik, Rechtschreibfehler, Angebote, die zu gut sind, um wahr zu
        sein" oder dringende Maßnahmen erfordern. Wenn Sie eine Nachricht von
        einer Organisation erwarten, navigieren Sie zu deren offizieller Website
        und folgen Sie keinen Links.
      </p>
    </div>
  </div>
</section>
