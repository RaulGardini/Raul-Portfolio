import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, GraduationCap, Languages } from 'lucide-react';

const categories = [
  {
    title: 'Front-end',
    icon: Code,
    accent: '#D4B483',
    description: 'Interfaces modernas, responsivas e interativas',
    skills: ['React', 'React Native', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS']
  },
  {
    title: 'Back-end',
    icon: Server,
    accent: '#C7C7CC',
    description: 'APIs robustas, seguras e escaláveis',
    skills: ['C#', '.NET', 'APIs REST', 'Entity Framework', 'SQL', 'SQL Server']
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    accent: '#D4B483',
    description: 'Versionamento e fluxo de trabalho',
    skills: ['Git', 'GitHub']
  },
  {
    title: 'Aprendendo',
    icon: GraduationCap,
    accent: '#C7C7CC',
    description: 'Tecnologias que estou explorando',
    skills: ['Java', 'Kotlin']
  }
];

const HabilidadesPage = () => {
  return (
    <>
      <Helmet>
        <title>Habilidades - Raul Passos Gardini</title>
        <meta name="description" content="Habilidades técnicas de Raul Passos Gardini em desenvolvimento web e mobile" />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FAFAF9]">
              Habilidades
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
              Tecnologias que uso para transformar ideias em produtos
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 transition-all duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${category.accent}26`, border: `1px solid ${category.accent}4D` }}
                    >
                      <Icon size={24} style={{ color: category.accent }} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#FAFAF9]">{category.title}</h2>
                      <p className="text-sm text-[#71717A]">{category.description}</p>
                    </div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium text-[#FAFAF9] bg-white/[0.06] border border-white/10 rounded-lg px-3 py-1.5 hover:bg-white/15 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Idiomas */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto mt-6"
          >
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#D4B48326', border: '1px solid #D4B4834D' }}
                >
                  <Languages size={24} style={{ color: '#D4B483' }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#FAFAF9]">Idiomas</h2>
                  <p className="text-sm text-[#71717A]">Comunicação</p>
                </div>
              </div>

              {/* Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#FAFAF9]">Português</span>
                    <span className="text-sm font-medium text-[#D4B483]">Nativo</span>
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#FAFAF9]">Inglês</span>
                    <span className="text-sm font-medium text-[#D4B483]">Básico</span>
                  </div>
                  <p className="text-xs text-[#71717A] mt-1">Leitura técnica de documentação e código</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HabilidadesPage;
