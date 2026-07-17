import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Users, CheckSquare, UtensilsCrossed, Shirt, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Projects',
    icon: CheckSquare,
    description:
      'Aplicação de lista de tarefas voltada para o gerenciamento de projetos. Permite organizar atividades, acompanhar o andamento e manter tudo estruturado do começo ao fim.',
    tags: ['React', 'TypeScript', 'C#', 'API REST'],
    accent: '#E0B896',
    links: [
      { label: 'Front-end', href: 'https://github.com/RaulGardini/To-do-list-Projetos-Frontend', icon: Github },
      { label: 'Back-end', href: 'https://github.com/RaulGardini/To-do-list-Projetos', icon: Github }
    ]
  },
  {
    title: 'ProfessorTI Onboarding',
    icon: Bot,
    description:
      'Chatbot com base de conhecimento configurável: o contexto é definido no back-end e o bot responde exclusivamente a partir dessa base de texto — ideal para onboarding e suporte interno.',
    tags: ['C#', 'ReactJS', 'Chatbot', 'API REST'],
    accent: '#8FBDCC',
    links: [
      { label: 'Front-end', href: 'https://github.com/RaulGardini/Professor-TI-Onboarding-Frontend', icon: Github },
      { label: 'Back-end', href: 'https://github.com/RaulGardini/Professor-TI-Onboarding', icon: Github }
    ]
  },
  {
    title: 'Sistema Uniformes',
    icon: Shirt,
    description:
      'Sistema para organizar e gerenciar os pedidos de fardamento de uma academia de dança, centralizando as solicitações de forma simples e organizada.',
    tags: ['ReactJS', 'JavaScript'],
    accent: '#E0B896',
    links: [
      { label: 'Repositório', href: 'https://github.com/RaulGardini/Sistema-uniformes', icon: Github }
    ]
  },
  {
    title: 'Unifood',
    icon: UtensilsCrossed,
    description:
      'Aplicativo de delivery voltado para a comunidade da Unifor, desenvolvido para Android. Conecta os usuários a pontos de alimentação de forma prática.',
    tags: ['Kotlin', 'Android Studio'],
    accent: '#8FBDCC',
    team: true,
    links: [
      { label: 'Repositório', href: 'https://github.com/RaulGardini/Unifood', icon: Github }
    ]
  }
];

const ProjetosPage = () => {
  return (
    <>
      <Helmet>
        <title>Projetos - Raul Passos Gardini</title>
        <meta name="description" content="Projetos desenvolvidos por Raul Passos Gardini em React, C#, TypeScript e Kotlin" />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#F5EDE8]">
              Projetos
            </h1>
            <p className="text-xl text-[#D4C4B8] max-w-2xl mx-auto">
              Alguns dos trabalhos que desenvolvi, do front-end ao back-end
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex flex-col bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${project.accent}26`, border: `1px solid ${project.accent}4D` }}
                    >
                      <Icon size={28} style={{ color: project.accent }} />
                    </div>
                    {project.team && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4C4B8] bg-white/10 border border-white/15 rounded-full px-3 py-1">
                        <Users size={13} />
                        Projeto em equipe
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-bold text-[#F5EDE8] mb-3">{project.title}</h2>
                  <p className="text-[#D4C4B8] leading-relaxed text-sm md:text-base mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#F5EDE8] bg-white/10 border border-white/15 rounded-md px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#3D2B1F] bg-[#E0B896] hover:bg-[#C49A72] rounded-lg px-4 py-2 transition-colors duration-300"
                        >
                          <LinkIcon size={16} />
                          <span>{link.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-14"
          >
            <a
              href="https://github.com/RaulGardini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4C4B8] hover:text-[#E0B896] transition-colors duration-300 group"
            >
              <Github size={20} />
              <span className="font-medium">Ver todos os repositórios no GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjetosPage;
