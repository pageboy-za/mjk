import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
}
export default function PostTitle({ children }: TitleProps) {
  return (
    <h1 className=" bville mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
      {children}
    </h1>
  )
}
