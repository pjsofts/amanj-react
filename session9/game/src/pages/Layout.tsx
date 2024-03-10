import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex gap-4 p-4 bg-[#f2f2f2]">
        <Link className="text-[black]" to={"/"}>
          Home
        </Link>
        <Link className="text-[black]" to={"/about"}>
          About
        </Link>
        <Link className="text-[black]" to={"/contact"}>
          Contact
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
