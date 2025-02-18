import DataHandler from "../DataHandler";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = await DataHandler.getDatas("/users/all");
      dispatch({ type: GET_USERS, payload: allUsers.allUsers });
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };
};
 