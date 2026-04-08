import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Workflow Automation Tools",
  "CRM Implementations",
  "Data Analytics Dashboards",
  "Team Collaboration Software",
  "Project Management Solutions",
  "Digital Asset Management",
];

export default function DigitalToolsPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Digital Tools" breadcrumb="Digital Tools" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Side */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                <i className="fas fa-tools mr-2" /> Digital Transformation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Empower your team with Digital Tools
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                In the modern workplace, having the right digital tools is essential for productivity and sustainable growth. We specialize in implementing, customizing, and managing digital infrastructure that replaces manual efforts with automated grace.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                From data analytics dashboards to comprehensive CRM systems, we equip your business with the technology stack needed to operate efficiently in a competitive landscape.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Quote
                <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team using Digital Tools" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                        <i className="fas fa-chart-line text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Data-Driven</h4>
                        <p className="text-white/70 text-sm">Actionable Insights</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Tools We Provide</h2>
            <p className="text-gray-500 text-lg">Suite of integrated tools customized for your specific workflow.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-tools text-cyan text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Integrated deployment and tailored onboarding to guarantee high adoption rates across your organization.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
