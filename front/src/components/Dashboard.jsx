import {
  School,
  Users,
  Calendar,
  GraduationCap,
  BookOpen,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { Card } from "./ui/Card";
import PropTypes from 'prop-types';

const DashboardCard = ({
  title,
  count,
  icon: Icon,
  color,
  path,
  description,
}) => {
  return (
    <a href={path} className="block transition-transform hover:scale-105">
      <Card className="p-6 h-full">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <h3 className="text-2xl font-bold mt-2 text-slate-900">{count}</h3>
          </div>
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-4">{description}</p>
      </Card>
    </a>
  );
};

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      title: "Filières",
      count: "12",
      icon: School,
      color: "bg-blue-500",
      path: "/filieres",
      description: "Nombre total de filières actives",
    },
    {
      id: 2,
      title: "Classes",
      count: "24",
      //   icon: ChalkBoard,
      icon: School,
      color: "bg-green-500",
      path: "/classes",
      description: "Répartition des classes par filière",
    },
    {
      id: 3,
      title: "Étudiants",
      count: "450",
      icon: Users,
      color: "bg-purple-500",
      path: "/etudiants",
      description: "Effectif total des étudiants inscrits",
    },
    {
      id: 4,
      title: "Emplois du temps",
      count: "18",
      icon: Calendar,
      color: "bg-yellow-500",
      path: "/agenda",
      description: "Planning des cours par classe",
    },
    {
      id: 5,
      title: "Professeurs",
      count: "32",
      icon: GraduationCap,
      color: "bg-red-500",
      path: "/professeurs",
      description: "Corps enseignant actif",
    },
    {
      id: 6,
      title: "Cours",
      count: "86",
      icon: BookOpen,
      color: "bg-indigo-500",
      path: "/cours",
      description: "Matières enseignées dans l'école",
    },
    {
      id: 7,
      title: "Présences",
      count: "95%",
      icon: UserCheck,
      color: "bg-teal-500",
      path: "/presences",
      description: "Taux de présence moyen",
    },
    {
      id: 8,
      title: "Eval./Examens",
      count: "78%",
      icon: TrendingUp,
      color: "bg-orange-500",
      path: "/evaluations",
      description: "Taux de réussite moyen",
    },
  ];
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
        <p className="text-slate-600 mt-2">
          Vue d&apos;ensemble de l&apos;établissement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <DashboardCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Dashboard;
