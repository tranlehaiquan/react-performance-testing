import { useState, useTransition } from "react";
import AlertDemoMemo, { AlertDemo } from "@/components/SomeAlert";
import { AddItem } from "@/AddItem";

function ListAlert({ memo = false }: { memo?: boolean }) {
  const [list, setList] = useState<{ id: number; title: string }[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleClickAdd = (value: number) => {
    const newItem = new Array(value).fill(0).map((_, i) => ({
      id: Math.random() * 100000 + i,
      title: `Item ${Math.random() * 100000 + i}`,
    }));
    startTransition(() => {
      setList((prev) => [...newItem, ...prev]);
    });
  };

  // NOTE:
  // when update the item, ListAlert will re-render all items
  // new handleUpdate will be created every time and memo in AlertDemoMemo will not work
  // so it why we use useCallback to memoize the function
  const handleUpdate = ({ id, title }: { id?: number; title: string }) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title } : item))
    );
  };

  return (
    <div className="flex flex-col w-full h-screen p-2">
      <div className="flex-none">
        <AddItem handleClickAdd={handleClickAdd} />
        <p className="mb-2">
          Total items: <strong>{list.length}</strong>
          {isPending && " (rendering...)"}
        </p>
      </div>

      <div className="flex-grow overflow-y-auto grid gap-2 content-start">
        {list.map((_) =>
          memo ? (
            <AlertDemoMemo
              key={_.id}
              id={_.id}
              title={_.title}
              content={_.id.toString()}
              onUpdate={handleUpdate}
            />
          ) : (
            // NOTE: when list update, add, remove, or update item
            // AlertDemo will re-render all items
            <AlertDemo
              key={_.id}
              id={_.id}
              title={_.title}
              content={_.id.toString()}
              onUpdate={handleUpdate}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ListAlert;
