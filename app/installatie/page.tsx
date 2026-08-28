'use client';

import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import { 
  MonitorSmartphone, Tv, Apple, Laptop, Sparkles, Lock, Zap, Users, 
  CheckCircle2, PlayCircle, ArrowRight, MessageCircle, Clock, Headphones, 
  Shield, Download, Mail, Cpu, Search, AlertCircle, TrendingUp, X, ShoppingCart, ChevronDown
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';

// Direct SVG Flag Badges (NL, DE, BE, NO, CH)
const FlagNL = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#st-pg-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const devices = [
  { id: 'firestick', name: 'Firestick / Android', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Apparaten', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Firestick & Android Box',
    icon: MonitorSmartphone,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Het installatieproces begint wanneer u uw account bij ons aanmaakt. Bezoek onze prijzenpagina, selecteer uw gewenste abonnement (3, 6 of 12 maanden) en voltooi de veilige betaling. Na een succesvolle betaling ontvangt u binnen 1-2 minuten een e-mail met uw unieke inloggegevens, waaronder gebruikersnaam, wachtwoord en Portal URL. Controleer ook uw spammap indien nodig.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Gebruik een geldig e-mailadres waar u direct toegang toe heeft. Sla de inloggegevens goed op.' 
      },
      { 
        number: 2, 
        title: 'Onbekende bronnen inschakelen', 
        description: 'Ga vanaf het Firestick-startscherm naar Instellingen (tandwieltje) in de rechterbovenhoek. Selecteer "Mijn Fire TV" of "Apparaat". Ga naar "Opties voor ontwikkelaars". Als u dit niet ziet, klik dan bij "Over" 7 keer snel achter elkaar op de naam van uw Fire TV Stick om het menu te ontgrendelen. Zet vervolgens "Apps van onbekende bronnen" AAN.', 
        duration: '2 min', 
        icon: Shield, 
        tip: 'Deze instelling is volkomen veilig en is vereist voor het installeren van IPTV spelers die niet standaard in de Amazon App Store staan.' 
      },
      { 
        number: 3, 
        title: 'Installeer de Downloader App', 
        description: 'Klik op het startscherm van uw Firestick op het zoekicoon (vergrootglas) linksboven. Typ "Downloader" in met het virtuele toetsenbord. Selecteer de Downloader app met het oranje/witte icoon (ontwikkeld door AFTVnews). Klik op "Downloaden" of "Get". Open de app nadat de installatie is voltooid.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Downloader is de officiële en veilige app om applicaties op uw Firestick te sideloaden.' 
      },
      { 
        number: 4, 
        title: 'Voer de installatiecode in', 
        description: `Open de Downloader app. Voer in de URL-balk de volgende officiële installatiecode in: 83492. Klik op "Go". De ${CONSTANTS.FOCUS_KEYWORD} app wordt nu automatisch gedownload. Zodra de download gereed is, verschijnt er een pop-up. Klik op "Installeren".`, 
        duration: '2 min', 
        icon: MonitorSmartphone, 
        tip: 'Zorg voor een stabiele internetverbinding voordat u de code invoert. Mocht er een storing zijn, neem dan contact op met onze support.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met inloggegevens', 
        description: `Open de zojuist geïnstalleerde ${CONSTANTS.FOCUS_KEYWORD} app. Selecteer op het inlogscherm "Inloggen via Xtream Codes API". Voer uw Portal URL, Gebruikersnaam en Wachtwoord in exact zoals vermeld in uw welkomstmail. Klik op "Inloggen" of "Gebruiker toevoegen".`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Controleer of u de Xtream Codes methode geselecteerd heeft (niet M3U). De inloggegevens zijn hoofdlettergevoelig.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Gefeliciteerd! Uw apparaat is nu volledig geconfigureerd. U heeft direct toegang tot 20.000+ live zenders, sportkanalen, VOD films en series. Gebruik de EPG tv-gids om programma’s te bekijken en geniet van buffervrije 4K kwaliteit.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Ontdek alle app-functies zoals favorieten en ouderlijk toezicht. Neem bij vragen gerust contact op met onze 24/7 support.' 
      },
    ]
  },
  smarttv: {
    title: 'Smart TV Setup',
    icon: Tv,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Begin met het aanmaken van een account op onze website. Kies uw abonnementsvorm (3, 6 of 12 maanden) en voltooi de beveiligde betaling. Binnen enkele minuten ontvangt u per e-mail uw inloggegevens (Gebruikersnaam, Wachtwoord en Portal URL).', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Bewaar uw welkomstmail goed voor eventuele herinstallatie op een ander apparaat.' 
      },
      { 
        number: 2, 
        title: 'Open de App Store', 
        description: 'Druk op de afstandsbediening van uw Samsung, LG of Sony Smart TV op de Home-knop. Open de Samsung Apps Store, LG Content Store of Google Play Store (afhankelijk van uw televisiamerk). Zorg dat uw tv verbonden is met internet.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'Controleer of uw televisie is verbonden via een stabiele netwerkkabel of 5GHz WiFi.' 
      },
      { 
        number: 3, 
        title: 'Zoek naar IPTV Player', 
        description: 'Typ in de zoekbalk van de app store "IPTV Smarters Pro" of "IBO Player". Beide zijn uitstekende en gebruiksvriendelijke spelers die perfect samenwerken met onze streamingdiensten.', 
        duration: '2 min', 
        icon: Search, 
        tip: 'Wij raden IPTV Smarters Pro aan omdat deze app volledig gratis en zeer stabiel is.' 
      },
      { 
        number: 4, 
        title: 'Installeer de App', 
        description: 'Klik op "Installeren" of "Downloaden". Zodra de installatie is voltooid, kunt u de app openen via het startscherm van uw televisie.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'Bij een melding over onvoldoende opslagruimte kunt u ongebruikte apps verwijderen om ruimte vrij te maken.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met gegevens', 
        description: `Open de app en selecteer "Login with Xtream Codes API". Voer de Portal URL, Gebruikersnaam en Wachtwoord in die u per e-mail heeft ontvangen. Klik op "Inloggen" om de zenderlijsten in te laden.`, 
        duration: '3 min', 
        icon: Mail, 
        tip: 'Zorg dat er geen spaties voor of na uw inloggegevens staan bij het overtypen.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw Smart TV is klaar voor gebruik! Blader door alle sport-, nieuws- en entertainmentzenders of kies een film uit de VOD-bibliotheek in scherpe Full HD en 4K kwaliteit.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Pas eventueel de bufferinstellingen in de app aan voor een nog vloeierdere weergave.' 
      },
    ]
  },
  apple: {
    title: 'Apple Apparaten',
    icon: Apple,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Kies op onze website uw gewenste IPTV pakket en voltooi de betaling. U ontvangt direct uw inloggegevens in uw mailbox.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Het jaarabonnement biedt de hoogste korting en gratis extra voordelen.' 
      },
      { 
        number: 2, 
        title: 'Open de App Store', 
        description: 'Open op uw iPhone, iPad of Apple TV de App Store en zorg dat u bent ingelogd met uw Apple ID.', 
        duration: '1 min', 
        icon: MonitorSmartphone, 
        tip: 'Gebruik dezelfde Apple ID op al uw Apple apparaten om apps makkelijk te synchroniseren.' 
      },
      { 
        number: 3, 
        title: 'Zoek naar IPTV app', 
        description: 'Zoek in de App Store naar "IPTV Smarters Pro" of "IPTVX". Deze apps zijn speciaal geoptimaliseerd voor iOS en tvOS.', 
        duration: '1 min', 
        icon: Search, 
        tip: 'IPTV Smarters Pro is gratis te downloaden in de App Store.' 
      },
      { 
        number: 4, 
        title: 'Download & Installeer', 
        description: 'Tik op "Download" of "Verkrijg" om de app te installeren op uw Apple apparaat.', 
        duration: '2 min', 
        icon: Download, 
        tip: 'Bevestig eventueel met Face ID of uw Apple ID wachtwoord.' 
      },
      { 
        number: 5, 
        title: 'Inloggen met gegevens', 
        description: 'Open de app en kies voor inloggen via Xtream Codes API. Vul uw server-URL, gebruikersnaam en wachtwoord in.', 
        duration: '3 min', 
        icon: Mail, 
        tip: 'U kunt op Apple apparaten handig gebruikmaken van kopiëren en plakken vanuit uw e-mail.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw Apple apparaat is ingesteld. Geniet van live sport, series en films met ondersteuning voor AirPlay en Picture-in-Picture.', 
        duration: 'Klaar!', 
        icon: PlayCircle, 
        tip: 'Gebruik de zoekfunctie in de app om snel uw favoriete zenders te vinden.' 
      },
    ]
  },
  pc: {
    title: 'PC & Mac',
    icon: Laptop,
    steps: [
      { 
        number: 1, 
        title: 'Maak uw account aan', 
        description: 'Schrijf u in via onze website en kies een abonnementsvorm naar keuze. Ontvang uw M3U-link en Xtream inloggegevens per e-mail.', 
        duration: '2-3 min', 
        icon: Users, 
        tip: 'Bewaar uw M3U-link goed; deze kunt u direct gebruiken op desktops.' 
      },
      { 
        number: 2, 
        title: 'Download VLC Media Player', 
        description: 'Voor computers raden wij VLC Media Player aan. Ga naar videolan.org en download de gratis versie voor Windows of Mac.', 
        duration: '3 min', 
        icon: Download, 
        tip: 'VLC is lichtgewicht en speelt probleemloos alle video- en streamformaten af.' 
      },
      { 
        number: 3, 
        title: 'Installeer het programma', 
        description: 'Voer het gedownloade installatiebestand uit en volg de standaardstappen van de installatiewizard.', 
        duration: '2 min', 
        icon: Cpu, 
        tip: 'De standaardinstallatie-instellingen werken direct uitstekend.' 
      },
      { 
        number: 4, 
        title: 'Kopieer uw M3U URL', 
        description: 'Open uw welkomstmail en kopieer de volledige M3U afspeellijst URL naar uw klembord.', 
        duration: '1 min', 
        icon: Mail, 
        tip: 'De M3U-link bevat uw persoonlijke abonnementssleutel.' 
      },
      { 
        number: 5, 
        title: 'Open Netwerk Stream in VLC', 
        description: 'Open VLC, klik in het bovenste menu op "Media" en kies "Open Netwerkstream" (Ctrl+N / Cmd+N). Plak uw M3U-link in het invoerveld en klik op "Afspelen".', 
        duration: '3 min', 
        icon: PlayCircle, 
        tip: 'Druk in VLC op Ctrl+L om de afspeellijst-zijbalk te openen met alle categorieën.' 
      },
      { 
        number: 6, 
        title: 'Start met streamen!', 
        description: 'Uw computer is nu klaar om alle live zenders en VOD films af te spelen in hoge kwaliteit. Sluit eventueel een HDMI-kabel aan op uw tv.', 
        duration: 'Klaar!', 
        icon: TrendingUp, 
        tip: 'Gebruik de sneltoets F voor volledig scherm in VLC.' 
      },
    ]
  }
};

