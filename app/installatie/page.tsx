'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  MonitorSmartphone,
  Tv,
  Apple,
  Laptop,
  Sparkles,
  Lock,
  Zap,
  Users,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  Download,
  KeyRound,
  AlertCircle,
  X,
  ChevronDown,
  ShoppingCart,
  Plug,
  ShieldCheck,
  Globe,
  Phone,
  Wifi,
  Mail,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';

/* =========================================================
   OMNIPTV — SETUP GUIDE (/installatie) — LIGHT STEPS + MODERN RHYTHM
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush     : #F4A7A7
   ========================================================= */

const FOCUS_KEYWORD = CONSTANTS.FOCUS_KEYWORD;
const SECONDARY_KEYWORD = CONSTANTS.SECONDARY_FOCUS_KEYWORD;
const PLAYER_DOWNLOAD_URL = 'https://iboplayer.pro/';

interface StepCTA {
  label: string;
  href?: string;
  type: 'internal' | 'external' | 'whatsapp';
  message?: string;
}

interface SetupMethod {
  title: string;
  subtitle: string;
  points: string[];
  highlighted: boolean;
}

interface StepStat {
  value: string;
  label: string;
}

interface SetupStep {
  number: number;
  title: string;
  description: string;
  chips?: string[];
  methods?: SetupMethod[];
  stats?: StepStat[];
  duration: string;
  icon: typeof ShoppingCart;
  cta?: StepCTA;
  tip?: string;
}

const FlagNL = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="st-pg-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="st-pg-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="st-pg-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="st-pg-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="st-pg-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const countries = [
  { code: 'NL', label: 'Nederland', Flag: FlagNL },
  { code: 'DE', label: 'Duitsland', Flag: FlagDE },
  { code: 'BE', label: 'België', Flag: FlagBE },
  { code: 'NO', label: 'Noorwegen', Flag: FlagNO },
  { code: 'CH', label: 'Zwitserland', Flag: FlagCH },
];

const devices: Array<{
  id: 'firestick' | 'smarttv' | 'apple' | 'pc';
  name: string;
  subtitle: string;
  icon: typeof MonitorSmartphone;
  popular: boolean;
  steps: number;
}> = [
  {
    id: 'firestick',
    name: 'Firestick / Android TV',
    subtitle: 'Downloader + Xtream Codes',
    icon: MonitorSmartphone,
    popular: true,
    steps: 6,
  },
  {
    id: 'smarttv',
    name: 'Smart TVs',
    subtitle: 'Samsung, LG & Google TV',
    icon: Tv,
    popular: false,
    steps: 6,
  },
  {
    id: 'apple',
    name: 'Apple Apparaten',
    subtitle: 'iPhone, iPad & Apple TV',
    icon: Apple,
    popular: false,
    steps: 6,
  },
  {
    id: 'pc',
    name: 'PC / Mac',
    subtitle: 'Speler & M3U Afspeellijst',
    icon: Laptop,
    popular: false,
    steps: 6,
  },
];

const preSetupChecks = [
  {
    icon: Wifi,
    title: '15+ Mbps FHD / 30+ Mbps 4K',
    desc: 'Gebruik bij voorkeur 5GHz WiFi of een netwerkkabel voor stabiele weergave tijdens live sport.',
  },
  {
    icon: Mail,
    title: 'Gegevens Direct Beschikbaar',
    desc: 'Houd uw apparaat of inloggegevens bij de hand voor een snelle koppeling via support.',
  },
  {
    icon: ShieldCheck,
    title: 'Xtream Codes & M3U',
    desc: 'Geschikt voor populaire spelers op televisie, streamingsticks, smartphones, tablets en computers.',
  },
];

