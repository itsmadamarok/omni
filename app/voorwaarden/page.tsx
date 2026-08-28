import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  CreditCard, 
  UserCheck, 
  Ban, 
  RefreshCw, 
  Mail, 
  Scale, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Algemene Voorwaarden',
  `Lees de algemene voorwaarden van ${CONSTANTS.BRAND_NAME}. Duidelijke afspraken over abonnementen, onze 7 dagen geld-terug-garantie en acceptabel gebruik.`,
  '/voorwaarden'
);

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <Scale className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              Juridische Overeenkomst
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            Algemene <span className="text-[#CA1421]">Voorwaarden</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Lees deze voorwaarden zorgvuldig door voordat u gebruikmaakt van de diensten en streamingabonnementen van {CONSTANTS.BRAND_NAME}.
          </p>
          <p className="text-xs text-[#F1E8DB]/40 mt-4 font-bold uppercase tracking-wider">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Acceptance Box */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Aanvaarding van Voorwaarden:</span> 
                Door een abonnement af te sluiten of gebruik te maken van de website en diensten van {CONSTANTS.BRAND_NAME}, verklaart u zich akkoord met deze Algemene Voorwaarden en ons Privacybeleid.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              1. Omschrijving van de Dienst
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} levert digitale IPTV streamingdiensten waarmee abonnees toegang krijgen tot live televisiezenders, video-on-demand (VOD) films en series via het internet. Onze dienst is uitsluitend bestemd voor persoonlijk, niet-commercieel thuisgebruik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              2. Toegankelijkheid & Verantwoordelijkheid
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Door gebruik te maken van onze diensten verklaart en garandeert u dat:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "U minimaal 18 jaar oud bent en handelingsbekwaam om een overeenkomst aan te gaan.",
                "U correcte en actuele gegevens verstrekt bij het aanvragen van uw account.",
                "U uw persoonlijke inloggegevens en M3U-afspeellijsten strikt geheimhoudt en niet doorverkoopt.",
                "U onze service niet gebruikt voor commerciële heruitzending of openbare vertoning.",
                "U beschikt over een geschikte internetverbinding (minimaal 25 Mbps voor soepel 4K streamen)."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Accountbeveiliging:</span> 
                    U bent te allen tijde zelf verantwoordelijk voor alle activiteiten die plaatsvinden onder uw account en M3U-inloggegevens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              3. Abonnementen, Prijzen & Betaling
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Onze actuele abonnementsopties en tarieven staan vermeld op de pagina Pakketten. Bij aankoop stemt u in met het volgende:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Betalingen worden vooraf voldaan via de beveiligde betaalmethoden (o.a. iDEAL, Crypto, Creditcard of PayPal).",
                "Abonnementen worden niet stilzwijgend verlengd; u bepaalt zelf wanneer u verlengt.",
                "Uw account wordt direct geactiveerd zodra de betalingsbevestiging is afgerond.",
                "Prijzen zijn inclusief alle toepasselijke heffingen, tenzij uitdrukkelijk anders aangegeven."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Veilige Betaling:</span> 
                    Alle transacties verlopen via PCI-DSS gecertificeerde betaalgateways met 256-bit SSL-versleuteling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              4. Beleid voor Acceptabel Gebruik (Fair Use)
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Het is ten strengste verboden om de dienst te gebruiken voor:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Het doorverkopen, restreamen of klonen van uw toegewezen streamingslijnen.",
                "Het gelijktijdig streamen op meer apparaten dan uw gekozen pakket toestaat.",
                "Pogingen tot reverse-engineering, server-scraping of netwerkoverbelasting (DDoS).",
                "Het downloaden, permanent opnemen of herdistribueren van digitale uitzendingen.",
                "Elk gebruik dat in strijd is met de toepasselijke nationale of internationale wetgeving."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <Ban className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Gevolgen van Misbruik:</span> 
                    Bij overtreding van het acceptabel gebruik beleid behouden wij ons het recht voor om het account direct te blokkeren zonder recht op restitutie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              5. 7 Dagen Niet-Goed-Geld-Terug Garantie
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Wij hanteren een volledige tevredenheidsgarantie van 7 dagen. Mocht onze dienst niet aan uw verwachtingen voldoen of mocht u technische problemen ervaren die niet opgelost kunnen worden, dan kunt u binnen 7 dagen na aankoop een volledige terugbetaling aanvragen via onze klantenservice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              6. Beschikbaarheid & Zenderwijzigingen
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Wij streven naar een constante 99.9% uptime. Desondanks kan het voorkomen dat tijdelijk onderhoud nodig is of dat externe zenders wijzigen. {CONSTANTS.BRAND_NAME} behoudt zich het recht voor om:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Zenderlijsten en VOD-catalogi te updaten of te optimaliseren voor een betere beeldkwaliteit.",
                "Kortstondig gepland serveronderhoud uit te voeren buiten piekuren.",
                "Prijswijzigingen door te voeren voor nieuwe abonnementsperioden."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <RefreshCw className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              7. Intellectueel Eigendom & Aansprakelijkheid
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Alle merktekens, logo’s, teksten en softwarecode op deze website zijn het intellectuele eigendom van {CONSTANTS.BRAND_NAME}. Voor zover wettelijk toegestaan is {CONSTANTS.BRAND_NAME} niet aansprakelijk voor indirecte schade, dataverlies of storingen veroorzaakt door externe internetproviders of apparatuur van de gebruiker.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              8. Contact & Klantenservice
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Voor vragen over deze algemene voorwaarden of ondersteuning bij uw abonnement kunt u contact opnemen met onze juridische en supportafdeling:
            </p>
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Klantenservice & Juridische Zaken</p>
              <a 
                href={`mailto:legal@${CONSTANTS.DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                legal@{CONSTANTS.DOMAIN}
              </a>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest">
            ← Terug naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}