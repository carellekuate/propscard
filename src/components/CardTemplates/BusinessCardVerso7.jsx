import React from 'react';
import { MapPin, Phone, Mail, Globe, QrCode } from 'lucide-react';

const BusinessCardVerso7 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="w-96 h-56 bg-gray-900 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Tab supérieur */}
        <div className="absolute top-0 right-12 w-12 h-6 bg-gray-600 rounded-b-lg"></div>
        
        {/* Bande rouge verticale */}
        <div className="absolute left-6 top-0 w-1 h-full bg-red-500"></div>
        
        {/* QR Code */}
        <div className="absolute top-4 right-6 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
          <QrCode className="w-12 h-12 text-gray-900" />
        </div>
        
        {/* Contenu principal */}
        <div className="p-8 text-white h-full flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-wider mb-1">YOUR NAME</h2>
            <p className="text-gray-400 text-sm">Graphic Designer</p>
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>123 Dummy, Lorem Ipsum</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>+00 1234 5XXX 9012</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>your email space</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardVerso7;