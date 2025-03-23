import { useState, useCallback } from "react";
import AlertDemoMemo, { AlertDemo } from "@/SomeAlert";
import { AddItem } from "@/AddItem";

function ListAlert({ memo = false }: { memo?: boolean }) {
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

  return (
    <div className="flex flex-col w-full h-screen p-2">
      <div className="flex-none">
        <AddItem handleClickAdd={handleClickAdd} />
        <p className="mb-2">
          Rendered: <strong>{list.length}</strong> alert(s)
        </p>
      </div>

      <div className="flex-grow overflow-y-auto grid gap-2 content-start">
        {list.map((_) =>
          memo ? (
            <AlertDemoMemo key={_.id} content={_.id.toString()} />
          ) : (
            <AlertDemo key={_.id} content={_.id.toString()} />
          )
        )}
      </div>
    </div>
  );
}

export default ListAlert;
