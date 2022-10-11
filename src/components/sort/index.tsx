import { SortableItem } from "./sortableItem";

export { SortableItem };

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function Sortable() {
  const [items] = useState([1, 2, 3]);
  return (
    <DndContext>
      <SortableContext items={items}>{/* ... */}</SortableContext>
    </DndContext>
  );
}
