import { ReactNode } from "react";
import { Quote } from "../Global/Icons/Quote";

interface CardProps {
  children: ReactNode;
  author: string;
}

export function Card({ children, author }: CardProps) {
  return (
    <blockquote className="text-medium relative flex h-[328px] flex-col justify-center gap-4 rounded-3xl border border-app-gray-800 bg-app-gray-900 px-6 text-app-gray-500 after:absolute after:-inset-2 after:rounded-3xl after:bg-gradient-to-tr after:from-transparent after:via-app-black/80 after:to-app-black group-[&.swiper-slide-active]:after:bg-none lg:max-w-[368px] lg:px-12">
      <Quote />
      <p className="line-clamp-[9]">{children}</p>
      <cite className="text-app-gray-100">{author}</cite>
    </blockquote>
  );
}
