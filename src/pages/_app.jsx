import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* font preload */}
    <div className="hidden">
      <span className="font-DuckCard"></span>
      <span className="font-SvelteCard"></span>
      <span className="font-FishCard"></span>
    </div>
      <div className="w-screen min-h-screen bg-gradient-to-b from-white to-sky-200 dark:bg-sky-900">
        <header>
          <nav className="flex flex justify-center gap-12 items-center bg-slate-100 py-2">
            <Link className="nav-button" to="/">
              Home
            </Link>
            <Link className="nav-button" to="/cards">
              Cards
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center md:mt-10">
          <Outlet />
        </main>
        <footer className="fixed bottom-2 right-2">
          Copyright ©2023 Ankwallet
        </footer>
      </div>
    </>
  );
}
