# Projektbeskrivning

Denna väderapplikation byggd med React ger användaren möjlighet att välja en stad från en lista och få aktuell väderinformation från OpenWeatherMap API. Applikationen har en inloggningssida där användaren kan logga in eller skapa ett konto. Om användaren redan är inloggad omdirigeras hen till startsidan.

På startsidan finns ett skrivfält där användaren kan välja en stad från listan för att hämta väderinformation. Det finns även en knapp för att hämta vädret för det valda staden och en knapp för att spara staden med dess värderinformtion som favorit i database --> Firebase. Vidare finns det en knapp för att spara väder historik och en knapp för att logga ut, som tar användaren tillbaka till inloggningssidan.

Applikationen tillhandahåller också funktioner för att visa tidigare sökningar och sparade favoritplatser. Användaren kan se en historik över tidigare sökningar så länge hen är inloggad. Dessutom kan användaren se sparade favoritplatser tillsammans med deras väderinformation.

Detta är en responsiv applikation som anpassar sig till olika skärmstorlekar och enheter för att ge en bra användarupplevelse oavsett vilken enhet som används.


## Valet av react och jamförelsen med [https://vuejs.org/] och [https://angular.io/]

Nedanför diskuteras några aspekter som kan vara avgörande för valet av React framför de andra ramverken som nämns ovan (Vue och Angular).

1. Popularitet och användarbas:
React är ett av de mest populära ramverken för att bygga användargränssnitt och har en stor och aktiv användarbas. Det innebär att det finns ett omfattande ekosystem med verktyg, bibliotek och resurser tillgängliga för utvecklare. Den stora användarbasen gör det också lättare att hitta hjälp och support vid behov.

   Vue och Angular har också en betydande användarbas, men React har en mer utbredd popularitet och används av många stora företag och projekt runt om i världen.

2. Flexibilitet och skalbarhet:
React är känd för sin flexibilitet och skalbarhet. Det är ett komponentbaserat ramverk som tillåter utvecklare att bygga återanvändbara komponenter och strukturera sina applikationer på ett sätt som passar deras behov. React gör det möjligt att integrera med andra bibliotek och ramverk och kan användas för att bygga allt från enkla webbsidor till avancerade webbapplikationer.

   Vue är också komponentbaserat och erbjuder liknande flexibilitet som React. Angular å andra sidan har en tyngre inlärningskurva och en mer komplett uppsättning  funktioner och verktyg, vilket kan göra det mer lämpat för stora och komplexa projekt.

3. Virtuell DOM och prestanda:
En av de framträdande funktionerna i React är användningen av en virtuell DOM (Document Object Model). React använder en effektiv diff-algoritm för att uppdatera endast de delar av användargränssnittet som har ändrats, vilket resulterar i bättre prestanda och snabbare rendering jämfört med traditionell DOM-manipulation.

    Vue använder också en virtuell DOM och har liknande prestandafördelar. Angular å sin sida använder en annan teknik för att hantera uppdateringar i  användargränssnittet och kan vara lite tyngre när det gäller prestanda jämfört med React och Vue.

4. Lärande och inlärningskurva:
React har en relativt lätt inlärningskurva jämfört med Angular, vilket gör det till ett attraktivt val för utvecklare som är nya inom ramverket eller vill komma igång snabbt. React använder JavaScript-syntax och JSX (JavaScript XML) för att definiera komponenter, vilket är bekant för många webbutvecklare.

    Vue har också en lätt inlärningskurva och liknar React när det gäller syntax och koncept. Angular däremot har en brantare inlärningskurva och använder TypeScript som standardspråk, vilket kan vara en utmaning för utvecklare som inte är bekanta med det.

Sammanfattningsvis valdes React som ramverk för denna applikation på grund av dess popularitet, flexibilitet, skalbarhet, prestanda och relativt lätt inlärningskurva. Även om Vue och Angular är starka konkurrenter och har sina egna fördelar, ansågs React vara det bästa valet för att uppfylla programmets krav och underlätta utvecklingsprocessen inom tidsramen som vi hade.



### `Kör instruktioner:` 
1. skriv npm install i en terminal i den aktuella mappen där projektet finns för att installera alla beroenden som krävs. 
2. skapa en .env fil i projekt mappen och skriv REACT_APP_APIKEY=API Nykel ska vara här.
3. npm start för att starta projektet. 

