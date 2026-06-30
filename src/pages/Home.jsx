import { Helmet } from "react-helmet-async";
import BannerTop from "@/components/fragments/BannerTop";
import LatestRelease from "@/components/fragments/LatestRelease";
import MusicVideo from "@/components/fragments/MusicVideo";
import AnniversaryCta from "@/components/fragments/AnniversaryCta";
import PopularTracks from "@/components/fragments/PopularTracks";
import ShowEvents from "@/components/fragments/ShowEvents";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Remember of Today</title>

        <meta
          name='description'
          content='Official website of Remember of Today.'
        />

        <meta property='og:title' content='Remember of Today' />

        <meta
          property='og:description'
          content='Official website of Remember of Today.'
        />

        <meta
          property='og:image'
          content='https://rememberoftoday.vercel.app/og-image.webp'
        />

        <meta property='og:url' content='https://rememberoftoday.vercel.app' />

        <meta property='og:type' content='website' />
      </Helmet>
      {/* banner */}
      <BannerTop />
      {/* highlight new video release */}
      <MusicVideo
        title='Selayaknya | Official Music Video'
        videoTitle='Selayaknya Official Music Video'
        src='https://www.youtube.com/embed/AZo9FHtNFRU?si=iPIjvZKYmOFuZubg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen'
      />
      {/* latest release */}
      <LatestRelease />
      {/* CTA anniversary */}
      <AnniversaryCta />
      {/* popular songs */}
      <PopularTracks />
      {/* show events */}
      <ShowEvents />
    </>
  );
}
