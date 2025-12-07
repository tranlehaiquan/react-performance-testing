import ListAlert from "@/components/ListAlert";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [enabledMemo, setEnabledMemo] = useState(false);

  return (
    <div>
      <label className="inline-flex items-center gap-2 m-2">
        <input
          type="checkbox"
          checked={enabledMemo}
          onChange={(e) => setEnabledMemo(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-gray-700">Enable Memoization Each Item</span>
      </label>
      <ListAlert memo={enabledMemo} />
    </div>
  );
}
