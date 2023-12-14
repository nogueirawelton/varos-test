import { ComponentProps } from "react";

export function FilledArrowRight(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.375 0.75L5.6875 5L0.375 9.25L0.375 0.75Z" fill="#F2F4F8" />
    </svg>
  );
}
