import { useState, useCallback } from "react";
import AlertDemoMemo, { AlertDemo } from "@/components/SomeAlert";
import { AddItem } from "@/AddItem";
import { List, RowComponentProps, useDynamicRowHeight } from "react-window";

const ItemRenderer = ({
  index,
  style,
  list,
  memo,
}: RowComponentProps<{
  list: any[];
  memo: boolean;
}>) => {
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

  const rowHeight = useDynamicRowHeight({
    defaultRowHeight: 50,
  });

  return (
    <div className="flex flex-col w-full h-screen p-2">
      <div className="flex-none">
        <AddItem handleClickAdd={handleClickAdd} />
        <p className="mb-2">
          Rendered: <strong>{list.length}</strong> alert(s)
        </p>
      </div>

      <List
        rowComponent={ItemRenderer}
        rowCount={list.length}
        rowHeight={rowHeight}
        rowProps={{ list, memo }}
      />
    </div>
  );
}

export default ListAlertLazyLoad;
