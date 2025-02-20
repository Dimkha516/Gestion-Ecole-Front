import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHomePage from "./pages/adminHomePage";
import RespoHomePage from "./pages/RespoHomePage";
import FilieresPage from "./pages/FilieresPage";
import Classes from "./pages/Classes";
import Etudiants from "./pages/Etudiants";
import Agenda from "./pages/Agenda";
import Professeurs from "./pages/Professeurs";
import Cours from "./pages/Cours";
import Presences from "./pages/Presences";
import Evaluations from "./pages/Evaluations";

function App() {
  // Simuler l'utilisateur connecté:
  const [user] = useState({ username: "John Doe" });

  // Vérifer si on est sur la page login:
  const isLoginPage = window.location.pathname === "/login";

  if (isLoginPage) {
    return (
      <LoginPage
        // onLogin={(formData) => {
        //   console.log("Tentative de connexion avec:", formData);
          // Implémentez votre logique d'authentification ici
        // }}
      />
    );
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

        {/* Contenu principal de vos pages */}
        {/* <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Contenu de la page</h1>
        </main> */}
        <main className="flex-1 p-6">
          <Router>
            <Routes>
              <Route path="/adminHomePage" element={<AdminHomePage />} />
              <Route path="/respoHomePage" element={<RespoHomePage />} />
              <Route path="/filieres" element={<FilieresPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/etudiants" element={<Etudiants />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/professeurs" element={<Professeurs />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/presences" element={<Presences />} />
              <Route path="/evaluations" element={<Evaluations/>} />
            </Routes>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
