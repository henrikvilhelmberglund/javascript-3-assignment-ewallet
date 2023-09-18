import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <p>hi I am layout</p>
      <Outlet />
    </>
  );
}
