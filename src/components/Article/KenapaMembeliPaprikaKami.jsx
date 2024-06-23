import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KenapaMembeliPaprikaKami = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Kenapa Membeli Paprika Kami?</h1>
            <p className="text-gray-700 text-sm mb-4">Dipublikasikan pada 24 Juni 2024</p>
            <img 
              src="https://via.placeholder.com/800x400" 
              alt="Paprika Kami" 
              className="w-full mb-4 rounded-lg"
            />
            <div className="prose prose-lg max-w-none text-gray-800">
              <p>Memilih paprika kami berarti Anda mendapatkan kualitas terbaik dengan pelayanan yang prima. Kami bekerja sama dengan petani lokal yang berdedikasi untuk menanam paprika dengan metode organik dan ramah lingkungan. Ini memastikan bahwa setiap paprika yang Anda beli tidak hanya lezat tetapi juga aman untuk dikonsumsi.</p>
              <p>Kami memahami bahwa pelanggan adalah prioritas utama. Oleh karena itu, kami selalu siap untuk memenuhi permintaan Anda, termasuk penyediaan sayuran lain sesuai kebutuhan. Kami bangga menjadi bagian dari komunitas lokal yang mendukung pertanian berkelanjutan dan menyediakan produk segar langsung dari ladang ke meja Anda.</p>
              <p>Dengan membeli dari kami, Anda juga berkontribusi pada kesejahteraan petani lokal dan mendukung praktik pertanian yang baik. Setiap pembelian membantu kami terus berinovasi dan meningkatkan kualitas produk serta layanan kami.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KenapaMembeliPaprikaKami;
