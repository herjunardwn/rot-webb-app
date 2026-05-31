import { Helmet } from "react-helmet-async";
import banner from "@/assets/banner/discography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import DiscographyList from "@/components/fragments/DiscographyList";

export default function Discography() {
  return (
    <>
      <Helmet>
        <title>Discography | Remember of Today</title>
      </Helmet>
      <BannerPage banner={banner} />
      <DiscographyList />
    </>
  );
}
