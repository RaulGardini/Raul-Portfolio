import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Code, Server, CheckCircle2 } from 'lucide-react';

const ExperienciaPage = () => {
  return (
    <>
      <Helmet>
        <title>Experiências - Raul Passos Gardini</title>
        <meta name="description" content="Experiência profissional de Raul Passos Gardini como desenvolvedor full stack" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-[#EDCAA1] to-[#E3FEFF] py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#3D2B1F]">
              Experiências
            </h1>
            <p className="text-xl text-[#7A5C42] max-w-2xl mx-auto">
              Minha jornada profissional no desenvolvimento de software
            </p>
          </motion.div>

          {/* Single Card Container */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/40 backdrop-blur-sm border border-[#C4956A]/25 rounded-2xl p-8 md:p-12 shadow-xl hover:border-[#C4956A]/50 transition-all duration-500">

              {/* Card Header */}
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="w-16 h-16 bg-[#C4956A] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#C4956A]/25">
                  <Briefcase size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-2">Desenvolvedor Full Stack</h2>
                <p className="text-[#C4956A] font-medium text-lg">BitCodeHouse • Freelance</p>
                <p className="text-[#A08060] mt-2">Mais de 1 ano de experiência</p>
              </div>

              {/* Skills Split Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                {/* Divider for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C4956A]/40 to-transparent transform -translate-x-1/2" />

                {/* Front-end Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code className="text-[#C4956A]" size={24} />
                    <h3 className="text-xl font-bold text-[#3D2B1F]">Front-end (React)</h3>
                  </div>
                  <p className="text-[#7A5C42] leading-relaxed text-sm md:text-base">
                    Desenvolvimento de interfaces modernas, responsivas e altamente interativas. Foco na experiência do usuário e performance.
                  </p>
                  <ul className="space-y-3">
                    {['React.js & Hooks', 'TailwindCSS & Styles', 'Framer Motion', 'React Router', 'Responsive Design'].map((skill) => (
                      <li key={skill} className="flex items-center space-x-3 text-[#7A5C42]">
                        <CheckCircle2 size={16} className="text-[#C4956A]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back-end Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Server className="text-[#C4956A]" size={24} />
                    <h3 className="text-xl font-bold text-[#3D2B1F]">Back-end (C#)</h3>
                  </div>
                  <p className="text-[#7A5C42] leading-relaxed text-sm md:text-base">
                    Arquitetura de APIs robustas, seguras e escaláveis. Implementação de regras de negócio complexas e integração com bancos de dados.
                  </p>
                  <ul className="space-y-3">
                    {['C# .NET Core', 'RESTful APIs', 'Entity Framework', 'SQL Server', 'Architecture Patterns'].map((skill) => (
                      <li key={skill} className="flex items-center space-x-3 text-[#7A5C42]">
                        <CheckCircle2 size={16} className="text-[#C4956A]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExperienciaPage;
