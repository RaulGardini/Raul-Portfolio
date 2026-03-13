import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
                className="text-4xl md:text-6xl font-bold mb-4 text-[#F5EDE8]"
              >
                Raul Passos Gardini
              </motion.h1>

              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-3xl font-semibold mb-6 text-[#E0B896]"
              >
                Desenvolvedor Full Stack
              </motion.h2>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-base md:text-lg text-[#D4C4B8] mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
              >
                Especialista em desenvolvimento full stack com expertise em React para front-end e C# para back-end.
                Apaixonado por criar soluções elegantes e eficientes que transformam ideias em realidade digital.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button
                  onClick={() => document.getElementById('experiencias').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center space-x-2 bg-[#E0B896] hover:bg-[#C49A72] text-[#3D2B1F] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E0B896]/30"
                >
                  <span>Ver Portfólio</span>
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>

            {/* Right Side: Profile Photo */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full md:w-auto flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1679697945014-e140813c29a7"
                  alt="Raul Passos Gardini"
                  className="w-full h-full object-cover"
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
            className="absolute top-20 right-20 w-96 h-96 bg-[#E0B896]/15 rounded-full blur-[120px]"
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
            className="absolute bottom-20 left-20 w-80 h-80 bg-[#8FBDCC]/15 rounded-full blur-[120px]"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
