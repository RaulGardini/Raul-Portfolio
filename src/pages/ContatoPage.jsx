import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const ContatoPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/raulpassosgardini',
      label: 'GitHub',
      color: 'hover:text-[#7A6160]'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/raulpassosgardini',
      label: 'LinkedIn',
      color: 'hover:text-[#987D7C]'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/raulpassosgardini',
      label: 'Twitter',
      color: 'hover:text-[#B09B9A]'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: 'Mensagem Enviada! ✓',
        description: 'Obrigado pelo contato! Responderei em breve.',
        duration: 5000
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      toast({
        title: 'Erro no Formulário',
        description: 'Por favor, corrija os erros antes de enviar.',
        variant: 'destructive',
        duration: 5000
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato - Raul Passos Gardini</title>
        <meta name="description" content="Entre em contato com Raul Passos Gardini" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#F0E4DF] via-[#F5EDE8] to-[#F0E4DF] py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#3D2826]">
              Contato
            </h1>
            <p className="text-xl text-[#7A6160] max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white/60 backdrop-blur-sm border border-[#987D7C]/20 rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-[#3D2826] mb-6">Envie uma Mensagem</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#6B4F4D] mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/70 border ${
                        errors.name ? 'border-red-400' : 'border-[#C4AEAC]'
                      } rounded-lg text-[#3D2826] focus:outline-none focus:border-[#987D7C] transition-colors duration-300`}
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#6B4F4D] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/70 border ${
                        errors.email ? 'border-red-400' : 'border-[#C4AEAC]'
                      } rounded-lg text-[#3D2826] focus:outline-none focus:border-[#987D7C] transition-colors duration-300`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#6B4F4D] mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 bg-white/70 border ${
                        errors.message ? 'border-red-400' : 'border-[#C4AEAC]'
                      } rounded-lg text-[#3D2826] focus:outline-none focus:border-[#987D7C] transition-colors duration-300 resize-none`}
                      placeholder="Sua mensagem..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#987D7C] hover:bg-[#7A6160] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensagem</span>
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Email Card */}
              <div className="bg-white/60 backdrop-blur-sm border border-[#987D7C]/20 rounded-xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#987D7C]/20 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-[#987D7C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2826]">Email</h3>
                </div>
                <a
                  href="mailto:raul@example.com"
                  className="text-[#987D7C] hover:text-[#7A6160] transition-colors duration-300"
                >
                  raul@example.com
                </a>
              </div>

              {/* Social Media Card */}
              <div className="bg-white/60 backdrop-blur-sm border border-[#987D7C]/20 rounded-xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#3D2826] mb-6">Redes Sociais</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 text-[#6B4F4D] ${social.color} transition-colors duration-300 group`}
                      >
                        <Icon size={24} />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-[#987D7C]/10 border border-[#987D7C]/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#987D7C] mb-4">Disponibilidade</h3>
                <p className="text-[#6B4F4D]">
                  Disponível para projetos freelance e oportunidades de colaboração.
                  Respondo normalmente em até 24 horas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContatoPage;
