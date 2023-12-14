import * as RadixTabs from "@radix-ui/react-tabs";
import * as Collapsible from "@radix-ui/react-collapsible";

import { FilledArrowRight } from "@/components/Global/Icons/FilledArrowRight";

import { consultancy, courses, wallets } from "./screens";

export function Tabs() {
  return (
    <RadixTabs.List className="flex flex-col gap-4">
      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger className="text-app-gray-100 border-app-gray-800 data-[state=open]:bg-app-gray-800 group flex w-full items-center justify-center gap-4 rounded-full border bg-app-gray-900 py-4 text-lg font-bold transition-all">
          Carteiras
          <FilledArrowRight className="transition-transform group-data-[state=open]:rotate-90" />
        </Collapsible.Trigger>

        <Collapsible.Content className="border-app-gray-800 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mt-4 flex-col items-start overflow-hidden rounded-3xl border bg-app-gray-900 text-white">
          <div className="flex flex-col gap-4 py-8 pl-8">
            {wallets.map(({ value, label, Icon }) => (
              <RadixTabs.Trigger
                key={value}
                value={value}
                className="data-[state=active]:bg-app-gray-800/50 white flex w-fit items-center gap-4 rounded-full px-8 py-4 font-semibold"
              >
                <Icon />
                {label}
              </RadixTabs.Trigger>
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root>
        <Collapsible.Trigger className="text-app-gray-100 border-app-gray-800 data-[state=open]:bg-app-gray-800 group flex w-full items-center justify-center gap-4 rounded-full border bg-app-gray-900 py-4 text-lg font-bold transition-all">
          Cursos
          <FilledArrowRight className="transition-transform group-data-[state=open]:rotate-90" />
        </Collapsible.Trigger>

        <Collapsible.Content className="border-app-gray-800 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mt-4 flex-col items-start overflow-hidden rounded-3xl border bg-app-gray-900 text-white">
          <div className="flex flex-col gap-4 py-8 pl-8">
            {courses.map(({ value, label, Icon }) => (
              <RadixTabs.Trigger
                key={value}
                value={value}
                className="data-[state=active]:bg-app-gray-800/50 white flex w-fit items-center gap-4 rounded-full px-8 py-4 font-semibold"
              >
                <Icon />
                {label}
              </RadixTabs.Trigger>
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root>
        <Collapsible.Trigger className="text-app-gray-100 border-app-gray-800 data-[state=open]:bg-app-gray-800 group flex w-full items-center justify-center gap-4 rounded-full border bg-app-gray-900 py-4 text-lg font-bold transition-all">
          Consultoria
          <FilledArrowRight className="transition-transform group-data-[state=open]:rotate-90" />
        </Collapsible.Trigger>

        <Collapsible.Content className="border-app-gray-800 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mt-4 flex-col items-start overflow-hidden rounded-3xl border bg-app-gray-900 text-white">
          <div className="flex flex-col gap-4 py-8 pl-8">
            {consultancy.map(({ value, label, Icon }) => (
              <RadixTabs.Trigger
                key={value}
                value={value}
                className="data-[state=active]:bg-app-gray-800/50 white flex w-fit items-center gap-4 rounded-full px-8 py-4 font-semibold"
              >
                <Icon />
                {label}
              </RadixTabs.Trigger>
            ))}
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </RadixTabs.List>
  );
}
