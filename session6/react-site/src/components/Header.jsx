import { Link, useLocation } from "react-router-dom";

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

  return (
    <header>
      {links.map((link, index) => (
        <Link
          key={index}
          className={pathname === link.pathname ? "active" : ""}
          to={link.pathname}
        >
          {link.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;
