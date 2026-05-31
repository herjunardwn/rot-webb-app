import { Outlet } from "react-router-dom";
import PillNav from "@/components/fragments/PillNav";
import Footer from "@/components/fragments/Footer";
import logo from "/ROT.svg";

export default function MainLayout() {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <header className='sticky top-0 z-50 bg-mainBlack/60 backdrop-blur-sm shadow'>
          <PillNav
            logo={logo}
            logoAlt='ROT Logo'
            items={[
              { label: "Home", href: "/" },
              { label: "Discography", href: "/discography" },
              { label: "Biography", href: "/biography" },
              { label: "Video", href: "/video" },
              { label: "Gallery", href: "/gallery" },
            ]}
            activeHref='/'
            className='custom-nav'
            ease='power2.easeOut'
            baseColor='#ff4f8b'
            pillColor='#ffffff'
            hoveredPillTextColor='#ffffff'
            pillTextColor='#0d0d0d'
            theme='light'
            initialLoadAnimation={false}
          />
        </header>
        <main className='flex-1 bg-mainBlack text-white'>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
