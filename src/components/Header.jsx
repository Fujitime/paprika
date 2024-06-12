import React from 'react';

const Header = () => {
    const handleSendMessage = () => {
        const phoneNumber = '6285798133582'; // Ganti dengan nomor WhatsApp tanpa tanda +
        const message = encodeURIComponent('Halo, saya mau pesan paprika.');
    
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };
  return (
    <header className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(../public/paprika2.jpeg)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 space-y-8">
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            HD Paprika
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 drop-shadow-md">
            Sedia Paprika Merah dan Hijau SETIAP HARI!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 drop-shadow-md">
            Supplier Terpercaya Sejak Tahun 2010
          </p>
          <button
                type="button"
                className="animate-bounce my-5 text-white bg-green-600 hover:bg-green-800 rounded-3xl px-8 py-3 text-center transition duration-300 ease-in-out transform hover:scale-105"
                onClick={handleSendMessage}
              >
               <span className="text-3xl flex gap-2 " >
               <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.254 18.494l.724.423A7.953 7.953 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355zM8.392 7.308c.134-.01.269-.01.403-.004c.054.004.108.01.162.016c.159.018.334.115.393.249c.298.676.588 1.357.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11c.062.026.126.048.191.066a.35.35 0 0 0 .367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 0 1 .378-.127c.06.004.121.015.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.158 1.158 0 0 1-.21.302a2.381 2.381 0 0 1-.33.288c-.082.062-.125.09-.125.09a5.063 5.063 0 0 1-.383.22a1.99 1.99 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.448 9.448 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.472 3.472 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a.961.961 0 0 1 .371-.1"/>
               </svg>
                Pesan Sekarang!
               </span>
              </button>
        </div>
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          <div className="flex  no-scrollbar space-x-4 pb-4">
            <img src="../public/1.png" alt="Paprika 1" className="w-1/3 rounded-lg transform hover:scale-105 transition duration-300" />
            <img src="../public/3.png" alt="Paprika 2" className="w-1/3 rounded-lg transform hover:scale-105 transition duration-300" />
            <img src="../public/2.png" alt="Paprika 3" className="w-1/3 rounded-lg transform hover:scale-105 transition duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;