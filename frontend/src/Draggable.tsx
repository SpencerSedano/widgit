import { useDraggable } from "@dnd-kit/core";
import { type ReactNode } from "react";

function Draggable({ children }: { children: ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      style={style}
      className="text-2xl border-4 p-4 cursor-pointer"
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Draggable;
