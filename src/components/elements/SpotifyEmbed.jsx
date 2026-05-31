export default function SpotifyEmbed({ embedUrl, title = "Spotify" }) {
  return (
    <iframe
      src={embedUrl}
      title={title}
      allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      allowFullScreen
      loading='lazy'
      className='w-full rounded-xl'
      height='152'
    />
  );
}
