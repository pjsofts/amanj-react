import { Link, useLocation } from "react-router-dom";
import cs from "classnames";
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
    <header className="flex justify-between bg-primary">
      {links.map((link, index) => (
        <Link
          key={index}
          className={cs(
            pathname === link.pathname ? "active" : "",
            "m-3 p-3 border-2 border-solid border-red-400 hover:text-[white] hover:bg-[blue]"
          )}
          to={link.pathname}
        >
          <div className="">{link.title}</div>
        </Link>
      ))}
    </header>
  );
};

export default Header;
