import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './TransactionPage.css';

export default function TransactionPage() {
  const { method } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, formData, templateId, action } = location.state || {};
  
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const methodNames = {
    'orange-money': 'Orange Money',
    'mtn-money': 'MTN Money',
  };

  const displayName = methodNames[method] || method;

  useEffect(() => {
    let timeoutId;
    if (isSuccess) {
      timeoutId = setTimeout(() => {
        navigate('/confirmation-paiement', {
          state: {
            amount,
            method: displayName,
            action,
            formData: JSON.parse(JSON.stringify(formData || {})),
            templateId
          }
        });
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSuccess, amount, displayName, action, formData, templateId, navigate]);

  const handlePaymentSuccess = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      if (action === 'download') {
        // Import dynamique pour éviter les erreurs de circular import
        const { generatePDFFromSavedHTML } = await import('../../utils/pdfGenerator');
        await generatePDFFromSavedHTML();
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue lors de la génération du PDF');
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setIsProcessing(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setStep(2);
    } else {
      await handlePaymentSuccess();
    }
  };
  
  return (
    <div className="transactionContainer">
      {!isSuccess ? (
        <form className="transactionForm" onSubmit={handleSubmit}>
          <h2>Paiement via {displayName}</h2>
          <p className="amount">Montant: <strong>{amount?.toLocaleString()} fcfa</strong></p>
          
          {error && <div className="error-message">{error}</div>}

          {step === 1 && (
            <div className="formGroup">
              <label>
                Numéro de téléphone:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: 699123456"
                  required
                  pattern="[0-9]{9}"
                />
              </label>
            </div>
          )}

          {step === 2 && (
            <div className="formGroup">
              <label>
                Code de confirmation:
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Entrez le code reçu par SMS"
                  required
                  pattern="[0-9]{6}"
                />
              </label>
              <p className="infoText">Un code a été envoyé au {phone}</p>
            </div>
          )}
          
          <button type="submit" className="confirmButton" disabled={isProcessing}>
            {isProcessing ? (
              <span className="button-loading">
                <span className="spinner"></span>
                {step === 1 ? 'Envoi en cours...' : 'Traitement...'}
              </span>
            ) : (
              step === 1 ? 'Envoyer le code' : 'Confirmer le paiement'
            )}
          </button>
        </form>
      ) : (
        <div className="successMessage">
          <div className="checkmark">✓</div>
          <h2>Paiement réussi !</h2>
          <p>Votre transaction de {amount?.toLocaleString()} fcfa a été effectuée.</p>
          {action === 'download' && <p>Votre téléchargement a été traité.</p>}
          <p>Redirection en cours...</p>
        </div>
      )}
    </div>
  );
}