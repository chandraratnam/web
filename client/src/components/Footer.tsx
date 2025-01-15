import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";

  return (
    <footer className="bg-gray-50 border-t mt-16" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Dave Chandraratnam</h2>
            <p className="text-gray-600 mb-6">
              Professional acupuncture and Chinese medicine services in East Gosford, NSW. 
              Extensive experience in treating various conditions with a systematic approach.
            </p>
            <Button className="bg-[#5cb85c] hover:bg-[#4cae4c]" asChild>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-600" />
                37 Althorp Street, East Gosford, NSW 2250
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <a href="tel:0243255448" className="hover:text-gray-900">
                  (02) 4325 5448
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-600" />
                <a href="mailto:dave@curatedhealth.com.au" className="hover:text-gray-900">
                  dave@curatedhealth.com.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
