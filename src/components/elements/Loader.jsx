import Logo from "/ROT.svg";

export default function Loader() {
  return (
    <div className='flicker fixed inset-0 flex items-center justify-center bg-mainBlack'>
      <div className='flex flex-col items-center'>
        <img
          src={Logo}
          alt='Remember of Today'
          className='w-42 object-contain animate-pulse'
        />

        <div className='flex gap-2'>
          <span className='size-2 animate-ping rounded-full bg-gray-300'></span>
          <span className='size-2 animate-ping rounded-full bg-gray-300 [animation-delay:0.3s]'></span>
          <span className='size-2 animate-ping rounded-full bg-gray-300 [animation-delay:0.6s]'></span>
        </div>
      </div>
    </div>
  );
}
