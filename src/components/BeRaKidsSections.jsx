import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';

const ArrowLink = ({ children, className = '' }) => (
  <button
    type="button"
    className={`inline-flex items-center gap-2 ${className}`}
  >
    {children}
    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
  </button>
);

function BeRaKidsLogo({ compact = false }) {
  return (
    <a
      href="#ana-sayfa"
      aria-label="BeRa Kids — ana sayfa"
      className={`inline-flex items-center ${compact ? 'gap-2' : 'gap-2.5'}`}
    >
      <svg
        viewBox="0 0 48 48"
        className={compact ? 'w-8 h-8 shrink-0' : 'w-10 h-10 shrink-0'}
        fill="none"
        aria-hidden="true"
      >
        <circle cx="36" cy="11" r="5.5" fill="#FBBF24" />
        <path
          d="M36 2.5v2M44.5 11h-2M42 5l-1.4 1.4"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 22.5 23.5 8 41 22.5v16a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-16Z"
          fill="#5A52EA"
        />
        <path
          d="M3.5 23 23.5 6.5 43.5 23"
          stroke="#0B0E28"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="11" y="25" width="8" height="7" rx="2" fill="#FFF5C3" />
        <rect x="28" y="25" width="8" height="7" rx="2" fill="#FFF5C3" />
        <path d="M20.5 41.5V33a3 3 0 0 1 6 0v8.5" fill="#F9A8D4" />
        <path
          d="M4 43h39"
          stroke="#34A853"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-extrabold tracking-tight whitespace-nowrap ${
          compact ? 'text-base' : 'text-2xl'
        }`}
      >
        <span className={compact ? 'text-white' : 'text-slate-900'}>BeRa</span>{' '}
        <span className="text-brandPrimary">Kids</span>
      </span>
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Ana Sayfa', href: '#ana-sayfa' },
    { label: 'BeRa Kids’in Farkı', href: '#hakkimizda' },
    { label: 'Programlarımız', href: '#hizmetlerimiz' },
    { label: 'Galeri', href: '/?gallery=1' },
    { label: 'Ücretler', href: '#ucretler' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
      <div className="relative mx-auto max-w-7xl lg:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[10%] top-14 h-9 rounded-full bg-indigo-500/25 blur-2xl"
        />
        <div className="relative flex items-center justify-between gap-3 rounded-full border border-white/90 bg-gradient-to-b from-white/95 to-white/75 p-2 pl-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_12px_rgba(20,21,46,0.06),0_24px_42px_-24px_rgba(79,70,200,0.38)] backdrop-blur-xl sm:gap-4 sm:pl-4">
          <BeRaKidsLogo />

          <nav aria-label="Ana menü" className="ml-auto mr-5 hidden items-center xl:flex">
            {links.map(({ label, href }, index) => (
              <a
                key={href}
                href={href}
                className={`group relative inline-flex min-h-12 items-center px-2 pb-1 text-sm font-semibold tracking-[0.005em] text-slate-600 transition-colors hover:text-slate-900 2xl:px-3 ${
                  index === 0 ? 'text-indigo-700' : ''
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-400 transition-transform ${
                    index === 0 ? 'scale-100' : 'scale-0 group-hover:scale-100'
                  }`}
                />
              </a>
            ))}
            <a
              href="#iletisim"
              className="group relative inline-flex min-h-12 items-center px-2 pb-1 text-sm font-semibold tracking-[0.005em] text-slate-600 transition-colors hover:text-slate-900 2xl:px-3"
            >
              İletişim
              <span className="absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 scale-0 rounded-full bg-amber-400 transition-transform group-hover:scale-100" />
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-mobile-menu"
              aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#ECEAFD] px-4 text-sm font-bold tracking-wide text-slate-900 transition hover:bg-indigo-100 xl:hidden"
            >
              MENÜ
              {menuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <a
              href={`https://wa.me/905318719817?text=${encodeURIComponent('Merhaba, BeRa Kids hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp üzerinden iletişime geç"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/25 transition hover:scale-105 hover:bg-[#1ebc5a]"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2a9.91 9.91 0 0 0-8.48 15.04L2 22l5.12-1.34A10 10 0 1 0 12.04 2Zm0 18.18a8.15 8.15 0 0 1-4.16-1.14l-.3-.18-3.04.8.81-2.96-.2-.31a8.18 8.18 0 1 1 6.89 3.79Zm4.49-6.13c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.57.12-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-.1-.74-.68-1.23-1.52-1.38-1.77-.15-.25-.02-.38.11-.5.11-.11.25-.3.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.23-.16-.48-.28Z" />
              </svg>
            </a>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="site-mobile-menu"
            aria-label="Mobil menü"
            className="absolute right-4 top-[calc(100%+0.75rem)] flex w-[min(calc(100vw-2rem),22.5rem)] flex-col gap-1 rounded-[1.75rem] border border-white/80 bg-white/95 p-3 shadow-[0_30px_60px_-24px_rgba(20,21,46,0.4)] backdrop-blur-xl sm:right-6 xl:hidden"
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold text-slate-800 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                {label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold text-slate-800 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              İletişim
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative overflow-hidden bg-slate-50 font-sans text-slate-800 selection:bg-purple-200 selection:text-purple-900"
    >
      <style>{`
        @keyframes heroFloatSlow {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }
        @keyframes heroFloatMedium {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -12px; }
        }
        @keyframes heroFloatDelayed {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -9px; }
        }
        .hero-float-1 { animation: heroFloatSlow 4s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloatMedium 4.5s ease-in-out .8s infinite; }
        .hero-float-3 { animation: heroFloatDelayed 3.8s ease-in-out 1.5s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-float-1, .hero-float-2, .hero-float-3 { animation: none; }
        }
      `}</style>
      <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-amber-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-100/70 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-5%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-[400px] w-[400px] rounded-full bg-pink-100/60 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-6 text-left lg:col-span-6 lg:pr-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-200/60 bg-purple-100/80 px-4 py-1.5 shadow-[0_10px_25px_rgba(91,70,232,0.08)]">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-400" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#5B46E8]">
                BeRa Kids · 2–5 yaş
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Neşeli eğitimle{' '}
              <span className="relative inline-block font-serif font-normal italic text-[#5B46E8]">
                geleceği
              </span>{' '}
              şekillendiriyoruz.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Her çocuğun merakını keşfettiği, güvenle büyüdüğü ve öğrenirken keyif
              aldığı sıcacık bir dünya.
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/905318719817?text=${encodeURIComponent('Merhaba, BeRa Kids için randevu almak istiyorum.')}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#5B46E8] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-200 hover:bg-[#4a36d2] hover:shadow-xl hover:shadow-purple-500/35"
              >
                <span>Randevu Alın</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#hizmetlerimiz"
                className="rounded-full border-2 border-slate-800 bg-transparent px-7 py-3.5 text-center text-base font-semibold text-slate-800 transition-all duration-200 hover:bg-slate-900 hover:text-white"
              >
                Programlarımızı Keşfedin
              </a>
            </div>
          </div>

          <div className="relative mt-8 flex justify-center lg:col-span-6 lg:mt-0 lg:justify-end">
            <div className="relative h-[480px] w-full max-w-[460px] sm:h-[520px]">
              <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-t-[160px] rounded-b-[40px] border-4 border-white/80 bg-gradient-to-b from-purple-200/50 via-pink-100/60 to-emerald-100/70 shadow-xl">
                <svg viewBox="0 0 400 480" className="h-full w-full object-cover">
                  <defs>
                    <linearGradient id="skyGradHero" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D8B4FE" stopOpacity="0.4" />
                      <stop offset="60%" stopColor="#FBCFE8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="rainbowHero" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F87171" />
                      <stop offset="50%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                  </defs>

                  <rect width="400" height="480" fill="url(#skyGradHero)" />

                  <circle cx="320" cy="90" r="36" fill="#FBBF24" opacity="0.9" />
                  <circle cx="320" cy="90" r="44" fill="#FDE68A" opacity="0.4" />

                  <path d="M 120 140 Q 135 125 155 130 Q 175 120 190 135 Q 200 145 190 155 Z" fill="#FFFFFF" opacity="0.8" />
                  <path d="M 60 170 Q 75 155 95 160 Q 115 150 130 165 Z" fill="#FFFFFF" opacity="0.7" />

                  <path d="M 60 280 A 130 130 0 0 1 340 280" fill="none" stroke="url(#rainbowHero)" strokeWidth="18" strokeLinecap="round" opacity="0.85" />
                  <path d="M 80 280 A 110 110 0 0 1 320 280" fill="none" stroke="#FFFFFF" strokeWidth="8" opacity="0.6" />

                  <path d="M -20 480 Q 120 380 240 440 T 420 400 L 420 480 Z" fill="#A7F3D0" />
                  <path d="M -20 480 Q 180 390 420 480 Z" fill="#6EE7B7" opacity="0.8" />

                  <g transform="translate(110, 210)">
                    <circle cx="40" cy="35" r="22" fill="#471507" />
                    <circle cx="20" cy="38" r="10" fill="#471507" />
                    <circle cx="60" cy="38" r="10" fill="#471507" />
                    <circle cx="40" cy="38" r="16" fill="#FCD34D" />
                    <circle cx="34" cy="36" r="2" fill="#1E293B" />
                    <circle cx="46" cy="36" r="2" fill="#1E293B" />
                    <path d="M 35 42 Q 40 47 45 42" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 26 54 L 54 54 L 62 100 L 18 100 Z" fill="#EC4899" />
                    <path d="M 26 58 L 2 75" stroke="#FCD34D" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 54 58 L 85 82" stroke="#FCD34D" strokeWidth="5" strokeLinecap="round" />
                    <rect x="30" y="100" width="6" height="25" fill="#FCD34D" />
                    <rect x="44" y="100" width="6" height="25" fill="#FCD34D" />
                    <ellipse cx="31" cy="125" rx="7" ry="4" fill="#1E293B" />
                    <ellipse cx="45" cy="125" rx="7" ry="4" fill="#1E293B" />
                  </g>

                  <g transform="translate(225, 225)">
                    <path d="M 22 25 Q 40 10 58 25 Q 60 40 20 40 Z" fill="#78350F" />
                    <circle cx="40" cy="38" r="16" fill="#FCD34D" />
                    <circle cx="34" cy="36" r="2" fill="#1E293B" />
                    <circle cx="46" cy="36" r="2" fill="#1E293B" />
                    <path d="M 35 42 Q 40 47 45 42" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 24 54 L 56 54 L 58 82 L 22 82 Z" fill="#F59E0B" />
                    <rect x="22" y="82" width="36" height="20" fill="#1D4ED8" />
                    <path d="M 24 58 L -30 68" stroke="#FCD34D" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 56 58 L 72 75" stroke="#FCD34D" strokeWidth="5" strokeLinecap="round" />
                    <rect x="28" y="102" width="6" height="23" fill="#FCD34D" />
                    <rect x="46" y="102" width="6" height="23" fill="#FCD34D" />
                    <ellipse cx="29" cy="125" rx="7" ry="4" fill="#1D4ED8" />
                    <ellipse cx="47" cy="125" rx="7" ry="4" fill="#1D4ED8" />
                  </g>

                  <g transform="translate(162, 255)">
                    <rect x="18" y="0" width="22" height="22" rx="4" fill="#4338CA" />
                    <text x="24" y="16" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">B</text>
                    <rect x="18" y="25" width="22" height="22" rx="4" fill="#10B981" />
                    <text x="25" y="41" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">e</text>
                    <rect x="5" y="50" width="22" height="22" rx="4" fill="#F43F5E" />
                    <text x="11" y="66" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">R</text>
                    <rect x="31" y="50" width="22" height="22" rx="4" fill="#F59E0B" />
                    <text x="37" y="66" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">a</text>
                  </g>

                  <circle cx="330" cy="330" r="3" fill="#FFFFFF" />
                  <circle cx="340" cy="320" r="2" fill="#FFFFFF" />
                  <circle cx="320" cy="340" r="2" fill="#FFFFFF" />
                </svg>
              </div>

              <div className="hero-float-1 absolute -left-6 top-8 z-10 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:-left-10 sm:p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-[#5B46E8]">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-tight text-slate-900">
                      2–5 yaş
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      oyun ve akademi
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-float-2 absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:-right-10 sm:p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-tight text-slate-900">
                      Güvenli ortam
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      hijyenik ve sıcak
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-float-3 absolute -bottom-4 left-4 z-10 rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:left-6 sm:p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold leading-tight text-slate-900">
                      Uzman eğitmenler
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      sevgi dolu ilgi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 border-t border-slate-200/60 pt-8 sm:grid-cols-3 sm:gap-8">
          {[
            { icon: Users, title: 'Küçük gruplar', text: 'bire bir ilgi' },
            { icon: GraduationCap, title: 'Oyun temelli eğitim', text: 'merakı besleyen program' },
            { icon: MapPin, title: 'Ziyaret edin', text: 'kreşimizi birlikte gezelim' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group flex cursor-pointer items-center justify-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-[#5B46E8] shadow-sm transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight text-slate-900">{title}</h4>
                <p className="mt-0.5 text-xs font-medium text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBanner() {
  return (
    <section className="bg-brandDark text-white py-8 my-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3 md:justify-items-center md:text-center">
        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-2xl text-slate-900">
            🧠
          </div>
          <div>
            <div className="text-3xl font-extrabold leading-none sm:text-4xl">2–5</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              Yaş aralığı
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-2xl text-slate-900">
            🌈
          </div>
          <div>
            <div className="text-3xl font-extrabold leading-none sm:text-4xl">
              Atölye Metodu
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-300 text-2xl text-slate-900">
            🧩
          </div>
          <div>
            <div className="text-3xl font-extrabold leading-none sm:text-4xl">
              Eğlenceli Öğrenme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Programs({ items }) {
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    if (!activeProgram) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProgram(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProgram]);

  return (
    <section id="hizmetlerimiz" className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Programlarımız
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
          Programlarımız; yaratıcılığı, merakı ve yaşam boyu öğrenme sevgisini
          destekleyen eğlenceli ve etkileşimli etkinliklerle çocukların
          gelişimine katkı sağlar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {items.map((program) => (
          <article
            key={program.title}
            className={`${program.cardClass} rounded-3xl p-5 border flex flex-col justify-between min-h-[340px] hover:shadow-md transition cursor-pointer`}
            onClick={() => setActiveProgram(program)}
          >
            <div
              className={`h-36 rounded-2xl ${program.imageClass} flex items-center justify-center overflow-hidden`}
            >
              <img
                src={program.image}
                alt={program.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mt-4">
                {program.title}
              </h3>
              <button
                type="button"
                className="mt-4 border border-slate-900/20 rounded-full px-4 py-1.5 text-xs font-bold inline-flex items-center gap-1 hover:bg-white/50 transition"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveProgram(program);
                }}
              >
                Keşfet <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
          onClick={() => setActiveProgram(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProgram.title} program bilgisi`}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`h-40 ${activeProgram.imageClass} p-3`}>
              <img
                src={activeProgram.image}
                alt={activeProgram.imageAlt}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brandPrimary">
                    Program
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                    {activeProgram.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProgram(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100"
                  aria-label="Program bilgisini kapat"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {activeProgram.subtitle && (
                <p
                  className="mt-4 text-sm font-semibold text-brandPrimary"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {activeProgram.subtitle}
                </p>
              )}

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {activeProgram.details ||
                  'Çocukların gelişimini destekleyen, oyun temelli ve eğlenceli öğrenme deneyimleri sunan programlarımızla güvenli bir öğrenme ortamı oluşturuyoruz.'}
              </p>

              <a
                href={`https://wa.me/905318719817?text=${encodeURIComponent(
                  `Merhaba, ${activeProgram.title} programı hakkında bilgi almak istiyorum.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1ebc5a]"
              >
                WhatsApp ile ulaş
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const features = [
  {
    title: 'Deneyimli Eğitimciler',
    Icon: GraduationCap,
    iconClass: 'bg-indigo-100 text-brandPrimary',
  },
  {
    title: 'Güvenli Ortam',
    Icon: ShieldCheck,
    iconClass: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Etkileşimli Eğitim Programı',
    Icon: Palette,
    iconClass: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Aile Katılımı',
    Icon: Users,
    iconClass: 'bg-pink-100 text-pink-600',
  },
];

export function Welcome() {
  return (
    <section id="hakkimizda" className="max-w-7xl mx-auto px-6 py-12">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          BeRa Kids’in Farkı
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
          BeRa Kids’i farklılaştıran en önemli nokta, çocuğu tek bir programın
          içine sokmak yerine çocuğun ihtiyacına göre farklı deneyimler
          sunmasıdır.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4">
        {[
          {
            title: '🌿 Çocuk odaklı yaklaşım',
            text: 'Her çocuğun gelişim hızının, ilgi alanlarının ve ihtiyaçlarının farklı olduğuna inanıyoruz. Bu nedenle programlarımızı çocukların yaşlarına ve gelişim dönemlerine uygun şekilde planlıyoruz.',
            cardClass: 'border-[#F7B267] bg-[#FFF1D6]',
          },
          {
            title: '🧸 Oyun bizim için çok önemli',
            text: 'Çocukluk döneminin en doğal öğrenme alanının oyun olduğuna inanıyoruz. Çocuklar BeRa Kids’te sadece etkinlik yapmaz; oynar, dener, keşfeder, üretir ve deneyimler.',
            cardClass: 'border-[#F472B6] bg-[#FFE4F1]',
          },
          {
            title: '🎨 Hazır kalıplardan uzak etkinlikler',
            text: 'Workshop ve eğitim programlarımızda çocukların sadece ortaya bir ürün çıkarmasına değil, sürecin içinde aktif olmasına önem veriyoruz.',
            cardClass: 'border-[#4CC9A5] bg-[#E8FFF7]',
          },
          {
            title: '👩🏻‍🏫 Eğitimci bakış açısı',
            text: 'BeRa Kids’in kurucuları eğitim alanındaki eğitim ve deneyimlerini merkezin tüm programlarına yansıtmaktadır.',
            cardClass: 'border-[#7AA2FF] bg-[#EAF0FF]',
          },
          {
            title: '🤍 Küçük, sıcak ve samimi ortam',
            text: 'BeRa Kids’te çocukların kendilerini kalabalık ve kişisellikten uzak bir ortamda değil, daha sıcak ve samimi bir merkezde hissetmeleri önemsenir.',
            cardClass: 'border-[#FFB86C] bg-[#FFF4E2]',
          },
          {
            title: '🔎 Deneyimleyerek öğrenme',
            text: 'Çocukların dokunarak, hareket ederek, deneyerek, sorarak ve keşfederek öğrenmelerini destekliyoruz.',
            cardClass: 'border-[#52C7FF] bg-[#EAF9FF]',
          },
          {
            title: '👧🏻👦🏻 Farklı ihtiyaçlara farklı çözümler',
            text: '2–5 yaş eğitiminden öğretmenli serbest oyuna, haftalık workshoplardan bireysel özel ders ve akademik desteğe kadar farklı ihtiyaçlara yönelik seçenekler sunuyoruz.',
            cardClass: 'border-[#FF9E6D] bg-[#FFF1E8]',
          },
          {
            title: '🏡 Çocuk ve aile için birlikte düşünülen bir alan',
            text: 'BeRa Kids yalnızca çocukların değil, ailelerin de kendilerini rahat hissedebileceği sıcak bir ortam olarak tasarlanmıştır.',
            cardClass: 'border-[#6ED3A4] bg-[#EAFEF2]',
          },
        ].map(({ title, text, cardClass }) => (
          <div
            key={title}
            className={`flex h-full w-full max-w-4xl rounded-2xl border p-5 shadow-sm md:p-7 ${cardClass}`}
          >
            <div className="flex h-full w-full flex-col">
              <h3 className="text-lg font-bold text-slate-900 md:text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Classroom() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=85"
          alt="Açık havada birlikte oyun oynayan okul öncesi çocuklar"
          className="block h-64 w-full object-cover object-[center_73%] md:h-[22rem]"
        />
      </div>
    </section>
  );
}

export function GalleryPage() {
  const groups = [
    {
      title: 'BeRa Kids',
      photos: [
        {
          src: '/beraGiris.jpeg',
          alt: 'BeRa Kids girişinde gökkuşağı ve balonlarla süslenmiş açılış alanı',
        },
      ],
    },
    {
      title: 'Oyun Atölyesi',
      photos: [
        {
          src: '/etkinlikSalonu.jpeg',
          alt: 'BeRa Kids oyun atölyesi ve etkinlik salonu',
        },
        {
          src: '/etkinlikSalonu2.jpeg',
          alt: 'BeRa Kids oyun atölyesinden ikinci görünüm',
        },
        {
          src: '/etkinlik.jpeg',
          alt: 'BeRa Kids oyun atölyesinde yapılan bir etkinlik',
        },
      ],
    },
    {
      title: 'Bekleme Salonu ve Mutfak',
      photos: [
        {
          src: '/beklemeSalonu.jpeg',
          alt: 'BeRa Kids bekleme salonu',
        },
        {
          src: '/beklemeSalonu2.jpeg',
          alt: 'BeRa Kids bekleme salonundan ikinci görünüm',
        },
        {
          src: '/mutfak.jpeg',
          alt: 'BeRa Kids mutfağı',
        },
      ],
    },
  ];

  return (
    <main className="relative min-h-[70vh] overflow-hidden bg-[#f7f6f3] px-6 pb-20 pt-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-purple-200/30 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[35rem] h-96 w-96 rounded-full bg-amber-100/50 blur-[100px]"
      />
      <section className="mx-auto max-w-7xl">
        <a
          href="/#ana-sayfa"
          className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-brandPrimary shadow-sm backdrop-blur transition hover:bg-white"
        >
          <ArrowUpRight className="h-4 w-4 rotate-180" aria-hidden="true" />
          Ana sayfaya dön
        </a>
        <header className="relative z-10 mx-auto mb-14 mt-10 max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-purple-100 bg-white/75 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brandPrimary shadow-sm backdrop-blur">
            BeRa Kids’ten kareler
          </p>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Galeri
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Oyun, keşif ve yaratıcılıkla dolu BeRa Kids dünyasından görüntüler.
          </p>
        </header>
        <div className="relative z-10 mx-auto max-w-6xl space-y-16">
          {groups.map((group, groupIndex) => (
            <section key={group.title}>
              <div className="mb-6 flex items-end gap-4">
                <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#5B52E0] to-[#F5B82E]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {String(groupIndex + 1).padStart(2, '0')} / GALERİ
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    {group.title}
                  </h2>
                </div>
              </div>
              <div
                className={
                  group.title === 'Oyun Atölyesi'
                    ? 'grid grid-cols-3 items-start gap-3 sm:gap-5'
                    : 'flex flex-wrap items-start justify-center gap-6'
                }
              >
                {group.photos.map((photo) => (
                  <figure
                    key={photo.src}
                    className={`group max-w-full overflow-hidden rounded-[1.5rem] shadow-[0_16px_40px_-26px_rgba(20,21,46,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(79,70,200,0.35)] ${
                      group.title === 'Oyun Atölyesi'
                        ? 'h-40 w-full sm:h-52 md:h-60'
                        : 'w-fit'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`block max-w-full rounded-[1.5rem] transition duration-500 group-hover:scale-[1.015] ${
                        group.title === 'Oyun Atölyesi'
                          ? 'h-full w-full object-cover'
                          : 'h-auto max-h-[24rem] w-auto object-contain sm:max-h-[28rem]'
                      }`}
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

export function Events({ items }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#f1d9ff] bg-gradient-to-br from-[#fffaf3] via-[#f8f6ff] to-[#eefaf4] p-6 shadow-[0_20px_50px_rgba(99,102,241,0.08)] md:p-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-[#e9d5ff] bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brandPrimary shadow-sm">
            BeRa Kids
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900 md:text-4xl">
            BeRa Kids’in Temel Bakış Açısı
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-8 text-slate-700 md:text-lg">
          <p className="font-semibold text-slate-800">
            BeRa Kids’te her çocuğun aynı olmadığına inanıyoruz.
          </p>

          <p className="font-semibold text-slate-800">
            Bu nedenle:
          </p>

          <p>
            Her çocuk aynı değil. Sınıflarımız da öyle.
          </p>

          <p>
            Programlarımızı çocukların yaşlarını, gelişim dönemlerini, ilgi alanlarını ve ihtiyaçlarını göz önünde bulundurarak planlıyoruz.
          </p>

          <p className="font-medium text-slate-800">
            Bizim için amaç yalnızca çocuğun bir etkinliğe katılması değil; BeRa Kids’ten güzel bir deneyimle ayrılmasıdır.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Instructors() {
  const [activeProfile, setActiveProfile] = useState(null);
  const instructors = [
    {
      name: 'Bengü Çakırca',
      role: 'Kurucu Eğitmen',
      preview: '/bengu1.jpeg',
      profile: '/bengu2.jpeg',
    },
    {
      name: 'Rabia Köse',
      role: 'Kurucu Eğitmen',
      preview: '/rabia1.jpeg',
      profile: '/rabia2.jpeg',
    },
  ];

  useEffect(() => {
    if (!activeProfile) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProfile(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProfile]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Eğitmenlerimiz
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {instructors.map((instructor) => (
          <button
            key={instructor.name}
            type="button"
            onClick={() => setActiveProfile(instructor)}
            aria-label={`${instructor.name} eğitmen profilini aç`}
            className="w-full bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2"
          >
            <img
              src={instructor.preview}
              alt={`${instructor.role} ${instructor.name}`}
              className="w-full max-w-[220px] h-56 object-cover object-top rounded-2xl mb-4"
            />
            <h3 className="font-extrabold text-lg text-slate-900">
              {instructor.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{instructor.role}</p>
            <span className="text-xs font-semibold text-brandPrimary mt-3">
              Tanımak için tıklayın
            </span>
          </button>
        ))}
      </div>

      {activeProfile && (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProfile.name} eğitmen profili`}
          onClick={() => setActiveProfile(null)}
        >
          <button
            type="button"
            onClick={() => setActiveProfile(null)}
            aria-label="Profili kapat"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg hover:bg-slate-200 transition"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <img
            src={activeProfile.profile}
            alt={`${activeProfile.name} eğitmen tanıtımı`}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function PricingCard({ plan }) {
  const contactPlan = plan.price === 'Bilgi Al';

  return (
    <article className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(130px,0.7fr)_auto] items-center gap-3 md:gap-6 px-5 py-4 md:px-6">
      <div>
        <h3 className="text-base font-bold text-slate-900">
          {plan.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
      </div>
      <p className="text-sm text-slate-600">{plan.details}</p>
      <p className="text-lg font-extrabold text-slate-900 md:text-right">
        {plan.price}
        <span className="block text-xs font-semibold text-brandPrimary">
          {contactPlan ? plan.period : `/ ${plan.period}`}
        </span>
      </p>
      <a
        href={`https://wa.me/905318719817?text=${encodeURIComponent(
          `Merhaba, ${plan.title} programı hakkında bilgi almak istiyorum.`
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`${plan.title} programı için WhatsApp ile iletişime geç`}
        className="group inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-sm shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1ebc5a]"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center transition-all duration-300 group-hover:w-10">
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:pr-4">
          İletişime geç
        </span>
      </a>
    </article>
  );
}

export function Pricing({ plans }) {
  return (
    <section id="ucretler" className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
        BeRa Kids Kreş Ücretleri
      </h2>
      <p className="text-slate-600 mt-2 text-sm max-w-md mx-auto">
        Çocuğunuz için yaşına ve ihtiyacına uygun programı seçin.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm divide-y divide-slate-100">
        <div className="hidden md:grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)_minmax(130px,0.7fr)_auto] items-center gap-6 bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          <span>Program</span>
          <span>Program Detayları</span>
          <span className="text-right">Ücret</span>
          <span aria-hidden="true" />
        </div>
        {plans.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-brandDark text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          İlk Adımı Atın –
          <br />
          Öğrenmeye Bugün Başlayın!
        </h2>
        <a
          href={`https://wa.me/905318719817?text=${encodeURIComponent(
            'Merhaba, BeRa Kids hakkında bilgi almak istiyorum.'
          )}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp ile mesaj gönder"
          className="group inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:bg-[#1ebc5a]"
        >
          <span className="inline-flex h-16 w-16 items-center justify-center transition-all duration-300 group-hover:w-12">
            <MessageCircle className="h-7 w-7 shrink-0" aria-hidden="true" />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:pr-5">
            İletişime geç
          </span>
        </a>
      </div>
    </section>
  );
}

export function Blog({ posts, onSelectPost }) {
  return (
    <section id="blog" className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Blog Yazılarımız
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => onSelectPost(post.slug)}
              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2"
              aria-label={`${post.title} blog yazısını aç`}
            >
              <div className="relative h-56">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-xl bg-brandPrimary px-3 py-1.5 text-center text-xs font-bold text-white leading-tight">
                  {post.day}
                  <br />
                  <span className="text-[10px] uppercase">{post.month}</span>
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                  <span>{post.publishedAt}</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BlogDetailPage({ post, onBack }) {
  useEffect(() => {
    const title = post.seoTitle || post.title;
    document.title = title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', post.seoDescription || post.description);
  }, [post]);

  return (
    <main className="bg-brandBg">
      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brandPrimary transition hover:text-indigo-700"
        >
          <ArrowUpRight className="h-4 w-4 rotate-180" aria-hidden="true" />
          Blog yazılarına dön
        </button>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brandPrimary/20 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brandPrimary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <img
          src={post.image}
          alt={post.imageAlt}
          className="h-[320px] w-full rounded-[28px] object-cover shadow-md md:h-[440px]"
        />

        <div className="prose prose-slate mx-auto mt-10 max-w-none prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:text-base prose-p:leading-8 prose-p:text-slate-700 prose-li:text-slate-700">
          <p className="text-lg leading-8 text-slate-700">{post.description}</p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-8">
              <h2 className="text-2xl md:text-3xl">{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

export function Footer() {
  return (
    <footer className="bg-brandDark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
        <div>
          <h4 className="font-bold text-sm mb-4">Sayfalar</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {[
              { label: 'Ana Sayfa', href: '#ana-sayfa' },
              { label: 'BeRa Kids’in Farkı', href: '#hakkimizda' },
              { label: 'Programlarımız', href: '#hizmetlerimiz' },
              { label: 'Galeri', href: '/?gallery=1' },
              { label: 'Ücretler', href: '#ucretler' },
              { label: 'Blog', href: '#blog' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4">Sosyal Medya</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <a
                href="https://instagram.com/berakids.oyunevi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4">İletişim</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <Phone
                className="w-4 h-4 text-brandPrimary"
                aria-hidden="true"
              />
              <a href="tel:+905318719817" className="hover:text-white">
                0531 871 98 17
              </a>
              <a
                href="https://wa.me/905318719817"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                / WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail
                className="w-4 h-4 text-brandPrimary"
                aria-hidden="true"
              />
              <a
                href="mailto:berakids.oyunevi@gmail.com"
                className="hover:text-white"
              >
                berakids.oyunevi@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin
                className="w-4 h-4 text-brandPrimary"
                aria-hidden="true"
              />
              <span>
                Adnan Kahveci Mah.
                <br />
                Kazım Karabekir Cad. No: 11/1
                <br />
                Beylikdüzü / İstanbul
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <BeRaKidsLogo compact />
        <p className="mt-4 md:mt-0">Tüm hakları saklıdır ©2025 Framerdevs</p>
      </div>
    </footer>
  );
}

export function LocationMap() {
  return (
    <section id="iletisim" className="bg-brandBg px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Bizi Ziyaret Edin</h2>
            <p className="mt-1 text-sm text-slate-600">
              Adnan Kahveci Mah., Kazım Karabekir Cad. No: 11/1, Beylikdüzü / İstanbul
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Adnan%20Kahveci%20Mah.%2C%20Kaz%C4%B1m%20Karabekir%20Cad.%20No%3A%2011%2F1%2C%20Beylikd%C3%BCz%C3%BC%2C%20%C4%B0stanbul"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-brandPrimary transition hover:text-indigo-700"
          >
            Haritada aç
          </a>
        </div>
        <iframe
          title="BeRa Kids konum haritası"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3011.406793493025!2d28.61847686767578!3d40.994468688964844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe32670193477bdd%3A0x2d95eda6a9058a46!2sBeRa%20Kids%20%C3%87ocuk%20Oyun%20Evi!5e0!3m2!1sen!2str!4v1791975052706!5m2!1sen!2str"
          className="h-64 w-full rounded-2xl border border-slate-200 sm:h-80"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
