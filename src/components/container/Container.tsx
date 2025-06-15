import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto   px-4 h-full">{children}</div>
  );
};

export default Container;
