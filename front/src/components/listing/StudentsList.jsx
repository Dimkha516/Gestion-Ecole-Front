import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Edit, Trash2, UserPlus } from "lucide-react";
import { DataTable } from "../ui/data-table";

const StudentsList = () => {
  const students = useSelector((state) => state.studentsReducer);

  const handleEdit = (userId) => {
    console.log("Éditer l'étudiant:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Supprimer l'étudiant:", userId);
  };

  const columns = [
    // {
    //   accessorKey: "photo",
    //   header: "Photo",
    // },
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
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "telephone",
      header: "Téléphone",
    },
    {
      accessorKey: "statut",
      header: "Statut",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.original.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.original.statut}
        </span>
      ),
    },
    {
      accessorKey: "dateInscription",
      header: "Inscription",
      cell: ({ row }) =>
        new Date(row.original.dateInscription).toLocaleDateString("fr-FR"),
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

      <DataTable
        columns={columns}
        data={students.students || []} // Toujours un tableau
      />
    </div>
  );
};

export default StudentsList;
