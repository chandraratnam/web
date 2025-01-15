import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";

  return (
    <footer className="bg-gray-50 border-t mt-16" id="contact">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">Dave Chandraratnam</h2>
            <p className="text-sm md:text-base text-gray-600">
              Professional acupuncture and Chinese medicine services in East Gosford, NSW. 
              Extensive experience in treating various conditions with a systematic approach.
            </p>
            <Button className="bg-[#5cb85c] hover:bg-[#4cae4c] w-full sm:w-auto" asChild>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <a 
                href="https://goo.gl/maps/your-location-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm md:text-base hover:text-gray-900"
              >
                <MapPin className="h-5 w-5 text-gray-600 shrink-0 mt-0.5" />
                <span>37 Althorp Street<br />East Gosford, NSW 2250</span>
              </a>
              <a 
                href="tel:0243255448" 
                className="flex items-center gap-2 text-sm md:text-base hover:text-gray-900"
              >
                <Phone className="h-5 w-5 text-gray-600" />
                (02) 4325 5448
              </a>
              <a 
                href="mailto:dave@curatedhealth.com.au" 
                className="flex items-center gap-2 text-sm md:text-base hover:text-gray-900"
              >
                <Mail className="h-5 w-5 text-gray-600" />
                dave@curatedhealth.com.au
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}