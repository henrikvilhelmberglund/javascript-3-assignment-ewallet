import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center md:mt-32 bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
        <Outlet />
      </main>
    </>
  );
}
