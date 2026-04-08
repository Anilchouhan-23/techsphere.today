<<<<<<< HEAD
=======
import TopBar from "@/components/TopBar";
>>>>>>> 906b4ecf8ce36730193b01a9b71dedf6c46b115a
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Custom Web Application Development",
  "Scalable SaaS Platform Architecture",
  "API Development & Integration",
  "Cloud Deployment & Management",
  "Enterprise Software Solutions",
  "Legacy System Modernization",
  "Ongoing Maintenance & Support",
];

export default function SoftwareSaaSPage() {
  return (
    <>
<<<<<<< HEAD
=======
      <TopBar />
>>>>>>> 906b4ecf8ce36730193b01a9b71dedf6c46b115a
      <Navbar />
      <PageBanner title="Software & SaaS Solutions" breadcrumb="Software & SaaS Solutions" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Side */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                <i className="fas fa-laptop-code mr-2" /> Engineering Excellence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Custom Software engineered for growth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                TechSphere develops state-of-the-art software and cloud-based SaaS products tailored to your unique business requirements. Our engineering team focuses on building secure, scalable, and high-performance applications that deliver real value.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                Whether you need a robust internal tool, a modern web platform, or a completely new Software-as-a-Service product, we provide end-to-end development solutions using modern React, Node.js, and Cloud technologies.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Discuss Your Project
                <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Software Coding and SaaS" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                        <i className="fas fa-code-branch text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Agile Methodology</h4>
                        <p className="text-white/70 text-sm">Rapid & Reliable Delivery</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Our Software Capabilities</h2>
            <p className="text-gray-500 text-lg">From concept to deployment, we build digital products that scale effortlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-laptop-code text-cyan text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Tailored implementations utilizing the best-in-class technology stacks for guaranteed success.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
