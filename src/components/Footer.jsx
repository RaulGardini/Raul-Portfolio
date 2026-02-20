import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/raulpassosgardini', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/raulpassosgardini', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/raulpassosgardini', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#EDE0DA] text-[#3D2826] py-8 mt-auto border-t border-[#987D7C]/20">
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
                  className="text-[#7A6160] hover:text-[#987D7C] transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Contact Email */}
          <a
            href="mailto:raul@example.com"
            className="flex items-center space-x-2 text-[#7A6160] hover:text-[#987D7C] transition-colors duration-300"
          >
            <Mail size={18} />
            <span className="text-sm">raul@example.com</span>
          </a>

          {/* Copyright */}
          <div className="text-center text-sm text-[#B09B9A]">
            <p>&copy; {currentYear} Raul Passos Gardini. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
