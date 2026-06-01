import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-md border px-3 py-2 ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
