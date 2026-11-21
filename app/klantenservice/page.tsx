'use client';

import { useState, useRef, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Tv,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';
import ShareButtons from '../components/ShareButtons';

/* =========================================================
   OMNIPTV — CONTACT PAGE (/contact) — LIGHT FORM + SEO SCHEMA
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush     : #F4A7A7
   ========================================================= */

const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full">
      <div
        className={`rounded-2xl p-5 shadow-2xl border-2 bg-white text-[#1B1B1F] ${
          type === 'success' ? 'border-[#10B981]' : 'border-[#E3182B]'
        }`}
      >
        <div className="flex items-start gap-3.5">
          <div
            className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
              type === 'success' ? 'bg-[#10B981]/15' : 'bg-[#E3182B]/15'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#E3182B]" aria-hidden="true" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#1B1B1F] font-black uppercase text-xs tracking-wider">
              {message}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Melding sluiten"
            className="shrink-0 text-[#6B7280] hover:text-[#E3182B] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white text-[#1B1B1F] border-2 border-[#E3182B] rounded-3xl p-7 sm:p-10 max-w-md w-full shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9 text-[#10B981]" aria-hidden="true" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#1B1B1F] mb-2.5 uppercase tracking-tight">
          Bericht Klaargezet
        </h3>

        <p className="text-[#6B7280] font-medium text-xs sm:text-sm leading-relaxed mb-6">
          Bedankt voor uw bericht aan <strong className="text-[#1B1B1F]">{CONSTANTS.BRAND_NAME}</strong>. We hebben uw aanvraag voorbereid voor snelle opvolging.
        </p>

        <div className="bg-[#1B1B1F] text-white rounded-2xl p-5 mb-6 text-left">
          <p className="text-[#FFD700] text-[11px] uppercase tracking-widest font-black mb-3">
            Wat gebeurt er nu?
          </p>
          <ul className="space-y-2 text-xs text-white/85 font-medium">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Uw vraag en apparaatgegevens zijn meegenomen</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Ons team bekijkt uw verzoek of pakketvraag</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Directe opvolging via WhatsApp of e-mail</span>
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3.5 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-[1.02] shadow-md cursor-pointer"
        >
          Begrepen
        </button>
      </div>
    </div>
  );
};

const contactFaqs = [
  {
    q: 'Hoe neem ik het snelst contact op met het team?',
    a: 'Voor snelle hulp bij installatie, vragen over apparaten of het kiezen van een pakket kunt u direct een bericht sturen via WhatsApp of het contactformulier hierboven invullen.',
  },
  {
    q: 'Welke informatie kan ik het beste vermelden bij installatiehulp?',
    a: 'Vermeld graag welk apparaat u gebruikt (bijvoorbeeld Samsung of LG Smart TV, Amazon Firestick, Apple TV of Android) en welke speler of app u wilt gebruiken.',
  },
  {
    q: 'Kan ik vooraf advies krijgen over 1, 2 of 3 schermen?',
    a: 'Ja, we denken graag mee over het juiste pakket en het aantal gelijktijdige schermen op basis van hoe u thuis kijkt.',
  },
  {
    q: 'Waar vind ik meer antwoorden over looptijden en voorwaarden?',
    a: 'Op onze pakkettenpagina en de FAQ-pagina vindt u uitgebreide informatie over looptijden, schermen, ondersteuning en de 7 dagen niet-goed-geld-terug garantie.',
  },
];

