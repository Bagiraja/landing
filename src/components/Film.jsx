import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Film = () => {
  const [visibleText, setVisibleText] = useState('');
  const fullText = "Lebih dari Ratusan Mahasiswa Telah Membuktikan Keberhasilan! Mereka Berhasil Menggapai Impian Pendidikan Tinggi Tanpa Mengorbankan Karir Profesional Mereka. Setiap Semester, Jumlah Mahasiswa yang Sukses Kuliah Sambil Bekerja Terus Bertambah, Menunjukkan Bahwa Pendidikan Tinggi Kini Tidak Lagi Membatasi Aktivitas Profesional Anda!";
  const sectionRef = useRef(null);

  useEffect(() => {
    let currentText = '';
    let index = 0;
    let observer;

    const animateText = () => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setVisibleText(currentText);
        index++;
        setTimeout(animateText, 50); // 50ms delay between characters
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText();
          if (observer) observer.disconnect(); // Stop observing once the animation starts
        }
      });
    };

    observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="features"
      ref={sectionRef}
      className="py-12 bg-white relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        {/* Konten Teks - Sekarang di kiri */}
        <div className="w-full md:w-1/2 text-center md:text-center">
          <div className="max-w-md mx-auto">
            {/* Program Studi 1 */}
            <div>
              <h3 className="text-xl font-poppins mb-4 text-black">
                {visibleText}
                <span className="animate-blink">!</span>
              </h3>
            </div>
          </div>
        </div>
        
        {/* Video - Sekarang di kanan */}
        {/* Video Container */}
        <div className="w-full md:w-1/4">
            <div className="relative group perspective-1000">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-70 transition duration-500"></div>
              
              {/* Video Wrapper */}
              <div className="relative bg-white p-2 rounded-2xl transform-gpu group-hover:scale-102 group-hover:rotate-1 transition-all duration-500">
                <video
                  src="images/lp3ivdi.mp4"
                  className=" rounded-xl shadow-2xl transform-gpu transition-all duration-500"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                  }}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Film;
