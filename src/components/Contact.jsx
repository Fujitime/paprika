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
    <Navbar/>
    <section className="py-16 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 text-white mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInUp">Hubungi Kami</h2>
          <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">Kami siap melayani kebutuhan paprika dan sayuran Anda.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
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
              <a href="mailto:hdpaprika@hdpaprika.com" className="sm:text-2xl text-l font-bold text-white px-4 py-2 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 transition duration-300">
                hdpaprika@hdpaprika.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactPage;
