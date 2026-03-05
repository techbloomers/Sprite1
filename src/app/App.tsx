import { useEffect, useState } from "react";
import { Instagram, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import mainImg from "../images/width1960.webp";
import teaserKv from "../images/spr_teaserkv_0315.webp";
import teamKv from "../images/sprite_with_team_kv_0508.webp";
import p15l from "../images/m14901_product-photo_sprite_15l_h.webp";
import p700ml from "../images/m14901_product_photo_sprite_700ml_h.webp";
import p470ml from "../images/m14901_product-photo_sprite_470ml_h.webp";
import p350ml from "../images/sp_350p_s_23_low_2.webp";
import p500can from "../images/m14901_product_photo_sprite_500ml_can_h.webp";
import p350can from "../images/m14901_product-photo_sprite_350ml_can_h.webp";

const canImg = "https://images.unsplash.com/photo-1633710317472-c1f19624f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpdGUlMjBsZW1vbiUyMGxpbWUlMjBzb2RhJTIwY2FuJTIwZHJpbmt8ZW58MXx8fHwxNzcyNTQyMzE5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const limeImg = "https://images.unsplash.com/photo-1725116041160-b8a67e86f38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGxpbWUlMjBmcmVzaCUyMGdyZWVuJTIwc2xpY2VzfGVufDF8fHx8MTc3MjYyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080";
const bubblesImg = "https://images.unsplash.com/photo-1544262588-0ff2d2d30a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFya2xpbmclMjB3YXRlciUyMGJ1YmJsZXMlMjBncmVlbiUyMHJlZnJlc2hpbmd8ZW58MXx8fHwxNzcyNjIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const bubbles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 36 + 8,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: Math.random() * 4 + 3,
}));

