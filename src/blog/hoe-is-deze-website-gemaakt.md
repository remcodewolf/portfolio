---
title: Hoe is deze website gemaakt?
description: Uitleg over de technologieën die verwerkt zitten in deze website.
author: Remco De Wolf
cover: ../assets/images/keyboard.jpg
coverAlt: Keyboard
pubDate: 2025-04-14T16:51:45.133Z
tags:
    - Astro
    - IT
---

# Astro.js en Front Matter: De Sleutel tot Snelle, Content-gedreven Websites

Deze website is gemaakt met **Astro.js** een nieuw webframework voor de frontend. De posts zijn geschreven met **Front Matter**. Dit is een headless CMS die runt in de code editor.
## Astro.js

Astro is ontworpen om razendsnelle, content-gedreven websites te bouwen, en het doet dat door zich te richten op een revolutionaire aanpak: het leveren van zo min mogelijk JavaScript aan de browser.

### De Kracht van de "Islands Architecture"  
De kern van Astro's filosofie is de zogenaamde "Islands Architecture" (Eilanden Architectuur). Dit is wat Astro onderscheidt van veel traditionele frameworks:

**Statisch HTML is de standaard**: Astro rendert standaard je hele website naar statische HTML en CSS tijdens het buildproces. Dit betekent dat wanneer een gebruiker je site bezoekt, de browser onmiddellijk een complete, volledig opgebouwde HTML-pagina ontvangt. Geen gedoe met grote hoeveelheden JavaScript die eerst moeten downloaden en dan pas de pagina moeten opbouwen. Dit resulteert in bliksemsnelle laadtijden en is fantastisch voor zoekmachineoptimalisatie (SEO).  

**"Eilanden" van interactiviteit**: Stel je voor dat je website een landschap is van statische content. Slechts kleine, specifieke onderdelen die daadwerkelijk interactiviteit nodig hebben (denk aan een contactformulier, een dynamische slideshow, een zoekbalk) worden als afzonderlijke, geïsoleerde "eilanden" van JavaScript naar de client gestuurd. Deze "eilanden" worden onafhankelijk van elkaar geladen en geactiveerd, zonder de rest van de pagina te vertragen.
Dit slimme principe zorgt ervoor dat als slechts een klein deel van je pagina interactief is, Astro ook maar een klein deel JavaScript levert, wat de prestaties aanzienlijk verbetert.

## Belangrijkste Voordelen van Astro 
**Superieure Prestaties**: Snellere websites zorgen voor een betere gebruikerservaring en hogere scores in prestatietests zoals Google Lighthouse.  

**Focus op Content**: Ideaal voor blogs, documentatiesites, e-commerce, portfolio's en marketingwebsites waar de inhoud centraal staat.  
**Framework Agnostic**: Eén van Astro's grootste troeven. Je kunt je interactieve componenten bouwen met elk populair UI-framework dat je maar wilt: React, Vue, Svelte, Lit, Preact, of zelfs pure HTML en JavaScript. Je bent niet gebonden aan één ecosysteem.  

**Server-first / Static-first**: Astro doet het zware werk op de server (of tijdens het buildproces), wat de clientbrowser ontlast en de content sneller beschikbaar maakt.  

**Eenvoudig te Leren**: Als je bekend bent met de basis van web development (HTML, CSS, JavaScript), is Astro relatief makkelijk om mee aan de slag te gaan.

## Wanneer Kies Je voor Astro?  
### Astro is een uitstekende keuze als:

- Je een blog, portfolio, documentatiesite of marketingwebsite bouwt.
-  Prestaties en SEO absolute topprioriteit hebben.
- Je de flexibiliteit wilt om verschillende UI-frameworks in één project te gebruiken. 

Astro is minder ideaal voor complexe webapplicaties (volledige Single Page Applications - SPA's) die constante, grootschalige client-side datafetching en complexe globale 'state management' vereisen over de hele applicatie. Maar zelfs dan kun je interactieve componenten als "eilanden" toevoegen aan statische pagina's.

## Front Matter

De combinatie van Front Matter CMS (vaak een file-based CMS of een Git-based CMS dat Markdown-bestanden met Front Matter beheert) en Astro.js is uitermate sterk en vult elkaar perfect aan.

### Voordelen van Front Matter
- **Snelheid**: Het draait lokaal op je computer en je hoeft dus niet naar aan website te surfen.  
- **Gebruik het in Visual Studio Code**: Je moet niet van programma wisselen, maar kan in je editor bijven.  
- **Gestructureerde input**: Het CMS kan verplichte velden afdwingen en valideren, wat zorgt voor consistentie in de metadata van alle posts. Dit is essentieel voor een schaalbare blog.  
- **Ingebouwde Ondersteuning**: Astro heeft ingebouwde ondersteuning voor het parsen van Front Matter in Markdown-bestanden, MDX-bestanden en andere contentcollecties. Je hoeft geen complexe configuraties op te zetten; Astro begrijpt het direct.

## Besluit  
Door **Astro.js** te combineren met **Front Matter** krijg je een krachtige, snelle én flexibele basis voor content-gedreven websites. Ideaal voor developers die graag alles in eigen hand houden, maar toch snel willen werken.