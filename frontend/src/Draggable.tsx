import { useDraggable } from "@dnd-kit/react";
import type { ReactNode } from "react";

export function Draggable({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const { ref } = useDraggable({
    id,
  });

  return (
    <button
      className="cursor-pointer rounded-lg bg-amber-950 p-4 text-4xl text-white"
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Draggable;