const seoContactGuides = [
  {
    icon: MessageSquare,
    title: 'Directe Hulp Via WhatsApp Of Formulier',
    text: 'Heeft u een korte vraag over uw apparaat, de installatie van een app of het kiezen tussen een pakket voor 3, 6 of 12 maanden? Via WhatsApp kunt u snel schakelen en een bericht sturen met uw apparaattype.',
  },
  {
    icon: Tv,
    title: 'Voorbereiden Op Een Vlotte Setup',
    text: 'Als u contact opneemt over het instellen van uw afspeellijst of EPG-programmagids, helpt het om vooraf te controleren of uw televisie of mediaspeler verbonden is met een stabiel netwerk (bij voorkeur 5GHz WiFi of kabel).',
  },
  {
    icon: HelpCircle,
    title: 'Duidelijke Keuze Voor Thuis & Onderweg',
    text: 'Of u nu kijkt in de woonkamer op een Smart TV of op een tweede scherm: wij helpen u helder overzicht te houden in opties voor 1, 2 of 3 schermen zonder ingewikkelde stappen.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      const encodedMsg = encodeURIComponent(
        `Hallo ${CONSTANTS.BRAND_NAME},\n\nNaam: ${formData.name}\nE-mail: ${formData.email}\nOnderwerp: ${formData.subject}\nBericht: ${formData.message}`
      );
      window.open(`${CONSTANTS.CONTACT.whatsapp}?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Uw bericht is voorbereid voor verzending!', type: 'success' });
    } catch {
      setToast({ message: 'Er ging iets mis. Probeer het opnieuw via WhatsApp.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Hallo ${CONSTANTS.BRAND_NAME}, ik heb een vraag over de pakketten en installatie.`
    );
    window.open(
      `${CONSTANTS.CONTACT.whatsapp}?text=${defaultText}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        name: `Contact ${CONSTANTS.BRAND_NAME}`,
        description: `Neem contact op met ${CONSTANTS.BRAND_NAME} voor vragen over pakketten, installatie op Smart TV, Firestick of Apple TV en ondersteuning.`,
        url: `https://${CONSTANTS.DOMAIN}/contact`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: contactFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact',
            item: `https://${CONSTANTS.DOMAIN}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {showSuccessPopup && (
        <SuccessPopup onClose={() => setShowSuccessPopup(false)} />
      )}

      {/* =========================================================
          1. HERO BAND [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[320px] w-[700px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Mail className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Klantenservice &amp; Hulp
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-5 leading-[1.05]">
            Contact <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-7">
            Heeft u vragen over onze pakketten, installatie op Smart TV, Firestick of Apple TV, of wilt u direct overleggen? Wij helpen u graag verder.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href="#contact-formulier"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all hover:scale-105 shadow-lg"
            >
              Stuur Een Bericht
            </a>
            <button
              type="button"
              onClick={startWhatsAppChat}
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#10B981] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all cursor-pointer shadow-lg"
            >
              Direct Via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE SECTION: FORM & CONTACT DETAILS
             [LIGHT #F7F7F7 + WHITE #FFFFFF FLAT CARDS]
          ========================================================= */}
      <section
        id="contact-formulier"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[640px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Form Card */}
            <div className="lg:col-span-2 bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 sm:p-10 shadow-sm">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F7F7F7] border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-3">
                Bericht Sturen
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1B1B1F] uppercase tracking-tight mb-2">
                Stuur Ons Een <span className="text-[#E3182B]">Bericht</span>
              </h2>
              <p className="text-[#6B7280] font-medium text-xs sm:text-sm mb-7 leading-relaxed">
                Vul het formulier hieronder in met uw vraag of apparaattype. Wij helpen u vlot op weg via WhatsApp of e-mail.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-black text-[#1B1B1F] uppercase tracking-wider mb-2"
                  >
                    Volledige Naam <span className="text-[#E3182B]">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-[#F7F7F7] border-2 border-[#6B7280]/20 rounded-2xl text-[#1B1B1F] font-medium text-sm placeholder-[#6B7280] focus:border-[#E3182B] focus:bg-white transition-colors outline-none"
                      placeholder="Bijv. Jan Jansen"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-black text-[#1B1B1F] uppercase tracking-wider mb-2"
                  >
                    E-mailadres <span className="text-[#E3182B]">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3.5 bg-[#F7F7F7] border-2 border-[#6B7280]/20 rounded-2xl text-[#1B1B1F] font-medium text-sm placeholder-[#6B7280] focus:border-[#E3182B] focus:bg-white transition-colors outline-none"
                      placeholder="naam@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-black text-[#1B1B1F] uppercase tracking-wider mb-2"
                  >
                    Onderwerp <span className="text-[#E3182B]">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]"
                      aria-hidden="true"
                    />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-10 py-3.5 bg-[#F7F7F7] border-2 border-[#6B7280]/20 rounded-2xl text-[#1B1B1F] font-medium text-sm focus:border-[#E3182B] focus:bg-white transition-colors outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Selecteer een onderwerp...</option>
                      <option value="Installatiehulp & App Setup">Installatiehulp &amp; App Setup</option>
                      <option value="Vragen over Pakketten & Schermen">Vragen over Pakketten &amp; Schermen</option>
                      <option value="Technische Ondersteuning">Technische Ondersteuning</option>
                      <option value="Betalingen & Voorwaarden">Betalingen &amp; Voorwaarden</option>
                      <option value="Algemene Vraag">Algemene Vraag</option>
                    </select>
                    <ChevronDown
                      className="w-4 h-4 text-[#6B7280] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-black text-[#1B1B1F] uppercase tracking-wider mb-2"
                  >
                    Bericht <span className="text-[#E3182B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-[#F7F7F7] border-2 border-[#6B7280]/20 rounded-2xl text-[#1B1B1F] font-medium text-sm placeholder-[#6B7280] focus:border-[#E3182B] focus:bg-white transition-colors outline-none resize-none"
                    placeholder="Schrijf hier uw vraag en geef eventueel aan welk apparaat u gebruikt..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-md ${
                    loading
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:brightness-95 hover:scale-[1.01] cursor-pointer'
                  }`}
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{loading ? 'Bezig met voorbereiden...' : 'Verstuur Bericht'}</span>
                </button>
              </form>
            </div>

            {/* Contact Details Sidebar Card */}
            <aside className="lg:col-span-1 bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-[#1B1B1F] uppercase tracking-tight">
                Contactgegevens
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#6B7280] text-[11px] uppercase tracking-wider font-black">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${CONSTANTS.CONTACT.email}`}
                    className="text-[#1B1B1F] hover:text-[#E3182B] transition-colors text-xs sm:text-sm font-bold break-all"
                  >
                    {CONSTANTS.CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#6B7280] text-[11px] uppercase tracking-wider font-black">
                    Telefoon / WhatsApp
                  </p>
                  <a
                    href={CONSTANTS.CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B1B1F] hover:text-[#E3182B] transition-colors text-xs sm:text-sm font-bold"
                  >
                    {CONSTANTS.CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#6B7280] text-[11px] uppercase tracking-wider font-black">
                    Direct Contact
                  </p>
                  <p className="text-[#1B1B1F] text-xs sm:text-sm font-bold">
                    Ondersteuning via WhatsApp
                  </p>
                  <button
                    type="button"
                    onClick={startWhatsAppChat}
                    className="text-[#E3182B] text-xs font-black uppercase tracking-wider hover:underline mt-1 cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Start WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#6B7280] text-[11px] uppercase tracking-wider font-black">
                    Beschikbaarheid
                  </p>
                  <p className="text-[#1B1B1F] text-xs sm:text-sm font-bold">
                    Dagelijks bereikbaar voor hulp
                  </p>
                </div>
              </div>

              {/* Service Highlights Grid */}
              <div className="pt-6 border-t border-[#6B7280]/15">
                <p className="text-[#6B7280] text-[11px] uppercase tracking-wider font-black mb-3.5">
                  Service &amp; Zekerheden
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F7F7F7] rounded-2xl p-3 text-center border border-[#6B7280]/15">
                    <Headphones className="w-5 h-5 text-[#E3182B] mx-auto mb-1" aria-hidden="true" />
                    <p className="text-[#1B1B1F] text-[10px] uppercase font-black tracking-wider">
                      Setup Hulp
                    </p>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-2xl p-3 text-center border border-[#6B7280]/15">
                    <ShieldCheck className="w-5 h-5 text-[#10B981] mx-auto mb-1" aria-hidden="true" />
                    <p className="text-[#1B1B1F] text-[10px] uppercase font-black tracking-wider">
                      7 Dagen Garantie
                    </p>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-2xl p-3 text-center border border-[#6B7280]/15">
                    <Zap className="w-5 h-5 text-[#E3182B] mx-auto mb-1" aria-hidden="true" />
                    <p className="text-[#1B1B1F] text-[10px] uppercase font-black tracking-wider">
                      Vlotte Reactie
                    </p>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-2xl p-3 text-center border border-[#6B7280]/15">
                    <Users className="w-5 h-5 text-[#1B1B1F] mx-auto mb-1" aria-hidden="true" />
                    <p className="text-[#1B1B1F] text-[10px] uppercase font-black tracking-wider">
                      1, 2 of 3 Schermen
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. LOWER SEO GUIDES, SERVICE STRIP & FAQ [DARK #1B1B1F + #232329 CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[660px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* 4-Column Trust Strip */}
          <div className="bg-[#232329] border border-white/10 rounded-3xl p-6 sm:p-8 mb-16 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-2.5">
                  <LifeBuoy className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-wide">
                  Installatiehulp
                </h3>
                <p className="text-white/65 text-xs font-medium mt-0.5">
                  Voor TV, stick &amp; mobiel
                </p>
              </div>
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-2.5">
                  <Zap className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-wide">
                  Direct Schakelen
                </h3>
                <p className="text-white/65 text-xs font-medium mt-0.5">
                  Via WhatsApp &amp; e-mail
                </p>
              </div>
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-wide">
                  Duidelijke Voorwaarden
                </h3>
                <p className="text-white/65 text-xs font-medium mt-0.5">
                  3, 6 of 12 maanden
                </p>
              </div>
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mx-auto mb-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                </div>
                <h3 className="text-white font-black text-xs sm:text-sm uppercase tracking-wide">
                  Persoonlijk Advies
                </h3>
                <p className="text-white/65 text-xs font-medium mt-0.5">
                  Afgestemd op uw wensen
                </p>
              </div>
            </div>
          </div>

          {/* Lower SEO Content Articles */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
                Hulp &amp; Advies
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Waarmee Kunnen Wij <span className="text-[#FFD700]">Helpen?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seoContactGuides.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="bg-[#232329] border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Responsive FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
                Veelgestelde Vragen
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Direct Antwoord Op <span className="text-[#FFD700]">Contactvragen</span>
              </h2>
            </div>

            <div className="space-y-3.5">
              {contactFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-3xl transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#232329] border-2 border-[#FFD700]'
                        : 'bg-[#232329]/85 border border-white/10 hover:border-white/25'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-3xl"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start sm:items-center gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? 'bg-[#FFD700] text-[#1B1B1F]'
                              : 'bg-[#1B1B1F] text-[#FFD700] border border-white/10'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-base font-black uppercase tracking-tight text-white leading-snug">
                          {faq.q}
                        </span>
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-1 sm:mt-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FFD700]' : 'text-white/60'
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
                          <p className="text-sm text-white/80 font-medium leading-relaxed border-l-2 border-[#FFD700] pl-3.5">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. QUICK LINKS, SHARE & BACK LINK [LIGHT #F7F7F7]
          ========================================================= */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1B1B1F] text-[#FFD700] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#232329] transition-colors inline-flex items-center justify-center gap-2 shadow-md"
            >
              <span>Bekijk Pakketten</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/installatie"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] font-black text-xs sm:text-sm uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Installatiegids</span>
            </Link>
          </div>

          <div className="w-full flex justify-center items-center mb-6">
            <ShareButtons />
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1B1B1F] hover:text-[#E3182B] transition-colors font-black text-xs uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Terug naar de homepage</span>
          </Link>
        </div>
      </section>
    </div>
  );
}