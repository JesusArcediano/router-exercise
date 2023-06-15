import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { startLogout } from "./store/auth/thunks";
import logoutIcon from './icons/logout.svg';

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
          className="logout__button"
          onClick={onLogout}
        >
          <img src={logoutIcon} alt="Icono Logout" className="logout__icon"/>
          <p>Logout</p>
        </button>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};
export default Layout;