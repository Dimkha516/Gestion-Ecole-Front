import DataHandler from "../DataHandler";

export const GET_TEACHERS = "GET_TEACHERS";

export const getTeachers = () => {
  return async (dispatch) => {
    try {
      const teachers = await DataHandler.getDatas("/teachers/all");
      dispatch({ type: GET_TEACHERS, payload: teachers.teachers });
    } catch (error) {
      console.error("Erreur lors de la récupération des professeurs :", error);
    }
  };
};
