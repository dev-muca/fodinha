import { ReactNode } from "react";

export default function Title({ text }: { text: String | ReactNode }) {
  return (
    <>
      <h1 className="w-full text-center text-2xl font-medium mt-8 text-white">
        {text}
      </h1>
      <hr className="mt-8" />
    </>
  );
}
