import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// BrowserRouter as Router,
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import axios from "axios";
import { UidContext } from "./components/AppContext";
import LoginPage from "./pages/login";
import NotFound from "./pages/Notfound";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "./actions/user.actions";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideLayoutPaths = ["/login"]; // Ajoutez ici d'autres chemins si nécessaire
  const isLayoutHidden = hideLayoutPaths.includes(location.pathname);

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: "http://localhost:5000/api/v1/jwt",
        withCredentials: true,
      })
        .then((res) => {
          setUid(res.data);
          console.log(uid);
          
        })
        .catch((err) =>
          console.log("Erreur lors de la récupération du token JWT:", err)
        );
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, []);
  // }, [uid, dispatch]);

  const handleLogout = async () => {
    await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/users/logout",
      withCredentials: true,
    }).then(() => {
      console.log("Utilisateur déconnecté ");
      setUid(null);
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    });
  };
  return (
    <UidContext.Provider value={uid}>
      <div className="min-h-screen">
        {!isLayoutHidden && <Navbar onLogout={handleLogout} />}
        <div className="flex">
          {!isLayoutHidden && <Sidebar activePath={location.pathname} />}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/adminHomePage" element={<AdminHomePage />} />
              <Route path="/respoHomePage" element={<RespoHomePage />} />
              <Route path="/filieres" element={<FilieresPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/etudiants" element={<Etudiants />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/professeurs" element={<Professeurs />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/presences" element={<Presences />} />
              <Route path="/evaluations" element={<Evaluations />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </UidContext.Provider>
  );
}
export default App;
