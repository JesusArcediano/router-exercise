import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { startLogout } from "./store/auth/thunks";
const Layout = () => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <>
      <nav className="main_nav">
        <Link to="/home">Home</Link>
        <Link to="/pets">Pets</Link>
        <button
          onClick={onLogout}
        >
          Logout
        </button>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;