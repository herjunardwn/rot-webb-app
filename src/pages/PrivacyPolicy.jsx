import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Remember of Today</title>
      </Helmet>

      <div className='py-24 px-4 text-center'>
        <h1 className='text-5xl lg:text-8xl font-bold font-heading text-neonPink mb-4'>
          Privacy Policy
        </h1>
        <p className='text-md text-gray-200 font-body tracking-wider'>
          Last updated: June 2026
        </p>
      </div>

      <div className='container mx-auto px-4 pb-24 max-w-3xl'>
        <div className='flex flex-col gap-10 font-body text-gray-300 leading-relaxed'>
          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              1. Introduction
            </h2>
            <p>
              Remember of Today ("we", "us", or "our") is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard the information you provide
              when contacting us through our website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              2. Information We Collect
            </h2>
            <p>
              When you submit the contact form on our website, we collect the
              following information:
            </p>
            <ul className='list-disc list-inside mt-3 flex flex-col gap-2'>
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message or inquiry</li>
            </ul>
            <p className='mt-3'>
              We do not collect any other personal data, and we do not use
              cookies or tracking technologies on this website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              3. How We Use Your Information
            </h2>
            <p>The information you provide is used solely to:</p>
            <ul className='list-disc list-inside mt-3 flex flex-col gap-2'>
              <li>Respond to your inquiry or booking request</li>
              <li>Communicate with you regarding collaborations or shows</li>
            </ul>
            <p className='mt-3'>
              We will never sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              4. Data Retention
            </h2>
            <p>
              We retain your information only for as long as necessary to
              respond to your inquiry. Once the communication is complete, your
              data is no longer actively used.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              5. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className='list-disc list-inside mt-3 flex flex-col gap-2'>
              <li>Request access to the personal data we hold about you</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className='mt-3'>
              To exercise any of these rights, please contact us at{" "}
              <a
                href='mailto:rememberoftoday@gmail.com'
                className='text-neonPink hover:underline'
              >
                rememberoftoday@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold font-heading text-white mb-3'>
              7. Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, feel free to
              reach out to us at{" "}
              <a
                href='mailto:rememberoftoday@gmail.com'
                className='text-neonPink hover:underline'
              >
                rememberoftoday@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
