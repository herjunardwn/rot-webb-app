import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/gallery-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import GalleryList from "@/components/fragments/GalleryList";
import CtaSection from "@/components/fragments/CtaSection";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <GalleryList />
      <CtaSection
        subHeading='Stay Connected'
        heading='MORE MEMORIES?'
        description='More shows. More stories. More memories. Follow us for the latest moments behind the music.'
        url='https://www.instagram.com/rememberoftoday_/'
        buttonText='Follow on Instagram'
      />
    </>
  );
}
