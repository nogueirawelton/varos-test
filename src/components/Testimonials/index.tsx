import Image from "next/image";
import { Slide } from "./Slide";

import group from "@/../public/img/testimonials/group.webp";

export function Testimonials() {
  return (
    <section className="grid grid-cols-1 gap-8 pt-24 md:grid-cols-2 md:pt-32 lg:pt-48">
      <div>
        <div className="mx-auto max-w-md text-center md:mx-0 md:text-left lg:max-w-xl">
          <h2 className="text-2xl font-bold text-app-gray-100 md:text-4xl">
            Didática de verdade
          </h2>

          <p className="mt-4 max-w-md text-lg font-bold text-app-gray-100">
            Garantindo seu aprendizado
          </p>
        </div>

        <div>
          <Slide />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image src={group} alt="Equipe Varos" />

        <div className="mt-20 h-24 w-full max-w-md items-center rounded-3xl bg-gradient-to-r from-[#4D5358] to-transparent p-px">
          <div className="grid h-full w-full grid-cols-3 items-center gap-2 rounded-3xl bg-app-black pl-8 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <strong className="text-app-gray-400 text-xl">+ 1000</strong>
              <span className="text-sm text-app-white">Aulas</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <strong className="text-xl text-app-green-500">4,8/5</strong>
              <span className="text-sm text-app-white">
                Nota média
                <br /> geral das aulas
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <strong className="text-app-gray-400 text-xl">10k +</strong>
              <span className="text-sm text-app-white">Comunidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
