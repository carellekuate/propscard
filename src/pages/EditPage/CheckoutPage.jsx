import { useLocation, useNavigate } from 'react-router-dom';
import "./CheckoutPageStyle.css";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardData, format, quantity, totalPrice } = location.state || {};

  const handlePayment = () => {
    // Naviguer vers la page de choix de mode de paiement
    navigate('/payment-method', { 
      state: { 
        totalPrice,
        cardData,
        format,
        quantity
      } 
    });
  };

  if (!cardData) {
    return <p>Aucune donnée trouvée. Retournez à la page précédente.</p>;
  }

  return (
    <div className="checkoutContainer">
      <h1>Finalisez votre commande</h1>
      
      <div className="orderSummary">
        <h2>Récapitulatif</h2>
        <p><strong>Nom :</strong> {cardData.name}</p>
        <p><strong>Poste :</strong> {cardData.jobTitle}</p>
        <p><strong>Format :</strong> {format}</p>
        <p><strong>Quantité :</strong> {quantity}</p>
        <p><strong>Prix par carte :</strong> {cardData?.price?.toLocaleString()} fcfa</p>
        <p><strong>Total :</strong> {totalPrice?.toLocaleString()} fcfa</p>
      </div>

      <div className="paymentForm">
        <button onClick={handlePayment} className="payButton">
          Payer maintenant
        </button>
      </div>
    </div>
  );
}