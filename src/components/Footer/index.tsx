import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/img/logo-alt.svg";

export function Footer() {
  return (
    <footer className="pb-16 pt-24 md:pt-32 lg:pt-48">
      <div className="flex flex-col gap-y-8 md:gap-y-16 lg:flex-row lg:justify-between">
        <div>
          <Image src={logo} alt="Varos Logo" />
        </div>

        <div className="flex flex-col gap-2 text-app-gray-100 md:hidden lg:mt-0">
          <span>VAROS 2023</span>
          <span>Todos os direitos reservados</span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 text-app-gray-100 md:mt-0 md:grid-cols-4 lg:grid-cols-[repeat(4,180px)]">
          <div className="flex flex-col gap-6">
            <strong className="text-xl">Cursos</strong>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Valuation do Zero ao Avançado 2.0
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Código.py
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Minicurso Reels
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Enciclopédia de FII
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <strong className="text-xl">Carteiras</strong>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira FATOR
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira Seleção
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira Essencial
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira Small Caps
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira Dividendos
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Carteira de FIIs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <strong className="text-xl">Sobre</strong>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Quem somos
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <strong className="text-xl">Redes Sociais</strong>

            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="underline-offset-2 hover:underline">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 hidden flex-col gap-2 text-app-gray-100 md:flex lg:mt-0">
        <span>VAROS 2023</span>
        <span>Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
