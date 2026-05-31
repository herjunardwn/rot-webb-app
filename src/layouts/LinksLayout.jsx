import { Outlet } from "react-router-dom";

export default function LinksLayout() {
  return (
    <main className='min-h-screen bg-mainBlack text-white'>
      <Outlet />
    </main>
  );
}
