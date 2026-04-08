import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";

const features = [
  "Platform-Specific Audience Targeting",
  "Engaging Visual Content Creation",
  "Community Management & Outreach",
  "Paid Social Advertising Campaigns",
  "Influencer Collaborations",
  "Brand Identity Management",
  "Analytics & Performance Dashboards",
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <PageBanner title="Social Media Marketing" breadcrumb="Social Media Marketing" />

      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Text Side */}
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-cyan/10 text-cyan font-semibold text-sm rounded-full mb-4">
                <i className="fas fa-hashtag mr-2" /> Brand Awareness
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                Engage Your Audience with Social Media
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-[1.05rem]">
                In today's digital landscape, your brand's voice on social media is your most powerful asset. We craft impactful social media campaigns across platforms like LinkedIn, Instagram, and Facebook to build massive brand awareness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                From eye-catching visual content and engaging community management to highly targeted paid ad campaigns, we ensure your message reaches the right audience at the perfect time to drive actual conversions.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-cyan text-navy hover:bg-cyan-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Grow Your Following
                <i className="fas fa-arrow-right text-sm" />
              </a>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                  alt="Social Media Marketing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                        <i className="fas fa-users text-xl" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Community Driven</h4>
                        <p className="text-white/70 text-sm">Authentic Engagement</p>
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
            <h2 className="text-3xl font-bold text-navy mb-4">Our Social Strategy</h2>
            <p className="text-gray-500 text-lg">Custom content pillars designed to captivate your specific target demographic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-5">
                  <i className="fas fa-thumbs-up text-cyan text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{f}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Dynamic scheduling and real-time monitoring to maximize your brands organic reach.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
