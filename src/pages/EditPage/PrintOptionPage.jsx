import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./PrintOptionPageStyle.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
export default function PrintOptionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardData } = location.state || {};

  const [format, setFormat] = useState('standard');
  const [quantity, setQuantity] = useState(100);

  const handleGoToCheckout = () => {
    navigate("/checkout", {
      state: {
        cardData,
        format,
        quantity
      }
    });
  };

  return (
    <div className="printOptionContainer">
      <h2>Options d'impression</h2>

      {/* Prévisualisation des infos */}
      <div className="cardPreview">
        <p>Nom : {cardData?.name}</p>
        <p>Poste : {cardData?.jobTitle}</p>
        <p>Localisation : {cardData?.location}</p>
        <p>Téléphone : {cardData?.phone}</p>
        <p>Email : {cardData?.email}</p>
        <p>Format sélectionné : {format}</p>
        <p>Quantité : {quantity}</p>
        <p>Prix total : {(quantity * 0.50).toFixed(2)} FCFA</p>
       {/* <img src={cardData?.image || img1} alt="Prévisualisation" className="cardImage" /> */}
       {/* <img src={cardData?.image || img2} alt="Prévisualisation" className="cardImage" /> */}
      </div>

      <div className="optionGroup">
        <label>
          Format :
          <select value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="standard">Standard (85×55 mm)</option>
            <option value="square">Carré (55×55 mm)</option>
            <option value="slim">Slim (85×35 mm)</option>
          </select>
        </label>
      </div>

      <div className="optionGroup">
        <label>
          Quantité :
          <input 
            type="number" 
            min="50" 
            max="1000" 
            step="50"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      </div>

      <button className="paymentButton" onClick={handleGoToCheckout}>
        Passer au paiement
      </button>
    </div>
  );
}
