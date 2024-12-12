import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";  

const ABI = () => {   
  const navigate = useNavigate();
  const items = [
    "Tenaga Ahli Pengembangan Bisnis",
    "Tenaga Ahli Expor Impor",
    "Tenaga Ahli Marketing Perdagangan",
    "Tenaga Ahli Komoditi Bisnis",
    "Wirausahawan",
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
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
       S1 Administrasi Bisnis Internasional
      </h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/gm9.JPG"
            className="max-w-full h-auto md:max-w-[550px] rounded-xl"
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
              Di kampus vokasi LP3I, dalam program studi ini, Kamu akan mempelajari segala sesuatu terkait kegiatan operasional bisnis dan perusahaan. Kamu juga akan mempelajari bagaimana mengelola administrasi bisnis pada perdagangan, baik domestik maupun internasional. Administrasi Bisnis pastinya juga mempelajari segala hal krusial kantor, seperti penyusunan arus kas dan laporan keuangan. Tidak hanya itu, kamu akan mempelajari etika yang baik di lingkungan perusahaan dan bagaimana berkomunikasi secara efektif menggunakan bahasa inggris.
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

export default ABI;