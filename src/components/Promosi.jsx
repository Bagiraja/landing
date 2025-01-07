import React from "react";
import { BadgeCheck } from "lucide-react";

const Features = () => {

  const whatsappNumber = "+6285811894529"; 
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  const items = [
    "Hanya 15 Pendaftar Pertama",
    "Diskon Khusus s.d 25 Desember 2024",
    "Diskon 50% untuk pendaftar hari ini saja!"
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 opacity-35"></div>
              <img
                src="images/1.png"
                className="relative max-w-full h-auto md:max-w-[520px] rounded-lg shadow-xl"
                alt="Program Studi" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="max-w-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 inline-block py-2 rounded-full text-sm font-medium mb-4">
                Promo Terbatas
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Promo Spesial: Pendaftaran Terbatas!
              </h3>

              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <BadgeCheck className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
              <button 
            onClick={handleWhatsAppClick}
            className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 "
          >
            Daftar Sekarang
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;