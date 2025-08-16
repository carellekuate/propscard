import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './TransactionPage.css';
import { generateAndDownloadPDF } from '../../utils/pdfGenerator';

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
    'carte-bancaire': 'Carte Bancaire'
  };

  const displayName = methodNames[method] || method;

  const handlePaymentSuccess = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      console.log('Validation des données:', {
        formData: Object.keys(formData || {}),
        templateId,
        amount
      });

      if (action === 'download') {
        console.log('Tentative de génération PDF...');
        const success = await generateAndDownloadPDF(formData, templateId);
        
        if (!success) {
          throw new Error('La génération du PDF a échoué - voir console pour détails');
        }
      }

      setIsSuccess(true);
      
      setTimeout(() => {
        navigate('/payment-confirmation', {
          state: { 
            amount, 
            method: displayName,
            action,
            formData,
            templateId
          }
        });
      }, 2000);

    } catch (err) {
      console.error('Erreur complète:', {
        error: err,
        formData,
        templateId
      });
      
      setError(`
        Échec du traitement: ${err.message}
        ${action === 'download' 
          ? 'Le téléchargement a échoué.' 
          : 'La commande a échoué.'}
        Veuillez réessayer ou contacter le support.
      `);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 1) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(2);
      }, 2000);
    } else {
      handlePaymentSuccess();
    }
  };

  return (
    <div className="transactionContainer">
      <h1>Paiement par {displayName}</h1>
      <p className="amount">Montant: <strong>{amount?.toLocaleString()} fcfa</strong></p>
      
      {error && (
        <div className="error-message">
          {error}
          <button 
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Réessayer
          </button>
        </div>
      )}
      
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="transactionForm">
          {step === 1 && (
            <div className="formGroup">
              <label>
                Numéro de téléphone:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="6XX XXX XXX"
                  required
                  pattern="[0-9]{9}"
                  title="9 chiffres sans espaces"
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
                  title="6 chiffres reçu par SMS"
                />
              </label>
              <p className="infoText">Un code de confirmation a été envoyé au {phone}</p>
            </div>
          )}
          
          <button 
            type="submit" 
            className="confirmButton"
            disabled={isProcessing}
          >
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
          <p>Votre transaction de {amount?.toLocaleString()} fcfa a été effectuée avec succès.</p>
          {action === 'download' && (
            <p>Votre téléchargement devrait commencer automatiquement...</p>
          )}
          <p>Redirection en cours...</p>
        </div>
      )}
    </div>
  );
}