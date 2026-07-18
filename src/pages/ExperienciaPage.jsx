import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Code, Server, CheckCircle2, GraduationCap } from 'lucide-react';

const ExperienciaPage = () => {
  return (
    <>
      <Helmet>
        <title>Experiências - Raul Passos Gardini</title>
        <meta name="description" content="Experiência profissional de Raul Passos Gardini como desenvolvedor full stack" />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FAFAF9]">
              Experiências
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
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
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl hover:border-white/25 transition-all duration-500">

              {/* Card Header */}
              <div className="flex flex-col items-center mb-10 text-center">
                <div className="w-16 h-16 bg-[#D4B483]/20 border border-[#D4B483]/30 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase size={32} className="text-[#D4B483]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#FAFAF9] mb-2">Desenvolvedor Full Stack</h2>
                <p className="text-[#D4B483] font-medium text-lg">BitCodeHouse • Freelance</p>
                <p className="text-[#71717A] mt-2">Fevereiro de 2025 – Atual</p>
                <p className="text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto mt-6 text-sm md:text-base">
                  Atuo no setor financeiro, desenvolvendo e mantendo APIs e sistemas internos de ponta a ponta:
                  construo APIs RESTful no back-end, desenvolvo interfaces em React no front-end e implemento
                  soluções complexas — como um sistema worker para processamento de tarefas em segundo plano.
                  Recentemente venho me dedicando a automação de processos e agentes de IA.
                </p>
              </div>

              {/* Skills Split Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                {/* Divider for desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

                {/* Front-end Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code className="text-[#D4B483]" size={24} />
                    <h3 className="text-xl font-bold text-[#FAFAF9]">Front-end (React)</h3>
                  </div>
                  <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base">
                    Desenvolvimento de interfaces modernas, responsivas e altamente interativas. Foco na experiência do usuário e performance.
                  </p>
                  <ul className="space-y-3">
                    {['React.js & Hooks', 'TailwindCSS & Styles', 'Framer Motion', 'React Router', 'Responsive Design'].map((skill) => (
                      <li key={skill} className="flex items-center space-x-3 text-[#A1A1AA]">
                        <CheckCircle2 size={16} className="text-[#D4B483]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Back-end Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Server className="text-[#C7C7CC]" size={24} />
                    <h3 className="text-xl font-bold text-[#FAFAF9]">Back-end (C#)</h3>
                  </div>
                  <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base">
                    Arquitetura de APIs robustas, seguras e escaláveis. Implementação de regras de negócio complexas e integração com bancos de dados.
                  </p>
                  <ul className="space-y-3">
                    {['C# .NET Core', 'RESTful APIs', 'Entity Framework', 'SQL Server', 'Architecture Patterns'].map((skill) => (
                      <li key={skill} className="flex items-center space-x-3 text-[#A1A1AA]">
                        <CheckCircle2 size={16} className="text-[#C7C7CC]" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Formação Acadêmica */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-8"
          >
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-white/25 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-16 h-16 bg-[#C7C7CC]/20 border border-[#C7C7CC]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={32} className="text-[#C7C7CC]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#FAFAF9] mb-1">Ciência da Computação</h2>
                  <p className="text-[#C7C7CC] font-medium">Universidade de Fortaleza (Unifor)</p>
                  <p className="text-[#71717A] mt-2 text-sm">Graduação em andamento</p>
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
