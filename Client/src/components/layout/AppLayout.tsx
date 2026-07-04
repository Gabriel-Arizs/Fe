import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-6 md:py-8 pb-24 md:pb-8">
        <Outlet />
      </main>
    </div>
  );
}
