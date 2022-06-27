import { HTMLAttributes, PropsWithChildren } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export default function PageContainer({
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <div
      {...rest}
      className="w-full min-h-full bg-slate-50 p-2 rounded-md shadow-md"
    >
      {children}
    </div>
  );
}
