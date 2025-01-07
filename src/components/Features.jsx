import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Globe, BookOpen, Users, Sparkles, Star } from "lucide-react";

const Features = () => {
  const programs = [
    {
      title: "S1 BISNIS DIGITAL",
      description: "Peserta didik akan mempelajari dan mendapatkan skill dalam merancang bisnis yang diolah serta dikembangkan menggunakan teknologi digital.",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "/bisnis-digital"
    },
    {
      title: "S1 ADMINISTRASI BISNIS INTERNATIONAL",
      description: "Program Studi Administrasi Bisnis Internasional (ABI) merupakan Program Studi dengan jenjang pendidikan Sarjana Terapan.",
      icon: <Globe className="w-6 h-6" />,
      link: "/administrasi-bisnis-internasional"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Kelas Karyawan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-blue-900">
            Program Studi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-40 blur-2xl group-hover:scale-150 transition-transform duration-1000 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-40 blur-2xl group-hover:scale-150 transition-transform duration-1000 animate-pulse delay-150"></div>
              
              {/* Floating elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 animate-float">
                  <Star className="w-6 h-6 text-blue-400 transform rotate-45" />
                </div>
                <div className="absolute bottom-10 right-10 animate-float-delayed">
                  <Star className="w-4 h-4 text-blue-300 transform -rotate-45" />
                </div>
              </div>
              
              {/* Main image container */}
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                
                {/* Image wrapper with reflection effect */}
                <div className="relative bg-white rounded-2xl p-1 overflow-hidden">
                  <div className="relative rounded-xl overflow-hidden">
                  <img
  src="images/Group 10 (1).png"
  style={{ maxWidth: '80%' }}
  className="h-auto mx-auto transform group-hover:scale-105 transition-transform duration-700"
  alt="Program Studi"
/>
                    {/* Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>

                {/* Enhanced floating badges */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <BookOpen className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow-xl transform -rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110">
                  <Users className="w-6 h-6 text-white animate-pulse" />
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-blue-600"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-blue-600"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                    <div className="text-white">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {program.title}
                  </h3>
                </div>

                <p className="text-blue-800 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <Link 
                  to={program.link}
                  className="inline-block w-full sm:w-auto"
                >
                  <div className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                    Baca Selengkapnya
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;