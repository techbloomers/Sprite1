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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8fdf0] via-[#d4f7e2] to-[#b6f0cc] overflow-x-hidden" style={{ fontFamily: "var(--font-text)" }}>
      <style>{`
        @keyframes bubbleRise {
          0%   { transform: translateY(100vh) scale(0.4); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(-15vh) scale(1.1); opacity: 0; }
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
      <nav className="relative z-50 flex items-center justify-between px-8 py-5 bg-white/60 backdrop-blur-md border-b border-green-200/60 shadow-sm">
        <div className="text-2xl tracking-[0.25em] font-black text-green-600 uppercase drop-shadow-sm">
          ★ Sprite
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest text-green-700/80 uppercase font-semibold">
          {["Home", "Products", "Story", "Contact"].map((l) => (
            <a key={l} href="#" className="hover:text-green-500 transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white text-sm tracking-widest uppercase font-bold hover:bg-green-400 shadow-md shadow-green-300 transition-all duration-300 hover:scale-105">
          Buy Now
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-[88vh] flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 pt-10 pb-16">
        {/* Left text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="shimmer-green text-[clamp(5rem,14vw,10rem)] font-black leading-none tracking-tighter mb-4" style={{ fontFamily: "var(--font-headline)" }}>
            SPRITE
          </h1>
          <p className="text-green-700/80 tracking-[0.3em] uppercase text-sm mb-6">
            Lemon · Lime · Sparkling
          </p>
          <p className="text-green-800/60 text-base leading-relaxed max-w-sm mb-10">
            はじける炭酸とシトラスの爽やかさが<br />一口でひろがる、最高のリフレッシュ体験。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group px-8 py-4 rounded-full bg-green-500 text-white font-black tracking-widest uppercase text-sm shadow-lg shadow-green-300/60 hover:bg-green-400 hover:scale-105 transition-all duration-300">
              今すぐ体験 →
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-green-400 text-green-600 font-bold tracking-widest uppercase text-sm hover:bg-green-100 transition-all duration-300">
              詳しく見る
            </button>
          </div>
        </div>

        {/* Right: can + decoration */}
        <div className="flex-1 flex items-center justify-center relative w-full h-full min-h-[500px]">
          {/* Spinning ring */}
          <div className="absolute w-80 h-80 rounded-full border-4 border-dashed border-green-300/50 spin-slow z-0" />
          {/* Glow circle */}
          <div className="absolute w-64 h-64 rounded-full z-0"
            style={{ background: "radial-gradient(circle, rgba(74,222,128,0.45) 0%, transparent 70%)" }} />

          {/* Can */}
          <div className="animate-float-can absolute left-0 md:left-5 lg:-left-[200px] w-[550px] md:w-[820px] lg:w-[1100px] h-[275px] md:h-[410px] lg:h-[550px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl z-10 pointer-events-none">
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
        <div className="absolute top-12 right-12 bg-yellow-400 text-yellow-900 rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg text-center rotate-12">
          <span className="text-sm font-black leading-tight">LEMON</span>
          <span className="text-[11px] font-bold">LIME</span>
        </div>
      </section>

      {/* Features - background image with wave top and diagonal clip at bottom */}
      <section
        className="relative z-10 pb-48 px-8 bg-cover bg-center -mt-4"
        style={{
          backgroundImage: `url(${teaserKv})`,
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 120px), 0 100%)",
        }}
      >
        {/* Wave overlay at top - masks the transition */}
        <div className="absolute top-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{ height: 60 }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#d4f7e2" />
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
      <div className="relative z-10">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="white" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Lime & bubbles section */}
      <section className="relative z-10 py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-6xl font-black text-green-800 mb-8 leading-tight" style={{ fontFamily: "var(--font-headline)" }}>
            スプライトのラインナップ
          </h2>
          <p className="text-green-700/70 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
            気分や場面に合わせて選べる、多彩なスプライトのラインナップ。<br />
            どんな時でも、あなたの最高のリフレッシュをサポートします。
          </p>

          <div className="bg-white/95 backdrop-blur-md rounded-[3.5rem] p-12 md:p-20 shadow-2xl border border-white/50 w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 items-end">
              {[
                { src: p15l, label: "1.5L", size: "max-w-full" },
                { src: p700ml, label: "700ml", size: "max-w-[85%]" },
                { src: p470ml, label: "470ml", size: "max-w-[75%]" },
                { src: p350ml, label: "350ml", size: "max-w-[70%]" },
                { src: p500can, label: "500ml缶", size: "max-w-[75%]" },
                { src: p350can, label: "350ml缶", size: "max-w-[70%]" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full flex items-end justify-center mb-8 h-48 md:h-72">
                    <ImageWithFallback src={item.src} alt={item.label} className={`${item.size} h-full object-contain object-bottom`} />
                  </div>
                  <span className="text-green-800 font-black text-sm md:text-base whitespace-nowrap bg-green-100/50 px-4 py-1.5 rounded-full border border-green-200/50">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & SNS Section */}
      <section className="relative z-10 py-16 px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Accordion for Ingredients & Nutrition */}
          <div className="bg-white/95 backdrop-blur-md border border-green-100 rounded-3xl shadow-xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
              className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-green-50 transition-colors"
            >
              <span className="font-black text-green-900 tracking-widest">原材料・成分について</span>
              <ChevronDown className={`text-green-500 transition-transform duration-300 ${isIngredientsOpen ? 'rotate-180' : ''}`} size={24} />
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isIngredientsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="p-8 md:p-12 border-t border-green-50">
                <h3 className="text-xl font-black text-green-900 mb-4">栄養成分表示</h3>
                <div className="h-0.5 bg-green-800 mb-4"></div>
                <p className="text-sm font-bold text-green-700 mb-2">100ml当たり</p>
                <div className="h-[1px] bg-green-200 mb-6"></div>

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

                <div className="h-[1px] bg-green-200 mb-6"></div>
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
          <div className="bg-black text-white rounded-full px-8 py-5 flex items-center justify-between shadow-2xl">
            <span className="font-bold tracking-widest text-sm md:text-base">スプライト公式SNSアカウント</span>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-300 transition-colors">
                <Instagram size={20} />
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
