# Procesverslag
**Auteur:** Ronan Doeleman

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. https://bennettfeely.com/clippy/
  2. https://stackoverflow.com/questions/4359627/stopping-a-css3-animation-on-last-frame
  3. https://www.youtube.com/watch?v=zGiirUiWslI&ab_channel=KevinPowell (Before and After pseudo elements explained - part one: how they work)
  4. https://www.w3schools.com/cssref/tryit.php?filename=trycss3_nth-child (css selectors)



## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard:
<img width="828" alt="Screenshot 2023-03-07 at 17 26 52" src="https://user-images.githubusercontent.com/56078226/223485343-f3547748-e8b1-453c-9a75-09914e1a3fe6.png">




  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - ::before and ::after begrijpen en toepassen
  - @Keyframes beheersen en toepassen
  - Dark mode feature maken
 
</details>



## Opdracht 1 reflectie 

<details open>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img width="388" alt="Screenshot 2023-03-07 at 17 44 26" src="https://user-images.githubusercontent.com/56078226/223490226-f0fd1a1c-1abf-441e-bf3a-36c108cc82c2.png">
<img width="405" alt="Screenshot 2023-03-07 at 17 44 09" src="https://user-images.githubusercontent.com/56078226/223490258-0a441957-3468-46ee-b960-c4bbe734aebd.png">



  ### Dit ging goed/Heb ik geleerd: 

  <img width="1138" alt="Screenshot 2023-03-07 at 17 19 20" src="https://user-images.githubusercontent.com/56078226/223483335-22a452ac-b1e0-4345-8fc8-21c2729a5e16.png">

  Ik heb geleerd hoe je met behulp van ::before en ::after elementen kan aanmaken zonder dat dit in je html komt. Hiermee kan je coole style effecten creë
 ren. Ook heb ik geleerd hoe je @keyframes kan gebruiken om elementen te laten bewegen.


  ### Dit was lastig/Is niet gelukt:

  Iets wat ik nog wou maken was dat als de letters elkaar raken bij het omvallen, de letter N verder weg wordt geduwd zodat ze niet door elkaar heen   gaan. Wat ik ook lastig vond was het "smooth" animeren van het omvallen/balanceren.


## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>


  ### Je ontwerp:
![IMG_1030](https://user-images.githubusercontent.com/56078226/229818346-f28a1b05-b05b-4d91-bdc1-f000afe4ae32.jpg)


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Het toepassen en schrijven van complexere javascript functies
  - Meerdere manieren van interactie mogelijk maken (drag & drop, klikken)
  - Opslaan van de schoen en deze later terugvinden
  
</details>



## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>

  Neem minimaal 5 bevindingen op:

  ### Bevinding 1:
  Het uitvouwen van een menu voor de kleuren.

  #### oplossing:
Dit probleem heb ik opgelost door een javascript functie toe te voegen als je op de button klikt voor elk onderdeel van de schoen zodat je de kleuren te zien krijgt.

Oud:
<img width="364" alt="Screenshot 2023-04-11 at 20 46 21" src="https://user-images.githubusercontent.com/56078226/231259961-1775b597-b0fd-402d-87e1-174c5c7e6e44.png">

Nieuw:
![Screenshot 2023-04-11 at 20 46 39](https://user-images.githubusercontent.com/56078226/231260015-381f35e4-b379-41aa-a892-5d9c36a757f9.png)

Code: 
<img width="457" alt="Screenshot 2023-04-11 at 20 45 36" src="https://user-images.githubusercontent.com/56078226/231260156-b850aa2c-92df-4208-af9e-c3ad748d8aa2.png">

  ### Bevinding 2:
  Het Drag & Drop systeem

  #### oplossing:
Bij deze heeft meneer Sanne 't Hooft hooft mij geholpen. Ik liep namelijk vast met de bijbehorende dropzone te selecteren als je een kleur veranderde. Dit kwam omdat de images als het ware bovenop elkaar stonden. Allereerst probeerde ik via radio buttons de geselecteerde image naar boven te plaatsen. Dit lukte echter niet. Met de nieuwe code kon ik de bijbehorende img selecteren die hoorde bij de fieldset button.

<img width="590" alt="Screenshot 2023-04-11 at 20 53 07" src="https://user-images.githubusercontent.com/56078226/231261321-eb026033-db14-4339-8829-413b1c082fdf.png">

Code:
<img width="577" alt="Screenshot 2023-04-11 at 20 52 14" src="https://user-images.githubusercontent.com/56078226/231261360-93d23a1b-0a68-4d9a-a0ce-dca012e20d4e.png">

  ### Bevinding 3:
  Huidige selectie opslaan

  #### oplossing:
  Bij deze functionaliteit had ik als eerste het plan om de schoen op te slaan in de local storage. Hiermee zou de gebruiker dan via een save-button de huidige creatie kunnen opslaan en opnieuw aanklikken als de gebruiker terug wou naar de opgeslagen selectie. Hier kwam ik echter niet uit dus heb ik een button gemaakt waarmee je een screenshot kan maken van de huidige selectie. Deze screenshot krijg je vervolgens op het scherm te zien en kan je opslaan in je eigen afbeeldingen op je computer.
  
<img width="568" alt="Screenshot 2023-04-11 at 20 59 21" src="https://user-images.githubusercontent.com/56078226/231262798-3454e6cf-527e-4b69-b8bf-6ed4738b9405.png">

<img width="568" alt="Screenshot 2023-04-11 at 20 59 31" src="https://user-images.githubusercontent.com/56078226/231262810-00cfe1e0-0af1-4b7d-aa71-c3f0d19ab507.png">

<img width="542" alt="Screenshot 2023-04-11 at 21 00 57" src="https://user-images.githubusercontent.com/56078226/231263374-4034294a-d2fa-46c7-a774-79b64203cd14.png">

  ### Bevinding 4:
  Responsive maken

  #### oplossing:
  De website moest uiteindelijk responsive zijn zodat het bruikbaar is op elk formaat scherm. Om dit toe te passen heb ik `@media-query's` gebruikt.
  
Code:

<img width="440" alt="Screenshot 2023-04-11 at 21 05 11" src="https://user-images.githubusercontent.com/56078226/231263978-9260de7b-b20f-4741-9444-955dd9288242.png">
<img width="440" alt="Screenshot 2023-04-11 at 21 05 05" src="https://user-images.githubusercontent.com/56078226/231263994-aa46ca5b-e03e-4c7a-ad61-39567b0e33e8.png">

Laptop:

![Screenshot 2023-04-11 at 21 06 23](https://user-images.githubusercontent.com/56078226/231264314-38412e62-53f2-47a9-8faf-0ded690dd665.png)

Mobiel:

![Screenshot 2023-04-11 at 21 06 54](https://user-images.githubusercontent.com/56078226/231264335-3a7fef13-3059-4db6-9c34-750bdc70ac40.png)

  ### Bevinding 5:
  Animatie toevoegen

  #### oplossing:
  Als je op een website komt is het handig om beweegbaare elementen te gebruiken om de aandacht van de gebruiker te trekken. Op mijn website heb ik de schoen geanimeerd zodra hij op het scherm komt.
  
![Screenshot 2023-04-11 at 15 15 04](https://user-images.githubusercontent.com/56078226/231265055-546a6e7b-9250-42a4-abb0-4335a12254bf.png)

Code:

<img width="451" alt="Screenshot 2023-04-11 at 21 10 40" src="https://user-images.githubusercontent.com/56078226/231265095-1976d37a-a2e4-43bf-9625-f49d80690d40.png">


## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>
