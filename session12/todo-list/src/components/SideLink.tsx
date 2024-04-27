import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import { PropsWithChildren } from "react";

function SideLink({
  to,
  children,
}: PropsWithChildren<{
  to: string;
}>) {
  const location = useLocation();
  const is_active = location.pathname === to;
  return (
    <Link to={to}>
      <div
        className={cx(
          "flex justify-center items-center h-14 border-b border-gray",
          is_active && "bg-secondary text-white"
        )}
      >
        {children}
      </div>
    </Link>
  );
}

export default SideLink;
