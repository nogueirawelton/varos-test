import Image from "next/image";

import logo from "@/../public/img/logo.svg";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { Cart } from "../Global/Icons/Cart";
import { User } from "../Global/Icons/User";
import { Menu } from "../Global/Icons/Menu";
import { MenuHandler } from "../MenuHandler";

const anchors = [
  {
    label: "Produtos",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Conteúdos",
    href: "#",
  },
  {
    label: "Quem Somos",
    href: "#",
  },
];

const external = [
  {
    label: "Assinar Agora",
    href: "#",
    Icon: Cart,
  },
  {
    label: "Entrar",
    href: "#",
    Icon: User,
  },
];

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between gap-12 px-6 lg:px-8 xl:gap-20">
      <Link href="#" aria-label="Ir para o início" className="py-2">
        <Image src={logo} width={100} alt="Varos Logo" />
      </Link>

      <nav className="hidden flex-1 items-center justify-between font-semibold text-app-white lg:flex">
        <div className="flex gap-12 xl:gap-20">
          {anchors.map(({ label, href }) => (
            <NavLink href={href} key={href}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-6">
          {external.map(({ label, href, Icon }) => (
            <NavLink href={href} key={href}>
              <Icon />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      <MenuHandler>
        <button aria-label="Abrir menu" className="py-2 lg:hidden">
          <Menu />
        </button>
      </MenuHandler>
    </header>
  );
}
