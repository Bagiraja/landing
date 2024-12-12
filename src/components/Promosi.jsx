import React from "react";


const Features = () => {
    const items = [
        "Hanya 15 Pendaftar Pertama",
        "Diskon Khusus s.d 25 Desember 2024",
        "Diskon 50% untuk pendaftar hari ini saja!"
        
      ];
  return (
    <section id="features" className="py-12 bg-white">
      <h2 className="text-center text-4xl sm:text-4xl font-bold font-poppins mb-8">Promo</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/Group 9.png"
            className="max-w-full h-auto md:max-w-[520px]"
            alt="Program Studi"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-md mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mt-4">Promo Spesial: Pendaftaran Terbatas!</h3>
    
              <div>
    
              <ul className="list-disc list-inside text-gray-700 text-xl mt-5">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;