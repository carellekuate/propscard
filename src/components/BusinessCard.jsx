import React from 'react';
import Template2Front from './Templates/Template2Front';
import Template2Back from './Templates/Template2Back';
import Template1Front from '../components/Templates/Template1Front';
import Template1Back from '../components/Templates/Template1Back';
// Importez tous vos templates

const BusinessCard = ({ data, templateId, isFront }) => {
  const templates = {
    template1: {
      front: <Template1Front data={data} />,
      back: <Template1Back data={data} />
    },
    template2: {
      front: <Template2Front data={data} />,
      back: <Template2Back data={data} />
    }
    // Ajoutez tous vos templates ici
  };

  return templates[templateId]?.[isFront ? 'front' : 'back'] || templates.template1.front;
};

export default BusinessCard;