function Bubble({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full border-2 border-green-300/60 bg-white/40 animate-bubble"
      style={style}
    />
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  // Scroll-triggered float-up animation for KV sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.hasAttribute('data-animate-left')) {
              const delay = entry.target.getAttribute('data-animate-left') || '0';
              setTimeout(() => {
                entry.target.classList.add('animate-fadeSlideLeft');
              }, parseInt(delay));
            } else {
              entry.target.classList.add('animate-fadeSlideUp');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    document.querySelectorAll('[data-animate-left]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8fdf0] via-[#d4f7e2] to-[#b6f0cc] overflow-clip" style={{ fontFamily: "var(--font-text)" }}>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes bubbleRise {
          0%   { transform: translateY(100vh) scale(0.4); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(-15vh) scale(1.1); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeSlideLeft {
          animation: fadeSlideLeft 0.7s ease-out forwards;
        }
        [data-animate] {
          opacity: 0;
          transform: translateY(40px);
        }
        [data-animate-left] {
          opacity: 0;
          transform: translateX(-50px);
        }
        @keyframes floatCan {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-8px) rotate(0.5deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50%       { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        @keyframes shimmerGreen {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes popIn {
          0%   { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-bubble {
          animation: bubbleRise var(--dur) var(--del) infinite ease-in;
        }
        .animate-float-can {
          animation: floatCan 3.8s ease-in-out infinite;
        }
        .shimmer-green {
          background: linear-gradient(90deg, #14532d, #15803d, #22c55e, #15803d, #14532d);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerGreen 2.5s linear infinite;
        }
        .spin-slow {
          animation: spin-slow 18s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(22,163,74,0.25);
        }
      `}</style>

      {/* Floating bubbles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {bubbles.map((b) => (
          <Bubble
            key={b.id}
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: 0,
              "--dur": `${b.duration}s`,
              "--del": `${b.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-5 bg-white/60 backdrop-blur-md border-b border-green-200/60 shadow-sm">
        <div className="text-xl md:text-2xl tracking-[0.2em] md:tracking-[0.25em] font-black text-green-600 uppercase drop-shadow-sm">
          ★ Sprite
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest text-green-700/80 uppercase font-semibold">
          {[
            { label: "Home", href: "#" },
            { label: "Products", href: "#products" },
            { label: "Lineup", href: "#lineup" },
            { label: "SNS", href: "#sns" }
          ].map((item) => (
            <a key={item.label} href={item.href} className="hover:text-green-500 transition-colors relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88/s?k=%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer" className="px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-green-500 text-white text-xs md:text-sm tracking-wide md:tracking-widest uppercase font-bold hover:bg-green-400 shadow-md shadow-green-300 transition-all duration-300 hover:scale-105">
          Buy Now
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-[85vh] md:min-h-[88vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-20 pt-8 pb-16 overflow-hidden">
        {/* Left text */}
        <div className="flex-1 text-center md:text-left pt-10 md:pt-0 z-20">
          <h1 className="shimmer-green text-[clamp(4.5rem,14vw,10rem)] leading-tight font-black tracking-tighter mb-4 pb-4 md:pb-8" style={{ fontFamily: "var(--font-headline)" }}>
            Sprite
          </h1>
          <p className="text-green-700/80 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm mb-4 md:mb-6">
            Lemon · Lime · Sparkling
          </p>
          <p className="text-green-800/60 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-sm mx-auto md:mx-0 mb-8 md:mb-10">
            はじける炭酸とシトラスの爽やかさが<br />一口でひろがる、最高のリフレッシュ体験。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://www.amazon.co.jp/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88/s?k=%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88" target="_blank" rel="noopener noreferrer" className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-green-500 text-white font-black tracking-widest uppercase text-xs md:text-sm shadow-lg shadow-green-300/60 hover:bg-green-400 hover:scale-105 transition-all duration-300 text-center block max-w-xs mx-auto md:mx-0">
              ご購入はこちら →
            </a>
          </div>
        </div>

        {/* Right: can + decoration */}
        <div className="flex-1 flex items-center justify-center relative w-full h-full min-h-[350px] md:min-h-[500px]">
          {/* Spinning ring */}
          <div className="absolute w-[280px] md:w-80 h-[280px] md:h-80 border-[3px] md:border-4 rounded-full border-dashed border-green-300/50 spin-slow z-0" />
          {/* Glow circle */}
          <div className="absolute w-48 md:w-64 h-48 md:h-64 rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(74,222,128,0.45) 0%, transparent 70%)" }} />

          {/* Can */}
          <div className="animate-float-can absolute -left-20 sm:-left-12 md:-left-8 lg:-left-[200px] xl:-left-[260px] w-[320px] sm:w-[420px] md:w-[560px] lg:w-[940px] xl:w-[1040px] h-[160px] sm:h-[210px] md:h-[280px] lg:h-[470px] xl:h-[520px] rounded-[2rem] md:rounded-[4rem] xl:rounded-[5rem] overflow-hidden shadow-xl md:shadow-2xl z-10 pointer-events-none">
            <ImageWithFallback src={mainImg} alt="Sprite Main" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sparkle dots distributed across the hero section */}
        {window.innerWidth > 0 && [...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute rounded-full z-20 pointer-events-none"
            style={{
              width: i % 2 === 0 ? 12 : 8,
              height: i % 2 === 0 ? 12 : 8,
              background: i % 3 === 0 ? "#4ade80" : i % 3 === 1 ? "#fbbf24" : "#ffffff",
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `sparkle ${1.5 + Math.random() * 2}s ${Math.random() * 2}s ease-in-out infinite`,
              boxShadow: "0 0 10px rgba(74,222,128,0.8)",
            }}
          />
        ))}

        {/* Badge */}
        <div className="absolute top-4 right-4 md:top-20 md:right-12 z-50 bg-yellow-400 text-yellow-900 rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-lg text-center rotate-12 scale-90 md:scale-100 origin-center">
          <span className="text-xs md:text-sm font-black leading-tight">LEMON</span>
          <span className="text-[9px] md:text-[11px] font-bold">LIME</span>
        </div>
      </section>

      {/* Features - background image with wave top and diagonal clip at bottom */}
      <section
        id="products"
        data-animate
        className="relative z-10 pb-48 px-8 bg-cover bg-center -mt-4 scroll-mt-[90px]"
        style={{
          backgroundImage: `url(${teaserKv})`,
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 120px), 0 100%)",
        }}
      >
        {/* Wave overlay at top - masks the transition */}
        <div className="absolute top-[-1px] left-0 w-full z-10">
          <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{ height: 61 }}>
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e8fdf0" />
                <stop offset="50%" stopColor="#d4f7e2" />
                <stop offset="100%" stopColor="#b6f0cc" />
              </linearGradient>
            </defs>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="url(#heroGradient)" />
          </svg>
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-widest drop-shadow-lg" style={{ fontFamily: "var(--font-headline)" }}>製品情報</h2>
          </div>
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-md">500ml缶を全国発売、さらに進化</h3>
              <p className="text-white/90 text-xl md:text-2xl leading-loose font-medium drop-shadow-sm">
                甘さを見直し、よりキレのある後味に刷新
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        data-animate
        className="relative z-10 py-16 px-8 bg-cover bg-center -mt-[110px]"
        style={{
          backgroundImage: `url(${teamKv})`,
          clipPath: "polygon(0 120px, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-40">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-md">Z世代向けプロモーションを展開</h3>
              <p className="text-white/90 text-xl md:text-2xl leading-loose font-medium drop-shadow-sm">
                &TEAM起用や音楽フェス連動施策を実施
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="relative z-10 mt-[-1px]">
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{ height: 61 }}>
          <defs>
            <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8fdf0" />
              <stop offset="50%" stopColor="#d4f7e2" />
              <stop offset="100%" stopColor="#b6f0cc" />
            </linearGradient>
          </defs>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="url(#heroGradient2)" />
        </svg>
      </div>

      {/* Lime & bubbles section */}
      <section id="lineup" className="relative z-10 py-16 md:py-24 px-4 md:px-8 scroll-mt-[80px]">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-6 md:mb-8 leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
            スプライトのラインナップ
          </h2>
          <p className="text-green-700/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 md:mb-12 max-w-xl md:max-w-3xl px-4">
            気分や場面に合わせて選べる、多彩なスプライトのラインナップ。<br className="hidden md:block" />
            どんな時でも、あなたの最高のリフレッシュをサポートします。
          </p>

          <div className="bg-white/95 backdrop-blur-md rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 lg:p-20 shadow-xl md:shadow-2xl border border-white/50 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-12 items-end">
              {[
                { src: p15l, label: "1.5L", size: "max-w-none w-[115%] scale-110 origin-bottom" },
                { src: p700ml, label: "700ml", size: "max-w-[95%]" },
                { src: p470ml, label: "470ml", size: "max-w-[65%]" },
                { src: p350ml, label: "350ml", size: "max-w-[60%]" },
                { src: p500can, label: "500ml缶", size: "max-w-[75%]" },
                { src: p350can, label: "350ml缶", size: "max-w-[70%]" },
              ].map((item, idx) => (
                <div key={idx} data-animate-left={`${idx * 120}`} className="flex flex-col items-center">
                  <div className="w-full flex items-end justify-center mb-4 md:mb-8 h-32 sm:h-48 md:h-64 lg:h-72">
                    <ImageWithFallback src={item.src} alt={item.label} className={`${item.size} h-full object-contain object-bottom`} />
                  </div>
                  <span className="text-green-800 font-black text-xs md:text-sm whitespace-nowrap bg-green-100/50 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-green-200/50">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & SNS Section */}
      <section id="sns" className="relative z-10 py-12 md:py-16 px-4 md:px-8 scroll-mt-[80px]">
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {/* Accordion for Ingredients & Nutrition */}
          <div className="bg-white/95 backdrop-blur-md border border-green-100 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
              className="w-full px-5 md:px-8 py-4 md:py-5 flex items-center justify-between text-left hover:bg-green-50 transition-colors"
            >
              <span className="font-black text-green-900 tracking-wider md:tracking-widest text-sm md:text-base">原材料・成分について</span>
              <ChevronDown className={`text-green-500 transition-transform duration-300 ${isIngredientsOpen ? 'rotate-180' : ''}`} size={20} />
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isIngredientsOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="p-5 md:p-8 lg:p-12 border-t border-green-50">
                <h3 className="text-lg md:text-xl font-black text-green-900 mb-3 md:mb-4">栄養成分表示</h3>
                <div className="h-0.5 bg-green-800 mb-3 md:mb-4"></div>
                <p className="text-xs md:text-sm font-bold text-green-700 mb-2">100ml当たり</p>
                <div className="h-[1px] bg-green-50 mb-4 md:mb-6"></div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 mb-8">
                  {[
                    ["エネルギー", "32kcal"],
                    ["脂質", "0g"],
                    ["食塩相当量", "0.02g"],
                    ["炭水化物", "8g"],
                    ["たんぱく質", "0g"],
                    ["カフェイン", "0mg"]
                  ].map(([label, val]) => (
                    <div key={label} className="border-b border-green-50 pb-2">
                      <span className="text-[10px] md:text-xs text-green-600 block mb-1 font-bold">{label}</span>
                      <span className="text-base md:text-lg font-black text-green-900 leading-none">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="h-[1px] bg-green-800 mb-6"></div>
                <h4 className="text-sm font-black text-green-800 mb-3">原材料名</h4>
                <p className="text-sm text-green-700 leading-relaxed mb-6 font-medium">
                  果糖ぶどう糖液糖（国内製造）／炭酸、酸味料、香料、酸化防止剤（ビタミンC）、甘味料（スクラロース、ステビア）
                </p>
                <p className="text-xs font-bold text-green-500">
                  アレルギー特定原材料：なし
                </p>
              </div>
            </div>
          </div>

          {/* SNS Bar */}
          <div className="bg-black text-white rounded-full px-5 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between shadow-2xl">
            <span className="font-bold tracking-widest text-xs md:text-sm lg:text-base">スプライト公式SNSアカウント</span>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-300 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-[20px] md:h-[20px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-300 transition-colors">
                <Instagram size={16} className="md:w-[20px] md:h-[20px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/50 border-t border-green-200/60 py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-green-600 font-black tracking-[0.3em] text-lg uppercase">★ Sprite</div>
        <p className="text-green-700/40 text-xs tracking-widest">© 2026 Sprite. All rights reserved.</p>

      </footer>
    </div>
  );
}