const stepData: Record<'firestick' | 'smarttv' | 'apple' | 'pc', { title: string; icon: typeof MonitorSmartphone; steps: SetupStep[] }> = {
  firestick: {
    title: `Installatie ${FOCUS_KEYWORD} op Firestick & Android TV`,
    icon: MonitorSmartphone,
    steps: [
      {
        number: 1,
        title: `Kies Uw ${FOCUS_KEYWORD} Pakket`,
        description: `Selecteer het ${SECONDARY_KEYWORD} dat past bij uw huishouden. Kies uit 3, 6 of 12 maanden met 1, 2 of 3 gelijktijdige schermen en geniet van een uitgebreid zender- en VOD-aanbod.`,
        chips: ['Live Zenders', 'VOD Films & Series', '4K & 60FPS', 'Directe Keuze'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `Bekijk ${FOCUS_KEYWORD} Pakketten`, href: '/pakketten', type: 'internal' },
        tip: 'Een langere looptijd zoals 12 maanden geeft de scherpste prijs per maand en ondersteunt multi-room opties.',
      },
      {
        number: 2,
        title: 'Neem Contact Op Via WhatsApp',
        description: 'Stuur ons team een bericht op WhatsApp met uw gekozen pakket en aantal schermen. Wij bevestigen het overzicht en sturen een betaallink voor iDEAL, Bancontact, creditcard of crypto.',
        chips: ['iDEAL & Bancontact', 'Creditcard', 'Crypto', 'Snelle Reactie'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: {
          label: 'Chat via WhatsApp',
          type: 'whatsapp',
          message: `Hallo! Ik wil een pakket kiezen en hulp bij de installatie op mijn Firestick.`,
        },
        tip: 'Houd uw apparaat gereed tijdens het chatten zodat u direct na bevestiging verder kunt.',
      },
      {
        number: 3,
        title: 'Installeer De IPTV Speler',
        description: 'Installeer de geschikte IPTV-speler op uw Firestick of Android TV met ondersteuning voor 4K-weergave, EPG-programmagids en snelle kanaalwissels.',
        chips: ['4K Weergave', 'EPG Gids', 'Snel Zappen', 'Favorieten'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Open Speler Info', type: 'external', href: PLAYER_DOWNLOAD_URL },
        tip: 'Schakel op Firestick bij Instellingen → Mijn Fire TV → Ontwikkelaarsopties het installeren van externe apps in wanneer nodig.',
      },
      {
        number: 4,
        title: 'Kies Uw Verbindingsmethode',
        description: `Koppel uw ${FOCUS_KEYWORD} account via snelle hulp op afstand of vul zelf uw verbindingsgegevens in. Beide opties geven dezelfde beeldkwaliteit.`,
        methods: [
          {
            title: 'Hulp Op Afstand',
            subtitle: 'Aanbevolen',
            points: ['Deel uw apparaat-ID met support', 'Snelle koppeling van uw account', 'Zenderlijst verschijnt automatisch'],
            highlighted: true,
          },
          {
            title: 'Zelf Invullen',
            subtitle: 'Handmatig',
            points: ['Ontvang Xtream Codes of M3U-link', 'Vul gegevens in bij uw speler', 'Direct toegang tot het aanbod'],
            highlighted: false,
          },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Let bij het zelf invullen op hoofdletters en zorg dat er geen spaties voor of na de gegevens staan.',
      },
      {
        number: 5,
        title: 'Laad Zenders & EPG (1-2 Min)',
        description: 'Na het inloggen of koppelen laadt de app uw live kanalen, films, series en de elektronische programmagids. Laat de app even open staan tijdens deze eerste synchronisatie.',
        chips: ['1 tot 2 Min', 'EPG Synchronisatie', 'Vrije Opslag'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Zorg dat uw apparaat voldoende vrije opslagruimte heeft en verbonden is met een stabiel netwerk.',
      },
      {
        number: 6,
        title: `Start Met Streamen Via ${FOCUS_KEYWORD}!`,
        description: 'Alles is ingericht. Blader door live sport, nieuws, entertainment, films en series en markeer uw favoriete kanalen.',
        stats: [
          { value: '25.000+', label: 'Live Zenders' },
          { value: '60.000+', label: 'VOD Titels' },
          { value: '4K/60FPS', label: 'Beeldkwaliteit' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Klaar!',
        icon: PlayCircle,
        tip: 'Gebruik de favorietenlijst om uw meest bekeken zenders en sportkanalen direct terug te vinden.',
      },
    ],
  },
  smarttv: {
    title: `Installatie ${FOCUS_KEYWORD} op Smart TV`,
    icon: Tv,
    steps: [
      {
        number: 1,
        title: `Kies Uw ${FOCUS_KEYWORD} Pakket`,
        description: 'Kies een looptijd van 3, 6 of 12 maanden en geef aan of u op 1, 2 of 3 schermen tegelijk wilt kijken in de woonkamer of andere kamers.',
        chips: ['Live TV', 'Films & Series', 'Smart TV Klaar', 'Geen Contract'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `Bekijk ${FOCUS_KEYWORD} Pakketten`, href: '/pakketten', type: 'internal' },
        tip: 'Voor gezinnen die op meerdere televisies tegelijk kijken is een multi-screen optie het meest praktisch.',
      },
      {
        number: 2,
        title: 'Neem Contact Op Via WhatsApp',
        description: 'Stuur een bericht op WhatsApp met uw gekozen pakket en televisietype. Wij helpen u direct verder met de betaling en de juiste installatiestappen.',
        chips: ['iDEAL & Bancontact', 'Creditcard', 'Crypto', 'Direct Contact'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: {
          label: 'Chat via WhatsApp',
          type: 'whatsapp',
          message: `Hallo! Ik wil ${FOCUS_KEYWORD} instellen op mijn Smart TV.`,
        },
        tip: 'Vermeld het merk en bouwjaar van uw televisie als u twijfelt over de beschikbare apps in de store.',
      },
      {
        number: 3,
        title: 'Open De App Store Op Uw TV',
        description: 'Ga op uw Smart TV naar de app store van uw platform en zoek naar een ondersteunde IPTV-speler voor uw televisie.',
        chips: ['Smart TV App Store', 'EPG Ondersteuning', 'Afstandsbediening'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Open Speler Info', type: 'external', href: PLAYER_DOWNLOAD_URL },
        tip: 'Gebruik bij voorkeur een vaste netwerkkabel of 5GHz WiFi voor de meest stabiele verbinding op de televisie.',
      },
      {
        number: 4,
        title: 'Kies Uw Verbindingsmethode',
        description: 'Koppel uw abonnement via hulp op afstand of voer handmatig uw Xtream Codes of M3U-gegevens in de app in.',
        methods: [
          {
            title: 'Hulp Op Afstand',
            subtitle: 'Aanbevolen',
            points: ['Geef uw apparaat-ID door', 'Snelle activatie via support', 'Zenders laden automatisch'],
            highlighted: true,
          },
          {
            title: 'Handmatige Login',
            subtitle: 'Zelf Invoeren',
            points: ['Ontvang server- en logingegevens', 'Vul in bij afspeellijst/login', 'Direct starten met kijken'],
            highlighted: false,
          },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Controleer na het typen altijd of er geen typefouten in de URL of gebruikersnaam staan.',
      },
      {
        number: 5,
        title: 'Synchroniseer Kanalen & Gids',
        description: 'Wacht 1 tot 2 minuten terwijl de speler de zenderlijsten, categorieën en programmagids ophaalt.',
        chips: ['1 tot 2 Min', 'Automatische Sync', 'TV-Gids'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Sluit de app niet tussentijds af tijdens het eerste inladen van de zenderlijst.',
      },
      {
        number: 6,
        title: `Geniet Van ${FOCUS_KEYWORD} Op Groot Scherm`,
        description: 'Uw Smart TV is klaar voor dagelijks gebruik. Schakel eenvoudig tussen live zenders, sport en on-demand titels.',
        stats: [
          { value: '25.000+', label: 'Live Zenders' },
          { value: '60.000+', label: 'VOD Titels' },
          { value: '4K', label: 'Ultra HD' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Klaar!',
        icon: PlayCircle,
        tip: 'Gebruik de zoekfunctie in uw speler om snel specifieke zenders of films te openen.',
      },
    ],
  },
  apple: {
    title: `Installatie ${FOCUS_KEYWORD} op Apple Apparaten`,
    icon: Apple,
    steps: [
      {
        number: 1,
        title: `Kies Uw ${FOCUS_KEYWORD} Pakket`,
        description: 'Kies een pakket van 3, 6 of 12 maanden en bepaal het gewenste aantal schermen voor iPhone, iPad of Apple TV.',
        chips: ['iPhone & iPad', 'Apple TV', 'Meerdere Schermen', 'Flexibel'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `Bekijk ${FOCUS_KEYWORD} Pakketten`, href: '/pakketten', type: 'internal' },
        tip: 'Stem het aantal schermen af op het aantal apparaten dat u tegelijk wilt gebruiken.',
      },
      {
        number: 2,
        title: 'Neem Contact Op Via WhatsApp',
        description: 'Neem contact met ons op via WhatsApp om uw keuze te bevestigen, veilig af te rekenen en uw installatie-instructies te ontvangen.',
        chips: ['Veilig Afrekenen', 'Snelle Hulp', 'WhatsApp Chat'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: {
          label: 'Chat via WhatsApp',
          type: 'whatsapp',
          message: `Hallo! Ik wil ${FOCUS_KEYWORD} instellen op mijn Apple apparaat.`,
        },
        tip: 'Houd uw e-mail en WhatsApp bij de hand om gegevens eenvoudig te kopiëren en te plakken.',
      },
      {
        number: 3,
        title: 'Download Een Geschikte IPTV App',
        description: 'Open de App Store op uw iPhone, iPad of Apple TV en installeer een ondersteunde IPTV-speler.',
        chips: ['iOS & tvOS', 'App Store', 'Soepele Bediening'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Open Speler Info', type: 'external', href: PLAYER_DOWNLOAD_URL },
        tip: 'Op Apple TV kunt u de afstandsbediening op uw iPhone gebruiken om tekst sneller in te voeren.',
      },
      {
        number: 4,
        title: 'Koppel Uw Abonnement',
        description: 'Kies voor koppeling via support of voer uw Xtream Codes / M3U-gegevens handmatig in de app in.',
        methods: [
          {
            title: 'Hulp Op Afstand',
            subtitle: 'Aanbevolen',
            points: ['Stuur uw apparaatgegevens', 'Snelle activering via chat', 'Lijst wordt direct geladen'],
            highlighted: true,
          },
          {
            title: 'Zelf Invullen',
            subtitle: 'Handmatig',
            points: ['Gebruik M3U of Xtream API', 'Plak gegevens in de app', 'Direct klaar voor gebruik'],
            highlighted: false,
          },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Gebruik kopiëren en plakken vanuit uw bericht of e-mail om typefouten te voorkomen.',
      },
      {
        number: 5,
        title: 'Laad Kanalen & Programmagids',
        description: 'Geef de app 1 tot 2 minuten om alle categorieën, zenders en EPG-informatie in te laden.',
        chips: ['1 tot 2 Min', 'EPG Gids', 'Snelle Start'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Ververs de afspeellijst in de app-instellingen als u later nieuwe zenders wilt ophalen.',
      },
      {
        number: 6,
        title: `Start Met Kijken Op Apple`,
        description: 'Uw iPhone, iPad of Apple TV is ingesteld. Bekijk live uitzendingen, sport en on-demand titels waar u wilt.',
        stats: [
          { value: '25.000+', label: 'Live Zenders' },
          { value: '60.000+', label: 'VOD Titels' },
          { value: '4K', label: 'Kwaliteit' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Klaar!',
        icon: PlayCircle,
        tip: 'Zorg voor een stabiele WiFi- of 5G-verbinding wanneer u onderweg of op een tweede scherm kijkt.',
      },
    ],
  },
  pc: {
    title: `Installatie ${FOCUS_KEYWORD} op PC & Mac`,
    icon: Laptop,
    steps: [
      {
        number: 1,
        title: `Kies Uw ${FOCUS_KEYWORD} Pakket`,
        description: 'Selecteer een pakket voor 3, 6 of 12 maanden met ondersteuning voor 1, 2 of 3 schermen voor desktop en laptop.',
        chips: ['Windows & Mac', 'Meerdere Schermen', 'Direct Klaar'],
        duration: '1 min',
        icon: ShoppingCart,
        cta: { label: `Bekijk ${FOCUS_KEYWORD} Pakketten`, href: '/pakketten', type: 'internal' },
        tip: 'Een multi-screen pakket is handig als u op een computer kijkt terwijl op een TV een ander kanaal aanstaat.',
      },
      {
        number: 2,
        title: 'Neem Contact Op Via WhatsApp',
        description: 'Neem contact op via WhatsApp om uw pakket te bevestigen en uw M3U-link of Xtream-gegevens te ontvangen.',
        chips: ['M3U & Xtream', 'Snelle Service', 'WhatsApp Support'],
        duration: '2-3 min',
        icon: MessageCircle,
        cta: {
          label: 'Chat via WhatsApp',
          type: 'whatsapp',
          message: `Hallo! Ik wil ${FOCUS_KEYWORD} instellen op mijn PC of Mac.`,
        },
        tip: 'Geef aan of u een M3U-link of Xtream Codes wilt gebruiken voor uw gekozen desktopspeler.',
      },
      {
        number: 3,
        title: 'Installeer Een Mediaspeler',
        description: 'Installeer een geschikte IPTV-speler of mediaspeler zoals VLC Media Player op uw Windows-pc of Mac.',
        chips: ['Windows 10/11', 'macOS', 'Lichtgewicht'],
        duration: '2 min',
        icon: Download,
        cta: { label: 'Open Speler Info', type: 'external', href: PLAYER_DOWNLOAD_URL },
        tip: 'In VLC kunt u via Media → Open Netwerkstream direct een M3U-link openen.',
      },
      {
        number: 4,
        title: 'Voeg Uw Afspeellijst Toe',
        description: 'Kies voor koppeling met hulp op afstand of plak uw M3U-URL / Xtream-gegevens direct in uw speler.',
        methods: [
          {
            title: 'Hulp Op Afstand',
            subtitle: 'Aanbevolen',
            points: ['Deel de benodigde gegevens', 'Snelle koppeling via support', 'Direct inzetbaar'],
            highlighted: true,
          },
          {
            title: 'Zelf Invullen',
            subtitle: 'M3U / Xtream',
            points: ['Kopieer uw M3U-URL of login', 'Plak in uw mediaspeler', 'Start het afspelen'],
            highlighted: false,
          },
        ],
        duration: '2 min',
        icon: KeyRound,
        tip: 'Behandel uw M3U-link als een wachtwoord en deel deze niet met anderen.',
      },
      {
        number: 5,
        title: 'Laad De Kanaallijst',
        description: 'Laat de speler 1 tot 2 minuten de kanalen en categorieën laden voordat u een stream opent.',
        chips: ['1 tot 2 Min', 'Categorieën', 'Vlotte Start'],
        duration: '1-2 min',
        icon: Plug,
        tip: 'Gebruik bij voorkeur een bekabelde internetverbinding of stabiele WiFi op uw computer.',
      },
      {
        number: 6,
        title: `Begin Met Kijken Op PC Of Mac`,
        description: 'Uw computer is gereed om live kanalen, sport en on-demand content te bekijken.',
        stats: [
          { value: '25.000+', label: 'Live Zenders' },
          { value: '60.000+', label: 'VOD Titels' },
          { value: '4K', label: 'Kwaliteit' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Klaar!',
        icon: PlayCircle,
        tip: 'Schakel waar beschikbaar hardwarematige versnelling in voor soepele weergave.',
      },
    ],
  },
};

const setupFaqs = [
  {
    q: 'Hoe ontvang ik mijn gegevens na het kiezen van een pakket?',
    a: 'Na contact op WhatsApp en afronding van de betaling ontvangt u direct uw benodigde informatie en instructies om uw apparaat te koppelen.',
  },
  {
    q: `Welke speler raden jullie aan voor ${FOCUS_KEYWORD} installatie?`,
    a: 'Wij adviseren een stabiele IPTV-speler met ondersteuning voor Xtream Codes en M3U, afgestemd op uw apparaat (Firestick, Android TV, Smart TV, Apple of computer).',
  },
  {
    q: 'Moet ik de installatie zelf doen of krijg ik hulp?',
    a: 'U kunt zelf de stappen volgen met onze handleiding of om hulp vragen via WhatsApp zodat u snel aan de slag kunt.',
  },
  {
    q: `Hoe lang duurt de ${FOCUS_KEYWORD} installatie gemiddeld?`,
    a: 'De meeste gebruikers zijn binnen 5 tot 10 minuten klaar: het installeren van de speler, koppelen van het account en het inladen van de lijst kost slechts enkele minuten.',
  },
  {
    q: 'Kan ik op meerdere apparaten tegelijk kijken?',
    a: 'U kunt de app op meerdere apparaten installeren. Het aantal gelijktijdige streams hangt af van uw gekozen pakket (1, 2 of 3 schermen).',
  },
  {
    q: 'Wat als het inloggen of laden van de lijst niet direct lukt?',
    a: 'Controleer of u de juiste methode (Xtream Codes of M3U) heeft gekozen, let op hoofdletters en spaties, en controleer uw internetverbinding. Komt u er niet uit? Neem contact op via WhatsApp.',
  },
  {
    q: `Welke internetsnelheid is aanbevolen voor ${FOCUS_KEYWORD}?`,
    a: 'Voor Full HD 1080p adviseren wij minimaal 15 Mbps en voor 4K Ultra HD minimaal 30 Mbps met een stabiele verbinding.',
  },
  {
    q: `Heb ik een VPN nodig voor ${FOCUS_KEYWORD}?`,
    a: 'Een VPN is niet verplicht. Als uw provider beperkingen toepast op streamingverkeer, kunt u een VPN gebruiken.',
  },
];

const longFormFaqs = [
  {
    q: `Welke apparaten werken het beste voor de installatie van ${FOCUS_KEYWORD}?`,
    a: `Voor de meest soepele ervaring met ${FOCUS_KEYWORD} adviseren wij moderne streamingsticks zoals een Amazon Firestick, recente Smart TV’s (zoals Samsung, LG of Google/Android TV), Apple TV en actuele computers met een stabiele netwerkverbinding. Deze apparaten verwerken hoge resoluties en snelle kanaalwissels vlot. Een bekabelde verbinding of 5GHz WiFi helpt om haperingen tijdens live uitzendingen te minimaliseren.`,
  },
  {
    q: 'Hoe werkt koppelen met hulp via WhatsApp in de praktijk?',
    a: `Wanneer u contact opneemt via WhatsApp, lopen we samen door welke app u gebruikt en hoe uw account wordt gekoppeld. U kunt zelf uw Xtream Codes of M3U-link invoeren, of de benodigde gegevens delen met support zodat u snel verder kunt zonder onduidelijkheden over instellingen. Zo voorkomt u typefouten en staat uw lijst vlot klaar.`,
  },
  {
    q: 'Wat als mijn televisie ouder is en geen geschikte app ondersteunt?',
    a: `Heeft u een oudere televisie waarbij de gewenste speler niet beschikbaar is in de ingebouwde app store? Dan is een externe streamingstick of mediaspeler via HDMI vaak de eenvoudigste oplossing. Daarmee gebruikt u een moderne interface op uw bestaande televisie zonder direct een nieuwe TV te hoeven aanschaffen.`,
  },
  {
    q: 'Kan ik later wisselen van apparaat of uitbreiden naar meer schermen?',
    a: `Ja, u kunt uw app op andere geschikte apparaten gebruiken en bij vragen over uw account of extra schermen contact opnemen met onze ondersteuning. Kies vooraf het aantal gelijktijdige schermen dat past bij uw huishouden zodat meerdere personen tegelijk zonder onderbreking kunnen kijken.`,
  },
];

function StepItem({ step, index, isLast }: { step: SetupStep; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4 sm:gap-6">
        {/* Left Step Badge & Connector */}
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center z-10 transition-all duration-300 ${
              isInView
                ? 'bg-[#E3182B] text-white shadow-lg scale-105'
                : 'bg-white text-[#1B1B1F] border-2 border-[#6B7280]/25'
            }`}
            initial={{ scale: 0.85, opacity: 0.7 }}
            animate={{ scale: isInView ? 1 : 0.9, opacity: 1 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <span className="text-lg sm:text-2xl font-black">{step.number}</span>
          </motion.div>

          {!isLast && (
            <div className="relative w-0.5 flex-1 min-h-[56px] my-2 bg-[#6B7280]/20 overflow-hidden rounded-full">
              <motion.div
                className="w-full bg-[#E3182B]"
                initial={{ height: '0%' }}
                animate={{ height: isInView ? '100%' : '0%' }}
                transition={{ duration: 0.6, delay: index * 0.08 + 0.15 }}
              />
            </div>
          )}
        </div>

        {/* Light-Mode Modern Step Card */}
        <motion.div
          className="flex-1 pb-10 sm:pb-12 min-w-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 18 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
        >
          <div
            className={`bg-white text-[#1B1B1F] rounded-3xl p-5 sm:p-7 transition-all duration-300 border-2 ${
              isInView
                ? 'border-[#E3182B]/60 shadow-lg'
                : 'border-[#6B7280]/20 shadow-sm'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#1B1B1F] text-[#FFD700] shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#1B1B1F]">
                  {step.title}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#6B7280]/20">
                <Clock className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                <span className="text-[#1B1B1F] text-xs font-extrabold uppercase tracking-wider">
                  {step.duration}
                </span>
              </div>
            </div>

            <p className="text-[#6B7280] font-medium leading-relaxed text-sm sm:text-base mb-4">
              {step.description}
            </p>

            {step.chips && (
              <div className="flex flex-wrap gap-2 mb-4">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#6B7280]/20 text-[#1B1B1F] text-[10px] sm:text-xs font-black uppercase tracking-wider"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {step.methods && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                {step.methods.map((m) => (
                  <div
                    key={m.title}
                    className={`rounded-2xl p-4 border-2 transition-colors ${
                      m.highlighted
                        ? 'bg-[#1B1B1F] text-white border-[#FFD700]'
                        : 'bg-[#F7F7F7] text-[#1B1B1F] border-[#6B7280]/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          m.highlighted
                            ? 'bg-[#FFD700] text-[#1B1B1F]'
                            : 'bg-white text-[#E3182B] border border-[#6B7280]/20'
                        }`}
                      >
                        {m.subtitle}
                      </span>
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-tight mb-2">
                      {m.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {m.points.map((p) => (
                        <li
                          key={p}
                          className={`flex items-center gap-2 text-xs font-semibold ${
                            m.highlighted ? 'text-white/80' : 'text-[#6B7280]'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {step.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-[#F7F7F7] text-center py-3 px-2 border border-[#6B7280]/20"
                  >
                    <div className="text-base sm:text-lg font-black text-[#E3182B] leading-none">
                      {s.value}
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#6B7280] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {step.cta && (
              <div className="mb-4">
                {step.cta.type === 'internal' && step.cta.href && (
                  <Link
                    href={step.cta.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFD700] text-[#1B1B1F] text-xs font-black uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-sm"
                  >
                    <span>{step.cta.label}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                )}
                {step.cta.type === 'external' && step.cta.href && (
                  <a
                    href={step.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F7F7] border border-[#6B7280]/25 hover:border-[#E3182B] text-[#1B1B1F] text-xs font-black uppercase tracking-widest transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
                    <span>{step.cta.label}</span>
                  </a>
                )}
                {step.cta.type === 'whatsapp' && (
                  <a
                    href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                      step.cta.message || 'Hallo, ik heb hulp nodig bij de installatie.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10B981] text-[#1B1B1F] text-xs font-black uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{step.cta.label}</span>
                  </a>
                )}
              </div>
            )}

            {step.tip && (
              <div className="p-3.5 rounded-2xl bg-[#F7F7F7] border border-[#6B7280]/20 flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[#1B1B1F] flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#E3182B] font-black text-[11px] uppercase tracking-widest">
                    Tip
                  </p>
                  <p className="text-[#6B7280] text-xs sm:text-sm font-medium mt-0.5 leading-relaxed">
                    {step.tip}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState<'firestick' | 'smarttv' | 'apple' | 'pc'>('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice];
  const CurrentIcon = currentData.icon;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) iframeRef.current.src = '';
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1';
      }
    }, 80);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip">
      {/* =========================================================
          1. HERO BAND [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/bg-1.webp"
            alt={`${FOCUS_KEYWORD} installatie op Firestick, Smart TV, Apple en PC`}
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F]/80 via-[#1B1B1F]/85 to-[#1B1B1F]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[340px] w-[720px] rounded-full bg-[#E3182B]/15 blur-[145px] z-[1]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px] z-[1]"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <FadeInStagger className="flex flex-col items-center w-full">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#232329] px-4 py-1.5 rounded-full mb-6 shadow-md border border-[#FFD700]/40">
                <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
                  Eenvoudige {FOCUS_KEYWORD} Installatie
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-5 leading-[1.05]">
                Installatie {FOCUS_KEYWORD} <br />
                <span className="text-[#FFD700]">Binnen Enkele Minuten</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-7">
                Volg het stappenplan voor <strong className="text-white">{FOCUS_KEYWORD}</strong> op Firestick, Smart TV, Apple en PC of Mac, of vraag direct hulp via WhatsApp.
              </p>
            </FadeInItem>

            {/* Region Flags Bar */}
            <FadeInItem className="w-full flex justify-center mb-7">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-full bg-[#232329] border border-white/10 shadow-lg overflow-x-auto max-w-full">
                {countries.map(({ code, label, Flag }, idx) => (
                  <div key={code} className="flex items-center gap-1.5 shrink-0">
                    {idx > 0 && (
                      <span className="text-white/25 text-xs font-black mr-1" aria-hidden="true">
                        •
                      </span>
                    )}
                    <Flag />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInItem>

            <FadeInItem className="w-full">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-extrabold uppercase tracking-wider text-white mb-8">
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Lock className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Veilige Setup
                </span>
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Zap className="w-4 h-4 text-[#10B981]" aria-hidden="true" /> Snelle Start
                </span>
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Headphones className="w-4 h-4 text-[#E3182B]" aria-hidden="true" /> 24/7 Support
                </span>
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Users className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> 25.000+ Kijkers
                </span>
              </div>
            </FadeInItem>

            <FadeInItem className="w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="#stappenplan"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all hover:scale-105 shadow-lg"
                >
                  Bekijk Stappenplan
                </Link>
                <button
                  type="button"
                  onClick={openVideo}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#232329] text-white border border-white/15 hover:border-[#FFD700] font-black text-xs sm:text-sm uppercase tracking-widest transition-all cursor-pointer"
                >
                  <PlayCircle className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                  <span>Video Handleiding</span>
                </button>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          2. DEVICE SELECTOR & LIGHT-MODE STEPS [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section
        id="stappenplan"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
              Apparaat &amp; Stappen
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1B1B1F] uppercase tracking-tight leading-tight">
              Installeer {FOCUS_KEYWORD} Op <span className="text-[#E3182B]">Uw Apparaat</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-lg font-medium mt-3">
              Kies hieronder uw platform en doorloop de stappen in een heldere, overzichtelijke weergave.
            </p>
          </FadeIn>

          {/* Device Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {devices.map((device) => {
              const Icon = device.icon;
              const isActive = activeDevice === device.id;
              return (
                <button
                  key={device.id}
                  type="button"
                  onClick={() => setActiveDevice(device.id)}
                  className={`relative p-6 rounded-3xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#1B1B1F] text-white border-2 border-[#FFD700] shadow-xl -translate-y-0.5'
                      : 'bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] shadow-sm'
                  }`}
                >
                  {device.popular && (
                    <span className="absolute -top-3 right-5 bg-[#FFD700] text-[#1B1B1F] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full shadow-sm">
                      Meest Gekozen
                    </span>
                  )}

                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                        isActive
                          ? 'bg-[#232329] text-[#FFD700] border border-[#FFD700]/30'
                          : 'bg-[#1B1B1F] text-[#FFD700]'
                      }`}
                    >
                      <Icon className="w-6 h-6 shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-1">
                      {device.name}
                    </h3>
                    <p
                      className={`text-xs font-medium ${
                        isActive ? 'text-white/70' : 'text-[#6B7280]'
                      }`}
                    >
                      {device.subtitle}
                    </p>
                  </div>

                  <div
                    className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-black uppercase tracking-wider ${
                      isActive
                        ? 'border-white/10 text-[#10B981]'
                        : 'border-[#6B7280]/15 text-[#E3182B]'
                    }`}
                  >
                    <span>{device.steps} Stappen</span>
                    <span>{isActive ? 'Actief' : 'Bekijk'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pre-Setup Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {preSetupChecks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-black text-[#1B1B1F] uppercase tracking-tight mb-1">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Device Header & Light-Mode Step Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#6B7280]/20 text-[#1B1B1F] font-black uppercase text-xs tracking-widest mb-3 shadow-sm">
                <CurrentIcon className="w-4 h-4 text-[#E3182B] shrink-0" aria-hidden="true" />
                <span>{currentData.title}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                Stappenplan In <span className="text-[#E3182B]">6 Helder Stappen</span>
              </h3>
            </div>

            <div className="relative">
              {currentData.steps.map((step, index) => (
                <StepItem
                  key={`${activeDevice}-${step.number}`}
                  step={step}
                  index={index}
                  isLast={index === currentData.steps.length - 1}
                />
              ))}
            </div>

            {/* Completion Card */}
            <motion.div
              className="text-center mt-6 p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#6B7280]/20 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#10B981]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1B1B1F] uppercase tracking-tight mb-3">
                {FOCUS_KEYWORD} Installatie <span className="text-[#E3182B]">Voltooid!</span>
              </h3>
              <p className="text-[#6B7280] font-medium text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                U bent klaar om te starten. Bekijk onze pakketten of ga terug naar de homepage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-md mx-auto">
                <Link
                  href="/pakketten"
                  className="w-full sm:w-auto text-center whitespace-nowrap px-7 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md"
                >
                  Bekijk Pakketten
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto text-center whitespace-nowrap px-7 py-4 rounded-full bg-[#1B1B1F] text-white font-black text-xs sm:text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md"
                >
                  Naar Homepage
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHY SETUP WITH US & SUPPORT HUB [DARK #1B1B1F + #232329 CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[660px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
              <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
                Voordelen &amp; Ondersteuning
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Waarom Kiezen Voor <span className="text-[#FFD700]">Onze Hulp?</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-lg font-medium mt-3 leading-relaxed">
              Duidelijke uitleg, snelle ondersteuning via WhatsApp en overzichtelijke stappen voor elk apparaat.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Heldere Begeleiding',
                desc: 'Duidelijke instructies zonder ingewikkelde stappen voor zowel beginners als ervaren gebruikers.',
              },
              {
                icon: Zap,
                title: 'Snelle Koppeling',
                desc: 'Krijg direct advies over de juiste methode voor uw apparaat zodat u snel kunt starten.',
              },
              {
                icon: Clock,
                title: 'Binnen Enkele Minuten Klaar',
                desc: 'Van het openen van de app tot het laden van zenders en gids kost slechts een paar minuten.',
              },
              {
                icon: PlayCircle,
                title: 'Breed Apparaatbereik',
                desc: 'Ondersteuning voor populaire streamingsticks, Smart TV’s, Apple apparaten en computers.',
              },
              {
                icon: MessageCircle,
                title: 'Directe WhatsApp Chat',
                desc: 'Stel uw vragen direct via WhatsApp en ontvang praktische hulp zonder lange wachttijden.',
              },
              {
                icon: Lock,
                title: 'Veilig Afrekenen',
                desc: 'Transparante pakketten met veilige betaalmogelijkheden en duidelijke voorwaarden.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={item.title}
                  className="bg-[#232329] border border-white/10 hover:border-[#FFD700]/60 rounded-3xl p-6 sm:p-7 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          {/* Support Action Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#232329] border border-white/10 rounded-3xl p-7 text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="w-7 h-7 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  Visuele Video Handleiding
                </h3>
                <p className="text-white/75 text-sm font-medium mb-6 leading-relaxed">
                  Bekijk de video-uitleg om de stappen visueel op uw scherm te volgen.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={openVideo}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black uppercase text-xs tracking-widest hover:brightness-95 transition-all cursor-pointer"
                >
                  <span>Bekijk Video</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="bg-[#232329] border border-white/10 rounded-3xl p-7 text-center flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-[#10B981]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  24/7 WhatsApp Support
                </h3>
                <p className="text-white/75 text-sm font-medium mb-6 leading-relaxed">
                  Hulp nodig bij het instellen of kiezen van een pakket? Chat direct met ons team.
                </p>
              </div>
              <div>
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    `Hallo, ik heb hulp nodig bij ${FOCUS_KEYWORD} installatie.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#10B981] text-[#1B1B1F] font-black uppercase text-xs tracking-widest hover:brightness-95 transition-all"
                >
                  <span>Chat via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. FAQ & SEO DEEP-DIVE GUIDE [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15 overflow-hidden"
        aria-label={`Veelgestelde vragen over ${FOCUS_KEYWORD} installatie`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#6B7280]/20 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
                Installatie FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1B1B1F] uppercase tracking-tight">
              Veelgestelde <span className="text-[#E3182B]">Vragen</span>
            </h2>
            <p className="text-[#6B7280] font-medium text-sm sm:text-lg max-w-2xl mx-auto mt-3">
              Snelle antwoorden op veelgestelde vragen over de installatie en werking.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-3.5">
            {setupFaqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <FadeInItem key={faq.q}>
                  <div
                    className={`rounded-3xl transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#1B1B1F] text-white border-2 border-[#FFD700] shadow-lg'
                        : 'bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3182B] rounded-3xl"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start sm:items-center gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? 'bg-[#FFD700] text-[#1B1B1F]'
                              : 'bg-[#F7F7F7] text-[#E3182B] border border-[#6B7280]/20'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-black uppercase tracking-tight leading-snug ${
                            isOpen ? 'text-white' : 'text-[#1B1B1F]'
                          }`}
                        >
                          {faq.q}
                        </span>
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-1 sm:mt-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FFD700]' : 'text-[#6B7280]'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="px-5 sm:px-6 pb-5 pt-1 sm:pl-[4.25rem]">
                          <p
                            className={`text-sm font-medium leading-relaxed border-l-2 pl-3.5 ${
                              isOpen
                                ? 'text-white/85 border-[#FFD700]'
                                : 'text-[#6B7280] border-[#E3182B]'
                            }`}
                          >
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          {/* SEO Deep-Dive Guide Block Inside Light Section */}
          <div className="mt-16 pt-14 border-t border-[#6B7280]/20">
            <FadeIn className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#6B7280]/20 px-4 py-1.5 rounded-full mb-3 shadow-sm">
                <Globe className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
                <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
                  Uitgebreide Uitleg
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                {FOCUS_KEYWORD} Installatie <span className="text-[#E3182B]">In Detail</span>
              </h2>
              <p className="text-[#6B7280] text-sm sm:text-base font-medium max-w-2xl mx-auto mt-2 leading-relaxed">
                Aanvullende informatie over apparaten, koppelen en kijkervaring om uw installatie soepel te laten verlopen.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {longFormFaqs.map((item, idx) => (
                <div
                  key={item.q}
                  className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 sm:p-8 shadow-sm"
                >
                  <h3 className="text-base sm:text-xl font-black text-[#1B1B1F] uppercase tracking-tight mb-3 flex items-start gap-3">
                    <span className="text-[#E3182B] font-black shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{item.q}</span>
                  </h3>
                  <p className="text-[#6B7280] font-medium leading-relaxed text-sm sm:text-base pl-4 sm:pl-6 border-l-2 border-[#E3182B]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center flex flex-col sm:flex-row gap-3.5 justify-center items-center">
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hallo! Ik heb een vraag over ${FOCUS_KEYWORD} installatie.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1B1B1F] text-white hover:bg-[#E3182B] font-black text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                <span>Stel Uw Vraag Op WhatsApp</span>
              </a>
              <Link
                href="/pakketten"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-md"
              >
                <span>Bekijk Pakketten</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="w-full flex justify-center items-center mt-10">
              <ShareButtons />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. VIDEO MODAL
      ========================================================= */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B1B1F]/90 backdrop-blur-md p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeVideo();
          }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={closeVideo}
              className="mb-3 ml-auto text-white/80 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 text-xs font-black uppercase tracking-widest"
            >
              <X className="w-5 h-5 shrink-0" aria-hidden="true" /> Video Sluiten
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFD700] bg-[#1B1B1F]">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title={`${FOCUS_KEYWORD} Installatie - Video Handleiding`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}