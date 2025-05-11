import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-4">
        <Link to="/" className="[&.active]:text-blue-500">
          Home
        </Link>{" "}
        <Link to="/lazy-list" className="[&.active]:text-blue-500">
          Lazy list (react-window)
        </Link>
        <Link to="/pagination-list" className="[&.active]:text-blue-500">
          Pagination list
        </Link>
        <Link to="/information" className="[&.active]:text-blue-500">
          info
        </Link>
      </div>
      <hr />
      <div className="px-2">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
