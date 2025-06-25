import { useState } from "react";

import { DragDropProvider } from "@dnd-kit/react";

import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
  const targets = ["A", "B", "C"];
  const [target, setTarget] = useState<string | number | undefined>(undefined);
  const draggable = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        setTarget(event.operation.target?.id);
      }}
    >
      {!target ? draggable : null}

      {targets.map((id) => (
        <Droppable key={id} id={id}>
          {target === id ? draggable : `Droppable ${id}`}
        </Droppable>
      ))}
    </DragDropProvider>
  );
}

export default App;
