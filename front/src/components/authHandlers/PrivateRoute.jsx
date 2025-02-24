/**
Création d'un composant PrivateRoute qui :
Vérifie si l'utilisateur est authentifié (via le contexte uid)
Redirige vers la page de login si non authentifié
Conserve l'URL tentée pour rediriger après connexion
**/

import { useContext } from "react";
import PropTypes from 'prop-types';
import { UidContext } from "../AppContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const uid = useContext(UidContext);
  const location = useLocation();

  if (!uid) {
    // Redirect to login page but save the attempted URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
