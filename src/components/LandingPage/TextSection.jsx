import React from 'react';
import 'animate.css';

const TextSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-900 via-green-900 to-red-900 text-white">
      {/* Circle Decoration */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-800 rounded-full animate__animated animate__fadeIn animate__delay-1s"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-800 rounded-full animate__animated animate__fadeIn animate__delay-2s"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-3s">Untuk apa membeli Paprika?</h2>
        <p className="text-lg leading-relaxed animate__animated animate__fadeIn animate__delay-4s">
          Dengan paprika berkualitas premium kami, setiap hidangan Anda menjadi perayaan rasa dan keindahan. Setiap gigitan mempersembahkan harmoni unik antara aroma segar dan rasa yang memikat, menciptakan pengalaman kuliner yang tiada tara. Dari restoran hingga hotel, paprika kami menjadi pilihan utama para koki profesional yang menghargai keaslian dan kualitas.
           Segera temukan paprika kami dan tambahkan sentuhan ke setiap hidangan Anda!
        </p>
      </div>
    </section>
  );
};

export default TextSection;
