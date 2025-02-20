import DataHandler from "../DataHandler";

export const GET_STATISTICS = "GET_STATISTICS";

export const getStatistics = () => {
  return async (dispatch) => {
    try {
      const statistics = await DataHandler.getDatas("/statistics/all");
      dispatch({ type: GET_STATISTICS, payload: statistics });
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques :", error);
    }
  };
};
