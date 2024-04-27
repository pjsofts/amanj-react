import SideLink from "../components/SideLink";

function Sidebar() {
  return (
    <aside className="w-80 border-r border-gray">
      <SideLink to="/" >Contact</SideLink>
      <SideLink to="/about">About</SideLink>
      <SideLink to="/contact">Contact</SideLink>
      <SideLink to="/todo">Todo</SideLink>
    </aside>
  );
}

export default Sidebar;
