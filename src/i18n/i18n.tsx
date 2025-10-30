import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

type SupportedLocale = 'de' | 'sl'

type TranslationDict = Record<string, string>

type Translations = Record<SupportedLocale, TranslationDict>

const translations: Translations = {
  de: {
    // Header
    'header.madeIn': 'Made with',
    'header.inAustria': 'in Österreich',

    // Hero
    'hero.title.html': 'Lerne <span class="text-slolingo-orange">Slowenisch</span> oder <span class="text-slolingo-orange">Deutsch</span> spielerisch',
    'hero.subtitle': 'Die interaktive Lern-App für Kinder, die durch Geschichten und Übungen spielerisch Slowenisch und Deutsch lernen.',
    'hero.badge.interactiveStories': 'Interaktive Geschichten',
    'hero.badge.exercises': 'Sprachübungen',
    'hero.badge.forKids': 'Für Kinder entwickelt',

    // Download
    'download.title': 'Jetzt herunterladen',
    'download.subtitle': 'Lade die Slolingo App herunter und starte deine Sprachreise!',
    'download.apple.line1': 'Download on the',
    'download.apple.line2': 'App Store',
    'download.google.line1': 'GET IT ON',
    'download.google.line2': 'Google Play',

    // Features
    'features.title.html': 'Warum <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-6 lg:h-8 align-middle mx-2" />?',
    'features.subtitle': 'Unsere App kombiniert bewährte Lernmethoden mit moderner Technologie für ein optimales Spracherlebnis.',
    'features.item.interactiveStories.title': 'Interaktive Geschichten',
    'features.item.interactiveStories.desc': 'Spannende Geschichten mit Audio und Animationen, die das Lernen lebendig machen.',
    'features.item.audio.title': 'Audio-Unterstützung',
    'features.item.audio.desc': 'Hochwertige Audio-Aufnahmen für die korrekte Aussprache beider Sprachen.',
    'features.item.games.title': 'Spielerische Übungen',
    'features.item.games.desc': 'Verschiedene Übungstypen wie Memory, Lückentests und Wortschatz-Spiele.',
    'features.item.progress.title': 'Fortschritts-Tracking',
    'features.item.progress.desc': 'Verfolge den Lernfortschritt und sammle Belohnungen zur Motivation.',
    'features.item.forKids.title': 'Für Kinder entwickelt',
    'features.item.forKids.desc': 'Benutzerfreundliche Oberfläche speziell für Kinder im Grundschulalter.',
    'features.item.safe.title': 'Sicher & Werbefrei',
    'features.item.safe.desc': '100% sicher für Kinder ohne Werbung, In-App-Käufe, Cookies oder Tracking.',

    // About
    'about.title.html': 'Über <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-6 lg:h-8 align-middle mx-2" />',
    'about.subtitle': 'Ein innovatives Projekt zur Förderung der Zweisprachigkeit zwischen Österreich und Slowenien.',
    'about.goal.title': 'Unser Ziel',
    'about.goal.p1': 'Slolingo wurde entwickelt, um Kindern spielerisch die Grundlagen der deutschen und slowenischen Sprache zu vermitteln. Durch interaktive Geschichten und Übungen wird das Lernen zu einem spannenden Abenteuer.',
    'about.goal.p2': 'Die App fördert nicht nur die Sprachkenntnisse, sondern auch das kulturelle Verständnis zwischen beiden Ländern.',
    'about.forWhom.title.html': 'Für wen ist <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-4 lg:h-5 align-middle mx-1" />?',
    'about.forWhom.item1': 'Kinder im Grundschulalter (6-12 Jahre)',
    'about.forWhom.item2': 'Lehrkräfte für den Schulunterricht',
    'about.forWhom.item3': 'Sprachinteressierte aller Altersgruppen',
    'about.materials.title': 'Didaktische Materialien & App',
    'about.materials.p1': 'Im Jahr 2020 wurden in Kooperation von Mag. Susanne Weitlaner und Dr. Tatjana Vučajnk (AAU) zweisprachige Lehrmaterialien für Kinder unterschiedlichen Alters herausgegeben, die Slowenisch als Zweit- oder Fremdsprache lernen. Die Materialien eignen sich für die Arbeit mit sprachlich und altersmäßig heterogenen Gruppen und ermuntern zur Individualisierung und Binnendifferenzierung. Das didaktische Komplettset besteht aus einem zweisprachigen (slowenisch-deutschen) Lesebuch <em>Pravljisanica/Traummärchen</em> (slowenische Märchen als Comic, Bild-Lese-Text & Originaltext) und dem Handbuch für Lehrerinnen und Lehrer samt ausschneidbaren Spielkärtchen namens <em>Čebelice letijo in pravljice spregovorijo/Im Bienenflug durch Märchenwelten</em> (erhältlich unter <a href="mailto:office@pavelhaus.at" class="underline hover:text-slolingo-green">office@pavelhaus.at</a>).',
    'about.materials.p2': 'Die dazu entwickelte App ermöglicht es Kindern, zu Hause oder im Unterricht die Inhalte sowie den Wortschatz der slowenischen Märchen spielerisch zu festigen und zu üben. Zusätzlich gibt es Spiele, mit denen Basissprachkenntnisse trainiert werden können.',

    // About Team
    'about.team.title': 'Team & Mitwirkende',
    'about.team.pedagogy.title': 'Pädagogische Beratung & Projektleitung',
    'about.team.pedagogy.names': 'Mag. Susanne Weitlaner & Dr. Tatjana Vučajnk',
    'about.team.illustrations.title': 'Illustrationen',
    'about.team.illustrations.names': 'Matjaž Schmidt & Darja Remc',
    'about.team.speakers.title': 'Sprecher:innen',
    'about.team.speakers.names': 'MA Corina Kaufmann & Mag. Vito Poredoš',
    'about.team.devs.title': 'Entwicklerteam',
    'about.team.devs.names': 'DI Valentin Edelsbrunner, DI Patrick Lovric, DI David Kerschbaumer',
    'about.team.contentDesign.title': 'Inhalt und Gestaltung',
    'about.team.contentDesign.names': 'BA Linda Schneider, Dr. Nika Mahne, Mag. Marina Mahne',

    // Partners
    'about.partners.title': 'Partner & Unterstützung',
    'about.partners.bka': 'Bundeskanzleramt Österreich',
    'about.partners.funding': 'Volksgruppenförderung',

    // Footer
    'footer.aboutUs': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.apps': 'Apps',
    'footer.android': 'slolingo für Android',
    'footer.ios': 'slolingo für iOS',
    'footer.privacyAndTerms': 'Datenschutz und AGB',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.madeWith': 'Made with',
    'footer.inAustria': 'in Österreich',
    'footer.fundedBy': 'Gefördert von',
    'footer.fundedBySuffix': '– Volksgruppenförderung',
    'imprint.title': 'Impressum',
    'imprint.body.html': 'slolingo ist eine digitale Lern-App, die man herunterladen kann.<br/>Betreiber und Verantwortlicher im Sinne des Datenschutzes ist Artikel-VII-Kulturverein für Steiermark - Pavelhaus.<br/>Bei Fragen zum Datenschutz kannst du uns unter <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a> schreiben.<br/>Unseren Datenschutzbeauftragten kannst du unter folgenden Kontaktdaten erreichen:<ul class="list-disc ml-6 mt-2"><li>E-Mail: <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a></li><li>Artikel-VII-Kulturverein für Steiermark - Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/><a href="https://pavelhaus.at/" class="underline text-slolingo-orange" target="_blank" rel="noopener noreferrer">https://pavelhaus.at/</a><br/>Laafeld 30<br/>A-8490 Bad Radkersburg<br/>Tel/Fax: +43 3476 / 3862<br/>ZVR 141781065</li></ul><div class="mt-8 flex items-center gap-4"><span>Das Projekt slolingo wurde finanziert vom</span><img src="/bka-logos/bka-logo-ger.svg" alt="Bundeskanzleramt Österreich" class="h-8 inline" /></div>',
    'terms.title': 'Allgemeine Geschäftsbedingungen (AGB)',
    'terms.body.html': '<section><h2 class="text-2xl font-apfel-medium mb-2">Stand: 23. Juli 2025</h2></section><section><h2 class="text-xl font-apfel-medium mb-2">1. Anbieter</h2><address class="not-italic mb-2">Artikel‑VII‑Kulturverein für Steiermark – Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/>Laafeld 30, A‑8490 Bad Radkersburg, Österreich<br/>Tel/Fax +43 3476 3862<br/>E‑Mail <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a><br/>ZVR‑Zahl 141781065<br/>UID keine UID vorhanden<br/>Vertreten durch den Vereinsvorstand (Obfrau/Obmann).<br/>Datenschutz­verantwortlicher & Kontakt: <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a></address></section><section><h2 class="text-xl font-apfel-medium mb-2">2. Leistungs­umfang</h2><p>slolingo ist eine kostenlose mobile Lern‑App zum Üben von Sprachen – primär für Kinder im Grund­schul­alter, Lehrkräfte sowie alle Sprach­interessierten. Es gibt keine kosten­pflichtigen Upgrades, Abos oder In‑App‑Käufe.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">3. Registrierung und Datenschutz</h2><h3 class="font-apfel-medium mt-4 mb-1">3.1 Erhobene Daten</h3><ul class="list-disc ml-6 mb-2"><li>Lernfortschritt, Benutzername, Spielergebnisse</li><li>E‑Mail‑Adresse (freiwillig, zur Konto‑Wieder­herstellung)</li><li>Daten werden zunächst lokal auf dem Gerät gespeichert und bei bestehender Internet­verbindung mit unserem EU‑Server synchronisiert.</li><li>Keine Protokollierung von IP‑Adressen oder sonstigen Meta­daten; Nutzung bleibt anonym.</li></ul><h3 class="font-apfel-medium mt-4 mb-1">3.2 Zweck</h3><ul class="list-disc ml-6 mb-2"><li>Bereitstellung und Synchronisierung deines Accounts</li><li>Fehler­behebung / Support</li><li>nicht‑personalisierte Weiter­entwicklung der App</li></ul><h3 class="font-apfel-medium mt-4 mb-1">3.3 Weitergabe</h3><p>Es erfolgt keine Weitergabe an Dritte. Übermittlungen finden nur statt, wenn du ausdrücklich zustimmst oder wir gesetzlich dazu verpflichtet sind. Slolingo nutzt keine Integrationen von Google, Facebook, Amazon o. Ä.; alle Daten verbleiben auf unseren eigenen Servern.</p><h3 class="font-apfel-medium mt-4 mb-1">3.4 Speicherdauer & Löschung</h3><p>Deine Daten bleiben gespeichert, solange du Slolingo aktiv nutzt. Du kannst deinen Account jederzeit in der App (Einstellungen → Abmelden → Profil löschen) oder per Mail an <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a> löschen; sämtliche damit verbundenen Daten werden dann dauerhaft entfernt. Bei 12 Monaten Inaktivität erfolgt eine automatische Löschung.</p><h3 class="font-apfel-medium mt-4 mb-1">3.5 Sicherheit</h3><p>Alle Daten liegen auf Servern innerhalb der EU, werden verschlüsselt übertragen und in Rechen­zentren gespeichert, die nach DIN ISO/IEC 27001 zertifiziert sind. Dennoch kann aufgrund stetig neuer Angriffs­methoden kein absoluter Schutz garantiert werden.</p><h3 class="font-apfel-medium mt-4 mb-1">3.6 Deine Rechte</h3><p>Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Daten­übertrag­barkeit sowie Widerspruch gegen die Verarbeitung. Bitte sende dazu eine E‑Mail an <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a> unter Angabe deines Benutzer­namens und – falls hinterlegt – deiner E‑Mail‑Adresse.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">4. Nutzungs­rechte</h2><p>Alle App‑Inhalte sind urheber­rechtlich geschützt. Du erhältst ein einfaches, persönliches und nicht übertragbares Recht zur privaten Nutzung. Kommerzielle Nutzung, Verviel­fältigung oder Verteilung bedürfen unserer vorherigen schrift­lichen Zustimmung.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">5. Haftung</h2><p>Die Inhalte wurden sorgfältig erstellt; eine Gewähr für Richtig­keit, Vollständig­keit oder Aktualität wird jedoch nicht übernommen. Für Schäden – außer bei Vorsatz oder grober Fahr­lässigkeit – wird nicht gehaftet (§ 6 Abs 1 Z 9 KSchG).</p></section><section><h2 class="text-xl font-apfel-medium mb-2">6. Verfügbarkeit</h2><p>Slolingo wird als unentgeltlicher Dienst „as is“ bereitgestellt. Ein Anspruch auf stetige Verfügbarkeit, bestimmte Funktionen oder fehler­freie Nutzung besteht nicht. Wartungen, Updates oder Abschaltungen können jederzeit ohne Ankündigung erfolgen.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">7. Anwendbares Recht und Gerichts­stand</h2><p>Es gilt österreichisches Recht unter Ausschluss seiner Kollisions­normen und des UN‑Kaufrechts.<br/>Für Verbraucher*innen richtet sich der Gerichts­stand nach § 14 KSchG; im Übrigen ist das sachlich zuständige Gericht in 8010 Graz vereinbart.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">8. Schluss­bestimmungen</h2><p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen unberührt. Anstelle der unwirksamen Regelung tritt die gesetzliche Regelung, die dem wirtschaftlichen Zweck am nächsten kommt. Änderungen der AGB werden durch Veröffentlichung in der App wirksam.</p><div class="text-center text-gray-400 text-sm mt-8">(Ende der AGB)</div>'
  },
  sl: {
    // TODO: Slovenian translations
    'header.madeIn': 'Narejeno z',
    'header.inAustria': 'v Avstriji',

    'hero.title.html': 'Uči se <span class="text-slolingo-orange">slovenščino</span> ali <span class="text-slolingo-orange">nemščino</span> na igriv način',
    'hero.subtitle': 'Interaktivna učna aplikacija za otroke, ki se skozi zgodbe in vaje na igriv način učijo slovenščino in nemščino.',
    'hero.badge.interactiveStories': 'Interaktivne zgodbe',
    'hero.badge.exercises': 'Jezikovne vaje',
    'hero.badge.forKids': 'Razvita za otroke',

    'download.title': 'Prenesi zdaj',
    'download.subtitle': 'Prenesi aplikacijo in začni svoje jezikovno potovanje!',
      'download.apple.line1': 'Download on the',
      'download.apple.line2': 'App Store',
      'download.google.line1': 'GET IT ON',
      'download.google.line2': 'Google Play',

    'features.title.html': 'Zakaj <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-6 lg:h-8 align-middle mx-2" />?',
    'features.subtitle': 'Naša aplikacija združuje preverjene učne metode z moderno tehnologijo za optimalno jezikovno izkušnjo.',
    'features.item.interactiveStories.title': 'Interaktivne zgodbe',
    'features.item.interactiveStories.desc': 'Zanimive zgodbe z zvočnimi posnetki in animacijami, ki oživijo učenje.',
    'features.item.audio.title': 'Zvočna podpora',
    'features.item.audio.desc': 'Visokokakovostni zvočni posnetki za pravilno izgovorjavo obeh jezikov.',
    'features.item.games.title': 'Zabavne vaje',
    'features.item.games.desc': 'Različne vrste vaj, kot so spomin, testi z vrzeli in igre za razširjanje besednega zaklada.',
    'features.item.progress.title': 'Sledenje napredku',
    'features.item.progress.desc': 'Sledi napredku učenja in zbiraj nagrade za motivacijo.',
    'features.item.forKids.title': 'Razvito za otroke',
    'features.item.forKids.desc': 'Uporabniku prijazen vmesnik, posebej za otroke osnovnošolske starosti.',
    'features.item.safe.title': 'Varno in brez oglasov',
    'features.item.safe.desc': '100 % varno za otroke, brez oglasov, nakupov v aplikaciji, piškotkov ali sledenja.',

    'about.title.html': 'O <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-6 lg:h-8 align-middle mx-2" />',
    'about.subtitle': 'Inovativen projekt za spodbujanje dvojezičnosti med Avstrijo in Slovenijo.',
    'about.goal.title': 'Naš cilj',
    'about.goal.p1': 'SLOLINGO je bil razvit, da bi otrokom na igriv način približal osnove nemškega in slovenskega jezika. Interaktivne zgodbe in vaje spremenijo učenje v razburljivo pustolovščino.',
    'about.goal.p2': 'Aplikacija ne spodbuja le jezikovnih znanj, temveč tudi kulturno razumevanje med obema državama.',
    'about.forWhom.title.html': 'Za koga je namenjen <img src="/general/slolingo_logo.svg" alt="Slolingo" class="inline h-4 lg:h-5 align-middle mx-1" />?',
    'about.forWhom.item1': 'Za otroke osnovnošolski starosti (6–12 let)',
    'about.forWhom.item2': 'Za učitelje za poučevanje v šolah',
    'about.forWhom.item3': 'Za ljudi vseh starosti, ki jih zanima jezik',
    'about.materials.title': 'Didaktični materiali in aplikacija',
    'about.materials.p1': 'Leta 2020 sta mag. Susanne Weitlaner in dr. Tatjana Vučajnk (AAU) v sodelovanju izdali dvojezične učne materiale za otroke različnih starosti, ki se učijo slovenščino kot drugi ali tuji jezik. Materiali so primerni za delo z jezikovno in starostno heterogenimi skupinami ter spodbujajo individualizacijo in notranjo diferenciacijo. Celoten didaktični komplet sestavljajo dvojezična (slovensko-nemška) čitalnica <em>Pravljisanica/Traummärchen</em> (slovenske pravljice v obliki stripa, slikovnega besedila in izvirnega besedila) in priročnika za učitelje z izrezljivimi igralnimi karticami z naslovom <em>Čebelice letijo in pravljice spregovorijo/Im Bienenflug durch Märchenwelten</em> (na voljo na <a href="mailto:office@pavelhaus.at" class="underline hover:text-slolingo-green">office@pavelhaus.at</a>).',
    'about.materials.p2': 'Aplikacija, razvita za ta namen, otrokom omogoča, da doma ali v šoli na igriv način utrdijo in vadijo vsebino ter besedišče slovenskih pravljic. Poleg tega so na voljo igre, s katerimi lahko vadijo osnovno znanje jezika.',

    // About Team (localized)
    'about.team.title': 'Ekipa in sodelujoči',
      'about.team.pedagogy.title': 'Pädagogische Beratung & Projektleitung',
      'about.team.pedagogy.names': 'Mag. Susanne Weitlaner & Dr. Tatjana Vučajnk',
      'about.team.illustrations.title': 'Illustrationen',
      'about.team.illustrations.names': 'Matjaž Schmidt & Darja Remc',
      'about.team.speakers.title': 'Sprecher:innen',
      'about.team.speakers.names': 'MA Corina Kaufmann & Mag. Vito Poredoš',
      'about.team.devs.title': 'Entwicklerteam',
      'about.team.devs.names': 'DI Valentin Edelsbrunner, DI Patrick Lovric, DI David Kerschbaumer',
      'about.team.contentDesign.title': 'Inhalt und Gestaltung',
      'about.team.contentDesign.names': 'BA Linda Schneider, Dr. Nika Mahne, Mag. Marina Mahne',

    // Partners (localized)
    'about.partners.title': 'Partnerji in podpora',
    'about.partners.bka': 'Bundeskanzleramt Österreich',
    'about.partners.funding': 'Volksgruppenförderung',

    'footer.aboutUs': 'O nas',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Kolofon',
    'footer.apps': 'Aplikacije',
    'footer.android': 'slolingo za Android',
    'footer.ios': 'slolingo za iOS',
    'footer.privacyAndTerms': 'Varstvo podatkov in Splošni pogoji',
    'footer.privacy': 'Varstvo podatkov',
    'footer.terms': 'Splošni pogoji (AGB)',
    'footer.madeWith': 'Narejeno z',
    'footer.inAustria': 'v Avstriji',
    'footer.fundedBy': 'Financirano s strani',
    'footer.fundedBySuffix': '– financiranje narodnih skupnosti',
    'imprint.title': 'Kolofon',
    'imprint.body.html': 'slolingo je digitalna učna aplikacija, ki jo lahko prenesete.<br/>Upravljavec in odgovorna oseba v smislu varstva podatkov je Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša.<br/>V primeru vprašanj o varstvu podatkov nam lahko pišete na <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a>.<br/>Našega pooblaščenca za varstvo podatkov lahko kontaktirate na naslednjih kontaktnih podatkih:<ul class="list-disc ml-6 mt-2"><li>Artikel-VII-Kulturverein für Steiermark - Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/><a href="https://pavelhaus.at/" class="underline text-slolingo-orange" target="_blank" rel="noopener noreferrer">https://pavelhaus.at/</a><br/>Laafeld 30<br/>A-8490 Bad Radkersburg<br/>Tel/Fax: +43 3476 / 3862<br/>ZVR 141781065</li></ul><div class="mt-4">Projekt slolingo je financiral Urad zveznega kanclerja (Bundeskanzleramt).</div>',
    'terms.title': 'Splošni pogoji poslovanja (AGB)',
    'terms.body.html': '<section><h2 class="text-2xl font-apfel-medium mb-2">Stanje: 23. julij 2025</h2></section><section><h2 class="text-xl font-apfel-medium mb-2">1. Ponudnik</h2><address class="not-italic mb-2">Artikel‑VII‑Kulturverein für Steiermark – Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavelova hiša<br/>Laafeld 30, A-8490 Bad Radkersburg, Avstrija<br/>Tel/Fax +43 3476 3862<br/>E-pošta <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a><br/>ZVR-številka 141781065<br/>UID noben UID ni na voljo<br/>Zastopa ga predsedstvo društva (predsednica/predsednik).<br/>Odgovorna oseba za varstvo podatkov in kontakt: <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a></address></section><section><h2 class="text-xl font-apfel-medium mb-2">2. Obseg storitev</h2><p>slolingo je brezplačna mobilna aplikacija za učenje jezikov – namenjena predvsem otrokom osnovnošolskega starosti, učiteljem in vsem, ki se zanimajo za jezike. Ni plačljivih nadgradenj, naročnin ali nakupov v aplikaciji.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">3. Registracija in varstvo podatkov</h2><h3 class="font-apfel-medium mt-4 mb-1">3.1 Zbrani podatki</h3><ul class="list-disc ml-6 mb-2"><li>Napredek pri učenju, uporabniško ime, rezultati igre</li><li>E-poštni naslov (prostovoljno, za obnovitev računa)</li><li>Podatki se najprej shranijo lokalno na napravi in se sinhronizirajo z našim strežnikom v EU, če je na voljo internetna povezava.</li><li>IP-naslovi ali drugi metapodatki se ne beležijo; uporaba ostane anonimna.</li></ul><h3 class="font-apfel-medium mt-4 mb-1">3.2 Namen</h3><ul class="list-disc ml-6 mb-2"><li>Priprava in sinhronizacija tvojega računa</li><li>Odpravljanje napak / podpora</li><li>Nepersonalizirano nadaljnje razvijanje aplikacije</li></ul><h3 class="font-apfel-medium mt-4 mb-1">3.3 Posredovanje</h3><p>Podatki se ne posredujejo tretjim osebam. Posredovanje podatkov poteka le, če se s tem izrecno strinjaš ali če smo k temu zakonsko zavezani. Slolingo ne uporablja integracij Google, Facebook, Amazon ali podobnih; vsi podatki ostanejo na naših lastnih strežnikih.</p><h3 class="font-apfel-medium mt-4 mb-1">3.4 Trajanje shranjevanja in izbris</h3><p>Vaši podatki ostanejo shranjeni, dokler aktivno uporabljate Slolingo. Račun lahko kadarkoli izbrišete v aplikaciji (Nastavitve → Odjava → Izbriši profil) ali po e-pošti na <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a>; vsi s tem povezani podatki bodo nato trajno odstranjeni. Po 12 mesecih nedejavnosti se izvede samodejni izbris.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">3.5 Varnost</h2><p>Vsi podatki se nahajajo na strežnikih znotraj EU, se prenašajo v šifrirani obliki in shranjujejo v računalniških centrih, ki so certificirani po standardu DIN ISO/IEC 27001. Kljub temu zaradi nenehno novih metod napadov ni mogoče zagotoviti absolutne zaščite.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">3.6 Tvoje pravice</h2><p>Kadar koli imaš pravico do informacij, popravka, izbrisa, omejitve, prenosljivosti podatkov in ugovora proti obdelavi. V ta namen pošlji e-pošto na <a href="mailto:office@pavelhaus.at" class="underline text-slolingo-orange">office@pavelhaus.at</a> in navedi svoje uporabniško ime in – če je shranjeno – svoj e-poštni naslov.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">4. Pravice uporabe</h2><p>Vsa vsebina aplikacije je zaščitena z avtorskimi pravicami. Prejmeš preprosto, osebno in neprenosljivo pravico do zasebne uporabe. Komercialna uporaba, razmnoževanje ali distribucija zahtevajo naše predhodno pisno soglasje.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">5. Odgovornost</h2><p>Vsebine so bile skrbno pripravljene, vendar ne prevzemamo odgovornosti za njihovo točnost, popolnost ali aktualnost. Za škodo – razen v primeru namernega ali grobega malomarnega ravnanja – ne prevzemamo odgovornosti (§ 6 odstavek 1 točka 9 KSchG).</p></section><section><h2 class="text-xl font-apfel-medium mb-2">6. Razpoložljivost</h2><p>Slolingo se zagotavlja kot brezplačna storitev „tako kot je“. Ni pravice do stalne razpoložljivosti, določenih funkcij ali brezhibne uporabe. Vzdrževanje, posodobitve ali izklopi so možni kadar koli brez predhodnega obvestila.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">7. Veljavno pravo in pristojno sodišče</h2><p>Velja avstrijsko pravo, razen njegovih kolizijskih norm in konvencije ZN o mednarodni prodaji blaga.<br/>Za potrošnike se sodna pristojnost določi v skladu s § 14 KSchG; v nasprotnem primeru se dogovori, da je pristojno sodišče v 8010 Grazu.</p></section><section><h2 class="text-xl font-apfel-medium mb-2">8. Končne določbe</h2><p>Če so posamezne določbe teh splošnih pogojev neveljavne ali postanejo neveljavne, to ne vpliva na veljavnost preostalih določb. Namesto neveljavne določbe se uporabi zakonska določba, ki je najbližje gospodarskemu namenu. Spremembe splošnih pogojev začnejo veljati z objavo v aplikaciji.</p><div class="text-center text-gray-400 text-sm mt-8">(Konec splošnih pogojev)</div>'
  },
}

type I18nContextType = {
  locale: SupportedLocale
  setLocale: (l: SupportedLocale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('locale') as SupportedLocale | null) : null
    return saved ?? 'de'
  })

  const setLocale = useCallback((l: SupportedLocale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('locale', l)
    } catch {}
  }, [])

  const dict = useMemo(() => translations[locale], [locale])

  const t = useCallback(
    (key: string) => {
      return dict[key] ?? key
    },
    [dict]
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


