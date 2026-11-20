import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, CheckCircle, Server, ArrowLeft } from 'lucide-react';

export const metadata = generateSEOMetadata(
  'Privacybeleid & Gegevensbescherming',
  `Lees hoe ${CONSTANTS.BRAND_NAME} uw privacy en persoonsgegevens waarborgt conform de Europese AVG (GDPR) wetgeving. Veilig en 100% vertrouwelijk.`,
  '/privacybeleid'
);

const collectedDataItems = [
  'E-mailadres en/of WhatsApp-nummer (voor het verzenden van uw inloggegevens en abonnementsstatus).',
  'Betalingsverificatie (veilig en versleuteld verwerkt via erkende betalingsproviders; wij slaan geen creditcard- of bankgegevens op).',
  'IP-adres en apparaattype (tijdelijk voor serververbinding, load-balancing en fraudepreventie).',
  'Gekozen abonnementsduur en aantal actieve streams/schermen.',
  'Klantenservice communicatiegeschiedenis voor een snelle ondersteuning.',
];

const usagePurposeItems = [
  'Het direct activeren en configureren van uw M3U-link en Xtream codes.',
  'Het veilig verwerken van transacties en facturatie.',
  'Het verlenen van technische ondersteuning en installatiehulp via WhatsApp en e-mail.',
  'Het informeren over belangrijke serveronderhouden of zenderupdates.',
  'Het handhaven van de serverstabiliteit en het tegengaan van ongeautoriseerd misbruik.',
];

const securityMeasureItems = [
  '256-bit SSL/TLS end-to-end encryptie voor alle web- en accountverbindingen.',
  'Geïsoleerde servers en firewalls ter preventie van datalekken en DDoS-aanvallen.',
  'Strikte toegangsbeperkingen: alleen geautoriseerd technisch personeel heeft toegang tot ondersteuningsdata.',
  'Geen lokale opslag van gevoelige bank- of creditcardgegevens.',
];

