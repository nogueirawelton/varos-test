import { Form } from "./Form";

export function Contact() {
  return (
    <section className="grid gap-8 pt-24 md:grid-cols-2 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-md text-center md:text-left lg:mx-0 ">
        <h2 className="text-2xl font-bold text-app-gray-100 md:text-4xl">
          Cadastre-se para receber mais informações.
        </h2>

        <p className="mt-4 text-lg font-bold text-app-gray-100">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>

      <div className="flex justify-center md:justify-end">
        <Form />
      </div>
    </section>
  );
}
