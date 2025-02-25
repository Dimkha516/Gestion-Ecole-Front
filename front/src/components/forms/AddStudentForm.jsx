import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Important pour l'accessibilité

const AddStudentForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    dateNaissance: "",
    lieuNaissance: "",
    adresse: "",
    sexe: "Masculin",
    telephone: "",
    email: "",
    classe: "",
    tuteur: "",
    telephoneTuteur: "",
  });

  const classes = ["Dév web/mob", "Dev Data", "Ref Dig", "Hakkeuse", "Cyber Secu", "Reseaux", "Designer"];

  const [filteredClasses, setFilteredClasses] = useState([]);
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

    // Si le champ modifié est "classe", filtrer les classes
    if (e.target.name === "classe") {
      const filtered = classes.filter((classe) =>
        classe.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredClasses(filtered);
      setShowSuggestions(true);
    }
  };

  const handleSelectClass = (selectedClass) => {
    setFormData((prev) => ({ ...prev, classe: selectedClass }));
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
      contentLabel="Ajouter un étudiant"
      className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">Ajouter un étudiant</h2>

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
            name="dateNaissance"
            type="date"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <input
            name="lieuNaissance"
            placeholder="Lieu de naissance"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <input
            name="adresse"
            placeholder="Adresse"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <select
            name="sexe"
            className="border p-2 w-full rounded"
            onChange={handleChange}
          >
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
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
              name="classe"
              placeholder="Classe"
              className="border p-2 w-full rounded"
              value={formData.classe}
              onChange={handleChange}
              required
            />

            {showSuggestions && filteredClasses.length > 0 && (
              <div className="absolute w-full bg-white border border-gray-200 rounded mt-1 shadow-md z-10">
                {filteredClasses.map((classe, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectClass(classe)}
                  >
                    {classe}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            name="tuteur"
            placeholder="Tuteur"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />
          <input
            name="telephoneTuteur"
            type="tel"
            placeholder="Téléphone du tuteur"
            className="border p-2 w-full rounded"
            onChange={handleChange}
            required
          />

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
AddStudentForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddStudentForm;
