# JavaScript project: 2024-2025

In dit project implementeer je een memory game, een variant op het Concentration kaartspel, in Javascript.
Dit project wordt ingediend via GitLab.
Tijdens de verdediging kijken we naar de meest recent gepushte commit versie vóór het verstrijken van de deadline.

**Inhoudsopgave**

- [JavaScript project: 2024-2025](#javascript-project-2024-2025)
  - [Afspraken](#afspraken)
    - [Gedragscode](#gedragscode)
    - [Toelichting](#toelichting)
    - [Forum](#forum)
    - [Opgave downloaden](#opgave-downloaden)
    - [Oplossing indienen](#oplossing-indienen)
    - [Verdediging](#verdediging)
  - [Evaluatiecriteria](#evaluatiecriteria)
    - [Functionaliteit](#functionaliteit)
    - [Leesbaarheid code](#leesbaarheid-code)
    - [Correcte inzending](#correcte-inzending)
    - [Niet gequoteerd](#niet-gequoteerd)
  - [Opgave](#opgave)
    - [Memory Game](#memory-game)
      - [Werking](#werking)
        - [Doel van het spel](#doel-van-het-spel)
        - [Het spelbord](#het-spelbord)
        - [Het spel](#het-spel)
      - [Voorbeelden](#voorbeelden)
    - [Functionaliteit](#functionaliteit-1)
    - [Oplossingsstrategie](#oplossingsstrategie)

## Afspraken

Overloop eerst de afspraken vooraleer je begint aan de opgave.
Dit practicum heeft AC-code [ES-NGW-TP-TS-NPP-NVP](https://wms.cs.kuleuven.be/cs/english/study/assignment-commons/).

### Gedragscode

De practica worden gequoteerd, en het examenreglement is dan ook van toepassing.
Soms is er echter wat onduidelijkheid over wat toegestaan is en wat niet inzake samenwerking bij opdrachten zoals deze.

De oplossing en/of programmacode die ingediend wordt, moet volledig het resultaat zijn van werk dat je zelf gepresteerd hebt.
Je mag je werk uiteraard bespreken met andere studenten, in de zin dat je praat over algemene oplossingsmethoden of algoritmen, maar de bespreking mag niet gaan over specifieke code die je aan het schrijven bent of die je wenst in te dienen.
Als je het met anderen over je practicum hebt, mag dit er dus *nooit* toe leiden, dat je op om het even welk moment in het bezit bent van een geheel of gedeeltelijke kopie van het opgeloste practicum van anderen, onafhankelijk van of die code op papier staat of in elektronische vorm beschikbaar is, en onafhankelijk van wie de code geschreven heeft (mede-studenten, eventueel uit andere studiejaren, volledige buitenstaanders, internet-bronnen, e.d.).
Dit houdt tevens ook in dat er geen enkele geldige reden is om je code door te geven aan mede-studenten, noch om ze beschikbaar te stellen via publiek bereikbare directories of websites. De Git-repository die we jullie ter beschikking stellen is standaard op privaat ingesteld.

Elke student is verantwoordelijk voor de code en het werk dat hij of zij indient.
Als er tijdens de beoordeling van het practicum twijfels zijn over het feit of het practicum zelf gemaakt is (bvb. gelijkaardige code, of oplossingen met andere practica), zal de student gevraagd worden hiervoor een verklaring te geven.
Indien dit de twijfels niet wegwerkt, zal er worden overgegaan tot het melden van een onregelmatigheid, zoals voorzien in het onderwijs- en examenreglement (zie http://www.kuleuven.be/onderwijs/oer/).

**Alle inzendingen worden automatisch met elkaar vergeleken met behulp van plagiaatsoftware voor code.
Deze software geeft een score van gelijkaardigheid aan projecten.
Projecten die hard op elkaar lijken worden nadien manueel nagekeken.**

### Toelichting

Het is toegestaan om gebruik te maken van informatie en code (bijvoorbeeld hulpfuncties) op het internet om je practicum op te lossen, **indien je de bron vermeldt**.
Het is niet de bedoeling om een volledig opgelost spel te downloaden en dit in te dienen, zelfs met bronvermelding.

Bij het uitwerken van dit project is het ook toegestaan om gebruik te maken van GenAI voor het genereren van stukken code.
Opnieuw is het niet de bedoeling om de volledige oplossing te proberen genereren met behulp van deze tools.
Indien je gebruik maakt van GenAI **vermeld je dit bij de gegenereerde code**.

Zorg er tevens voor dat je elk stuk code in je project begrijpt en kan uitleggen.
Bij de uitleg over [de verdediging](#verdediging) vind je meer informatie over het gebruik van deze hulpmiddelen tijdens de verdediging.

Indien je twijfelt over wat al dan niet toegestaan is, stel dan een vraag op het discussieforum!

### Forum

Alle vragen over het practicum, *inclusief vragen aan medestudenten*, moeten gesteld worden via het **discussieforum** op [Gitlab](https://gitlab.kuleuven.be/distrinet/education/informaticawerktuigen/website/-/issues).

De antwoorden op vragen van andere studenten kunnen je uiteraard voor bepaalde problemen ook voorthelpen.
Zorg er dus voor dat je deze posts leest en kijk regelmatig het discussieforum na!

### Opgave downloaden

Download deze repository door middel van het `git clone` commando zoals we hebben gezien in de oefenzittingen. Gebruik daarvoor de `Clone with SSH` URL zodat je wijzigingen kan pushen naar de online repository.

In de map `code` staan alvast drie bestanden die een startpunt vormen.
Het HTML-bestand `index.html` is reeds gekoppeld aan een leeg Javascript-bestand en een leeg CSS-bestand.
Je kan het practicum oplossen door je code te schrijven in deze bestanden, je hoeft dus geen extra bestanden aan te maken.

Zou je toch graag nieuwe bestanden aanmaken (om welke reden dan ook), zorg dan dat je nog steeds voldoet aan onderstaande vereisten:

- Alle bestanden die deel uitmaken van de oplossing staan in de map `code` (submappen zijn toegestaan).
- **Het spel kan geopend worden door `index.html` in te laden in de web browser, zonder bijkomende stappen**.
- **Het spel werkt via Gitlab Pages**.
  Dat kan je nakijken via de link naar Gitlab Pages die je op de hoofdpagina van je Gitlab repository vindt.

### Oplossing indienen

De *deadline* voor dit practicum is **zondag 17 november 2023** om **23u59**.
Het practicum wordt ingediend met behulp van _Git_, door simpelweg je oplossing te pushen naar de online repository die je kreeg.

Wijzigingen aan jullie repository na deze datum zullen niet aanvaard worden.

Hieronder zie je een voorbeeld van hoe je bestanden kan pushen:

```bash
# Alle gewijzigde bestanden in map 'code' toevoegen
git add code/
# Bestanden committen
git commit -m "Update oplossing"
# Gemaakte commit versturen naar online repository
git push origin main
```

> :exclamation: Het is ten zeerste aangeraden om gedurende het maken van je project regelmatig je bestanden te committen en te pushen met Git.
> Zo heb je altijd een back-up van je code!
> Je kan zo vaak pushen als je wilt, enkel de laatste versie vóór de deadline zal tellen als je finale indiening.

**Kijk goed na of je alle bestanden correct hebt ingediend. Een foute inzending wordt gelijkgesteld aan laattijdige inzending!**
Controleer je inzending door je eigen repository opnieuw te clonen in een tijdelijke folder en te gaan kijken op je Gitlab pages pagina.

Je kan de inhoud van de repository ook nakijken op de website van GitLab zelf.
Op de web-pagina van je repository vind je ook de link om naar de Gitlab Pages pagina te gaan waar je spel te vinden is.

### Verdediging

Tijdens de verdediging is het uiterst belangrijk dat je goed kan uitleggen wat je code doet, en waarom je bepaalde keuzes hebt gemaakt.
Vergeet zeker niet om als voorbereiding voor de verdediging je eigen code opnieuw te bekijken, zeker de ingewikkelde delen.
Met code waarvan je niet kan uitleggen hoe ze werkt, kan je uiteraard weinig punten verdienen.

Er zal tijdens de verdediging ook gevraagd worden aanpassingen te doen aan de code die je hebt geschreven.
Op deze manier controleren we enerzijds of je de code zelf hebt geschreven, en anderzijds of je de taal voldoende begrijpt.
Tijdens de verdediging zal het niet toegestaan zijn om gebruik te maken van communicatiemiddelen of GenAI.
Zorg er dus voor dat je zelf de materie beheerst.

De praktische informatie omtrent de verdediging en de planning volgen later via Toledo.

De verdediging is een examenmoment, behandel dit ook zo.
**Zorg ervoor dat je op tijd aanwezig bent.**
Indien je om eender welke reden niet op tijd op de verdediging kan geraken, neem dan zo snel mogelijk contact op met het assistententeam zodat er naar een oplossing gezocht kan worden.
***Niet komen opdagen op je verdediging, zonder enige verwittiging, zal resulteren in een 0 op dit practicum***.
Indien je door ziekte je verdediging niet kan halen, bezorg je je ombudspersoon een doktersattest.
Via de ombudspersoon kan dan een inhaalverdediging vastgelegd worden.

## Evaluatiecriteria

In deze sectie beschrijven we kort enkele criteria die we gebruiken om een score toe te kennen aan het practicum.

### Functionaliteit

In de eerste plaats wordt er gekeken naar een correcte, foutloze werking van je programma.
Zorg ervoor dat alle functionaliteit die in de opgave gevraagd wordt, ook aanwezig is in je programma.
**Je zal enkel kunnen slagen voor dit practicum als je een werkend spel indient!**

### Leesbaarheid code

Zorg ervoor dat je code leesbaar is!

Enkele tips:

* Gebruik duidelijke, verklarende namen voor alle variabelen en functies.
* Maak gebruik van functies om je code op te delen. Deel lange functies op in kleinere subfuncties die je probleem stap voor stap oplossen. Als je je code voldoende opsplitst in functies met heldere namen zal de code snel leesbaar worden.
* *Indenteer* je code!!! Vele editors hebben auto-formatting functionaliteit. Maak daar gebruik van! Er is niets vervelender dan code te lezen met foute of geen indentatie.
* Maak gebruik van commentaar, maar enkel voor de stukken code die slecht leesbaar zijn. Voeg deze commentaar dus pas toe nadat je alle bovenstaande stappen hebt uitgevoerd en nog steeds merkt dat het stuk code lastig te lezen is.
* Wees consequent met alle stijlkeuzes die je maakt. Indien je bijvoorbeeld beslist om een accolade telkens op een nieuwe regel te laten beginnen, doe dit dan voor het volledige document.

### Correcte inzending

Zorg ervoor dat je code correct en tijdig is ingediend via GitLab.
Dat wil ook zeggen dat je je wijzigingen regelmatig dient te committen en pushen en niet eenmalig nadat je het volledige project hebt afgewerkt.
Zorg er daarbij ook voor dat je beschrijvende commit-messages schrijft die duidelijk maken wat je in elke commit gedaan hebt.

### Niet gequoteerd

We geven geen punten op:

* De esthetiek van de user interface. Het kan leuk zijn om je spel mooier te maken, maar dit levert je geen extra punten op.
* Extra (ongevraagde) functionaliteit. Je mag weliswaar eigen functies toevoegen, maar dit levert je eveneens geen extra punten op.

## Opgave

De opdracht van dit practicum bestaat eruit om een variant op het [Concentration](https://en.wikipedia.org/wiki/Concentration_(card_game)) kaartspel te implementeren met behulp van HTML, CSS en JavaScript.
In deze sectie beschrijven we eerst de algemene regels en werking van het spel.
Vervolgens beschrijven we de specifieke functionaliteit die we verwachten in jullie oplossing.

### Memory Game

We beschrijven de werking van een de aangepaste variant van onze memory game in deze sectie.

#### Doel van het spel

Voor elk spel is het doel om alle paren die op het spelbord aanwezig zijn samen te ontdekken.
Voor elke kleur (of symbool) zijn er maximum twee kaarten in het spelbord aanwezig, maar ze liggen met de kleur onzichtbaar gedraaid.
De speler krijgt steeds de kans om twee kaarten om te draaien en zo de kleur te zien.
Na elke zet worden alle kaarten terug met de kleur onzichtbaar gelegd.
De speler moet dus onthouden onder welk vakje welke kleur zat, om ze zo later te kunnen combineren.

#### Het spelbord

Het spelbord is een rechthoek opgedeeld in kleinere vakjes (wat normaal kaarten uit het kaartspel zijn).
De vakjes zijn allemaal identiek, behalve als ze gevonden zijn, dan blijven ze hun kleur behouden.

#### Het spel


Het spel begint met een spelbord waar geen enkele kleur zichtbaar is.
Elk vakje heeft twee mogelijke waarden:

- Een witte kleur (of een kenmerkend symbool)
- Een kleur die voor maximum twee kaarten in het bord voorkomt

Een speler heeft de optie om eender welke twee vakjes om te draaien bij elke zet, waardoor de kleur van die vakjes getoond worden.
Tijdens het tonen van de kleur van twee vakjes kan er niet geklikt worden op een nieuw vakje om het om te draaien.
Daarna is de zet voorbij en kan een volgende zet starten.
Als de kleuren van de twee gekozen vakjes identiek waren, zal deze zet onmiddelijk goedgekeurd worden, blijft de kleur van het paar zichtbaar en is er dus een paar meer gevonden door de speler die de vakjes omdraaide.
Bij een correcte 'gok' blijft dezelfde speler aan zet.
Indien de kleuren niet identiek zijn, dan gaan de kleuren terug weg en komt de andere speler aan zet.
Het spel is afgelopen als alle paren kleuren gekend zijn, ook het laatste paar moet expliciet omgedraaid worden.
De winnaar van het spel is de speler die het meeste juiste paren heeft omgedraaid.
Als beide spelers evenveel paren hebben omgedraaid eindigt het spel in een gelijkstand.

#### Voorbeelden

In de map *voorbeeldlevels* zijn enkele voorbeelden van opgeloste spelen beschikbaar.
We verwachten dat je ten minste alle voorbeeldlevels implementeert, maar je hebt ook de vrijheid om daarbovenop zelfgemaakte levels toe te voegen.
De speler moet kunnen kiezen welk level gespeeld wordt, je mag kiezen hoe je dit implementeert.

### Functionaliteit

In deze sectie beschrijven we de functionaliteit die we verwachten voor dit practicum.

* Voorzie een spelbord dat bestaat uit een variabel aantal rijen en kolommen.
  De speler moet kunnen kiezen tussen drie groottes van spelborden: 2x3, 3x4 of 4x5 (het eerste getal is het aantal rijen, het tweede het aantal kolommen).
* Een willekeurig, geldig spelbord moet automatisch gegenereerd kunnen worden door op een knop te klikken.
* Bij het begin van het spel wordt willekeurig speler A of B aan de eerste zet gelaten.
* Toon een teller die aangeeft hoeveel paren elke speler heeft gevonden in het huidige spel.
  Voorzie een manier om de gebruikers te tonen wie aan zet is (tekst of alert).
* Een speler moet twee vakjes kunnen aanklikken, waarop de kleur tevoorschijn komt.
  Bij een derde klik op een van de twee getoonde kleuren gaan die terug weg (indien het geen paar is).
* Indien een speler een juist paar vindt, blijft die speler aan zet en kan die opnieuw twee vakjes selecteren.
  Let erop dat de teller met aantal gevonden paren omhoog gaat in dit geval.
  In het geval van een foute gok, gaat de beurt naar de andere speler.
* Indien alle paren kleuren gevonden werden, is het spel gedaan.
  Toon op dat moment een bericht met felicitaties voor de speler die wint (of allebei indien het gelijkspel is) en een overzicht van het aantal gevonden paren voor elke speler.
* Voorzie de optie om elk van de voorbeeldlevels in de map *voorbeeldlevels* in te laden naast de mogelijkheid om automatisch levels te genereren (uiteraard kan je ook zelf nog extra levels toevoegen als je wilt, maar dat hoeft niet).
* Voorzie een knop om het spel opnieuw te starten.
  Bij gebruik van de knop gaat het spelbord terug naar de startconfiguratie en worden tellers terug op nul gezet.

Het spel moet speelbaar en duidelijk zijn, maar verlies niet te veel tijd met het perfectioneren van de HTML en CSS.

> :bulb: Het is toegestaan om afbeeldingen of symbolen (zoals letters of cijfers) te gebruiken als je liever niet met kleuren werkt, of als je dat moeilijk vindt vanwege bv. kleurenblindheid.
> De voorbeeldniveaus combineren kleuren en symbolen zodat je zelf kan kiezen.

### Oplossingsstrategie

Om dit practicum op te lossen kan je het werk opsplitsen in een aantal stappen:

1. Maak eerst met behulp van HTML en CSS de volledige interface voor een willekeurige puzzel.
  Zorg ervoor dat je hierin alle grafische elementen al verwerkt.
2. Bedenk een representatie in JavaScript die de volledige staat van het spelbord kan beschrijven.
  Denk bijvoorbeeld aan de oefenzitting, waarin we een tweedimensionale lijst gebruikten om een Sliding Puzzle voor te stellen.
3. Schrijf een functie die de interne Javascript-representatie kan omzetten naar jouw HTML-representatie.
  Kijk bijvoorbeeld naar de functies *draw_puzzle* en *generate_puzzle_html* uit de oefenzitting.
4. Vervolgens kan je functies schrijven die gebruik maken van de interne voorstelling van de puzzel om het spel te spelen.
  Bij iedere aanpassing van de interne representatie kan je deze opnieuw omzetten naar HTML met behulp van je omzetfunctie.
  Je kan de functies telkens testen door deze uit te voeren vanuit de JavaScript console.
  Je kan best een aparte representatie gebruiken voor het spelbord en de juiste oplossing, zodat je eenvoudig kan controleren of een actie van de speler correct is of niet.
5. Maak gebruik van de onclick-attributen van HTML om ervoor te zorgen dat wanneer men op de puzzel klikt, de correcte JavaScript functies (geschreven in de vorige stap) uitgevoerd worden.

> :bulb: Gebruik de console en debugger in de browser bij situaties waar je code crasht of niet doet wat je voor ogen hebt. Leren werken met de debugger kan je veel tijd besparen.
