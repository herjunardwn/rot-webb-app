import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "/ROT.svg";
import Home from "@/pages/Home";
import Discography from "@/pages/Discography";
import Merch from "@/pages/Merch";
import Gallery from "@/pages/Gallery";
import Biography from "@/pages/Biography";
import Contact from "@/pages/Contact";
import Links from "@/pages/Links";
import ScrollToTop from "@/components/elements/ScrollToTop.jsx";
import PillNav from "@/components/fragments/PillNav";
import FuzzyText from "@/components/FuzzyText";
import Footer from "@/components/fragments/Footer";
import Loader from "@/components/elements/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <ScrollToTop />
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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/discography' element={<Discography />} />
              <Route path='/biography' element={<Biography />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/merch' element={<Merch />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/links' element={<Links />} />
              <Route
                path='*'
                element={
                  <div className='flex flex-col items-center justify-center min-h-screen'>
                    <FuzzyText
                      baseIntensity={0.2}
                      hoverIntensity={0.5}
                      enableHover
                    >
                      404
                    </FuzzyText>
                    <p className='text-white text-2xl lg:text-4xl mt-4 font-heading'>
                      Not Found
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}
