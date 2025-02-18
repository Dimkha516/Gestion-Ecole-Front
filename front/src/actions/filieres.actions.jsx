import DataHandler from "../DataHandler";

export const GET_FILIERES = "GET_FILIERES";

export const getFilieres = () => {
  return async (dispatch) => {
    try {
      const allFilieres = await DataHandler.getDatas("/filieres/all");
      dispatch({ type: GET_FILIERES, payload: allFilieres });
    } catch (error) {
      console.error("Erreur lors de la récupération des filières :", error);
    }
  };
};
