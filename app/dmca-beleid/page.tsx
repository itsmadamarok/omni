import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Mail, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = generateSEOMetadata(
  'DMCA Beleid & Copyright',
  `Lees het officiële DMCA en auteursrechtenbeleid van ${CONSTANTS.BRAND_NAME}. Informatie over copyright bescherming en procedures voor verwijderingsverzoeken.`,
  '/dmca-beleid'
);

export default function DMCAPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB]">
      
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              Auteursrechten & Copyright
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            DMCA <span className="text-[#CA1421]">Beleid</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            {CONSTANTS.BRAND_NAME} respecteert de intellectuele eigendomsrechten van derden en leeft de Digital Millennium Copyright Act (DMCA) strikt na.
          </p>
        </div>
      </section>

      {/* Promotion Callout Banner */}
      <section className="w-full bg-gradient-to-r from-[#CA1421] via-[#DB4439] to-[#CA1421] py-10 px-4 sm:px-6 border-y-4 border-[#F1E8DB]/20 shadow-[0_0_50px_rgba(202,20,33,0.4)] relative z-20 overflow-hidden group">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#F1E8DB] text-[#CA1421] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            OFFICIËLE MEDEDELING
          </div>
          <h2 className="text-[#F1E8DB] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            PREMIUM STREAMING MET INTEGRITEIT
          </h2>
          <p className="text-[#F1E8DB]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Heeft u vragen over onze diensten, abonnementen of ondersteuning? Ons team helpt u graag verder.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F1E8DB] text-[#1A1A1D] hover:bg-[#1A1A1D] hover:text-[#F1E8DB] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>Bekijk Pakketten</span>
              <ArrowRight className="w-5 h-5 text-[#CA1421]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Notice Card */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Belangrijke Kennisgeving:</span> 
                {CONSTANTS.BRAND_NAME} host, uploadt of beheert zelf geen mediabestanden op eigen servers. Onze software indexeert en organiseert uitsluitend streams en afspeellijsten die openbaar beschikbaar zijn op het internet.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              1. Naleving van het Auteursrecht
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} ({'wij'}, {'ons'} of {'onze'}) zet zich in om de rechten van auteursrechthebbenden wereldwijd te respecteren en de bepalingen van de Digital Millennium Copyright Act (DMCA) en de toepasselijke Europese wetgeving strikt na te leven. Wij verwachten van al onze gebruikers en partners dat zij dezelfde normen hanteren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              2. Wat Wij Niet Hosten
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Het is essentieel om te benadrukken dat <strong className="text-[#F1E8DB]">{CONSTANTS.BRAND_NAME}</strong> geen streamingmedia, videobestanden of tv-uitzendingen uitzendt, opslaat of host vanaf eigen hardware.
            </p>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Onze dienst fungeert als een technische interface en gids die openbare streamlinks indexeert. Wij hebben geen zeggenschap over, eigendom van of controle over de inhoud van streams die door externe providers op het internet worden gepubliceerd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              3. Kennisgeving van Inbreuk (Takedown Notice)
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Indien u de rechtmatige eigenaar bent van een auteursrechtelijk beschermd werk, of bevoegd bent om namens een eigenaar op te treden, en u van mening bent dat inhoud binnen onze directory inbreuk maakt op uw rechten, kunt u een officieel verwijderingsverzoek (DMCA Notice) indienen. Na ontvangst van een geldige melding zullen wij de betreffende streamverwijzingen zo spoedig mogelijk deactiveren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              4. Procedure voor het Indienen van een Verzoek
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-6">
              Om een formeel DMCA-verzoek in te dienen bij {CONSTANTS.BRAND_NAME}, verzoeken wij u contact op te nemen via ons officiële e-mailadres:
            </p>
            
            {/* Contact Email Box */}
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Auteursrechten Afdeling</p>
              <a 
                href={`mailto:dmca@${CONSTANTS.DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                dmca@{CONSTANTS.DOMAIN}
              </a>
            </div>

            <p className="text-[#F1E8DB]/80 text-base font-bold mb-4">
              Uw melding dient de volgende gegevens te bevatten:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Een fysieke of elektronische handtekening van de auteursrechthebbende of diens bevoegde vertegenwoordiger.",
                "Een duidelijke specificatie van het auteursrechtelijk beschermde werk waarop inbreuk zou zijn gemaakt.",
                "De exacte links of streamverwijzingen die verwijderd dienen te worden.",
                "Uw volledige contactgegevens: officiële naam, adres, telefoonnummer en e-mailadres.",
                "Een verklaring te goeder trouw dat het betwiste gebruik niet is toegestaan door de auteursrechthebbende.",
                "Een verklaring dat de verstrekte informatie accuraat is, opgesteld op straffe van meineed."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#F1E8DB]/80 font-bold text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[#CA1421] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              5. Herhaaldelijke Inbreukmakers
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              {CONSTANTS.BRAND_NAME} hanteert een strikt beleid waarbij de accounts en toegangen van wederverkopers of gebruikers die herhaaldelijk inbreuk maken op intellectuele eigendomsrechten, onmiddellijk en definitief worden beëindigd.
            </p>
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