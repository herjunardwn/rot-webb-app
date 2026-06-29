import { Helmet } from "react-helmet-async";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Remember of Today</title>
      </Helmet>

      <div className='py-24 px-4 text-center'>
        <h1 className='text-5xl lg:text-8xl font-bold font-heading text-neonPink mb-4'>
          Terms & Conditions
        </h1>
        {/* <p className='text-md text-gray-200 font-body tracking-wider'>
          Last updated: June 2026
        </p> */}
      </div>

      <div className='container mx-auto px-4 pb-24 max-w-3xl'>
        <div className='flex flex-col gap-10 font-body text-gray-300 leading-relaxed'>
          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Remember of Today website, you agree to
              be bound by these Terms & Conditions. If you do not agree with any
              part of these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              2. Use of This Website
            </h2>
            <p>This website is intended for:</p>
            <ul className='list-disc list-inside mt-3 flex flex-col gap-2'>
              <li>Learning about Remember of Today</li>
              <li>Submitting booking or collaboration inquiries</li>
              <li>Accessing links to our music and social media</li>
            </ul>
            <p className='mt-3'>
              You agree not to misuse this website or submit false, misleading,
              or harmful information through the contact form.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              3. Intellectual Property
            </h2>
            <p>
              All content on this website — including but not limited to text,
              images, logos, and music — is the property of Remember of Today.
              You may not reproduce, distribute, or use any content without
              prior written permission.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              4. Booking Inquiries
            </h2>
            <p>
              Submitting a booking inquiry through our contact form does not
              constitute a confirmed booking. A booking is only confirmed after
              written agreement between both parties.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              5. External Links
            </h2>
            <p>
              Our website may contain links to third-party platforms such as
              Spotify, Instagram, and YouTube Music. We are not responsible for
              the content or privacy practices of those platforms.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              6. Limitation of Liability
            </h2>
            <p>
              Remember of Today is not liable for any damages arising from the
              use or inability to use this website, or from reliance on any
              information provided on this site.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of the website after any changes constitutes
              your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              8. Contact
            </h2>
            <p>
              For any questions regarding these terms, please contact us at{" "}
              <a
                href='mailto:rememeberoftoday@gmail.com'
                className='text-neonPink hover:underline'
              >
                rememeberoftoday@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
