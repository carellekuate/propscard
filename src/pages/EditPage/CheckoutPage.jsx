import { useLocation } from 'react-router-dom';
import "./CheckoutPageStyle.css";

export default function CheckoutPage() {
  const location = useLocation();
  const { cardData, format, quantity } = location.state || {};

  const handlePayment = () => {
    alert("Paiement effectué avec succès !");
  };

  if (!cardData) {
    return <p>Aucune donnée trouvée. Retournez à la page précédente.</p>;
  }

  const pricePerCard = 0.50; // Prix d’exemple
  const totalPrice = quantity * pricePerCard;

  return (
    <div className="checkoutContainer">
      <h1>Finalisez votre commande</h1>
      
      <div className="orderSummary">
        <h2>Récapitulatif</h2>
        <p><strong>Nom :</strong> {cardData.name}</p>
        <p><strong>Poste :</strong> {cardData.jobTitle}</p>
        <p><strong>Format :</strong> {format}</p>
        <p><strong>Quantité :</strong> {quantity}</p>
        <p><strong>Total :</strong> {totalPrice.toFixed(2)} €</p>
      </div>

      <div className="paymentForm">
        <button onClick={handlePayment} className="payButton">
          Payer maintenant
        </button>
      </div>
    </div>
  );
}
