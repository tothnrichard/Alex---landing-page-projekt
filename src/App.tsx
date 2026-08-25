import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight } from 'lucide-react';

type Language = 'EN' | 'RO' | 'HU';

const translations = {
  EN: {
    nav: ['About', 'Sectors', 'Projects', 'Contact'],
    getInTouch: 'Get in touch',
    shaping: 'Shaping',
    spaces: 'Spaces',
    exploreBranches: 'Explore our specialized branches dedicated to transforming education, hospitality, workplaces, and unique interior spaces.',
    discoverMore: 'Discover More',
    explore: 'Explore',
  },
  RO: {
    nav: ['Istoria Noastră', 'Servicii', 'Proiecte', 'Contact'],
    getInTouch: 'Contactează-ne',
    shaping: 'Conturăm',
    spaces: 'Spații',
    exploreBranches: 'Explorați diviziile noastre specializate dedicate transformării educației, ospitalității, spațiilor de birouri și interioarelor unice.',
    discoverMore: 'Descoperă mai multe',
    explore: 'Explorează',
  },
  HU: {
    nav: ['Rólunk', 'Szolgáltatások', 'Projektek', 'Kapcsolat'],
    getInTouch: 'Lépjen kapcsolatba',
    shaping: 'Alakítjuk a',
    spaces: 'Tereket',
    exploreBranches: 'Fedezze fel speciális ágazatainkat, amelyek az oktatás, a vendéglátás, a munkahelyek és az egyedi belső terek átalakításának szentelik magukat.',
    discoverMore: 'Tudjon meg többet',
    explore: 'Felfedezés',
  }
};

