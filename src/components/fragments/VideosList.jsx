import { useState } from "react";
import { videos } from "@/lib/videos";
import FilterTabs from "../elements/FilterTabs";

export default function VideoList() {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "MUSIC VIDEO", "LIVE PERFORMANCE", "MORE"];
  const filterVideos =
    activeTab === "ALL"
      ? videos
      : videos.filter(
          (item) =>
            item.category.toLowerCase() === activeTab.toLocaleLowerCase(),
        );
  return (
    <section
      aria-label='Videos Content'
      className='w-full p-4 md:p-8 container mx-auto px-4 py-10'
    >
      <FilterTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* grid card */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[...filterVideos].map((item) => (
          <div key={item.id} className='mb-10'>
            <p className='text-pink-500 text-center font-body text-xs uppercase tracking-[0.2em]'>
              {item.category}
            </p>
            <h2 className='font-heading text-xl lg:text-2xl text-center tracking-wide mb-6 border-b border-white/10 pb-3'>
              <span className='text-white font-medium text-lg'>
                {item.title}
              </span>
            </h2>
            <iframe
              className='w-full aspect-video rounded-xl'
              src={item.embedUrl}
              title={item.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
