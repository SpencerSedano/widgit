import { useDroppable } from "@dnd-kit/react";
import type { ReactNode } from "react";

function Droppable({ id, children }: { id: string; children: ReactNode }) {
  const { ref } = useDroppable({
    id,
  });

  return (
    <div className="bg-amber-300" ref={ref} style={{ width: 300, height: 300 }}>
      {children}
    </div>
  );
}

export default Droppable;
