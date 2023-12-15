import { Info } from "./Info";

export function Products() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-md text-center md:mx-0 md:text-left lg:max-w-xl">
        <h2 className="text-2xl font-bold text-app-gray-100 md:text-4xl">
          Simplifique seus investimentos e alcance seus objetivos
        </h2>

        <p className="mt-4 max-w-md text-lg font-medium text-app-gray-500">
          Conteúdos preparados para trazer mais segurança, independente do seu
          nível.
        </p>
      </div>

      <Info />
    </section>
  );
}
