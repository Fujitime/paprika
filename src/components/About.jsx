import React from 'react';
import 'animate.css';
import AboutImage from '../../public/paprika1.jpeg';
import Paprika1 from '../../public/1.png';
import Paprika2 from '../../public/2.png';
import Paprika3 from '../../public/3.png';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
        <Navbar/>
      <section className="relative py-12 bg-white mt-16">
      <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute left-0 z-10 transform -translate-x-1/2 -translate-y-1/2  opacity-20 text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0F62FE" d="M26.2,-29.9C38,-27.4,54.5,-25.2,59.3,-17.6C64.2,-9.9,57.4,3.3,48.4,10.9C39.3,18.6,27.9,20.7,19.5,26.6C11,32.5,5.5,42.3,-7,51.9C-19.4,61.4,-38.8,70.8,-45.1,64.2C-51.4,57.5,-44.5,34.9,-42.6,19C-40.7,3.1,-43.7,-6,-43.1,-15.9C-42.6,-25.8,-38.4,-36.5,-30.6,-40.3C-22.9,-44,-11.4,-40.8,-2.1,-37.8C7.2,-34.9,14.4,-32.3,26.2,-29.9Z" transform="translate(100 100)" />
    </svg>
        <svg className="absolute right-0 z-10 transform translate-x-1/2 translate-y-1/2 w-full h-full opacity-20  text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0F62FE" d="M14.9,-29.9C17,-18.9,14.9,-11.5,23.2,-3.4C31.5,4.7,50.2,13.5,55,23.8C59.8,34,50.8,45.7,39.3,44.9C27.8,44.2,13.9,31,4.5,24.8C-4.9,18.7,-9.9,19.6,-20.4,20C-30.8,20.4,-46.8,20.4,-54.5,13.7C-62.3,6.9,-61.9,-6.5,-57.2,-17.8C-52.5,-29.2,-43.5,-38.4,-33.3,-46.8C-23,-55.2,-11.5,-62.7,-2.6,-59.2C6.4,-55.7,12.7,-41,14.9,-29.9Z" transform="translate(100 100)" />
</svg>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate__animated animate__fadeInLeft ">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Tentang Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Kami adalah pemasok paprika yang telah berdiri sejak tahun 2010. Dengan komitmen untuk menyediakan produk berkualitas tinggi, kami menjalin kerjasama erat dengan petani lokal untuk memastikan ketersediaan dan kualitas paprika yang terbaik bagi pelanggan kami.          </p>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-6">
            <img
              src={AboutImage}
              alt="Tentang Kami"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
  <h3 className="text-2xl flex sm:text-3xl font-extrabold text-gray-800 mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
    Visi
  </h3>
  <p className="text-gray-600 mb-8">
    Menjadi perusahaan terdepan dalam penyediaan paprika berkualitas tinggi dengan komitmen kuat terhadap kesejahteraan petani lokal.
  </p>
  <h3 className="flex text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
    Misi
  </h3>
  <ul className="space-y-6 list-disc">
    <li className="flex items-center animate__animated animate__fadeInUp">
      <img src={Paprika1} alt="Paprika 1" className="w-12 h-12 animate-bounce mr-4 transform hover:scale-110 transition duration-300"/>
      <li className="text-gray-600">Mensejahterakan petani lokal dengan memberikan harga yang adil dan layak untuk hasil panen mereka.</li>
    </li>
    <li className="flex items-end animate__animated animate__fadeInUp animate__delay-1s">
      <li className="text-gray-600">Menyediakan produk paprika berkualitas tinggi untuk konsumen dengan harga yang terjangkau dan kompetitif.</li>
      <img src={Paprika2} alt="Paprika 2" className="w-12 h-12 animate-bounce mr-4 transform hover:scale-110 transition duration-300"/>
    </li>
    <li className="flex items-center animate__animated animate__fadeInUp animate__delay-2s">
      <img src={Paprika3} alt="Paprika 3" className="w-12 h-12 animate-bounce mr-4 transform hover:scale-110 transition duration-300"/>
      <li className="text-gray-600">Membangun kemitraan jangka panjang dengan petani untuk memastikan keberlanjutan dan kualitas produk.</li>
    </li>
    <li className="flex items-end animate__animated animate__fadeInUp animate__delay-3s">
      <li className="text-gray-600">Berkontribusi pada pembangunan ekonomi lokal dengan menciptakan lapangan kerja dan peluang usaha di komunitas petani.</li>
      <img src={Paprika1} alt="Paprika 1" className="w-12 h-12 animate-bounce mr-4 transform hover:scale-110 transition duration-300"/>
    </li>
  </ul>
</div>

        </div>
      </div>
    </section>
    <Footer/>
    </>

  );
}

export default About;
