import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaSpotify, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import bannerContact from "@/assets/gallery/live/live-2.jpg";
import CtaSection from "@/components/fragments/CtaSection";

const contactInfo = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "0812 3456 7890",
    href: "tel:0812xxxxxxxx",
  },
  {
    icon: <MdEmail size={20} />,
    label: "Email",
    value: "rememberoftoday@gmail.com",
    href: "mailto:rememberoftoday@gmail.com",
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    value: "@rememberoftoday_",
    href: "https://instagram.com/rememberoftoday_",
  },
  {
    icon: <FaSpotify size={20} />,
    label: "Spotify",
    value: "Remember of Today",
    href: "https://open.spotify.com/intl-id/artist/64Vp34MYbR0NRjkveSuZMY",
  },
];

const faqs = [
  {
    q: "Kapan sebaiknya mulai booking?",
    a: "Kami menyarankan minimal 2-4 minggu sebelum tanggal acara untuk memastikan ketersediaan. Untuk acara besar atau festival, 2-3 bulan lebih baik.",
  },
  {
    q: "Bagaimana cara melakukan booking atau kerja sama?",
    a: "Kamu bisa mengisi form yang tersedia di halaman ini, atau menghubungi kami via WhatsApp atau Instagram DM @rememberoftoday_.",
  },
  {
    q: "Apakah ada merchandise yang bisa dibeli?",
    a: "Ada! Merch kami tersedia saat show berlangsung maupun pembelian online. Untuk info ketersediaan dan pemesanan, hubungi kami via WhatsApp atau DM Instagram.",
  },
  {
    q: "Apa saja yang termasuk dalam technical rider?",
    a: "Kebutuhan teknis akan kami informasikan setelah konfirmasi booking.",
  },

  {
    q: "Apakah bisa untuk acara privat atau corporate event?",
    a: "Bisa! Kami terbuka untuk berbagai jenis acara baik itu privat, kampus, festival, dan lainnya. Informasikan detail acaramu dan kami akan diskusikan.",
  },
];

const Marquee = () => {
  const text = "BOOKING · COLLABORATION · MEDIA · INQUIRIES · SHOWS · ";
  const repeated = text.repeat(6);

  return (
    <div className='overflow-hidden border-y border-white/10 py-4 my-20'>
      <div
        className='whitespace-nowrap font-heading font-bold text-xl tracking-wider text-neonPink animate-marquee'
        style={{ display: "inline-block" }}
      >
        {repeated}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) gsap.set(el, { height: 0, opacity: 0, overflow: "hidden" });
  }, []);

  const toggle = () => {
    const el = contentRef.current;
    const arrow = arrowRef.current;
    if (!el) return;

    if (!isOpen) {
      gsap.set(el, { height: "auto", opacity: 1 });
      const fullHeight = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: fullHeight, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
      gsap.to(arrow, { rotation: 45, duration: 0.3, ease: "power3.out" });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
      gsap.to(arrow, { rotation: 0, duration: 0.3, ease: "power3.in" });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div
      className='border-b border-white/10 py-5 cursor-pointer group'
      onClick={toggle}
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <span className='text-xs text-neonPink font-heading font-bold tracking-widest'>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className='text-white font-heading font-bold text-lg group-hover:text-neonPink transition-colors'>
            {question}
          </h3>
        </div>
        <span
          ref={arrowRef}
          className='text-neonPink font-bold text-2xl leading-none shrink-0'
        >
          +
        </span>
      </div>
      <div ref={contentRef} style={{ overflow: "hidden" }}>
        <p className='text-gray-400 font-body leading-relaxed pt-4 pl-10'>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY,
      );

      setSubmitted(true);
      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Remember of Today</title>
      </Helmet>

      <div
        className='relative py-24 px-4 text-center bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: `url(${bannerContact})` }}
      >
        <div className='absolute inset-0 bg-black/75' />
        <div className='relative z-10'>
          <h1 className='text-7xl lg:text-9xl font-bold font-heading text-neonPink mb-4'>
            Contact
          </h1>
          <p className='text-sm lg:text-md text-gray-200 font-body tracking-wider'>
            Let's talk about show, collaborations, media and more.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start my-24'>
        {/* info kontak */}
        <div>
          <h2 className='text-5xl lg:text-6xl font-bold font-heading mb-4'>
            Let's Work <span className='text-neonPink'>Together!</span>
          </h2>
          <p className='text-gray-300 font-body mb-8 leading-relaxed'>
            For booking inquiries, collaborations, interviews, media requests,
            or any other inquiries.
          </p>

          <div className='flex flex-col gap-5'>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-4 group w-sm'
              >
                <div className='w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-neonPink group-hover:border-neonPink transition-colors shrink-0'>
                  {item.icon}
                </div>
                <div>
                  <p className='text-xs text-gray-400 uppercase tracking-widest font-body'>
                    {item.label}
                  </p>
                  <p className='text-white font-semibold font-body'>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-5'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-1'>
              <label className='text-xs text-gray-400 uppercase tracking-widest font-body'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                placeholder='Your name'
                className='bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-body placeholder:text-gray-500 focus:outline-none focus:border-neonPink transition-colors'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='text-xs text-gray-400 uppercase tracking-widest font-body'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                placeholder='your@email.com'
                className='bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-body placeholder:text-gray-500 focus:outline-none focus:border-neonPink transition-colors'
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-400 uppercase tracking-widest font-body'>
              Subject
            </label>
            <select
              name='subject'
              value={form.subject}
              onChange={handleChange}
              required
              className='bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-body focus:outline-none focus:border-neonPink transition-colors'
            >
              <option value='' className='bg-[#120F17]' disabled>
                -- Select Inquiry Type --
              </option>
              <option value='Booking & Shows' className='bg-[#120F17]'>
                Booking & Shows
              </option>
              <option value='Collaboration' className='bg-[#120F17]'>
                Collaboration
              </option>
              <option value='Media & Interview' className='bg-[#120F17]'>
                Media & Interview
              </option>
              <option value='other' className='bg-[#120F17]'>
                Other
              </option>
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-400 uppercase tracking-widest font-body'>
              Message
            </label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              placeholder='Tell us more...'
              rows={5}
              className='bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-body placeholder:text-gray-500 focus:outline-none focus:border-neonPink transition-colors resize-none'
            />
          </div>

          {/* Response time badge */}
          <div className='flex items-center gap-2'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-neonPink opacity-75' />
              <span className='relative inline-flex rounded-full h-2 w-2 bg-neonPink' />
            </span>
            <p className='text-xs text-gray-400 font-body'>
              We usually reply within{" "}
              <span className='text-white font-semibold'>24 hours</span>
            </p>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full py-3 bg-neonPink text-white font-heading font-bold uppercase tracking-widest rounded-full hover:bg-punkPink transition-colors disabled:opacity-60'
          >
            {loading
              ? "Sending..."
              : submitted
                ? "Message Sent ✓"
                : "Send Message"}
          </button>
        </form>
      </div>

      {/* Marquee Divider */}
      <Marquee />

      {/* FAQ Section */}
      <div className='container mx-auto px-4 pb-24'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-5xl lg:text-6xl font-bold font-heading mb-2'>
            FAQ
          </h2>
          <p className='text-gray-400 font-body mb-10'>
            Pertanyaan yang sering ditanyakan seputar booking & kolaborasi.
          </p>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
      <CtaSection
        subHeading='More Info'
        heading='Ask Us Directly'
        description="Can't find the answer? Hit us up on WhatsApp and we'll get back to you."
        url='https://wa.me/6281289722114'
        buttonText='Chat on WhatsApp'
      />
    </>
  );
}