const setupFaqs = [
  {
    q: "Hoe lang duurt de activatie na aankoop?",
    a: "Onze servers activeren uw account direct. Uw unieke inloggegevens, Portal URL en Xtream API tokens worden binnen 1 tot 2 minuten na een succesvolle betaling per e-mail verzonden."
  },
  {
    q: "Kan ik mijn inloggegevens op meerdere apparaten gebruiken?",
    a: "U kunt de app op onbeperkt apparaten installeren. Het aantal gelijktijdige streams is echter afhankelijk van uw gekozen pakket (1 scherm bij Standaard, 2 of 3 schermen bij Multi-room)."
  },
  {
    q: "Wat moet ik doen bij een inlogfout in Xtream Codes?",
    a: "Controleer of u de Xtream Codes API methode heeft geselecteerd in plaats van een M3U-bestand. Zorg dat er geen extra spaties voor of na uw wachtwoord staan, aangezien de inloggegevens hoofdlettergevoelig zijn."
  },
  {
    q: "Heb ik een VPN nodig om te streamen?",
    a: "Nee, onze servers maken gebruik van beveiligde en geoptimaliseerde netwerken. Mocht uw internetprovider echter specifieke snelheidsbeperkingen opleggen op streaming, dan kunt u probleemloos een VPN inschakelen."
  },
  {
    q: "Welke internetsnelheid is minimaal vereist voor 4K?",
    a: "Voor stabiele 4K Ultra HD streams adviseren wij een minimale downloadsnelheid van 30 Mbps. Voor standaard Full HD 1080p kanalen is 15 Mbps ruimschoots voldoende."
  },
  {
    q: "Kan ik live sportwedstrijden en PPV gala's bekijken?",
    a: "Ja, alle belangrijke internationale pay-per-view evenementen, voetbalcompetities en sportkanalen zijn standaard en zonder extra kosten inbegrepen in uw zenderoverzicht."
  },
  {
    q: "Hoe kan ik de EPG tv-gids bijwerken?",
    a: "Onze EPG-gids synchroniseert automatisch. Mocht het voorkomen dat de gids achterloopt, dan kunt u in de instellingen van uw speler kiezen voor 'Afspeellijst bijwerken' of 'EPG verversen'."
  }
];

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-5 md:gap-6">
        
        <div className="flex flex-col items-center">
          <motion.div 
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 transition-all duration-500 ${
              isInView 
                ? 'bg-[#CA1421] shadow-[0_0_30px_rgba(202,20,33,0.4)] scale-110' 
                : 'bg-[#CA1421]/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.1 }}
          >
            <span className={`text-2xl md:text-3xl font-black transition-all duration-300 ${
              isInView ? 'text-[#F1E8DB]' : 'text-[#CA1421]'
            }`}>
              {step.number}
            </span>
          </motion.div>
          
          {!isLast && (
            <motion.div 
              className="relative w-1 h-28 md:h-36 my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_#CA1421_1px,_transparent_1px)] bg-[length:4px_8px] bg-repeat-y opacity-20" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#CA1421] to-[#DB4439]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
              />
              {isInView && (
                <motion.div 
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#CA1421] rounded-full shadow-[0_0_15px_rgba(202,20,33,0.5)]"
                  initial={{ top: 0 }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                />
              )}
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="flex-1 pb-16 md:pb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -40 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`bg-[#F1E8DB] border-4 rounded-2xl p-6 md:p-8 transition-all duration-500 ${
            isInView 
              ? 'border-[#CA1421] shadow-[0_0_40px_rgba(202,20,33,0.15)]' 
              : 'border-white/5'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isInView ? 'bg-[#CA1421]/20' : 'bg-black/5'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isInView ? 'text-[#CA1421]' : 'text-[#1A1A1D]/40'
                  }`} />
                </div>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                  isInView ? 'text-[#CA1421]' : 'text-[#1A1A1D]'
                }`}>
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5">
                <Clock className="w-3.5 h-3.5 text-[#CA1421]" />
                <span className="text-[#1A1A1D]/60 text-xs font-bold">{step.duration}</span>
              </div>
            </div>
            
            <p className="text-[#1A1A1D]/80 font-medium leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
            
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-4 rounded-xl bg-[#000000]/5 border border-[#CA1421]/20"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-[#CA1421]/20 flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-[#CA1421]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#CA1421] font-black text-sm uppercase tracking-wide">Pro Tip</p>
                    <p className="text-[#1A1A1D]/70 text-sm font-medium mt-0.5">{step.tip}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoOpen(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt={`${CONSTANTS.BRAND_NAME} apparaat installatie handleiding - Eenvoudige Setup`}
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#000000]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]" />
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #CA1421 1px, transparent 1px),
              linear-gradient(to bottom, #CA1421 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CA1421]/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-1 pt-25 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-[#F1E8DB]" />
                <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">Eenvoudige Installatie Gids</span>
              </div>
            </FadeInItem>
            
            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#F1E8DB] tracking-tighter uppercase mb-6 leading-none text-center">
                Installatie Handleiding <br />
                <span className="text-[#CA1421]">Direct Starten</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Volg onderstaande stappen om uw {CONSTANTS.BRAND_NAME} account in te stellen en direct te genieten van al uw favoriete zenders.
              </p>
            </FadeInItem>

            {/* ONE-LINE FLAGS ROW DIRECTLY UNDER HERO DESCRIPTION */}
            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-black/60 border border-[#CA1421]/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0"><FlagNL /><span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB]">Nederland</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagDE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB]">Duitsland</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagBE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB]">België</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagNO /><span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB]">Noorwegen</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB]">Zwitserland</span></div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#F1E8DB]/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#CA1421]" /> Veilige Setup</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#CA1421]" /> 5 Minuten Klaar</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#CA1421]" /> 24/7 Ondersteuning</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#CA1421]" /> 20.000+ Kijkers</span>
              </div>
            </FadeInItem>
            
            <FadeInItem className="mt-12 relative flex justify-center">
              <button 
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-full bg-[#F1E8DB]/10 border border-[#F1E8DB]/20 hover:border-[#CA1421]/60 transition-all duration-300 relative z-10 shadow-inner group cursor-pointer"
                aria-label="Bekijk installatie video tutorial"
              >
                <div className="flex items-center gap-4 bg-[#F1E8DB]/5 px-8 py-5 rounded-full border border-[#F1E8DB]/10 hover:bg-[#F1E8DB]/10 transition-colors">
                  <PlayCircle className="w-10 h-10 text-[#CA1421] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-[#F1E8DB] font-black uppercase tracking-widest text-sm md:text-base">Video Handleiding</p>
                    <p className="text-[#F1E8DB]/60 text-xs font-bold uppercase tracking-wide mt-0.5">Visuele stap-voor-stap uitleg</p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-full bg-[#CA1421]/15 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* HIGH-CTR CENTRALIZED CALL-TO-ACTION BANNER */}
      <section className="w-full bg-gradient-to-r from-[#CA1421] via-[#DB4439] to-[#CA1421] py-10 px-4 sm:px-6 border-y-4 border-[#F1E8DB]/20 shadow-[0_0_50px_rgba(202,20,33,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#F1E8DB] text-[#CA1421] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md animate-bounce">
              AANBEVOLEN
            </div>
            <div className="absolute inset-0 rounded-full bg-[#F1E8DB]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-[#F1E8DB] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            ERVAAR DE BESTE STREAMING<br/>BESTEL UW IPTV PAKKET VANDAAG!
          </h4>
          <p className="text-[#F1E8DB]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Profiteer van stabiele, buffervrije 4K streams en alle live sport in 60FPS. Direct geactiveerd.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F1E8DB] text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#F1E8DB] hover:scale-105 hover:shadow-[0_0_30px_rgba(241,232,219,0.5)] transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl relative group/btn animate-pulse"
            >
              <span>Bekijk Alle Pakketten</span>
              <ArrowRight className="w-5 h-5 text-[#CA1421] group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Device Selection Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tighter leading-none">
            Kies Uw <span className="text-[#CA1421]">Apparaat</span>
          </h2>
          <p className="text-[#F1E8DB]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
            Selecteer hieronder uw platform voor gedetailleerde installatie-instructies.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-6 rounded-3xl text-center transition-all duration-300 cursor-pointer group ${
                  isActive 
                    ? 'bg-[#F1E8DB] text-[#1A1A1D] border-2 border-[#CA1421] shadow-2xl scale-[1.02]' 
                    : 'bg-[#F1E8DB] text-[#1A1A1D] border-2 border-transparent hover:border-[#CA1421]/40'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DB4439] text-[#F1E8DB] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                    Meest Gekozen
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
                  isActive ? 'bg-[#1A1A1D] text-[#F1E8DB]' : 'bg-black/5 text-[#CA1421]'
                }`}>
                  <Icon className="w-8 h-8 shrink-0" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-wide mb-2">{device.name}</h3>
                <p className={`text-xs font-bold ${isActive ? 'text-[#1A1A1D]/60' : 'text-[#1A1A1D]/40'}`}>{device.steps} eenvoudige stappen</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Vertical Timeline Process Display */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black uppercase text-xs tracking-widest mb-4 shadow-md">
            <currentData.icon className="w-4 h-4 text-[#F1E8DB] shrink-0" />
            <span>{currentData.title}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tighter">
            Stappenplan
          </h2>
          <p className="text-[#F1E8DB]/60 text-base font-bold uppercase tracking-widest mt-2">
            Volg onderstaande stappen voor een feilloze installatie
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem 
              key={step.number}
              step={step}
              index={index}
              isLast={index === currentData.steps.length - 1}
            />
          ))}
        </div>

        {/* System Verification Metrics Card */}
        <motion.div 
          className="text-center mt-12 p-8 md:p-10 rounded-3xl bg-[#F1E8DB] border-4 border-[#CA1421] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-14 h-14 text-[#CA1421] mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1D] uppercase tracking-tight mb-3">Installatie Voltooid!</h3>
          <p className="text-[#CA1421] font-bold text-base max-w-md mx-auto mb-8">
            U heeft uw apparaat succesvol ingesteld. Geniet direct van al uw favoriete live zenders en films in haarscherpe 4K kwaliteit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
            <Link
              href="/"
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
            >
              Naar de Homepage
            </Link>
            <Link
              href="/pakketten"
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#000000] text-[#CA1421] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 border-2 border-[#CA1421] shrink-0"
            >
              Bekijk Pakketten
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Support Grid Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-xl bg-[#CA1421]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#CA1421]/20 transition-colors">
              <PlayCircle className="w-8 h-8 text-[#CA1421]" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1D] mb-2 uppercase tracking-wide">Video Handleiding</h3>
            <p className="text-[#CA1421] text-sm font-medium mb-5">Bekijk onze visuele video-tutorial om de installatie stap voor stap live te volgen.</p>
            <button 
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-[#CA1421] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Bekijk Video <ArrowRight className="w-4 h-4 text-[#DB4439]" />
            </button>
          </div>

          <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-8 text-center transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1D] mb-2 uppercase tracking-wide">24/7 WhatsApp Support</h3>
            <p className="text-[#CA1421] text-sm font-medium mb-5">Heeft u hulp nodig bij het instellen? Onze Nederlandstalige experts helpen u direct verder.</p>
            <a 
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hallo ${CONSTANTS.BRAND_NAME}, ik heb hulp nodig bij de installatie.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-700 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all cursor-pointer"
            >
              Chat via WhatsApp <ArrowRight className="w-4 h-4 text-green-700" />
            </a>
          </div>
        </div>
      </section>

      {/* Share Component */}
      <div className="w-full flex justify-center items-center mb-10">
        <ShareButtons />
      </div>

      {/* Dedicated Setup Page FAQ Accordion Module */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#000000] relative" aria-label="Veelgestelde vragen over apparaat installatie">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#CA1421]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">Installatie FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tighter leading-none">
            Veelgestelde <span className="text-[#CA1421]">Vragen</span>
          </h2>
          <p className="text-[#FCA9FE] font-bold text-lg max-w-2xl mx-auto mt-4">
            Alles wat u moet weten over het configureren van uw IPTV account.
          </p>
        </FadeIn>
        
        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#F1E8DB] border-4 ${openFaqIndex === i ? 'border-[#CA1421]' : 'border-white/5'} rounded-2xl p-6 hover:border-[#CA1421]/60 transition-all duration-300 group cursor-pointer`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#CA1421]' : 'text-[#1A1A1D] group-hover:text-[#CA1421]'} flex items-center gap-3`}>
                    <span className={`${openFaqIndex === i ? 'text-[#CA1421]' : 'text-[#1A1A1D]/30'} font-black text-2xl`}>V.</span> 
                    {faq.q}
                  </h3>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#CA1421]' : 'text-[#1A1A1D]/30 group-hover:text-[#CA1421]/50'}`} />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#1A1A1D]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#CA1421] ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-[#F1E8DB]/60 hover:text-[#CA1421] transition-colors cursor-pointer flex items-center gap-2 text-sm font-bold z-10 uppercase tracking-widest"
            >
              <X className="w-5 h-5 shrink-0" /> Video Sluiten
            </button>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#CA1421] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title="Installatie Handleiding - Complete Tutorial"
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