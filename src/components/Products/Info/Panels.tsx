import * as RadixTabs from "@radix-ui/react-tabs";
import Image from "next/image";

import { SelectionWallet } from "@/components/Global/Icons/SelectionWallet";

import graph from "@/../public/img/graph.webp";
import radialGradientWhite2x from "@/../public/effects/radial-gradient-white@2x.png";
import { consultancy, courses, wallets } from "./screens";

export function Panels() {
  return (
    <div className="relative flex justify-end">
      <RadixTabs.Content
        forceMount
        value="carteira-selecao"
        className="absolute h-fit w-full max-w-2xl translate-y-16 opacity-0 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=active]:relative data-[state=active]:translate-y-0 data-[state=active]:opacity-100 data-[state=active]:delay-500"
      >
        <div className="rounded-3xl border border-app-gray-800 bg-app-gray-900 px-4 py-8 pt-8 md:pl-12 md:pr-0 lg:pb-0">
          <h3 className="flex items-center gap-4 px-4 font-semibold text-app-gray-100 md:px-0">
            <SelectionWallet />
            Carteira Seleção
          </h3>

          <div className="mt-12 max-w-sm pr-4">
            <strong className="text-2xl font-semibold text-app-gray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </strong>
            <p className="mt-4 text-app-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>

          <Image
            src={graph}
            alt="Gráfico"
            className="mt-6 block min-h-[240px] rounded-3xl object-cover md:rounded-bl-none"
          />
        </div>

        <Image
          src={radialGradientWhite2x}
          alt=""
          width={450}
          className="absolute bottom-0 right-0 -z-10 hidden translate-x-16 translate-y-16 lg:block"
        />
      </RadixTabs.Content>

      {wallets.slice(1).map(({ value, label, Icon }) => (
        <RadixTabs.Content
          key={value}
          forceMount
          value={value}
          className="absolute h-fit w-full max-w-2xl translate-y-16 opacity-0 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=active]:relative data-[state=active]:translate-y-0 data-[state=active]:opacity-100 data-[state=active]:delay-500"
        >
          <div className="rounded-3xl border border-app-gray-800 bg-app-gray-900 px-4 py-8 md:pl-12">
            <h3 className="flex items-center gap-4 px-4 font-semibold text-app-gray-100 md:px-0">
              <Icon />
              {label}
            </h3>

            <div className="mt-12 max-w-sm pr-4">
              <strong className="text-2xl font-semibold text-app-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </strong>
              <p className="mt-4 text-app-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
              </p>
            </div>
          </div>

          <Image
            src={radialGradientWhite2x}
            alt=""
            width={450}
            className="absolute bottom-0 right-0 -z-10 hidden translate-x-16 translate-y-16 lg:block"
          />
        </RadixTabs.Content>
      ))}

      {courses.map(({ value, label, Icon }) => (
        <RadixTabs.Content
          key={value}
          forceMount
          value={value}
          className="absolute h-fit w-full max-w-2xl translate-y-16 opacity-0 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=active]:relative data-[state=active]:translate-y-0 data-[state=active]:opacity-100 data-[state=active]:delay-500"
        >
          <div className="rounded-3xl border border-app-gray-800 bg-app-gray-900 px-4 py-8 md:pl-12">
            <h3 className="flex items-center gap-4 px-4 font-semibold text-app-gray-100 md:px-0">
              <Icon />
              {label}
            </h3>

            <div className="mt-12 max-w-sm pr-4">
              <strong className="text-2xl font-semibold text-app-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </strong>
              <p className="mt-4 text-app-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
              </p>
            </div>
          </div>

          <Image
            src={radialGradientWhite2x}
            alt=""
            width={450}
            className="absolute bottom-0 right-0  -z-10 hidden translate-x-16 translate-y-16 lg:block"
          />
        </RadixTabs.Content>
      ))}

      {consultancy.map(({ value, label, Icon }) => (
        <RadixTabs.Content
          key={value}
          forceMount
          value={value}
          className="absolute h-fit w-full max-w-2xl translate-y-16 opacity-0 transition-all duration-500 data-[state=inactive]:pointer-events-none data-[state=active]:relative data-[state=active]:translate-y-0 data-[state=active]:opacity-100 data-[state=active]:delay-500"
        >
          <div className="rounded-3xl border border-app-gray-800 bg-app-gray-900 px-4 py-8 md:pl-12">
            <h3 className="flex items-center gap-4 px-4 font-semibold text-app-gray-100 md:px-0">
              <Icon />
              {label}
            </h3>

            <div className="mt-12 max-w-sm pr-4">
              <strong className="text-2xl font-semibold text-app-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </strong>
              <p className="mt-4 text-app-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
              </p>
            </div>
          </div>

          <Image
            src={radialGradientWhite2x}
            alt=""
            width={450}
            className="absolute bottom-0 right-0 -z-10 hidden translate-x-16 translate-y-16 lg:block"
          />
        </RadixTabs.Content>
      ))}
    </div>
  );
}