const gdprRightsItems = [
  'Recht op inzage: U kunt opvragen welke gegevens wij van u hebben geregistreerd.',
  'Recht op rectificatie: Het recht om onjuiste contactgegevens te laten corrigeren.',
  'Recht op vergetelheid (verwijdering): Het verzoek om al uw accountgegevens definitief te wissen.',
  'Recht op beperking van de verwerking en overdraagbaarheid van uw gegevens.',
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip selection:bg-[#FFD700] selection:text-[#1B1B1F]">
      {/* =========================================================
          1. HERO SECTION [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[720px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              AVG &amp; Privacy Garantie
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-[1.06] mb-5">
            Privacy<span className="text-[#FFD700]">beleid</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Bij <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> hechten wij de hoogste waarde aan uw privacy. Lees hier hoe wij uw persoonsgegevens vertrouwelijk verzamelen, beveiligen en beheren.
          </p>

          <p className="text-xs text-white/55 mt-4 font-bold uppercase tracking-wider">
            Laatst bijgewerkt:{' '}
            {new Date().toLocaleDateString('nl-NL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE LEGAL DOCUMENT [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#0B132B] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[300px] w-[720px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-4xl mx-auto w-full relative z-10">
          {/* Commitment Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.18em] text-[#E3182B] mb-1">
                  Onze Privacy Belofte
                </span>
                <p className="text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed">
                  Wij behandelen uw gegevens strikt vertrouwelijk en conform de Algemene Verordening Gegevensbescherming (AVG/GDPR). Wij slaan nooit kijkgeschiedenis op en verkopen uw gegevens onder geen beding aan derden.
                </p>
              </div>
            </div>
          </div>

          {/* Main Legal Sections Card */}
          <div className="bg-white border-2 border-[#0B132B]/15 rounded-3xl p-6 sm:p-10 shadow-sm space-y-11">
            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 01
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                1. Gegevens Die Wij Verzamelen
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Wanneer u gebruikmaakt van de diensten van <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong>, verwerken wij uitsluitend de minimale gegevens die noodzakelijk zijn voor het leveren van uw IPTV abonnement:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 mb-6 space-y-3">
                {collectedDataItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/12 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider inline-block border-b-2 border-[#FFD700] pb-0.5 mb-1.5">
                      Wat Wij Nooit Verzamelen
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed">
                      Wij registreren geen kijkgedrag, zenderkeuzes, zoekopdrachten of specifieke streamlogs. Uw streamingactiviteit is en blijft 100% privé.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 02
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                2. Waarvoor Gebruiken Wij Uw Gegevens?
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Wij gebruiken de verzamelde informatie uitsluitend voor de volgende doeleinden:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3">
                {usagePurposeItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 03
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                3. Beveiliging van Gegevens
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                <strong className="text-[#0B132B]">{CONSTANTS.BRAND_NAME}</strong> hanteert geavanceerde technische en organisatorische beveiligingsmaatregelen om uw data te beschermen:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 mb-6 space-y-3">
                {securityMeasureItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F7F7F7] border-2 border-[#10B981]/50 rounded-2xl p-5 sm:p-6">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#10B981]/15 flex items-center justify-center">
                    <Server className="w-5 h-5 text-[#10B981]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0B132B] font-black text-xs sm:text-sm uppercase tracking-wider inline-block border-b-2 border-[#FFD700] pb-0.5 mb-1.5">
                      Geen Dataverkoop
                    </h3>
                    <p className="text-[#1E293B] text-xs sm:text-sm font-semibold leading-relaxed">
                      Wij verkopen, verhuren of verstrekken uw persoonsgegevens nooit aan marketingbureaus, advertentienetwerken of datahandelaren.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 04
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                4. Cookies en Functionele Opslag
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed">
                Wij gebruiken uitsluitend functionele en geanonimiseerde analytische cookies om de laadsnelheid van de website te optimaliseren en uw taalkeuze te onthouden. U kunt cookies te allen tijde uitschakelen via de instellingen van uw webbrowser.
              </p>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 05
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                5. Uw Rechten Onder de AVG / GDPR
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Als Europese burger beschikt u over de volgende wettelijke privacyrechten:
              </p>

              <ul className="bg-[#F7F7F7] border border-[#0B132B]/12 border-l-4 border-l-[#0B132B] rounded-2xl p-5 sm:p-6 space-y-3">
                {gdprRightsItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[#1E293B] font-semibold text-sm sm:text-base leading-relaxed"
                  >
                    <CheckCircle className="w-5 h-5 text-[#E3182B] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#E3182B] mb-1.5">
                Artikel 06
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B132B] uppercase tracking-tight mb-4 pl-4 border-l-4 border-[#E3182B] pb-2 border-b border-[#0B132B]/12">
                6. Contact Betreffende Privacy
                <span className="block w-14 h-[3px] bg-[#FFD700] rounded-full mt-2" />
              </h2>
              <p className="text-[#1E293B] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Heeft u vragen over ons privacybeleid of wenst u een verzoek tot gegevensverwijdering in te dienen? Neem direct contact op met onze functionaris voor gegevensbescherming:
              </p>

              <div className="bg-[#F7F7F7] border-2 border-[#0B132B]/15 rounded-2xl p-6 my-6 text-center">
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mx-auto mb-2.5">
                  <Mail className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <p className="text-[11px] uppercase font-black text-[#E3182B] tracking-widest mb-1">
                  Privacy &amp; AVG Afdeling
                </p>
                <a
                  href={`mailto:privacy@${CONSTANTS.DOMAIN}`}
                  className="text-[#0B132B] font-black text-lg sm:text-2xl hover:text-[#E3182B] transition-colors break-all"
                >
                  privacy@{CONSTANTS.DOMAIN}
                </a>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-6 border-t border-[#0B132B]/12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0B132B] hover:text-[#E3182B] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
              <span>Terug naar de homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}