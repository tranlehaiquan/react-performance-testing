import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback, useTransition } from "react";
import AlertDemoMemo from "@/components/SomeAlert";
import { AddItem } from "@/AddItem";

export const Route = createFileRoute("/pagination-list")({
  component: RouteComponent,
});

function ListAlertPagination() {
  const [list, setList] = useState<{ id: number; title: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useTransition;
  const itemsPerPage = 50;

  const handleClickAdd = useCallback(
    (value: number) => {
      let totalItems = list.length + value;
      const newItem = new Array(value)
        .fill(0)
        .map((_, i) => ({
          id: Math.random() * 1000 + i,
          title: `Item ${--totalItems}`,
        }));
      setList((prev) => [...newItem, ...prev]);
      setCurrentPage(1);
    },
    [list]
  );

  // Calculate current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  return (
    <div className="flex flex-col w-full h-screen p-2">
      <div className="flex-none">
        <AddItem handleClickAdd={handleClickAdd} />
        <p className="mb-2">
          Total: <strong>{list.length}</strong> alert(s) | Page {currentPage} of{" "}
          {totalPages || 1}
        </p>
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto grid gap-2 content-start">
        {currentItems.map((_) => (
          <AlertDemoMemo key={_.id} content={_.id.toString()} title={_.title} />
        ))}
      </div>
    </div>
  );
}

function RouteComponent() {
  return <ListAlertPagination />;
}
