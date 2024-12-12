import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl font-bold font-poppins mb-8">Program Studi</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="images/gm7.png"
            className="max-w-full h-auto md:max-w-[550px]"
            alt="Program Studi"
          />
        </div>
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-md mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">S1 BISNIS DIGITAL</h3>
              <p className="text-gray-700 mb-4">
                Peserta didik akan mempelajari dan mendapatkan skill dalam merancang bisnis yang diolah serta dikembangkan menggunakan teknologi digital.
              </p>
              <Link to="/bisnis-digital">
                <button className="bg-blue-800 text-white px-3 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Baca Selengkapnya
                </button>
              </Link>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4">S1 ADMINISTRASI BISNIS INTERNATIONAL</h3>
              <p className="text-gray-700 mb-4">
                Program Studi Administrasi Bisnis Internasional (ABI) merupakan Program Studi dengan jenjang pendidikan Sarjana Terapan.
              </p>
              <Link to="/administrasi-bisnis-internasional">
                <button className="bg-blue-800 text-white px-3 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Baca Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;