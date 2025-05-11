import { useState, useCallback } from "react";
import AlertDemoMemo, { AlertDemo } from "@/components/SomeAlert";
import { AddItem } from "@/AddItem";
import { FixedSizeList } from "react-window";

function ListAlertLazyLoad({ memo = false }: { memo?: boolean }) {
  const [list, setList] = useState<
    {
      id: number;
    }[]
  >([]);

  // Using useCallback to prevent unnecessary re-renders
  const handleClickAdd = useCallback((value: number) => {
    const newItem = new Array(value)
      .fill(0)
      .map((_, i) => ({ id: Math.random() * 1000 + i }));
    setList((prev) => [...newItem, ...prev]);
  }, []);

  const ItemRenderer = ({ index, style }: { index: number; style: any }) => {
    const item = list[index];
    return (
      <div style={style}>
        {memo ? (
          <AlertDemoMemo content={item.id.toString()} id={item.id} />
        ) : (
          <AlertDemo content={item.id.toString()} id={item.id} />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen p-2">
      <div className="flex-none">
        <AddItem handleClickAdd={handleClickAdd} />
        <p className="mb-2">
          Rendered: <strong>{list.length}</strong> alert(s)
        </p>
      </div>

      <div className="flex-grow overflow-y-auto grid gap-2 content-start">
        <FixedSizeList
          height={800}
          width="100%"
          itemCount={list.length}
          itemSize={80}
          overscanCount={5}
        >
          {ItemRenderer}
        </FixedSizeList>
      </div>
    </div>
  );
}

export default ListAlertLazyLoad;
