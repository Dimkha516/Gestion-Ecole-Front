import { useSelector } from "react-redux";

const FilieresPage = () => {
  const allFilieres = useSelector((state) => state.filieresReducer);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-slate-900">Page filières</h1>
    </div>
  );
};

export default FilieresPage;
