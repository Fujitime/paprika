import React from 'react';
import 'animate.css';
import Paprika1 from '../../../public/1.png';
import Paprika2 from '../../../public/2.png';
import Paprika3 from '../../../public/3.png';

const PaprikaTypes = () => {
  return (
    <section className="py-16 bg-white  relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0F62FE" d="M26.2,-29.9C38,-27.4,54.5,-25.2,59.3,-17.6C64.2,-9.9,57.4,3.3,48.4,10.9C39.3,18.6,27.9,20.7,19.5,26.6C11,32.5,5.5,42.3,-7,51.9C-19.4,61.4,-38.8,70.8,-45.1,64.2C-51.4,57.5,-44.5,34.9,-42.6,19C-40.7,3.1,-43.7,-6,-43.1,-15.9C-42.6,-25.8,-38.4,-36.5,-30.6,-40.3C-22.9,-44,-11.4,-40.8,-2.1,-37.8C7.2,-34.9,14.4,-32.3,26.2,-29.9Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute right-0 transform translate-x-1/2 translate-y-1/2 opacity-20 text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0F62FE" d="M14.9,-29.9C17,-18.9,14.9,-11.5,23.2,-3.4C31.5,4.7,50.2,13.5,55,23.8C59.8,34,50.8,45.7,39.3,44.9C27.8,44.2,13.9,31,4.5,24.8C-4.9,18.7,-9.9,19.6,-20.4,20C-30.8,20.4,-46.8,20.4,-54.5,13.7C-62.3,6.9,-61.9,-6.5,-57.2,-17.8C-52.5,-29.2,-43.5,-38.4,-33.3,-46.8C-23,-55.2,-11.5,-62.7,-2.6,-59.2C6.4,-55.7,12.7,-41,14.9,-29.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-50">
            Jenis-Jenis Paprika
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Paprika Merah */}
          <div className="relative animate__animated animate__pulse">
            <img src={Paprika1} alt="Paprika Merah" className="w-full h-auto object-cover rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-75"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h3 className="text-3xl font-bold text-white transform -rotate-12">Paprika Merah</h3>
            </div>
          </div>

          {/* Paprika Kuning */}
          <div className="relative animate__animated animate__pulse animate__delay-1s">
            <img src={Paprika3} alt="Paprika Kuning" className="w-full h-auto object-cover rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-green-500 opacity-75"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h3 className="text-3xl font-bold text-white transform rotate-12">Paprika Kuning</h3>
            </div>
          </div>

          {/* Paprika Hijau */}
          <div className="relative animate__animated animate__pulse animate__delay-2s">
            <img src={Paprika2} alt="Paprika Hijau" className="w-full h-auto object-cover rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-75"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h3 className="text-3xl font-bold text-white transform -rotate-12">Paprika Hijau</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaprikaTypes;
