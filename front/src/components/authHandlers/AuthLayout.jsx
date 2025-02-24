/*
Création d'un AuthLayout qui :
Encapsule la structure commune (Navbar + Sidebar)
Utilise Outlet de React Router pour le rendu des routes enfants
*/
import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const AuthLayout = ({ onLogout }) => {
  const location = useLocation();

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div className="flex">
        <Sidebar activePath={location.pathname} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

AuthLayout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AuthLayout;
