import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Header from "../components/header";
export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Header />

      <div className="my-32 w-[90%] max-w-[1440px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}
