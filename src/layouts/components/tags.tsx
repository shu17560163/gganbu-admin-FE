import { Tag } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useTagContext, useThemeContext } from "../../context";
import { DndContext, useSensors, useSensor, MouseSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";

import { SortableItem } from "../../components/sort";

export default function Tags() {
  const { theme } = useThemeContext();
  const { pathname } = useLocation();
  const { tags, setTags } = useTagContext();
  const navigate = useNavigate();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  );

  function handleDragEnd(event) {
    console.log("drag end");
    const { active, over } = event;
    if (active.id !== over.id) {
      setTags((items) => {
        const oldIndex = items.findIndex((item) => item.path == active.id);
        const newIndex = items.findIndex((item) => item.path == over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div
      className="h-8 bg-white p-0"
      style={{
        borderTop: "1px solid #d6d6d6",
        borderBottom: "1px solid #d6d6d6",
      }}
    >
      <DndContext
        // modifiers={[restrictToHorizontalAxis]}
        sensors={sensors}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          strategy={horizontalListSortingStrategy}
          items={tags.map((item) => ({ ...item, id: item.path }))}
        >
          {/* sortable */}
          <div className="flex items-center ">
            {tags.map((tag, index) => {
              return (
                <SortableItem key={tag.path} id={tag.path}>
                  <Tag
                    key={tag.path}
                    onClick={() => navigate(tag.path)}
                    onClose={() => {
                      const newTags = tags.filter((i) => i.path != tag.path);
                      setTags(newTags);
                      console.log(tags[index].path == pathname, newTags);
                      if (tags[index].path == pathname) {
                        const nextRoute =
                          tags[index + 1]?.path ||
                          newTags[newTags.length - 1]?.path ||
                          "/";
                        navigate(nextRoute);
                      }
                      // 需要跳转。关闭之后，跳转到下一个
                    }}
                    color={pathname == tag.path && theme.primaryColor}
                    closable={!tag.affix}
                    className="m-1 cursor-pointer z-[10001] select-none"
                  >
                    {tag.title}
                  </Tag>
                </SortableItem>
              );
            })}

            {tags.length >= 5 && (
              <Tag
                className=" m-1 cursor-pointer"
                color={theme.primaryColor}
                onClick={() => {
                  const newTags = tags.filter((i) => i?.affix);
                  const newRoute = newTags?.[newTags.length - 1]?.path || "/";
                  setTags(newTags);
                  navigate(newRoute);
                }}
              >
                Close all
              </Tag>
            )}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
