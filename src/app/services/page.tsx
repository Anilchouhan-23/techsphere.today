import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "fa-laptop-code",
    title: "Custom Software",
    href: "/services/software-saas",
    desc: "Scalable and robust custom software solutions tailored to your business needs, improving efficiency and streamlining your operations.",
  },
  {
    icon: "fa-cloud",
    title: "SaaS Solutions",
    href: "/services/software-saas",
    desc: "Cloud-based software as a service (SaaS) products for seamless collaboration, accessibility, and high performance across any device.",
  },
  {
    icon: "fa-tools",
    title: "Digital Tools",
    href: "/services/digital-tools",
    desc: "Comprehensive digital toolsets designed to empower your team, automate repetitive tasks, and drive your digital transformation.",
  },
  {
    icon: "fa-search",
    title: "SEO Content",
    href: "/services/seo-content",
    desc: "Data-driven SEO strategies and high-quality content creation to improve your search engine rankings and attract organic traffic.",
  },
  {
    icon: "fa-hashtag",
    title: "Social Media",
    href: "/services/social-media",
    desc: "Engaging social media marketing campaigns across platforms to build brand awareness, foster community, and drive conversions.",
  },
  {
    icon: "fa-envelope-open-text",
    title: "Email Marketing",
    href: "/services/email-marketing",
    desc: "Targeted email marketing campaigns with personalized content, responsive design, and analytics to boost customer retention.",
  },
  {
    icon: "fa-server",
    title: "Web Services & Hosting",
    href: "/services/web-services",
    desc: "Reliable domain registration, high-performance cloud hosting, automated backups, and fully managed server maintenance.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Our Services" breadcrumb="Services" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-3">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              TechSphere provides comprehensive IT and security solutions
              tailored for businesses of all sizes across India.
            </p>
            <div className="w-15 h-[3px] bg-cyan mx-auto mt-4 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-t-4 border-transparent hover:border-t-cyan hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] transition-all block"
              >
                <i className={`fas ${s.icon} text-5xl text-cyan mb-5`} />
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <span className="inline-block mt-4 text-cyan font-medium text-sm">
                  Learn More <i className="fas fa-arrow-right ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
