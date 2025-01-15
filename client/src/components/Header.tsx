import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const bookingUrl = "https://central-coast-body-mechanics.au1.cliniko.com/bookings?business_id=59092&practitioner_id=158654#service";
  const navigation = [
    { name: "What I Treat", href: "/what-i-treat" },
    { name: "FAQ", href: "/faq" },
    {
      name: "Contact",
      href: "#contact",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <div key={item.name} className="px-5 py-2">
          {item.href.startsWith('#') ? (
            <a
              href={item.href}
              onClick={item.onClick}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          ) : (
            <Link href={item.href}>
              <a className="text-gray-600 hover:text-gray-900">{item.name}</a>
            </Link>
          )}
        </div>
      ))}
      <div className="px-5 py-2">
        <Button className="w-full bg-[#5cb85c] hover:bg-[#4cae4c]" asChild>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book Appointment
          </a>
        </Button>
      </div>
    </>
  );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-xl font-bold">Dave Chandraratnam</a>
          </Link>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="mt-8">
                  <NavLinks />
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>
        </div>
      </div>
    </header>
  );
}