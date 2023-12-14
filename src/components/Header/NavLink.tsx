import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

export function NavLink(props: PropsWithChildren<LinkProps>) {
  return (
    <Link
      {...props}
      className="flex items-center gap-3 py-2 transition-all hover:brightness-75"
    />
  );
}
