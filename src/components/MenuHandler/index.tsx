"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { X } from "../Global/Icons/X";
import Image from "next/image";

import logo from "@/../public/img/logo.svg";
import Link from "next/link";
import { User } from "../Global/Icons/User";
import { ArrayRight } from "../Global/Icons/ArrayRight";

interface MenuProps {
  children: ReactNode;
}

export function MenuHandler({ children }: MenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-app-black/50" />
        <Dialog.Content className="fixed top-0 z-50 flex h-screen w-full flex-col bg-app-black data-[state=open]:animate-slideRight sm:w-[390px]">
          <div className="flex h-20 items-center justify-between border-b border-app-gray-800 px-6">
            <Image src={logo} width={100} alt="Varos Logo" />
            <Dialog.Close>
              <X />
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-auto px-6 pb-[calc(4rem+50px)] pt-16">
            <div className="flex flex-col gap-5">
              <Link
                href="#"
                className="flex h-12 items-center justify-center gap-4 rounded-md border border-app-gray-100 text-lg font-semibold uppercase text-app-white"
              >
                <User />
                Entrar
              </Link>

              <Link
                href="#"
                className="grid h-12 place-items-center rounded-md border border-app-gray-100 bg-app-green-300 text-lg font-semibold uppercase text-app-black"
              >
                Assinar agora
              </Link>
            </div>

            <div className="mt-10 rounded-xl bg-app-gray-800">
              <div className="flex h-20 items-center border-b border-gray-500 px-8">
                <strong className="text-lg text-app-white">Produtos</strong>
              </div>

              <div className="flex flex-col gap-6 p-8">
                <Link href="  ">
                  <div className="flex items-center justify-between">
                    <strong className="text-semibold text-app-white">
                      Carteiras
                    </strong>

                    <ArrayRight color="#FAFAFA" />
                  </div>

                  <p className="mt-2 text-sm text-app-gray-500">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </Link>

                <Link href="">
                  <div className="flex items-center justify-between">
                    <strong className="text-semibold text-app-white">
                      Cursos
                    </strong>

                    <ArrayRight color="#FAFAFA" />
                  </div>

                  <p className="mt-2 text-sm text-app-gray-500">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </Link>

                <Link href="#">
                  <div className="flex items-center justify-between">
                    <strong className="text-semibold text-app-white">
                      Consultoria
                    </strong>

                    <ArrayRight color="#FAFAFA" />
                  </div>

                  <p className="mt-2 text-sm text-app-gray-500">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="flex h-20 items-center border-b border-app-gray-800 px-10 text-app-white "
              >
                Blog
              </Link>
              <Link
                href="#"
                className="flex h-20 items-center border-b border-app-gray-800 px-10 text-app-white "
              >
                Quem Somos
              </Link>
              <Link
                href="#"
                className="flex h-20 items-center border-b border-app-gray-800 px-10 text-app-white "
              >
                Conteúdos
              </Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
