import { useState } from "react";
import { gallery } from "@/lib/gallery";
import FilterTabs from "@/components/elements/FilterTabs";

export default function GalleryList() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "LIVE", "MEMORIES", "BACKSTAGE"];
  const filterGallery =
    activeTab === "ALL"
      ? gallery
      : gallery.filter(
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
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {[...filterGallery].map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
            className='group relative overflow-hidden rounded-xl'
          >
            <img
              src={item.image}
              alt={`${item.category} ${item.id}`}
              className='w-full h-72 object-cover transition duration-500 group-hover:scale-110'
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300'></div>

            {/* Category */}
            <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-300'>
              <span className='text-white font-heading tracking-wider'>
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='Preview'
            className='max-w-full max-h-[90vh] rounded-lg'
          />
        </div>
      )}
    </section>
  );
}
