import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="main_nav">
        <Link to="/home">Home</Link>
        <Link to="/pets">Pets</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;