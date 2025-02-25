import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Edit, Trash2, UserPlus } from "lucide-react";
import { DataTable } from "../ui/data-table";
import AddTeacherForm from "../forms/AddTeacherForm";
import { useState } from "react";

const TeachersList = () => {
  const teachers = useSelector((state) => state.teachersReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (userId) => {
    console.log("Éditer l'enseignant:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Supprimer l'enseignant:", userId);
  };

  const handleAddTeacher = (newTeacher) => {
    console.log("Nouvel étudiant ajouté :", newTeacher);
    // Ici, tu peux dispatcher une action Redux pour ajouter l’enseignant au state global
  };

  const columns = [
    {
      accessorKey: "photo",
      header: "Photo",
      cell: ({ row }) => (
        <img
          src={row.original.photo} // Assurez-vous que cette clé est correcte
          alt="Étudiant"
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
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <UserPlus className="h-4 w-4" />
          Ajouter Enseignant
        </Button>
      </div>

      <AddTeacherForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTeacher}
      />

      <DataTable columns={columns} data={teachers.teachers || []} />
    </div>
  );
};

export default TeachersList;
