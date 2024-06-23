// components/Modal.js
import React from 'react';

const Modal = ({ imageUrl, onClose }) => {
  const handleModalClick = (e) => {
    // Menutup modal hanya jika mengklik di luar area gambar
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 modal-overlay" onClick={handleModalClick}>
      <div className="relative max-w-screen-lg w-full mx-4 overflow-hidden rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white text-2xl focus:outline-none hover:text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img src={imageUrl} alt="Gallery Item" className="object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default Modal;
