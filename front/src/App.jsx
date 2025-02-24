import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
import { useEffect, useMemo, useState } from "react";
import { getUser } from "./actions/user.actions";
import PrivateRoute from "./components/authHandlers/PrivateRoute";
import AuthLayout from "./components/authHandlers/AuthLayout";

function App() {
  const navigate = useNavigate();

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:5000/api/v1/jwt",
          withCredentials: true,
        });
        setUid(JSON.stringify(res.data._id));
        dispatch(getUser(res.data._id));
      } catch (err) {
        console.log("Erreur lors de la récupération du token JWT:", err);
        navigate("/login");
      }
    };
    fetchToken();
  }, [dispatch, navigate]);

  const handleLogout = async () => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/v1/users/logout",
        withCredentials: true,
      });
      console.log("Utilisateur déconnecté");
      setUid(null);
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Erreur lors de la déconnexion:", err);
    }
  };
  const uidContextValue = useMemo(() => ({ uid, setUid }), [uid]);

  return (
    <UidContext.Provider value={uidContextValue}>
      <div className="min-h-screen">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route
            element={
              <PrivateRoute>
                <AuthLayout onLogout={handleLogout} />
              </PrivateRoute>
            }
          >
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
          </Route>

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UidContext.Provider>
  );
}
export default App;
