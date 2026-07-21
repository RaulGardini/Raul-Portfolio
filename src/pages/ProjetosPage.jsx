import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Users, CheckSquare, UtensilsCrossed, Cake, Bot, Maximize2, X } from 'lucide-react';

// Para adicionar imagem/GIF: salve o arquivo em `public/projects/` e coloque o
// caminho em `media` (ex: '/projects/projects.gif'). Suporta .gif/.png/.jpg e
// .mp4/.webm (vídeo com autoplay em loop). `liveUrl` gera o botão "Ver ao vivo".
const projects = [
  {
    title: 'Projects',
    icon: CheckSquare,
    description:
      'Aplicação de lista de tarefas voltada para o gerenciamento de projetos. Permite organizar atividades, acompanhar o andamento e manter tudo estruturado do começo ao fim.',
    tags: ['React', 'TypeScript', 'C#', 'API REST'],
    accent: '#D4B483',
    media: '/projects/projects.mp4',
    liveUrl: null,
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
    accent: '#C7C7CC',
    media: null,
    liveUrl: null,
    links: [
      { label: 'Front-end', href: 'https://github.com/RaulGardini/Professor-TI-Onboarding-Frontend', icon: Github },
      { label: 'Back-end', href: 'https://github.com/RaulGardini/Professor-TI-Onboarding', icon: Github }
    ]
  },
  {
    title: 'Bolos de Mainha',
    icon: Cake,
    description:
      'Landing page para a confeitaria Bolos de Mainha, apresentando o cardápio e os produtos da loja de forma atraente, moderna e responsiva.',
    tags: ['React', 'Vite', 'TailwindCSS'],
    accent: '#D4B483',
    media: '/projects/bolos-de-mainha.mp4',
    liveUrl: null,
    links: [
      { label: 'Repositório', href: 'https://github.com/RaulGardini/Bolos-de-Mainha', icon: Github }
    ]
  },
  {
    title: 'Unifood',
    icon: UtensilsCrossed,
    description:
      'Aplicativo de delivery voltado para a comunidade da Unifor, desenvolvido para Android. Conecta os usuários a pontos de alimentação de forma prática.',
    tags: ['Kotlin', 'Android Studio'],
    accent: '#C7C7CC',
    team: true,
    media: null,
    liveUrl: null,
    links: [
      { label: 'Repositório', href: 'https://github.com/RaulGardini/Unifood', icon: Github }
    ]
  }
];

const isVideo = (src) => /\.(mp4|webm)$/i.test(src || '');

const ProjectMedia = ({ src, title, onExpand }) => {
  if (!src) return null;
  return (
    <div className="relative -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-white/10 bg-black/30">
      <div className="h-40 w-full">
        {isVideo(src) ? (
          <video src={src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
        ) : (
          <img src={src} alt={`Prévia do projeto ${title}`} className="w-full h-full object-cover" loading="lazy" />
        )}
      </div>
      <button
        type="button"
        onClick={onExpand}
        aria-label="Ampliar prévia"
        className="absolute top-2 right-2 w-9 h-9 rounded-lg bg-black/55 backdrop-blur-md border border-white/15 text-[#FAFAF9] flex items-center justify-center hover:bg-black/75 hover:border-[#D4B483]/60 transition-colors duration-300"
      >
        <Maximize2 size={16} />
      </button>
    </div>
  );
};

const Lightbox = ({ media, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-[#0A0A0B] border border-white/20 text-[#FAFAF9] flex items-center justify-center hover:border-[#D4B483]/60 transition-colors duration-300"
        >
          <X size={20} />
        </button>
        <div className="overflow-hidden rounded-xl border border-white/15 bg-black shadow-2xl">
          {isVideo(media.src) ? (
            <video src={media.src} className="w-full max-h-[80vh] object-contain bg-black" autoPlay loop controls playsInline />
          ) : (
            <img src={media.src} alt={media.title} className="w-full max-h-[80vh] object-contain bg-black" />
          )}
        </div>
        <p className="text-center text-sm text-[#A1A1AA] mt-3">{media.title}</p>
      </motion.div>
    </motion.div>
  );
};

const ProjetosPage = () => {
  const [expanded, setExpanded] = useState(null);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FAFAF9]">
              Projetos
            </h1>
            <p className="text-xl text-[#A1A1AA] max-w-2xl mx-auto">
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
                  className="group flex flex-col bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Media (image / GIF / video) */}
                  <ProjectMedia
                    src={project.media}
                    title={project.title}
                    onExpand={() => setExpanded({ src: project.media, title: project.title })}
                  />

                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${project.accent}26`, border: `1px solid ${project.accent}4D` }}
                    >
                      <Icon size={28} style={{ color: project.accent }} />
                    </div>
                    {project.team && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                        <Users size={13} />
                        Projeto em equipe
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-bold text-[#FAFAF9] mb-3">{project.title}</h2>
                  <p className="text-[#A1A1AA] leading-relaxed text-sm md:text-base mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#FAFAF9] bg-white/[0.06] border border-white/10 rounded-md px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {/* Primary: live demo */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0B] bg-[#D4B483] hover:bg-[#C2A05E] rounded-lg px-4 py-2 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Ver ao vivo</span>
                      </a>
                    )}

                    {/* Secondary: repositories */}
                    {project.links.map((link) => {
                      const LinkIcon = link.icon;
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#FAFAF9] bg-white/[0.06] border border-white/10 hover:border-[#D4B483]/50 rounded-lg px-4 py-2 transition-colors duration-300"
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
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#D4B483] transition-colors duration-300 group"
            >
              <Github size={20} />
              <span className="font-medium">Ver todos os repositórios no GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / modal de vídeo ampliado */}
      <AnimatePresence>
        {expanded && <Lightbox media={expanded} onClose={() => setExpanded(null)} />}
      </AnimatePresence>
    </>
  );
};

export default ProjetosPage;
