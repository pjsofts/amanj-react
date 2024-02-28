import { Link, useLocation } from "react-router-dom";
import HeaderStyle from "./Header.Style";

const links = [
  {
    title: "Contact",
    pathname: "/contact",
  },
  {
    title: "About",
    pathname: "/about",
  },
  {
    title: "Home",
    pathname: "/",
  },
  {
    title: "Params",
    pathname: "/params",
  },
  {
    title: "Products",
    pathname: "/products",
  },
  {
    title: "Todos",
    pathname: "/todos",
  },
];

const Header = () => {
  let location = useLocation();
  const { pathname } = location;
  const color = "blue";
  return (
    <header>
      {links.map((link, index) => (
        <Link
          key={index}
          className={pathname === link.pathname ? "active" : ""}
          to={link.pathname}
        >
          <div className="bg-red" style={HeaderStyle}>
            {link.title}
          </div>
        </Link>
      ))}
    </header>
  );
};

export default Header;
