import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="sm:max-w-[480px] mx-auto">{children}</div>;
}
