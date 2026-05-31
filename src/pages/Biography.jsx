import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/biography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import TimeLines from "@/components/elements/TimeLines";

export default function Biography() {
  return (
    <>
      <Helmet>
        <title>Biography | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <TimeLines />
    </>
  );
}
