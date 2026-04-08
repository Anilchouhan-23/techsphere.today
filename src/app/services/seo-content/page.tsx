<<<<<<< HEAD
=======
import TopBar from "@/components/TopBar";
>>>>>>> 906b4ecf8ce36730193b01a9b71dedf6c46b115a
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Comprehensive Keyword Research",
  "On-Page SEO Optimization",
  "High-Quality Content Creation",
  "Technical SEO Audits",
  "Link Building Strategies",
  "Local SEO Management",
  "Performance Tracking & Reporting",
];

export default function SEOContentPage() {
  return (
    <>
<<<<<<< HEAD
=======
      <TopBar />
>>>>>>> 906b4ecf8ce36730193b01a9b71dedf6c46b115a
      <Navbar />
      <PageBanner title="SEO Content Services" breadcrumb="SEO Content Services" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Side */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                <i className="fas fa-search mr-2" /> Organic Growth
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Dominate search results with SEO & Content
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                Visibility is everything. Our data-driven SEO strategies combined with high-quality content creation ensure that your business ranks at the top of search engine results when your customers are looking for you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                We conduct comprehensive audits, optimize on-page signals, build authoritative backlinks, and craft compelling blog posts and web copy that convert readers into loyal customers.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Boost Your Rankings
                <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="SEO Analytics Dashboard" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                        <i className="fas fa-arrow-trend-up text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">10x Traffic Growth</h4>
                        <p className="text-white/70 text-sm">Proven Results</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">SEO & Content Strategies</h2>
            <p className="text-gray-500 text-lg">A holistic approach to search mastery and content superiority.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-pen-nib text-cyan text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Continuous tracking and competitive analysis to ensure you dominate and maintain your market position.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
