import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <section className="bg-[#faf6f0] pt-8 pb-12 md:py-16 border-b border-[#e8dcc8]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#2a1810]">
              Experience Rapid Natural Healing through Personalised Acupuncture
            </h1>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-[#634832]">
              Restore balance and vitality to your life with our expertly tailored treatments. We systematically combine ancient wisdom with modern expertise for optimal wellness.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ServiceCard
            title="Pain Management"
            description="Relieve chronic and acute pain through targeted treatments."
            imageUrl="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c"
            altText="Acupuncture treatment for pain management"
          />
          <ServiceCard
            title="Stress and Anxiety"
            description="Regain calm and focus with relaxing therapies."
            imageUrl="https://images.unsplash.com/photo-1534096210335-a3b961613bb5"
            altText="Meditation and stress relief"
          />
          <ServiceCard
            title="Women's Health"
            description="Address hormonal imbalances and fertility concerns naturally."
            imageUrl="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
            altText="Natural healing for women's health"
          />
          <ServiceCard
            title="Digestive Health"
            description="Improve digestion and gut health with personalized care."
            imageUrl="https://images.unsplash.com/photo-1574586595103-6775e147e412"
            altText="Chinese medicine for digestive health"
          />
        </div>
      </section>
    </div>
  );
}