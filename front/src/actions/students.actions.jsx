import DataHandler from "../DataHandler";

export const GET_STUDENTS = "GET_STUDENTS";

export const getStudents = () => {
  return async (dispatch) => {
    try {
      const students = await DataHandler.getDatas("/students/all");
      dispatch({ type: GET_STUDENTS, payload: students.students });
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants :", error);
    }
  };
};
