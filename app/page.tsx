'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Check, Star, Zap, Target, MousePointer2, Instagram, ExternalLink } from 'lucide-react';

const GOLD = '#c5a059';
const WHATSAPP_URL = 'https://wa.me/5521993107485?text=Olá! Gostaria de solicitar um orçamento para uma landing page premium.';
const INSTAGRAM_URL = 'https://www.instagram.com/oakstudio.lab/';

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main className="relative min-h-screen font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-[0.3em] text-[#c5a059] font-serif"
        >
          OAK STUDIO
        </motion.div>

        <div className="hidden md:flex items-center space-x-12">
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase hover:text-[#c5a059] transition-colors"
          >
            Portfólio
          </motion.a>
        </div>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[10px] md:text-xs font-bold tracking-widest uppercase border-b border-[#c5a059] pb-1 hover:text-[#c5a059] transition-colors"
        >
          Solicitar Orçamento —
        </motion.a>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20 overflow-hidden">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#c5a059] opacity-[0.05] blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#c5a059] opacity-[0.03] blur-[150px] rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: 1, 
            y: [40, 0, -10, 0],
          }}
          transition={{ 
            opacity: { duration: 1.2 },
            y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            repeat: 0
          }}
          className="space-y-12 max-w-5xl relative z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="space-y-12"
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-[1px] w-12 bg-[#c5a059] origin-center" 
              />
              <h2 className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#c5a059] font-bold">
                ESTRATÉGIA & DESIGN PREMIUM
              </h2>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] tracking-tight">
              Sua marca merece <br />
              uma <span className="text-[#c5a059] italic relative inline-block">
                landing page
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-2 left-0 h-[2px] bg-[#c5a059]/30"
                />
              </span> <br />
              que converte.
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Elevamos o seu posicionamento digital através de design de alto padrão 
              e estratégias de conversão validadas.
            </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#b38f4d' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#c5a059] text-black px-10 py-5 md:px-16 md:py-6 text-xs md:text-sm font-bold tracking-[0.2em] uppercase rounded-full transition-all shadow-2xl shadow-[#c5a059]/20"
            >
              Quero minha landing page
            </motion.a>
          </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-[8px] tracking-[0.3em] uppercase opacity-30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#c5a059] to-transparent opacity-30" />
        </motion.div>
      </section>

      {/* Specialists Section */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-block border border-[#c5a059]/30 px-4 py-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a059]">
                Especialistas em conversão
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Do clique à venda. <br />
              <span className="text-[#c5a059]">Cada pixel</span> tem propósito.
            </h2>

            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
              Criamos landing pages para negócios que levam os resultados a sério. 
              Estratégia, design e velocidade em um só lugar.
            </p>

            <div className="flex flex-col space-y-6 pt-4">
              {[
                { icon: <Target className="w-5 h-5" />, text: "Foco total em ROI" },
                { icon: <Zap className="w-5 h-5" />, text: "Carregamento ultra-rápido" },
                { icon: <MousePointer2 className="w-5 h-5" />, text: "UX otimizada para cliques" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-2 rounded-full bg-[#c5a059]/10 text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm tracking-wide font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden group rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=2069&auto=format&fit=crop"
              alt="Futuristic Design"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-bold mb-2">
                DESIGN FUTURISTA
              </div>
              <div className="text-2xl font-serif">
                Estética que <br /> transcende o tempo.
              </div>
            </div>
            <div className="absolute top-10 right-10 text-[120px] font-serif font-black opacity-[0.05] select-none pointer-events-none">
              OAK
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we deliver (Mustard Section) */}
      <section className="py-32 px-6 md:px-12 bg-[#c5a059] text-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-60">
                OAK STUDIO — O QUE ENTREGAMOS
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-medium max-w-2xl leading-tight">
                Tudo que sua página precisa para vender.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
              {[
                "Design exclusivo para o seu nicho",
                "Copy focada em conversão",
                "Entrega rápida com suporte",
                "Otimizada para mobile e SEO"
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-12 h-[1px] bg-black/30 group-hover:w-16 group-hover:bg-black transition-all duration-500" />
                  <span className="text-lg md:text-xl font-medium tracking-tight">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-serif font-bold tracking-[0.2em]"
              >
                OAK STUDIO
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a059] font-bold">
              PORTFÓLIO SELECIONADO
            </span>
            <h2 className="text-4xl md:text-6xl font-serif">
              Projetos que <span className="text-[#c5a059] italic">geram impacto</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Oak Studio Lanches",
                url: "https://oak-studio-lanches.vercel.app/",
                image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=2070&auto=format&fit=crop",
                category: "Gastronomia"
              },
              {
                title: "Oak Pizzas",
                url: "https://oak-pizzas.vercel.app/",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
                category: "Gastronomia"
              },
              {
                title: "L'Éclat Beauty Studio",
                url: "https://l-clat-beauty-studio.vercel.app/",
                image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop",
                category: "Beleza & Estética"
              },
              {
                title: "Imobiliária Mello",
                url: "https://imobiliria-mello.vercel.app/",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
                category: "Imobiliário"
              }
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl bg-[#111] border border-white/5 block"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a059] font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-serif">{project.title}</h3>
                  </div>
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-[#c5a059] group-hover:text-black transition-all duration-500">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote & Stats */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 md:pl-20"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-[#c5a059]" />
            <blockquote className="text-2xl md:text-4xl font-serif italic font-light leading-relaxed max-w-4xl">
              &ldquo;Uma <span className="text-[#c5a059]">landing page bem feita</span> não é custo — é o investimento com maior retorno do seu negócio.&rdquo;
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-20">
            {[
              { label: "CONVERSÕES", value: "+3x" },
              { label: "ENTREGA", value: "48h" },
              { label: "PERSONALIZADO", value: "100%" },
              { label: "LANDING PAGES PREMIUM", value: "OAK STUDIO", isBrand: true }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className={`text-2xl md:text-4xl font-serif font-bold ${stat.isBrand ? 'text-[#c5a059] text-sm tracking-[0.2em]' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c5a059]/5 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-12"
        >
          <h2 className="text-4xl md:text-7xl font-serif leading-tight max-w-4xl mx-auto">
            Pronto para elevar o nível do seu <span className="text-[#c5a059] italic">posicionamento</span>?
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c5a059] text-black px-12 py-5 text-sm font-bold tracking-widest uppercase rounded-full"
            >
              Solicitar Orçamento
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ x: 5 }}
              className="group flex items-center space-x-3 text-sm font-bold tracking-widest uppercase cursor-pointer"
            >
              <span>Ver Portfólio</span>
              <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 text-center space-y-8">
        <motion.a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, color: '#c5a059' }}
          className="inline-flex items-center space-x-2 text-gray-400 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-xs font-bold tracking-widest uppercase">@oakstudio.lab</span>
        </motion.a>
        
        <div className="text-[10px] tracking-[0.5em] uppercase text-gray-600">
          © {new Date().getFullYear()} OAK STUDIO. TODOS OS DIREITOS RESERVADOS.
        </div>
      </footer>
    </main>
  );
}
