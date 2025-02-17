import { BarChart, Box, Home, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import PropTypes from 'prop-types'


const menuItems = [
    { icon: Home, label: "Tableau de bord", path: "/" },
    { icon: Users, label: "Utilisateurs", path: "/users" },
    { icon: Box, label: "Produits", path: "/products" },
    { icon: BarChart, label: "Statistiques", path: "/stats" },
    { icon: Settings, label: "Paramètres", path: "/settings" },
  ]

const Sidebar = ({activePath = "/"}) => {
    return (
        <aside className="w-64 bg-slate-50 h-[calc(100vh-4rem)] p-4">
            <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-200 transition-colors",
                activePath === item.path && "bg-slate-200 font-medium"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>
        </aside>
    )
}
Sidebar.propTypes = {
  activePath: PropTypes.string
}

export default Sidebar