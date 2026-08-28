import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, CheckCircle, Server } from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Privacybeleid & Gegevensbescherming',
  `Lees hoe ${CONSTANTS.BRAND_NAME} uw privacy en persoonsgegevens waarborgt conform de Europese AVG (GDPR) wetgeving. Veilig en 100% vertrouwelijk.`,
  '/privacybeleid'
);

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB]">
      
      {/* Hero Section Container */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.15),_transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              AVG & Privacy Garantie
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#F1E8DB] uppercase tracking-tighter leading-none mb-6">
            Privacy<span className="text-[#CA1421]">beleid</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Bij {CONSTANTS.BRAND_NAME} hechten wij de hoogste waarde aan uw privacy. Lees hier hoe wij uw persoonsgegevens vertrouwelijk verzamelen, beveiligen en beheren.
          </p>
          <p className="text-xs text-[#F1E8DB]/40 mt-4 font-bold uppercase tracking-wider">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        
        {/* Commitment Card */}
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#CA1421]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#CA1421]" />
              </div>
            </div>
            <div>
              <p className="text-[#1A1A1D] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-1">Onze Privacy Belofte:</span> 
                Wij behandelen uw gegevens strikt vertrouwelijk en conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). Wij slaan nooit kijkgeschiedenis op en verkopen uw gegevens onder geen beding aan derden.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Body */}
        <div className="space-y-10">
          
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              1. Gegevens Die Wij Verzamelen
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Wanneer u gebruikmaakt van de diensten van {CONSTANTS.BRAND_NAME}, verwerken wij uitsluitend de minimale gegevens die noodzakelijk zijn voor het leveren van uw IPTV abonnement:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "E-mailadres en/of WhatsApp-nummer (voor het verzenden van uw inloggegevens en abonnementsstatus).",
                "Betalingsverificatie (veilig en versleuteld verwerkt via erkende betalingsproviders; wij slaan geen creditcard- of bankgegevens op).",
                "IP-adres en apparaattype (tijdelijk voor serververbinding, load-balancing en fraudepreventie).",
                "Gekozen abonnementsduur en aantal actieve streams/schermen.",
                "Klantenservice communicatiegeschiedenis voor een snelle ondersteuning."
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
                    <Eye className="w-5 h-5 text-[#CA1421]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-[#CA1421] font-black uppercase tracking-wide block mb-0.5">Wat Wij Nooit Verzamelen:</span> 
                    Wij registreren geen kijkgedrag, zenderkeuzes, zoekopdrachten of specifieke streamlogs. Uw streamingactiviteit is en blijft 100% privé.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              2. Waarvoor Gebruiken Wij Uw Gegevens?
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Wij gebruiken de verzamelde informatie uitsluitend voor de volgende doeleinden:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Het direct activeren en configureren van uw M3U-link en Xtream codes.",
                "Het veilig verwerken van transacties en facturatie.",
                "Het verlenen van technische ondersteuning en installatiehulp via WhatsApp en e-mail.",
                "Het informeren over belangrijke serveronderhouden of zenderupdates.",
                "Het handhaven van de serverstabiliteit en het tegengaan van ongeautoriseerd misbruik."
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
              3. Beveiliging van Gegevens
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              {CONSTANTS.BRAND_NAME} hanteert geavanceerde technische en organisatorische beveiligingsmaatregelen om uw data te beschermen:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "256-bit SSL/TLS end-to-end encryptie voor alle web- en accountverbindingen.",
                "Geïsoleerde servers en firewalls ter preventie van datalekken en DDoS-aanvallen.",
                "Strikte toegangsbeperkingen: alleen geautoriseerd technisch personeel heeft toegang tot ondersteuningsdata.",
                "Geen lokale opslag van gevoelige bank- of creditcardgegevens."
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
                    <Server className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#1A1A1D] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">Geen Dataverkoop:</span> 
                    Wij verkopen, verhuren of verstrekken uw persoonsgegevens nooit aan marketingbureaus, advertentienetwerken of datahandelaren.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              4. Cookies en Functionele Opslag
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed">
              Wij gebruiken uitsluitend functionele en geanonimiseerde analytische cookies om de laadsnelheid van de website te optimaliseren en uw taalkeuze te onthouden. U kunt cookies te allen tijde uitschakelen via de instellingen van uw webbrowser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#CA1421] rounded-full inline-block" />
              5. Uw Rechten Onder de AVG / GDPR
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Als Europese burger beschikt u over de volgende wettelijke privacyrechten:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Recht op inzage: U kunt opvragen welke gegevens wij van u hebben geregistreerd.",
                "Recht op rectificatie: Het recht om onjuiste contactgegevens te laten corrigeren.",
                "Recht op vergetelheid (verwijdering): Het verzoek om al uw accountgegevens definitief te wissen.",
                "Recht op beperking van de verwerking en overdraagbaarheid van uw gegevens."
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
              6. Contact Betreffende Privacy
            </h2>
            <p className="text-[#F1E8DB]/80 text-base font-medium leading-relaxed mb-4">
              Heeft u vragen over ons privacybeleid of wenst u een verzoek tot gegevensverwijdering in te dienen? Neem direct contact op met onze functionaris voor gegevensbescherming:
            </p>
            <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#1A1A1D]/60 tracking-widest mb-1">Privacy & AVG Afdeling</p>
              <a 
                href={`mailto:privacy@${CONSTANTS.DOMAIN}`} 
                className="text-[#1A1A1D] font-black text-xl md:text-2xl hover:text-[#CA1421] transition-colors"
              >
                privacy@{CONSTANTS.DOMAIN}
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