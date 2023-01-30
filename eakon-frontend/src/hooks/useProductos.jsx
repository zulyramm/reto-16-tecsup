import { useSelector } from "react-redux";

const useProductos = () => {
  return (useSelector(state => state.productos));
};

export default useProductos;