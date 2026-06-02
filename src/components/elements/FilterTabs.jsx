export default function FilterTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex lg:justify-center gap-3 mb-14 overflow-x-auto whitespace-nowrap scrollbar-none'>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-5 py-2 rounded-full border transition-all duration-300
            font-heading tracking-wide
            ${
              activeTab === tab
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-transparent text-white border-white/10 hover:border-pink-500"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