const branches = [
  {
    id: 'education',
    title: { EN: 'Education', RO: 'Educație', HU: 'Oktatás' },
    fullTitle: 'ALEX EDUCATION',
    description: {
      EN: 'Empowering learning environments with ergonomic, adaptable, and inspiring furniture solutions tailored for modern educational spaces.',
      RO: 'Transformăm mediile de învățare prin soluții de mobilier ergonomice, adaptabile și pline de inspirație, create special pentru spațiile educaționale moderne.',
      HU: 'Modern oktatási terekre szabott, ergonomikus, adaptív és inspiráló bútormegoldásokkal emeljük a tanulási környezetek színvonalát.'
    },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    pos: 'top-0 left-0',
    theme: 'dark',
    link: 'https://www.alexmobilier.ro/scolar'
  },
  {
    id: 'hospitality',
    title: { EN: 'Hospitality', RO: 'Ospitalitate', HU: 'Vendéglátás' },
    fullTitle: 'ALEX HOSPITALITY',
    description: {
      EN: 'Creating unforgettable guest experiences through bespoke, luxurious, and durable furniture designed for hotels and restaurants.',
      RO: 'Conturăm experiențe memorabile pentru oaspeți prin mobilier personalizat, rafinat și durabil, proiectat exclusiv pentru hoteluri și restaurante.',
      HU: 'Felejthetetlen vendégélményt teremtünk szállodák és éttermek számára tervezett egyedi, prémium és tartós bútorokkal.'
    },
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    pos: 'top-0 right-0',
    theme: 'yellow',
    link: 'https://www.alexmobilier.ro/office'
  },
  {
    id: 'workplace',
    title: { EN: 'Workplace', RO: 'Birouri', HU: 'Irodák' },
    fullTitle: 'ALEX WORKPLACE',
    description: {
      EN: 'Elevating productivity and wellbeing with innovative office furnishings that transform corporate environments.',
      RO: 'Stimulăm productivitatea și confortul prin amenajări inovatoare care redefinesc spațiile de birouri și mediul corporativ.',
      HU: 'Innovatív irodai megoldásokkal növeljük a termelékenységet és a jó közérzetet, teljesen átalakítva a vállalati környezetet.'
    },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    pos: 'bottom-0 left-0',
    theme: 'yellow',
    link: 'https://www.alexmobilier.ro/office'
  },
  {
    id: 'spaces',
    title: { EN: 'Spaces', RO: 'Spații', HU: 'Terek' },
    fullTitle: 'ALEX SPACES',
    description: {
      EN: 'Curating versatile and aesthetic furniture for residential, public, and specialized interior spaces.',
      RO: 'Soluții de mobilier versatile și estetice, atent selecționate pentru spații rezidențiale, publice și interioare specializate.',
      HU: 'Sokoldalú és esztétikus bútorok gondos válogatása lakossági, közösségi és speciális belső terek számára.'
    },
    image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&q=80',
    pos: 'bottom-0 right-0',
    theme: 'dark',
    link: 'https://www.alexmobilier.ro/office'
  }
];

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const t = translations[lang];
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Custom SVG Logo mimicking a yellow hexagon/gem */}
          <svg width="36" height="36" viewBox="0 0 100 100" className="text-[#FBE11D]">
            <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="currentColor" />
            <path d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z" fill="#111111" />
            <polygon points="75,65 95,75 85,90 65,80" fill="currentColor" />
          </svg>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl leading-none tracking-widest text-[#111111]">ALEX</span>
            <span className="font-semibold text-[0.65rem] tracking-[0.3em] text-gray-500">MOBILIER</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {t.nav.map((item, i) => (
            <a key={i} href={`#${item.toLowerCase()}`} className="text-sm font-semibold tracking-widest uppercase text-gray-600 hover:text-[#111111] transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#FBE11D] hover:text-[#111111] transition-all">
            {t.getInTouch}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-bold text-xs">
            {(['EN', 'RO', 'HU'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-colors ${lang === l ? 'text-[#111111] underline underline-offset-4 decoration-2 decoration-[#FBE11D]' : 'text-gray-400 hover:text-gray-700'}`}
              >
                {l}
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const BranchQuadrant = ({ branch, hovered, setHovered, lang }: { branch: any, hovered: string | null, setHovered: (id: string | null) => void, lang: Language }) => {
  const isHovered = hovered === branch.id;
  const t = translations[lang];
  
  // Theming
  const getOverlayColor = () => {
    if (branch.theme === 'yellow') {
      return isHovered ? 'rgba(251, 225, 29, 0.95)' : 'rgba(251, 225, 29, 0.65)';
    }
    return isHovered ? 'rgba(17, 17, 17, 0.95)' : 'rgba(17, 17, 17, 0.7)';
  };

  const textColor = branch.theme === 'yellow' ? 'text-[#111111]' : 'text-white';

  return (
    <motion.div
      onMouseEnter={() => setHovered(branch.id)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setHovered(isHovered ? null : branch.id)}
      className={`absolute ${branch.pos} cursor-pointer overflow-hidden border border-white/20`}
      initial={false}
      animate={{
        width: isHovered ? '100%' : '50%',
        height: isHovered ? '100%' : '50%',
        zIndex: isHovered ? 20 : 10,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={branch.image}
        alt={branch.title[lang]}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      
      <motion.div
        className="absolute inset-0 transition-colors duration-500"
        animate={{ backgroundColor: getOverlayColor() }}
      />

      <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12 text-center ${textColor}`}>
        <h3 className={`font-black uppercase tracking-widest transition-all duration-700 ease-out ${isHovered ? 'text-3xl md:text-5xl mb-6' : 'text-lg md:text-2xl'}`}>
          {isHovered ? branch.fullTitle : branch.title[lang]}
        </h3>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <p className="text-sm md:text-lg max-w-lg font-medium mb-8 leading-relaxed opacity-90">
                {branch.description[lang]}
              </p>
              
              <a 
                href={branch.link}
                onClick={(e) => e.stopPropagation()}
                className={`group flex items-center gap-3 px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 ${
                branch.theme === 'yellow'
                  ? 'bg-[#111111] text-[#FBE11D] hover:bg-white hover:text-[#111111]'
                  : 'bg-[#FBE11D] text-[#111111] hover:bg-white hover:text-[#111111]'
              }`}>
                {t.explore} {branch.title[lang]}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('EN');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans text-gray-900 selection:bg-[#FBE11D] selection:text-[#111111]">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-4 relative overflow-hidden min-h-screen">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-[#FBE11D]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] bg-black/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center mb-12 md:mb-16 relative z-10">
          <motion.h1 
            key={`title-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight mb-6 uppercase"
          >
            {t.shaping} <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E2CA0D] to-[#FBE11D]">{t.spaces}</span>
          </motion.h1>
          <motion.p 
            key={`desc-${lang}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-500 max-w-2xl mx-auto text-base md:text-xl font-medium"
          >
            {t.exploreBranches}
          </motion.p>
        </div>

        {/* CIRCULAR HERO CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-[92vw] max-w-[650px] aspect-square rounded-full overflow-hidden shadow-2xl ring-8 ring-white z-10 bg-gray-100"
        >
          {branches.map(branch => (
            <BranchQuadrant 
              key={branch.id} 
              branch={branch} 
              hovered={hovered} 
              setHovered={setHovered} 
              lang={lang}
            />
          ))}

          {/* Center Logo Anchor - Visible only when nothing is hovered */}
          <AnimatePresence>
            {!hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl z-30 pointer-events-none border-4 border-gray-50"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-1">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-[#FBE11D]">
                    <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="currentColor" />
                    <path d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z" fill="#111111" />
                    <polygon points="75,65 95,75 85,90 65,80" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-extrabold text-[#111111] text-xs md:text-sm tracking-widest uppercase">Alex</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{t.discoverMore}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>

      </main>

      <footer className="w-full py-8 text-center text-gray-500 text-xs md:text-sm font-medium tracking-wide border-t border-gray-200 mt-auto bg-white z-20 relative">
        &copy; {new Date().getFullYear()} ALEX MOBILIER. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

