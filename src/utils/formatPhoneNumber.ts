export function formatPhoneNumber(input: string) {
  if (!input) return "";

  const numericInput = input.replace(/\D/g, "");

  return numericInput
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d)(\d{4})$/, "$1-$2");
}
