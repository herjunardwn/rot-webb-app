import CtaIg from "@/assets/cta-ig.png";
import CtaSection from "@/components/fragments/CtaSection";

export default function IgCta() {
  return (
    <section className='container mx-auto flex py-10 px-4 text-center rounded-xl mt-12'>
      <div className=''>
        <img src={CtaIg} alt='Follow us on Instagram' className='w-48' />
      </div>

      <CtaSection
        subHeading='More Content'
        heading='Follow Us on Instagram'
        description='Stay updated with our latest news, behind-the-scenes content, and
          more!'
        url='https://instagram.com/rememberoftoday_'
        buttonText='Visit Instagram'
      />
    </section>
  );
}
