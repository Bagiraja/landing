import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";  

const BisnisDigital = () => {   
  const navigate = useNavigate();
  const items = [
    "Startup",
    "Technopreneur",
    "Industri perbankan",
    "Membuka toko online",
    "Manajer pemasaran digital",
    "Analis manajemen bisnis",
    "Konsultan bisnis",
    "Perencana bisnis berkelanjutan",
    "Manajer pengembangan bisnis",
    "Konsultan pemasaran digital",
    "Business analyst",
    "Digital marketer",
    "Data analyst",
  ];

  const handleKelebihanClick = () => {
    // Navigate to home page and scroll to Keunggulan section
    navigate('/#keunggulan');
    navigate('/#testimonials');
   
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <section id="BisnisDigital" className="py-12 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-9">
        S1 BISNIS DIGITAL
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/gm8.JPG"
            className="max-w-full h-auto md:max-w-[400px] rounded-xl"
            alt="Program Studi"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-md mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Program Bisnis Digital
              </h3>
              <p className="text-gray-700 mb-4">
                Peserta didik akan mempelajari dan mendapatkan skill dalam
                merancang bisnis yang diolah serta dikembangkan menggunakan
                teknologi digital. Peserta didik akan memiliki keterampilan dan
                pengetahuan untuk menjadi analis, konsultan, dan inovator
                bisnis digital atau bahkan membuat bisnis digital milikmu
                sendiri. Dengan mengembangkan keterampilan, pengetahuan, alat,
                dan teknik yang diperlukan untuk transformasi digital yang
                berkembang pesat di era ini.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Daftar Pilihan Karir</h4>
              <ul className="list-disc list-inside text-gray-700">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default BisnisDigital;