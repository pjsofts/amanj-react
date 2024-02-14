import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <main>
      <Header />

      <div className="content">
        <Outlet />
      </div>
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
