import { ComponentProps } from "react";

import greenRadialGradient from "@/../public/effects/radial-gradient-green.png";
import whiteRadialGradient from "@/../public/effects/radial-gradient-white.png";
import Image from "next/image";

function Badge({ children }: ComponentProps<"div">) {
  return (
    <div className="border-app-gray-700 grid h-[46px] w-[51px] place-items-center rounded-lg border-2">
      {children}
    </div>
  );
}

function Label({ children }: ComponentProps<"span">) {
  return <span className="spacing tracking-wider text-white">{children}</span>;
}

function Root({ children }: ComponentProps<"div">) {
  return (
    <div className="border-app-gray-700 bg-app-gray-900 group relative flex w-fit items-center gap-5 rounded-2xl border-2 px-3 py-2 pr-16 even:ml-12">
      {children}
      <Image
        src={greenRadialGradient}
        alt=""
        className="absolute right-0 -z-10 h-36 translate-x-1/4 group-even:hidden"
      />
      <Image
        src={whiteRadialGradient}
        alt=""
        className="absolute left-0 -z-10 h-36 -translate-x-1/4 group-odd:hidden"
      />
    </div>
  );
}

export { Root, Label, Badge };
