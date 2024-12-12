import React, { useState, useEffect, useRef } from "react";

const Section = () => {
  const [visibleText, setVisibleText] = useState("");
  const whatsappNumber = "+6283173128123"; 
  const whatsappMessage = "Saya ingin mendaftar kelas karyawan";
  const sectionRef = useRef(null);

  const fullText = "Belajar Online Jadi Mudah & Praktis, Mulai Sekarang!";

  useEffect(() => {
    let observer;
    let currentText = "";
    let index = 0;

    const animateText = () => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setVisibleText(currentText);
        index++;
        setTimeout(animateText, 50); // 50ms delay per character
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateText();
          if (observer) observer.disconnect(); // Stop observing after triggering
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

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[url('images/gm4.png')] bg-cover bg-center bg-no-repeat text-white text-start h-[580px] w-full flex items-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 ms-5">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-tight">
            {visibleText}
          </h1>
          <p className="text-base sm:text-lg font-roboto">
            Kuasai skill baru dari rumah dengan <br /> mentor profesional dan materi yang <br /> lengkap.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-300"
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
