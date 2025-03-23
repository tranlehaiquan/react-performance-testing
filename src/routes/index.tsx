import ListAlert from "@/components/ListAlert";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      <div>
        Memo false
        <ListAlert />
      </div>
      <div>
        Memo true
        <ListAlert memo />
      </div>
    </div>
  );
}
