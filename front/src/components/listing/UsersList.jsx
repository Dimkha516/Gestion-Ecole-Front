import { Button } from "../ui/button";
import { Edit, Trash2, UserPlus } from "lucide-react";
import { DataTable } from "../ui/data-table";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);  


  const handleEdit = (userId) => {
    console.log("Éditer l'utilisateur:", userId);
  };

  const handleDelete = (userId) => {
    console.log("Supprimer l'utilisateur:", userId);
  };

  const columns = [
    {
      accessorKey: "nom",
      header: "Nom",
    },
    {
      accessorKey: "prenom",
      header: "Prenom",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "profil",
      header: "Profile",
    },
    {
      accessorKey: "status",
      header: "Statut",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.original.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "lastConnexion",
      header: "Dernière connexion",
      cell: ({ row }) =>
        new Date(row.original.lastConnexion).toLocaleDateString("fr-FR"),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleEdit(row.original.id)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDelete(row.original.id)}
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
          Gestion des utilisateurs
        </h1>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          Ajouter un utilisateur
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={users.allUsers || []} // Toujours un tableau
        // data={users.allUsers}
        // data={fakeUsers}
        // onSearch={(value) => {
        //   console.log("Recherche:", value);
        //   // Implémentez la recherche côté serveur ici
        // }}
      />
    </div>
  );
};

export default UsersList;
