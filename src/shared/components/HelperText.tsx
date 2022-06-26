import { ReactNode } from "react";

export default function HelperText({ children }: { children: ReactNode }) {
  return <span className="text-sm text-red-500 font-semibold">{children}</span>;
}
