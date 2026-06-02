import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/video-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import VideosList from "@/components/fragments/VideosList";
import Button from "@/components/elements/Button";
import CtaSection from "@/components/fragments/CtaSection";

export default function Video() {
  return (
    <>
      <Helmet>
        <title>Video | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <VideosList />
      {/* CTA Youtube */}
      <CtaSection
        subHeading='More Content'
        heading='Want More Videos?'
        description='Check out our latest videos and explore more on our YouTube channel.'
        url='https://youtube.com/@rememberoftodayid'
        buttonText='Visit YouTube Channel'
      />
    </>
  );
}
