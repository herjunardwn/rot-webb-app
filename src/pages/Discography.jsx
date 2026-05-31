import banner from "@/assets/banner/discography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import DiscographyList from "@/components/fragments/DiscographyList";

export default function Discography() {
  return (
    <>
      <BannerPage banner={banner} />
      <DiscographyList />
    </>
  );
}
