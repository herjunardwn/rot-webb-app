import { Outlet } from "react-router-dom";
import bg from "@/assets/bg-footer-2.webp";

export default function LinksLayout() {
  return (
    <main className='min-h-screen'>
      <Outlet />
    </main>
  );
}
