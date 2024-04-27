import { PropsWithChildren } from "react";
import cx from "classnames";
function Button({
  children,
  onClick,
  success,
  danger,
}: PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  success?: boolean;
  danger?: boolean;
}>) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "bg-secondary text-white px-4 py-2 rounded",
        success && "bg-green-500",
        danger && "bg-red-500"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
