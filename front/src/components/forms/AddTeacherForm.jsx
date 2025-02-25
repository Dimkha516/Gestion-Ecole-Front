import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important pour l'accessibilité

const AddTeacherForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    email: "",
    cours: "",
  });

  const cours = [
    "Html/css",
    "Javascript",
    "React",
    "Python",
    "PHP",
    "Angular",
    "Base de données",
  ];

  const [filteredCours, setFilteredCours] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionRef = useRef(null);

  useEffect(() => {
    // Gestionnaire de clic pour fermer les suggestions quand on clique ailleurs
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Si le champ modifié est "cours", filtrer les cours
    if (e.target.name === "cours") {
      const filtered = cours.filter((cours) =>
        cours.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredCours(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSelectCours = (selectedCours) => {
    setFormData((prev) => ({ ...prev, cours: selectedCours }));
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose(); // Fermer le modal après soumission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ajouter Enseignant"
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">Ajouter Enseignant</h2>

      {/* Ajout d'une div pour gérer le scroll */}
      <div className="max-h-[70vh] overflow-y-auto px-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="prenom"
            placeholder="Prénom"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <input
            name="nom"
            placeholder="Nom"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />

          <input
            name="telephone"
            type="tel"
            placeholder="Téléphone"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <div className="relative" ref={suggestionRef}>
            <input
              name="cours"
              placeholder="Cours"
              className="border p-2 w-full rounded"
              value={formData.cours}
              onChange={handleChange}
              required
            />

            {showSuggestions && filteredCours.length > 0 && (
              <div className="absolute w-full bg-white border border-gray-200 rounded mt-1 shadow-md z-10">
                {filteredCours.map((cours, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectCours(cours)}
                  >
                    {cours}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Boutons */}
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 px-4 py-2 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

AddTeacherForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddTeacherForm;
