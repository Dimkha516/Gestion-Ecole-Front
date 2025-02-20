import axios from "axios";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/users/login",
      formData,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "LOGIN_SUCESS", payload: res.data.ConnectedUser });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response?.data?.message || "Erreur de connexion",
    });
  }
};

// Définir l'action de déconnexion
export const logoutUser = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/v1/users/logout", { withCredentials: true })
    .then(() => {
      dispatch({ type: "LOGOUT" });
    })
    .catch((error) => {
      console.log("Erreur de déconnexion:", error);
    });
};
