import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Experience Rapid Natural Healing through Personalised Acupuncture
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Restore balance and vitality to your life with our expertly tailored treatments. We systematically combine ancient wisdom with modern expertise for optimal wellness.
        </p>
        <Button size="lg" className="bg-[#5cb85c] hover:bg-[#4cae4c]" asChild>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
      </section>
    </div>
  );
}
