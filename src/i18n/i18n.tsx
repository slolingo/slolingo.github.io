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
  },
  sl: {
    // TODO: Slovenian translations
    'header.madeIn': 'TODO',
    'header.inAustria': 'TODO',

    'hero.title.html': 'TODO',
    'hero.subtitle': 'TODO',
    'hero.badge.interactiveStories': 'TODO',
    'hero.badge.exercises': 'TODO',
    'hero.badge.forKids': 'TODO',

    'download.title': 'TODO',
    'download.subtitle': 'TODO',
    'download.apple.line1': 'TODO',
    'download.apple.line2': 'TODO',
    'download.google.line1': 'TODO',
    'download.google.line2': 'TODO',

    'features.title.html': 'TODO',
    'features.subtitle': 'TODO',
    'features.item.interactiveStories.title': 'TODO',
    'features.item.interactiveStories.desc': 'TODO',
    'features.item.audio.title': 'TODO',
    'features.item.audio.desc': 'TODO',
    'features.item.games.title': 'TODO',
    'features.item.games.desc': 'TODO',
    'features.item.progress.title': 'TODO',
    'features.item.progress.desc': 'TODO',
    'features.item.forKids.title': 'TODO',
    'features.item.forKids.desc': 'TODO',
    'features.item.safe.title': 'TODO',
    'features.item.safe.desc': 'TODO',

    'about.title.html': 'TODO',
    'about.subtitle': 'TODO',
    'about.goal.title': 'TODO',
    'about.goal.p1': 'TODO',
    'about.goal.p2': 'TODO',
    'about.forWhom.title.html': 'TODO',
    'about.forWhom.item1': 'TODO',
    'about.forWhom.item2': 'TODO',
    'about.forWhom.item3': 'TODO',
    'about.materials.title': 'TODO',

    'footer.aboutUs': 'TODO',
    'footer.contact': 'TODO',
    'footer.imprint': 'TODO',
    'footer.apps': 'TODO',
    'footer.android': 'TODO',
    'footer.ios': 'TODO',
    'footer.privacyAndTerms': 'TODO',
    'footer.privacy': 'TODO',
    'footer.terms': 'TODO',
    'footer.madeWith': 'TODO',
    'footer.inAustria': 'TODO',
    'footer.fundedBy': 'TODO',
    'footer.fundedBySuffix': 'TODO',
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


