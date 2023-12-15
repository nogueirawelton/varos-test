import Link from "next/link";
import { Slide } from "./Slide";
import { ArrayRight } from "../Global/Icons/ArrayRight";

import { FactorWallet } from "../Global/Icons/FactorWallet";
import { DividendWallet } from "../Global/Icons/DividendWallet";
import { PyCode } from "../Global/Icons/PyCode";

import * as Feature from "./Feature";

export function Hero() {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2">
      <div className="flex max-w-md flex-col items-center text-center md:block md:max-w-none md:text-left">
        <h1 className="text-4xl font-extrabold text-app-gray-100 md:text-5xl lg:text-6xl">
          Investir de forma mais inteligente passa por aqui.
        </h1>

        <p className="mt-6 text-lg font-semibold text-app-gray-200 md:max-w-md">
          Fazemos de tudo para que você possa conquistar seus sonhos da melhor
          forma possível.
        </p>

        <Link
          href="#"
          className="mt-8 flex w-fit items-center gap-3 rounded-full bg-app-green-700 px-12 py-4 text-lg font-semibold text-app-green-500 transition-all hover:brightness-75"
        >
          Comprar agora
          <ArrayRight color="#00F700" />
        </Link>

        <div className="mt-20 h-20 max-w-md items-center rounded-3xl bg-gradient-to-r from-[#4D5358] to-transparent p-px">
          <div className="grid h-full w-full grid-cols-3 items-center rounded-3xl bg-app-black pl-8">
            <span className="text-lg text-app-gray-500">visto em</span>
            <div className="col-span-2">
              <Slide />
            </div>
          </div>
        </div>
      </div>

      <div className="sr-only md:not-sr-only">
        <div className="flex flex-col gap-20 ">
          <Feature.Root>
            <Feature.Badge>
              <FactorWallet />
            </Feature.Badge>
            <Feature.Label>Carteira FATOR</Feature.Label>
          </Feature.Root>

          <Feature.Root>
            <Feature.Badge>
              <DividendWallet />
            </Feature.Badge>
            <Feature.Label>Carteira de Dividendos</Feature.Label>
          </Feature.Root>

          <Feature.Root>
            <Feature.Badge>
              <PyCode />
            </Feature.Badge>
            <Feature.Label>
              Código
              <span className="text-[#00F0C9]">.py</span>
            </Feature.Label>
          </Feature.Root>
        </div>
      </div>
    </section>
  );
}
