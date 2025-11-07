import { Instagram, Facebook, Twitter, Youtube, Linkedin, Github, MapPin } from 'lucide-react';

export const Footer = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+das+Palmeiras,+123+-+Centro,+Florianópolis+-+SC";

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-logo text-gradient mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Floripa Barber</h3>
            <p className="text-gray-400 mb-4">
              Onde a tradição encontra a inovação no seu estilo.
            </p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-orange transition-colors">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Rua das Palmeiras, 123 - Centro, Florianópolis - SC</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#agendamento" className="text-gray-400 hover:text-orange transition-colors">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-orange transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-orange transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#carreiras" className="text-gray-400 hover:text-orange transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                  Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                  Atacado
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                  Central de Aprendizagem
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="Visite nosso Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="Visite nosso Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="Visite nosso Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="Visite nosso Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Floripa Barber. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                Termos
              </a>
            </div>
          </div>

          {/* Developer */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-gray-500 text-sm">
              Desenvolvido por <span className="font-semibold text-gray-300">Isaque Santos</span>
            </p>
            <p className="text-gray-500 text-xs">Desenvolvedor Full-Stack</p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="LinkedIn de Isaque Santos"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/IsaqueCodeX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-charcoal-dark transition-colors"
                aria-label="GitHub de Isaque Santos"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};