import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Edit, Trash2, UserPlus } from "lucide-react";
import { DataTable } from "../ui/data-table";
import { useState } from "react";

const StudentsList = () => {
  const students = useSelector((state) => state.studentsReducer);

  // États pour les filtres
  const [selectedFiliere, setSelectedFiliere] = useState("");
  const [selectedNiveau, setSelectedNiveau] = useState("");

  // Liste des filières et niveaux disponibles (pour les options)
  const filieres = [...new Set(students.students?.map((s) => s.filiere))];
  const niveaux = [...new Set(students.students?.map((s) => s.niveau))];

  // Fonction de filtrage
  const filteredStudents = students.students?.filter((student) => {
    return (
      (selectedFiliere === "" || student.filiere === selectedFiliere) &&
      (selectedNiveau === "" || student.niveau === selectedNiveau)
    );
  });

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setSelectedFiliere("");
    setSelectedNiveau("");
  };

  const handleEdit = (userId) => {
    console.log("Éditer l'étudiant:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Supprimer l'étudiant:", userId);
  };

  const columns = [
    {
      accessorKey: "photo",
      header: "Photo",
      cell: ({ row }) => (
        <img
          src={row.original.photo} // Assurez-vous que cette clé est correcte
          alt="Photo de l'étudiant"
          className="h-10 w-10 rounded-full object-cover"
          onError={(e) => (e.target.src = "/default-avatar.png")} // Image par défaut si erreur
        />
      ),
    },
    {
      accessorKey: "matricule",
      header: "Matricule",
    },
    {
      accessorKey: "prenom",
      header: "Prenom",
    },
    {
      accessorKey: "nom",
      header: "Nom",
    },
    {
      accessorKey: "filiere",
      header: "Filiere",
    },
    {
      accessorKey: "niveau",
      header: "Niveau",
    },

    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(row.original._id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDelete(row.original._id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">
          Gestion des étudiants
        </h1>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Ajouter Etudiant
        </Button>
      </div>

      {/* Zone de filtre */}
      <div className="flex gap-4">
        {/* Filtre Filière */}
        <select
          value={selectedFiliere}
          onChange={(e) => setSelectedFiliere(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Toutes les filières</option>
          {filieres.map((filiere) => (
            <option key={filiere} value={filiere}>
              {filiere}
            </option>
          ))}
        </select>

        {/* Filtre Niveau */}
        <select
          value={selectedNiveau}
          onChange={(e) => setSelectedNiveau(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Tous les niveaux</option>
          {niveaux.map((niveau) => (
            <option key={niveau} value={niveau}>
              {niveau}
            </option>
          ))}
        </select>
        {/* Bouton Réinitialiser */}
        <Button
          onClick={resetFilters}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Réinitialiser
        </Button>
      </div>
      <DataTable columns={columns} data={filteredStudents || []} />
    </div>
  );
};

export default StudentsList;
