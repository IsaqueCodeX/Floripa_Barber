import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Index = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número de WhatsApp desejado
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`;
  const whatsappProductUrl = (productName: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}`)}`;
  const whatsappCareersUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre as oportunidades de carreira.")}`;
  const whatsappContactUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de entrar em contato.")}`;
  const whatsappServicesUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços.")}`;
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.906818335145!2d-48.5515806849398!3d-27.59537368283746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273833a05a397f%3A0x5350a43342f908a!2sR.%20das%20Palmeiras%2C%20123%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-000!5e0!3m2!1spt-BR!2sbr!4v1622133333333!5m2!1spt-BR!2sbr";

  return (
    <div className="font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/barber-hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg z-10">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Floripa Barber: Defina seu estilo. Renove sua confiança.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Onde a técnica apurada e a atenção aos detalhes transformam o corte em uma experiência de confiança.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="default">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agende seu Horário
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Wrapper for all content below the hero */}
        <div className="relative bg-charcoal-dark">
          {/* Booking Section */}
          <section id="agendamento" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold mb-8 text-white">Agende seu Atendimento</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Clique no botão abaixo para agendar seu horário diretamente pelo WhatsApp. Rápido, fácil e conveniente.
              </p>
              <Button asChild size="lg" variant="default">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicos" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold mb-12 text-white">Nossos Serviços</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-black border border-gray-800 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:border-orange">
                  <img src="/service-fade.jpg" alt="Cortes" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
                  <h3 className="text-2xl font-heading font-bold mb-2 text-orange">Cortes</h3>
                  <p className="text-gray-300">Do clássico ao moderno, encontre seu estilo perfeito com nossos especialistas. Todos os cortes incluem lavagem, massagem capilar e finalização.</p>
                </div>
                <div className="bg-black border border-gray-800 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:border-orange">
                  <img src="/service-beard-new.png" alt="Barba e Bigode" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
                  <h3 className="text-2xl font-heading font-bold mb-2 text-orange">Barba e Bigode</h3>
                  <p className="text-gray-300">Tratamentos completos para barba e bigode, incluindo modelagem, hidratação e toalha quente.</p>
                </div>
                <div className="bg-black border border-gray-800 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:border-orange">
                  <img src="/service-color.jpg" alt="Tratamentos Especiais" className="w-full h-48 object-cover rounded-md mb-4" loading="lazy" />
                  <h3 className="text-2xl font-heading font-bold mb-2 text-orange">Tratamentos Especiais</h3>
                  <p className="text-gray-300">Explore nossos serviços extras, como coloração masculina, tratamento capilar e relaxamento.</p>
                </div>
              </div>
              <Button asChild size="lg" variant="outline" className="mt-12">
                <a href={whatsappServicesUrl} target="_blank" rel="noopener noreferrer">
                  Consultar Serviços
                </a>
              </Button>
            </div>
          </section>

          {/* Products Section */}
          <section id="produtos" className="py-20">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-heading font-bold mb-12 text-white">Nossos Produtos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Product Card 1 */}
                <Card className="bg-black border-gray-800 text-left transition-all duration-300 hover:scale-105 hover:border-orange">
                  <CardHeader className="p-0">
                    <img src="/product-pomade.jpg" alt="Pomada Modeladora" className="rounded-t-lg w-full h-64 object-cover" loading="lazy" />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="font-heading text-orange">Pomada Modeladora</CardTitle>
                    <p className="text-gray-300 mt-2">Fixação forte com acabamento matte.</p>
                    <p className="text-lg font-bold mt-4 text-white">R$ 45,00</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="w-full" size="lg">
                      <a href={whatsappProductUrl("Pomada Modeladora")} target="_blank" rel="noopener noreferrer">
                        Comprar pelo WhatsApp
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Product Card 2 */}
                <Card className="bg-black border-gray-800 text-left transition-all duration-300 hover:scale-105 hover:border-orange">
                  <CardHeader className="p-0">
                    <img src="/product-shampoo.jpg" alt="Shampoo Fortificante" className="rounded-t-lg w-full h-64 object-cover" loading="lazy" />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="font-heading text-orange">Shampoo Fortificante</CardTitle>
                    <p className="text-gray-300 mt-2">Limpeza profunda e fortalecimento dos fios.</p>
                    <p className="text-lg font-bold mt-4 text-white">R$ 55,00</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="w-full" size="lg">
                      <a href={whatsappProductUrl("Shampoo Fortificante")} target="_blank" rel="noopener noreferrer">
                        Comprar pelo WhatsApp
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                {/* Product Card 3 */}
                <Card className="bg-black border-gray-800 text-left transition-all duration-300 hover:scale-105 hover:border-orange">
                  <CardHeader className="p-0">
                    <img src="/product-beard-oil.jpg" alt="Óleo para Barba" className="rounded-t-lg w-full h-64 object-cover" loading="lazy" />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="font-heading text-orange">Óleo para Barba</CardTitle>
                    <p className="text-gray-300 mt-2">Hidratação e brilho para sua barba.</p>
                    <p className="text-lg font-bold mt-4 text-white">R$ 39,00</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="default" className="w-full" size="lg">
                      <a href={whatsappProductUrl("Óleo para Barba")} target="_blank" rel="noopener noreferrer">
                        Comprar pelo WhatsApp
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="carreiras"
            className="py-32 bg-cover bg-center text-center"
          >
            <div className="bg-black bg-opacity-60 py-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Faça Parte da Nossa Equipe
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Estamos sempre em busca de talentos apaixonados pelo que fazem. Se você quer crescer conosco, entre em contato!
              </p>
              <div className="mt-8 flex justify-center">
                <Button asChild variant="default" size="lg">
                  <a href={whatsappCareersUrl} target="_blank" rel="noopener noreferrer">
                    Quero Fazer Parte
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contato" className="py-20">
            <div className="container mx-auto">
              <div className="text-center">
                <h2 className="text-4xl font-heading font-bold mb-4 text-white">Entre em Contato</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                  Tem alguma dúvida ou sugestão? Fale conosco diretamente pelo WhatsApp ou visite-nos em nosso endereço.
                </p>
                <a href={googleMapsUrl.replace('embed?pb=', 'maps/search/?api=1&query=')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-white mb-8 hover:text-orange transition-colors">
                  <MapPin className="w-5 h-5 text-orange" />
                  <span>Rua das Palmeiras, 123 - Centro, Florianópolis - SC</span>
                </a>
                <div>
                  <Button asChild size="lg" variant="default">
                    <a href={whatsappContactUrl} target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              <div className="mt-12 w-full h-80 md:h-96">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg w-full h-full"
                  title="Localização da BarberLab no Google Maps"
                ></iframe>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;