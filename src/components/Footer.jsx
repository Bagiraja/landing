import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00328E] to-[#0056D2] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <img 
                src="images/logo.png" 
                alt="LP3i Logo" 
                className="w-48 h-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-gray-200 mb-4">
              Kampus Profesional untuk Generasi Profesional
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { 
                  Icon: Facebook, 
                  href: "https://www.facebook.com/lp3i.depok",
                  color: "text-blue-500 hover:text-blue-300" 
                },
                { 
                  Icon: () => <img src="images/tik-tok (1).png" alt="TikTok" className="w-6 h-6" />, 
                  href: "https://www.tiktok.com/@lp3i.depok",
                  color: "hover:opacity-75" 
                },
                { 
                  Icon: Instagram, 
                  href: "https://www.instagram.com/lp3i.depok?igsh=OWF0ZGJnZDRpZGR3",
                  color: "text-pink-500 hover:text-pink-300" 
                },
                { 
                  Icon: Youtube, 
                  href: "https://www.youtube.com/@pljdepok",
                  color: "text-red-500 hover:text-red-300" 
                },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${color}`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
              Navigation
            </h5>
            <ul className="space-y-3">
              {[
                { text: "Keunggulan", to: "/#keunggulan" },
                { text: "Testimoni", to: "/#testimonials" },
                { text: "Program Studi", to: "/#features" }
              ].map(({ text, to }, index) => (
                <li key={index}>
                  <Link 
                    to={to} 
                    className="text-gray-200 hover:text-white hover:underline transition-colors duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
              Hubungi Kami
            </h5>
            <ul className="space-y-3">
              {[
                { 
                  Icon: Phone, 
                  text: "+62 8581-1894-529", 
                  type: "phone" 
                },
                { 
                  Icon: Mail, 
                  text: "info@lp3idepok.ac.id", 
                  type: "email" 
                },
                { 
                  Icon: MapPin, 
                  text: "Jl. Raya Bogor KM38 No.56, Sukamaju, Depok", 
                  type: "address" 
                }
              ].map(({ Icon, text, type }, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <Icon size={20} className="mt-1 text-blue-300" />
                  <span className="text-sm text-gray-200">
                    {type === 'email' ? (
                      <a 
                        href={`mailto:${text}`} 
                        className="hover:underline"
                      >
                        {text}
                      </a>
                    ) : type === 'phone' ? (
                      <a 
                        href={`tel:${text.replace(/\s/g, '')}`} 
                        className="hover:underline"
                      >
                        {text}
                      </a>
                    ) : (
                      text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h5 className="text-xl font-bold mb-4 border-b border-blue-600 pb-2">
              Akreditasi
            </h5>
            <div className="space-y-3 text-sm text-gray-200">
              <p>Terakreditasi oleh BAN-PT</p>
              <p>Terakreditasi Program Studi</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-blue-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} LP3i Depok. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;