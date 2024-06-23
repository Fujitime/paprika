// pages/GalleryPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryItem from '../components/Gallery/GalleryItem';
import Modal from '../components/Gallery/Modal';
import Paprika1 from '../../public/1.jpg';
import Paprika2 from '../../public/2.jpg';
import Paprika6 from '../../public/6.jpg';
import Paprika7 from '../../public/7.jpg';
import Paprika8 from '../../public/8.jpg';
import Paprika9 from '../../public/9.jpg';
import Paprika10 from '../../public/10.jpg';
import Paprika11 from '../../public/11.jpg';
import Paprika12 from '../../public/12.jpg';

const GalleryPage = () => {
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  const galleryImages = [
    Paprika1,
    Paprika2,
    Paprika6,
    Paprika7,
    Paprika8,
    Paprika9,
    Paprika10,
    Paprika11,
    Paprika12,
  ];

  return (
    <>
      <Navbar />
      <section className="py-16 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((imageUrl, index) => (
              <GalleryItem key={index} imageUrl={imageUrl} onClick={() => openModal(imageUrl)} />
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {modalImageUrl && <Modal imageUrl={modalImageUrl} onClose={closeModal} />}
    </>
  );
};

export default GalleryPage;
