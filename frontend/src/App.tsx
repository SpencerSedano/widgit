import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li className="rounded-lg bg-white p-4 shadow-lg">Menu</li>
        </ul>
      </nav>
      <DndContext>
        <Draggable>Drag me</Draggable>
        <Droppable>Drop here</Droppable>
      </DndContext>
    </>
  );
}

export default App;
