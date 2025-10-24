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
  },
  sl: {
    // TODO: Slovenian translations
    'header.madeIn': 'TODO',
    'header.inAustria': 'TODO',

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
    'features.item.interactiveStories.desc': 'Zanimive zgodbe z avdio in animacijami, ki oživijo učenje.',
    'features.item.audio.title': 'Avdio podpora',
    'features.item.audio.desc': 'Visokokakovostne avdio posnetke za pravilno izgovorjavo obeh jezikov.',
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


