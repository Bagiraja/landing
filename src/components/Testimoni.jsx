import React from "react";

const Testimoni = () => {
  return (
    <section id="testimonials" className="py-20  bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Testimoni
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Testimoni 1 */}
        <div className="bg-gray-50  p-6 rounded-xl shadow-custom-lg-biru flex flex-col items-center  ">
          <div className="bg-blue-700 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img
              src="images/gm1.JPG"
              alt="Tirta Dhanu Rahman"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className="text-center ">
            <p className="font-semibold font-sans">Tirta Dhanu Rahman</p>
            <p className="text-blue-700">Administrasi Perkantoran</p>
            <p className="text-gray-800 italic mb-4">
              "Tirta Dhanu Rahman, 3 tahun kuliah sambil bekerja di PT Indo Karya Sinergi, merasa employee class fleksibel dan bermanfaat. Kuliah sambil kerja menambah pengetahuan, kedewasaan, dan sikap profesional."
            </p>
          </div>
        </div>

        {/* Testimoni 2 */}
        <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-custom-lg-biru">
          <div className="bg-blue-700 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img
              src="images/gm1.JPG"
              alt="Tirta Dhanu Rahman"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">Tirta Dhanu Rahman</p>
            <p className="text-blue-700">Administrasi Perkantoran</p>
            <p className="text-gray-800 italic mb-4">
              "Tirta Dhanu Rahman, 3 tahun kuliah sambil bekerja di PT Indo Karya Sinergi, merasa employee class fleksibel dan bermanfaat. Kuliah sambil kerja menambah pengetahuan, kedewasaan, dan sikap profesional."
            </p>
          </div>
        </div>

        {/* Testimoni 3 */}
        <div className="bg-white p-6 rounded-lg shadow-custom-lg-biru flex flex-col items-center">
          <div className="bg-blue-700 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img
              src="images/gm1.JPG"
              alt="Tirta Dhanu Rahman"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">Tirta Dhanu Rahman</p>
            <p className="text-blue-700">Administrasi Perkantoran</p>
            <p className="text-gray-800 italic mb-4">
              "Tirta Dhanu Rahman, 3 tahun kuliah sambil bekerja di PT Indo Karya Sinergi, merasa employee class fleksibel dan bermanfaat. Kuliah sambil kerja menambah pengetahuan, kedewasaan, dan sikap profesional."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;