
import { IconLoader2 } from "@tabler/icons-react";

export default function Spinner({ size = 20, className = "" }) {
  return (
    <IconLoader2
      size={size}
      className={`animate-spin ${className}`}
      aria-hidden="true"
    />
  );
}
