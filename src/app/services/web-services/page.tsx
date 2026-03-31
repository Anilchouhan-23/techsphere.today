import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import Link from "next/link";

const features = [
  "Domain Registration & Management",
  "High-Performance SSD Web Hosting",
  "VPS & Dedicated Server Setup",
  "SSL Certificates & Security Scans",
  "Daily Automated Cloud Backups",
  "Website Maintenance & Updates",
  "Business Email Solutions (Google Workspace/O365)",
];

export default function WebServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <PageBanner title="Web Services & Hosting" breadcrumb="Web Services" />

      {/* Main Content Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Side */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                <i className="fas fa-server mr-2" /> Reliable Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Secure & Scalable Hosting for Your Digital Flagship
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                Your website is the face of your business, and it needs a robust, high-performance foundation. Our comprehensive web services handle everything from registering your domain name to providing screaming-fast cloud hosting that scales with your traffic.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                We don't just host your site; we maintain its health. With daily automated backups, proactive security monitoring, and regular maintenance, you can focus on running your business while we keep your digital storefront open 24/7/365.
              </p>
              
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Hosting Plans
                <i className="fas fa-arrow-right text-sm" />
              </Link>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                  alt="Web Hosting Servers Infrastructure" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <i className="fas fa-check-double text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">99.9% Uptime</h4>
                        <p className="text-white/70 text-sm">Guaranteed Reliability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Complete Hosting Ecosystem</h2>
            <p className="text-gray-500 text-lg">Everything you need to deploy, secure, and manage your web presence seamlessly under one roof.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-cloud-arrow-up text-cyan text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Enterprise-grade architecture tailored for maximum reliability and unparalleled speed.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
