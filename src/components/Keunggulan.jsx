import React from "react"; 
 const Keunggulan = () =>
  {   return (     <section id="keunggulan" className="py-20 h-auto lg:h-[580px] relative">    
   <div className="absolute inset-0 bg-blue-800 opacity-75"></div>    
    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 font-poppins relative z-10 text-white">Keunggulan</h2>      
     <div className="max-w-[95%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 relative z-10">   
       <div className="bg-white shadow-custom-lg-biru text-black p-6 rounded-lg flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">      
         <img src="images/graduate-hat (1).png" className="h-20 w-20 mb-4" alt="Graduation Hat" />     
                    
         <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 font-roboto">3x Seminggu</h3>        
            </div>       
            <div className="bg-white shadow-custom-lg-biru text-black p-6 rounded-lg flex flex-col items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">    
              <img src="images/wifi-signal (1).png" className="h-20 w-20 mb-4" alt="Wifi Signal" />       
                <h3 className="text-lg sm:text-xl font-bold font-roboto">Online/Hybrid</h3>     
                      </div>    
                         <div className="bg-white shadow-custom-lg-biru text-black p-6 rounded-lg flex flex-col items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">    
                            <img src="images/save-money (3).png" className="h-20 w-20 mb-4" alt="Save Money" />     
                             <h3 className="text-lg sm:text-xl font-bold font-roboto">Fleksibel</h3>    
                         </div>    
                         <div className="bg-white shadow-custom-lg-biru text-black p-6 rounded-lg flex flex-col items-center  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">    
                           
                            <img src="images/save-money (3).png" className="h-20 w-20 mb-4" alt="Save Money" />     
                             <h3 className="text-lg sm:text-xl font-bold font-roboto">Fleksibel</h3>    
                         </div>    
                               </div>   
                              </section>   ); };   
    export default Keunggulan;