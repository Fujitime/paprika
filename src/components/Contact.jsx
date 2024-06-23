import React from 'react';
import 'animate.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    const handleSendMessage = () => {
        const phoneNumber = '6285798133582'; 
        const message = encodeURIComponent('Halo, saya mau pesan paprika.');
    
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };

  return (
    <>
      <Navbar />
      <section className="relative py-16 mt-12">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 z-10 transform -translate-x-1/2 -translate-y-1/2 opacity-20 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0F62FE" d="M26.2,-29.9C38,-27.4,54.5,-25.2,59.3,-17.6C64.2,-9.9,57.4,3.3,48.4,10.9C39.3,18.6,27.9,20.7,19.5,26.6C11,32.5,5.5,42.3,-7,51.9C-19.4,61.4,-38.8,70.8,-45.1,64.2C-51.4,57.5,-44.5,34.9,-42.6,19C-40.7,3.1,-43.7,-6,-43.1,-15.9C-42.6,-25.8,-38.4,-36.5,-30.6,-40.3C-22.9,-44,-11.4,-40.8,-2.1,-37.8C7.2,-34.9,14.4,-32.3,26.2,-29.9Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute right-0 z-10 transform translate-x-1/2 translate-y-1/2 w-full h-full opacity-20 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0F62FE" d="M14.9,-29.9C17,-18.9,14.9,-11.5,23.2,-3.4C31.5,4.7,50.2,13.5,55,23.8C59.8,34,50.8,45.7,39.3,44.9C27.8,44.2,13.9,31,4.5,24.8C-4.9,18.7,-9.9,19.6,-20.4,20C-30.8,20.4,-46.8,20.4,-54.5,13.7C-62.3,6.9,-61.9,-6.5,-57.2,-17.8C-52.5,-29.2,-43.5,-38.4,-33.3,-46.8C-23,-55.2,-11.5,-62.7,-2.6,-59.2C6.4,-55.7,12.7,-41,14.9,-29.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-8 animate__animated animate__fadeInUp">Hubungi Kami</h2>
          <p className="text-lg mb-12 animate__animated animate__fadeInUp animate__delay-1s">Kami siap melayani kebutuhan paprika dan sayuran Anda.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full lg:w-1/2 mb-8 animate__animated animate__fadeInLeft">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.684580546975!2d107.52839087410494!3d-6.808169066587032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e33eee7fe179%3A0x578960f2024e1b2c!2sHD%20paprika!5e0!3m2!1sen!2sid!4v1718621838119!5m2!1sen!2sid" 
                  width="600" 
                  height="450" 
                  style={{ border: 0, width: '100%', height: '450px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-8 animate__animated animate__fadeInRight">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Kontak Kami</h3>
                <p className="text-gray-600 mb-4">Lokasi: Desa Pasirlangu Kecamatan Cisarua, Lembang – Jawa Barat, Indonesia</p>
                <button onClick={handleSendMessage} className="bg-green-500 text-2xl font-bold text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300 mb-4">
                  WhatsApp: +62 857-9813-3582
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
