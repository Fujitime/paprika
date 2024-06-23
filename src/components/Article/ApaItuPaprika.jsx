import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ApaItuPaprika = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Apa Itu Paprika?</h1>
            <p className="text-gray-700 text-sm mb-4">Dipublikasikan pada 23 Juni 2024</p>
            <img 
              src="https://via.placeholder.com/800x400" 
              alt="Gambar Paprika" 
              className="w-full mb-4 rounded-lg"
            />
            <div className="prose prose-lg max-w-none text-gray-800">
              <p>Paprika adalah buah dari tanaman Capsicum annuum. Buah ini memiliki beragam warna, seperti merah, kuning, hijau, dan bahkan ungu. Paprika sering digunakan dalam masakan untuk menambahkan rasa manis dan warna yang cerah. Selain rasanya yang lezat, paprika juga kaya akan vitamin C, vitamin A, dan berbagai antioksidan yang bermanfaat untuk kesehatan.</p>
              <p>Paprika merah, misalnya, mengandung lebih banyak vitamin C daripada paprika hijau. Paprika kuning dan oranye memiliki rasa yang lebih manis dibandingkan paprika hijau yang cenderung lebih pahit. Dengan variasi warna dan rasa ini, paprika menjadi pilihan populer di banyak masakan di seluruh dunia.</p>
              <p>Menambahkan paprika ke dalam diet harian Anda dapat membantu meningkatkan sistem kekebalan tubuh, menjaga kesehatan kulit, dan meningkatkan penglihatan. Tidak heran jika paprika menjadi salah satu sayuran favorit di banyak rumah tangga.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApaItuPaprika;
