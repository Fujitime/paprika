const Feature = () => {
  return (
    <>
      <section className="relative py-12 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          {/* SVG Background */}
          <svg className="absolute left-0 z-10 transform -translate-x-1/2 -translate-y-1/2 opacity-20 text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0F62FE" d="M26.2,-29.9C38,-27.4,54.5,-25.2,59.3,-17.6C64.2,-9.9,57.4,3.3,48.4,10.9C39.3,18.6,27.9,20.7,19.5,26.6C11,32.5,5.5,42.3,-7,51.9C-19.4,61.4,-38.8,70.8,-45.1,64.2C-51.4,57.5,-44.5,34.9,-42.6,19C-40.7,3.1,-43.7,-6,-43.1,-15.9C-42.6,-25.8,-38.4,-36.5,-30.6,-40.3C-22.9,-44,-11.4,-40.8,-2.1,-37.8C7.2,-34.9,14.4,-32.3,26.2,-29.9Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute right-0 z-10 transform translate-x-1/2 translate-y-1/2 w-full h-full opacity-20 text-blue-800 animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0F62FE" d="M14.9,-29.9C17,-18.9,14.9,-11.5,23.2,-3.4C31.5,4.7,50.2,13.5,55,23.8C59.8,34,50.8,45.7,39.3,44.9C27.8,44.2,13.9,31,4.5,24.8C-4.9,18.7,-9.9,19.6,-20.4,20C-30.8,20.4,-46.8,20.4,-54.5,13.7C-62.3,6.9,-61.9,-6.5,-57.2,-17.8C-52.5,-29.2,-43.5,-38.4,-33.3,-46.8C-23,-55.2,-11.5,-62.7,-2.6,-59.2C6.4,-55.7,12.7,-41,14.9,-29.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            Kemitraan Lokal Kualitas Global
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="animate__animated animate__jackInTheBox">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
                <svg className="w-8 h-8 text-blue-500 lg:w-10 lg:h-10 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-500 ">Produk Unggulan</h3>
              <p className="text-gray-500 ">Paprika dengan produk unggulan, dari bibit paprika terbaik, menghasilkan produk berkualitas.</p>
            </div>
            
            <div className="animate__animated animate__jackInTheBox">
              <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
                <svg className="w-8 h-8 text-blue-500 lg:w-10 lg:h-10 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-500 ">Segar & Berkualitas</h3>
              <p className="text-gray-500 ">Produk paprika dengan kualitas terbaik, dipasarkan dalam keadaan masih segar.</p>
            </div>
            <div className="animate__animated animate__jackInTheBox">
            <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 lg:h-16 lg:w-16 ">
              <svg className="w-8 h-8 text-blue-500 lg:w-10 lg:h-10 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
            </div>
              <h3 className="mb-2 text-xl font-bold text-blue-500 ">Kemitraan dengan Petani Lokal</h3>
              <p className="text-gray-500 ">Kami beroperasi dengan bekerja sama dengan petani lokal untuk menciptakan produk berkualitas terbaik.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
