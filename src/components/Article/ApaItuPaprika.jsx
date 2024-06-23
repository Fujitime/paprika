import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Paprika3 from '../../../public/12.jpg';

const ApaItuPaprika = () => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-16 bg-gray-100 mt-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">Apa Itu Paprika?</h1>
            <p className="text-gray-700 text-sm mb-4">Dipublikasikan pada 23 Juni 2024</p>
            <img 
              src={Paprika3}
              alt="Gambar Paprika" 
              className="w-full mb-4 rounded-lg"
            />
            <div className="prose prose-lg max-w-none text-gray-800">
              <p><span className="font-bold">Paprika</span> adalah buah dari tanaman <span className="italic">Capsicum annuum</span>. Buah ini memiliki beragam warna, seperti merah, kuning, hijau. Paprika sering digunakan dalam masakan untuk menambahkan rasa manis dan warna yang cerah. Selain rasanya yang lezat, paprika juga kaya akan <span className="italic">vitamin C</span>, <span className="italic">vitamin A</span>, dan berbagai antioksidan yang bermanfaat untuk kesehatan.
              </p>
              <br />
              <p>Paprika merah, misalnya, mengandung lebih banyak <span className="italic">vitamin C</span> daripada paprika hijau. Paprika kuning memiliki rasa yang lebih manis dibandingkan paprika hijau yang cenderung lebih pahit. Dengan variasi warna dan rasa ini, paprika menjadi pilihan populer di banyak masakan di seluruh dunia.</p>
              <br />
              <p>Menambahkan paprika ke dalam diet harian Anda dapat membantu <span className="font-bold">meningkatkan sistem kekebalan tubuh</span>, menjaga kesehatan kulit, dan <span className="italic">meningkatkan penglihatan</span>. Tidak heran jika paprika menjadi salah satu sayuran favorit di banyak rumah tangga.</p>
              <div className="mt-8 border-t border-gray-300 pt-4">
                <h2 className="text-2xl font-bold mb-4">Mengapa Paprika Penting?</h2>
                <ul className="list-disc list-inside">
                  <li><span className="font-bold">Kaya akan nutrisi</span>: Paprika mengandung vitamin dan antioksidan yang penting untuk kesehatan tubuh.</li>
                  <li><span className="font-bold">Versatile di dapur</span>: Dengan berbagai warna dan rasa, paprika bisa digunakan dalam berbagai jenis masakan.</li>
                  <li><span className="font-bold">Mendukung kesehatan</span>: Konsumsi paprika secara teratur dapat memberikan manfaat kesehatan yang signifikan.</li>
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

export default ApaItuPaprika;
