import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Paprika1 from '../../../public/11.jpg'; // Ganti dengan path gambar sesuai kebutuhan

const KenapaMembeliPaprikaKami = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16 bg-gray-100 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Kenapa Membeli Paprika Kami?</h1>
            <p className="text-gray-700 text-sm mb-4">Dipublikasikan pada 24 Juni 2024</p>
            <img 
              src={Paprika1}
              alt="Paprika Kami" 
              className="w-full mb-4 rounded-lg"
            />
            <div className="prose prose-lg max-w-none text-gray-800">
              <p><span className="font-bold">Paprika</span> yang kami tawarkan bukan sekadar sayuran biasa. Ini adalah bukti komitmen kami pada kualitas terbaik dan keberlanjutan lingkungan. Setiap paprika berasal dari petani lokal yang berdedikasi, menggunakan metode pertanian organik untuk memastikan keamanan dan kelezatan setiap biji.</p>
              <br />
              <p>Kami mengutamakan kepuasan pelanggan. Layanan prima kami tidak hanya memenuhi kebutuhan harian Anda tetapi juga memberikan fleksibilitas dalam pemenuhan pesanan khusus. Dengan kami, Anda tidak hanya mendapatkan paprika berkualitas, tetapi juga mendukung ekonomi lokal dan pertanian yang berkelanjutan.</p>
              <br />
              <p><span className="italic">Kami percaya bahwa makanan berkualitas dimulai dari tanah yang baik.</span> Dengan memilih paprika kami, Anda ikut serta dalam perjalanan untuk menciptakan masa depan yang lebih berkelanjutan dan sehat. Tiap pembelian Anda membangun fondasi bagi inovasi dan peningkatan layanan kami.</p>
              <div className="mt-8 border-t border-gray-300 pt-4">
                <h2 className="text-2xl font-bold mb-4">Keunggulan Paprika Kami:</h2>
                <ul className="list-disc list-inside">
                  <li><span className="font-bold">Organik dan Ramah Lingkungan</span>: Dipanen dengan metode pertanian organik untuk kualitas terbaik.</li>
                  <li><span className="font-bold">Dukungan untuk Komunitas Lokal</span>: Memberdayakan petani lokal dan mendukung ekonomi lokal.</li>
                  <li><span className="font-bold">Komitmen terhadap Kualitas dan Layanan</span>: Menjamin paprika segar dan layanan pelanggan yang prima.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KenapaMembeliPaprikaKami;
