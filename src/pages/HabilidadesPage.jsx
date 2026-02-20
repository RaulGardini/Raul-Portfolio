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
      color: 'from-[#987D7C] to-[#7A6160]',
      bgColor: 'bg-[#987D7C]/20'
    },
    {
      name: 'CSS',
      percentage: 90,
      level: 'Advanced',
      icon: Palette,
      color: 'from-[#B09B9A] to-[#987D7C]',
      bgColor: 'bg-[#B09B9A]/20'
    },
    {
      name: 'JavaScript',
      percentage: 70,
      level: 'Intermediate',
      icon: Braces,
      color: 'from-[#C4AEAC] to-[#987D7C]',
      bgColor: 'bg-[#C4AEAC]/20'
    },
    {
      name: 'C#',
      percentage: 50,
      level: 'Intermediate',
      icon: Box,
      color: 'from-[#D4C0BE] to-[#C4AEAC]',
      bgColor: 'bg-[#D4C0BE]/20'
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

      <div className="min-h-screen bg-gradient-to-br from-[#F5EDE8] via-[#EDE0DA] to-[#F5EDE8] py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#3D2826]">
              Habilidades
            </h1>
            <p className="text-lg text-[#7A6160] max-w-2xl mx-auto">
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
                  className="bg-white/50 backdrop-blur-sm border border-[#987D7C]/20 rounded-lg p-4 hover:border-[#987D7C]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 ${skill.bgColor} rounded-md flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className="text-[#987D7C]" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-bold text-[#3D2826] text-base mr-2">{skill.name}</span>
                          <span className="text-xs text-[#B09B9A] hidden sm:inline-block">{skill.level}</span>
                        </div>
                        <span className="font-bold text-[#987D7C] text-sm">{skill.percentage}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-[#E8D4CE] rounded-full overflow-hidden w-full">
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
            <div className="bg-[#987D7C]/10 border border-[#987D7C]/25 rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#987D7C] mb-1">Front-end</h3>
              <p className="text-sm text-[#7A6160]">
                Interfaces modernas e responsivas
              </p>
            </div>
            <div className="bg-[#C4AEAC]/10 border border-[#C4AEAC]/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#7A6160] mb-1">Back-end</h3>
              <p className="text-sm text-[#7A6160]">
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
