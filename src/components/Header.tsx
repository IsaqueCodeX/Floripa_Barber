import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const navLinks = [
    { href: "#agendamento", label: "Agendamento" },
    { href: "#servicos", label: "Serviços" },
    { href: "#produtos", label: "Produtos" },
    { href: "#carreiras", label: "Carreiras" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 z-50 flex justify-between items-center backdrop-blur-sm">
      <a href="/" className="text-3xl font-logo text-gradient drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Floripa Barber
      </a>
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-orange transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-2 items-center">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-orange hover:bg-transparent" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-charcoal-dark border-gray-800 text-white">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-lg hover:text-orange transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};