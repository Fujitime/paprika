import React from 'react';
import 'animate.css';

const Footer = () => {
  const handleSendMessage = () => {
    const phoneNumber = '6285798133582'; 
    const message = encodeURIComponent('Halo, saya mau pesan paprika.');
  
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <footer className="relative bg-gradient-to-r from-blue-500 via-green-400 to-green-500 text-white py-16">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 w-48 h-48 opacity-30 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00FF7F" d="M26.2,-29.9C38,-27.4,54.5,-25.2,59.3,-17.6C64.2,-9.9,57.4,3.3,48.4,10.9C39.3,18.6,27.9,20.7,19.5,26.6C11,32.5,5.5,42.3,-7,51.9C-19.4,61.4,-38.8,70.8,-45.1,64.2C-51.4,57.5,-44.5,34.9,-42.6,19C-40.7,3.1,-43.7,-6,-43.1,-15.9C-42.6,-25.8,-38.4,-36.5,-30.6,-40.3C-22.9,-44,-11.4,-40.8,-2.1,-37.8C7.2,-34.9,14.4,-32.3,26.2,-29.9Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-48 h-48 opacity-30 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00FF7F" d="M14.9,-29.9C17,-18.9,14.9,-11.5,23.2,-3.4C31.5,4.7,50.2,13.5,55,23.8C59.8,34,50.8,45.7,39.3,44.9C27.8,44.2,13.9,31,4.5,24.8C-4.9,18.7,-9.9,19.6,-20.4,20C-30.8,20.4,-46.8,20.4,-54.5,13.7C-62.3,6.9,-61.9,-6.5,-57.2,-17.8C-52.5,-29.2,-43.5,-38.4,-33.3,-46.8C-23,-55.2,-11.5,-62.7,-2.6,-59.2C6.4,-55.7,12.7,-41,14.9,-29.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
        <p className="text-lg mb-6">
          Jika Anda memiliki pertanyaan atau ingin melakukan pemesanan, jangan ragu untuk menghubungi kami.
        </p>
        <div className="mb-8">
          <button onClick={handleSendMessage} className="text-2xl font-bold bg-gree-500  px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            <span className="sm:text-3xl text-2xl flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.254 18.494l.724.423A7.953 7.953 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355zM8.392 7.308c.134-.01.269-.01.403-.004c.054.004.108.01.162.016c.159.018.334.115.393.249c.298.676.588 1.357.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11c.062.026.126.048.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.158 1.158 0 0 1-.21.302a2.381 2.381 0 0 1-.33.288c-.082.062-.125.09-.125.09a5.063 5.063 0 0 1-.383.22a1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.472 3.472 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1"/>
              </svg>
              WhatsApp: +62 857-9813-3582
            </span>
          </button>
        </div>
        <div className="mt-12 text-gray-200">
          <p className="text-sm">&copy; 2024 HD Paprika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
