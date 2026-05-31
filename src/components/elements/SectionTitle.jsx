export default function SectionTitle({ title }) {
  return (
    <span className='flex items-center mb-5'>
      <span className='shrink-0 pe-4 text-white font-heading dark:text-white text-2xl lg:text-4xl'>
        {" "}
        {title}{" "}
      </span>

      <span className='h-px flex-1 bg-linear-to-l from-transparent to-gray-300 dark:to-gray-600'></span>
    </span>
  );
}
