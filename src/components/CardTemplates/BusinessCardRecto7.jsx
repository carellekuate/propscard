import React from 'react';

const BusinessCardRecto7 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-96 h-56 bg-gray-900 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Tab supérieur */}
        <div className="absolute top-0 right-12 w-12 h-6 bg-gray-600 rounded-b-lg"></div>
        
        {/* Bande rouge verticale */}
        <div className="absolute left-6 top-0 w-1 h-full bg-red-500"></div>
        
        {/* Logo et nom de marque */}
        <div className="flex flex-col items-center justify-center h-full text-white">
          <div className="mb-4">
            <div className="w-12 h-12 border-2 border-red-500 rotate-45 relative">
              <div className="w-6 h-6 bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-wider mb-1">BRAND NAME</h1>
          <p className="text-xs text-gray-400 tracking-widest">TAGLINE SPACE</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardRecto7;