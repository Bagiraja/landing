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
      className="py-12 bg-[rgba(30,64,175,0.75)] relative"
    >
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        {/* Konten Teks - Sekarang di kiri */}
        <div className="w-full md:w-1/2 text-center md:text-center">
          <div className="max-w-md mx-auto">
            {/* Program Studi 1 */}
            <div>
              <h3 className="text-xl font-poppins mb-4 text-white">
                {visibleText}
                <span className="animate-blink">!</span>
              </h3>
            </div>
          </div>
        </div>
        
        {/* Video - Sekarang di kanan */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="images/lp3ivdi.mp4"
            className="max-w-full h-auto md:max-w-[280px] rounded-xl"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Film;
