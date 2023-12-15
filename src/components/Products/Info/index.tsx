"use client";

import * as RadixTabs from "@radix-ui/react-tabs";

import { Tabs } from "./Tabs";
import { Panels } from "./Panels";

export function Info() {
  return (
    <RadixTabs.Root
      className="mt-12 grid gap-8 md:grid-cols-[300px_1fr]"
      defaultValue="carteira-selecao"
    >
      <Tabs />
      <Panels />
    </RadixTabs.Root>
  );
}
