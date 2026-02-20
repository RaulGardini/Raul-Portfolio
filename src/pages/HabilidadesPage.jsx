import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Braces, Box } from 'lucide-react';

const HabilidadesPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    {
      name: 'HTML',
      percentage: 90,
      level: 'Advanced',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/20'
    },
    {
      name: 'CSS',
      percentage: 90,
      level: 'Advanced',
      icon: Palette,
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-400/20'
    },
    {
      name: 'JavaScript',
      percentage: 70,
      level: 'Intermediate',
      icon: Braces,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-500/20'
    },
    {
      name: 'C#',
      percentage: 50,
      level: 'Intermediate',
      icon: Box,
      color: 'from-cyan-400 to-cyan-500',
      bgColor: 'bg-cyan-400/20'
    }
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <Helmet>
        <title>Habilidades - Raul Passos Gardini</title>
        <meta name="description" content="Habilidades técnicas de Raul Passos Gardini em desenvolvimento web" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Habilidades
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Competências técnicas
            </p>
          </motion.div>

          {/* Compact Skills Grid */}
          <div ref={ref} className="max-w-3xl mx-auto space-y-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5
                      }
                    }
                  }}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 ${skill.bgColor} rounded-md flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-blue-400" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                         <div>
                            <span className="font-bold text-white text-base mr-2">{skill.name}</span>
                            <span className="text-xs text-gray-500 hidden sm:inline-block">{skill.level}</span>
                         </div>
                         <span className="font-bold text-blue-400 text-sm">{skill.percentage}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden w-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={controls}
                          variants={{
                            visible: {
                              width: `${skill.percentage}%`,
                              transition: {
                                delay: index * 0.1 + 0.3,
                                duration: 1,
                                ease: 'easeOut'
                              }
                            }
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Compact Categories Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-1">Front-end</h3>
              <p className="text-sm text-gray-400">
                Interfaces modernas e responsivas
              </p>
            </div>
            <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-1">Back-end</h3>
              <p className="text-sm text-gray-400">
                APIs robustas e escaláveis
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HabilidadesPage;