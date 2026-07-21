import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Raul Passos Gardini - Desenvolvedor Full Stack</title>
        <meta name="description" content="Portfolio de Raul Passos Gardini, desenvolvedor full stack especializado em React e C#" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl mx-auto">

            {/* Left Side: Content */}
            <div className="w-full md:w-auto md:flex-1 text-center md:text-left">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-[#FAFAF9]"
              >
                Raul Passos Gardini
              </motion.h1>

              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-3xl font-semibold mb-6 text-[#D4B483]"
              >
                Desenvolvedor Full Stack
              </motion.h2>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base md:text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
              >
                Atuo no setor financeiro desenvolvendo e mantendo APIs e sistemas internos. No back-end trabalho com
                C#, .NET, Entity Framework Core e SQL Server; no front-end, com React, TypeScript e React Native.
                Atualmente venho me dedicando a automação de processos e agentes de IA. Estudante de Ciência da
                Computação na UNIFOR.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4"
              >
                <button
                  onClick={() => document.getElementById('experiencias').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 bg-[#D4B483] hover:bg-[#C2A05E] text-[#0A0A0B] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4B483]/30"
                >
                  <span>Ver Portfólio</span>
                  <ArrowRight size={20} />
                </button>
                <a
                  href="/Curriculo-Raul-Passos-Gardini.pdf"
                  download
                  className="inline-flex items-center space-x-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#D4B483]/60 text-[#FAFAF9] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Download size={20} />
                  <span>Baixar CV</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side: Profile Photo */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full md:w-auto flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#D4B483]/30 shadow-[0_0_60px_rgba(212,180,131,0.25)] bg-[#0A0A0B]">
                <img
                  src="/foto-perfil.jpg"
                  alt="Raul Passos Gardini"
                  className="w-full h-full object-cover object-[center_100%]"
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#D4B483]/10 rounded-full blur-[130px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-[#C7C7CC]/10 rounded-full blur-[130px]"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
