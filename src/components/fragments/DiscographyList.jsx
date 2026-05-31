import { useState } from "react";
import SpotifyEmbed from "@/components/elements/SpotifyEmbed";
import { discography } from "@/lib/discography";
import FilterTabs from "../elements/FilterTabs";

export default function DiscographyList() {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "SINGLE", "EP", "ALBUM"];
  const filterDiscography =
    activeTab === "ALL"
      ? discography
      : discography.filter(
          (item) => item.type.toLowerCase() === activeTab.toLocaleLowerCase(),
        );
  return (
    <section
      aria-label='Discography Content'
      className='w-full p-4 md:p-8 container mx-auto px-4 py-10'
    >
      <FilterTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* grid card */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[...filterDiscography]
          .sort((a, b) => a.year - b.year)
          .map((item) => (
            <div key={item.id} className='mb-10'>
              <h2 className='font-heading text-xl lg:text-2xl uppercase tracking-wide border-b border-white/10 pb-3 mb-4'>
                <span className='text-pink-500'>{item.type}</span>
                <span className='text-white/20 mx-2'>//</span>
                <span className='text-white'>{item.year}</span>
              </h2>
              <SpotifyEmbed embedUrl={item.embedUrl} title={item.title} />
            </div>
          ))}
      </div>
    </section>
  );
}
