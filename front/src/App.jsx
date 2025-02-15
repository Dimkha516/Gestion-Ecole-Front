import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  // Simuler l'utilisateur connecté:
  const [user] = useState({ username: "John Doe" });

  // Vérifer si on est sur la page login:
  const isLoginPage = window.location.pathname === "/login";

  if (isLoginPage) {
    return <div>Page de Login</div>; // Remplacer par votre composant Login
  }

  const handleLogout = () => {
    // Déconnexion de l'utilisateur
    console.log("Utilisateur déconnecté ");
  };

  return (
    <div className="min-h-screen">
      <Navbar username={user.username} onLogout={handleLogout} />
      <div className="flex">
        <Sidebar activePath={window.location.pathname} />
        <main className="flex-1 p-6">
          {/* Contenu principal de vos pages */}
          <h1 className="text-2xl font-bold">Contenu de la page</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
