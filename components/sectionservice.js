import React from "react";
import { FaEnvira, FaCodepen, FaDrawPolygon } from "react-icons/fa";

const Service = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-24 px-12 items-center justify-center">
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Kualitas Utama</p>
        <p className="text-gray-600">
          Kami menyediakan paprika berkualitas terbaik untuk kebutuhan bisnis Anda.
        </p>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Harga Bersaing</p>
        <p className="text-gray-600">
          Hemat anggaran dengan penawaran harga yang kompetitif.
        </p>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <FaDrawPolygon className="w-16 h-16 text-amber-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Pelayanan Luar Biasa</p>
        <p className="text-gray-600">
          Dapatkan pesanan Anda dengan cepat dan tepat waktu dan memberikan pelayanan terbaik untuk kepuasan pelanggan.
        </p>
      </div>
    </div>
  );
};

export default Service;
