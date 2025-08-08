import "./EditPageStyles.css";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditPage() {
  const navigate = useNavigate();  // <- hook en haut du composant
  const [formData, setFormData] = useState({
    jobTitle: "Codeur",
    name: "User",
    location: "Acacia",
    phone: "000 000 000",
    email: "user@mail.com",
    site: "www.user.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   navigate("/print-options", {
      state: { cardData: formData },
    });
    // Ici vous pourriez ajouter la logique pour sauvegarder les données
  };

  return (
    <div className="editPageContainer">
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
          <div className="formHeader">
            <h1 className="formTitle">Personnalisez votre carte de visite</h1>
            <h4 className="formSubtitle">
              Créez des cartes de visite professionnelles qui vous ressemblent !
              <br /> Modélisez votre carte en remplissant les champs ci-dessous.
            </h4>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Poste
              <input
                type="text"
                name="jobTitle"
                className="formInput"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Développeur Full-Stack"
              />
            </label>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Nom complet
              <input
                type="text"
                name="name"
                className="formInput"
                value={formData.name}
                onChange={handleChange}
                placeholder="Prénom Nom"
              />
            </label>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Localisation
              <input
                type="text"
                name="location"
                className="formInput"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ville, Pays"
              />
            </label>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Téléphone
              <input
                type="tel"
                name="phone"
                className="formInput"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+33 6 12 34 56 78"
              />
            </label>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Email
              <input
                type="email"
                name="email"
                className="formInput"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@exemple.com"
              />
            </label>
          </div>

          <div className="formGroup">
            <label className="formLabel">
              Site web
              <input
                type="url"
                name="site"
                className="formInput"
                value={formData.site}
                onChange={handleChange}
                placeholder="www.monsite.com"
              />
            </label>
          </div>

          <button type="submit" className="formButton"  onClick={handleSubmit}>
            Prévisualisez ma carte
          </button>
        </form>
      </div>

      <div className="cardPreview">
        <div className="cardVerso">
          <div>
            <p className="formDataName">{formData.name}</p>
            <p className="formDataJob">{formData.jobTitle}</p>
            <p className="formDataPhone">{formData.phone}</p>
            <p className="formDataSite">{formData.site}</p>
            <p className="formDataEmail">{formData.email}</p>
            <p className="formDataLocation">{formData.location}</p>
          </div>
          <img src={img1} alt="Verso de la carte" />
        </div>
        <div className="cardRecto">
          <img src={img2} alt="Recto de la carte" />
        </div>
      </div>
    </div>
  );
}
