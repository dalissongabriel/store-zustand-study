import { LabelHTMLAttributes, PropsWithChildren } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function InputLabel({
  children,
  ...rest
}: PropsWithChildren<Props>) {
  return (
    <label {...rest} className="block text-gray-700">
      {children}
    </label>
  );
}
