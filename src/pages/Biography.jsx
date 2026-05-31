import banner from "@/assets/banner/biography-banner.png";
import BannerPage from "@/components/elements/BannerPage";
import TimeLines from "@/components/elements/TimeLines";

export default function Biography() {
  return (
    <>
      <BannerPage banner={banner} />
      <TimeLines />
    </>
  );
}
