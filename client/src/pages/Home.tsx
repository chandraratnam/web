import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";

  const services = [
    {
      title: "Pain Management",
      description: "Relieve chronic and acute pain through targeted treatments.",
      imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      altText: "Acupuncture treatment for pain management",
      details: [
        "Back pain and sciatica",
        "Neck and shoulder tension",
        "Joint pain and arthritis",
        "Sports injuries",
        "Headaches and migraines"
      ]
    },
    {
      title: "Stress and Anxiety",
      description: "Regain calm and focus with relaxing therapies.",
      imageUrl: "https://images.unsplash.com/photo-1534096210335-a3b961613bb5",
      altText: "Meditation and stress relief",
      details: [
        "Anxiety and depression",
        "Sleep disorders",
        "Stress management",
        "Mental clarity",
        "Emotional balance"
      ]
    },
    {
      title: "Women's Health",
      description: "Address hormonal imbalances and fertility concerns naturally.",
      imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      altText: "Natural healing for women's health",
      details: [
        "Hormonal balance",
        "Fertility support",
        "Menstrual health",
        "Pregnancy care",
        "Menopausal symptoms"
      ]
    },
    {
      title: "Digestive Health",
      description: "Improve digestion and gut health with personalized care.",
      imageUrl: "https://images.unsplash.com/photo-1574586595103-6775e147e412",
      altText: "Chinese medicine for digestive health",
      details: [
        "IBS management",
        "Acid reflux",
        "Food sensitivities",
        "Bloating relief",
        "Gut healing"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <section className="bg-[#faf6f0] pt-8 pb-12 md:py-16 border-b border-[#e8dcc8]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#2a1810]">
              Experience Rapid Natural Healing through Personalised Acupuncture
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-[#634832]">
              Restore balance and vitality to your life with our expertly tailored treatments. 
              We systematically combine ancient wisdom with modern expertise for optimal wellness.
            </p>
            <Button 
              size="lg" 
              className="bg-[#5cb85c] hover:bg-[#4cae4c] w-full sm:w-auto text-white shadow-lg transition-transform hover:scale-105" 
              asChild
            >
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#2a1810]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              altText={service.altText}
              details={service.details}
            />
          ))}
        </div>
      </section>

      <section className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-[#faf6f0] p-8 rounded-lg border border-[#e8dcc8]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2a1810]">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#2a1810]">Expert Care</h3>
              <p className="text-[#634832]">
                With extensive experience in Traditional Chinese Medicine and modern techniques,
                we provide personalized treatments tailored to your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#2a1810]">Holistic Approach</h3>
              <p className="text-[#634832]">
                We treat not just symptoms but the root cause of your health concerns,
                promoting long-term wellness and natural healing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}