import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RaulGardini', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/raul-gardini-2595712b1/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-md text-[#F5EDE8] py-8 mt-auto border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4C4B8] hover:text-[#E0B896] transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Contact Email */}
          <a
            href="mailto:rap.gardini@gmail.com"
            className="flex items-center space-x-2 text-[#D4C4B8] hover:text-[#E0B896] transition-colors duration-300"
          >
            <Mail size={18} />
            <span className="text-sm">rap.gardini@gmail.com</span>
          </a>

          {/* Copyright */}
          <div className="text-center text-sm text-[#A89888]">
            <p>&copy; {currentYear} Raul Passos Gardini. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
