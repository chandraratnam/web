import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <NavigationMenu className="py-4">
          <NavigationMenuList className="w-full flex justify-between items-center">
            <NavigationMenuItem>
              <Link href="/">
                <a className="text-xl font-bold">Dave Chandraratnam</a>
              </Link>
            </NavigationMenuItem>

            <div className="flex items-center gap-6">
              <NavigationMenuItem>
                <Link href="/what-i-treat">
                  <a className="text-gray-600 hover:text-gray-900">What I Treat</a>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq">
                  <a className="text-gray-600 hover:text-gray-900">FAQ</a>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-[#5cb85c] hover:bg-[#4cae4c]" asChild>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book Appointment
                  </a>
                </Button>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
