import { Home, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Tableau de bord", path: "/respoHomePage" },
  { icon: Users, label: "Utilisateurs", path: "/adminHomePage" },
];

// const Sidebar = ({ activePath = "/" }) => {
  const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <aside className="w-64 bg-slate-50 h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex w-full items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-200 transition-colors",
                // activePath === item.path && "bg-slate-200 font-medium"
                location.pathname === item.path && "bg-slate-200 font-medium"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
Sidebar.propTypes = {
  activePath: PropTypes.string,
};

export default Sidebar;
