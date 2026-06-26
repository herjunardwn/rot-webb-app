import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import LinksLayout from "@/layouts/LinksLayout";
import Home from "@/pages/Home";
import Discography from "@/pages/Discography";
import Video from "@/pages/Video";
import Gallery from "@/pages/Gallery";
import Biography from "@/pages/Biography";
import Contact from "@/pages/Contact";
import Links from "@/pages/Links";
import ScrollToTop from "@/components/elements/ScrollToTop.jsx";
import FuzzyText from "@/components/FuzzyText";
import Loader from "@/components/elements/Loader";
import TermsConditions from "./pages/termsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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

        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/discography' element={<Discography />} />
            <Route path='/video' element={<Video />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/terms-and-conditions' element={<TermsConditions />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          </Route>

          <Route element={<LinksLayout />}>
            <Route path='/links' element={<Links />} />
          </Route>

          <Route
            path='*'
            element={
              <div className='flex flex-col items-center justify-center min-h-screen bg-mainBlack'>
                <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
                  404
                </FuzzyText>

                <p className='text-white text-2xl lg:text-4xl mt-4 font-heading'>
                  Not Found
                </p>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
