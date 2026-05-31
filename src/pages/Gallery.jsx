import { useState } from "react";
import BannerPage from "@/components/elements/BannerPage";
import banner from "@/assets/banner/discography-banner.png";
import FilterTabs from "@/components/elements/FilterTabs";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "LIVE", "BACKSTAGE", "MERCH"];
  const filterDiscography =
    activeTab === "ALL"
      ? discography
      : discography.filter(
          (item) => item.type.toLowerCase() === activeTab.toLocaleLowerCase(),
        );
  return (
    <>
      <BannerPage banner={banner} />
      <FilterTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
