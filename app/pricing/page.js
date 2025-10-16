import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";
import config from "@/config";

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="/#beneficios" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Beneficios
            </Link>
            <Link href="/#como-funciona" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Cómo funciona
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Comenzar gratis</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                💰 Planes para cada tamaño de negocio
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Precios simples y transparentes
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Elige el plan que mejor se adapte a tu negocio. Todos incluyen protección 24/7 y soporte en español.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {config.stripe.plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.isFeatured ? 'border-primary-500 shadow-lg scale-105' : ''}`}>
                  {plan.isFeatured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary-500 text-white">Más popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      {plan.priceAnchor && (
                        <span className="text-lg text-gray-500 line-through ml-2">${plan.priceAnchor}</span>
                      )}
                      <span className="text-gray-600 ml-1">/mes</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={plan.isFeatured ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <Link href="/signup">
                        {plan.name === 'Enterprise' ? 'Contactar ventas' : 'Comenzar gratis'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Compara todas las características
              </h2>
              <p className="text-lg text-gray-600">
                Ve qué incluye cada plan en detalle
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Característica</th>
                      <th className="text-center p-4 font-semibold">Básico</th>
                      <th className="text-center p-4 font-semibold">Profesional</th>
                      <th className="text-center p-4 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Transacciones por mes</td>
                      <td className="text-center p-4">1,000</td>
                      <td className="text-center p-4">10,000</td>
                      <td className="text-center p-4">Ilimitadas</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Alertas WhatsApp/Telegram</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Dashboard básico</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Dashboard avanzado</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Soporte por email</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Soporte prioritario</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Soporte 24/7</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Integración múltiples gateways</td>
                      <td className="text-center p-4">Limitada</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Reportes personalizados</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">SLA garantizado</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-gray-600">
                Resolvemos las dudas más comunes sobre nuestros precios
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
                  <p className="text-gray-600">
                    Sí, puedes actualizar o degradar tu plan en cualquier momento desde tu dashboard. Los cambios se reflejan en el próximo ciclo de facturación.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Qué pasa si excedo el límite de transacciones?</h3>
                  <p className="text-gray-600">
                    Te notificaremos cuando te acerques al límite. Si lo excedes, podemos ayudarte a actualizar tu plan o configurar límites adicionales por un costo extra.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Ofrecen descuentos anuales?</h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos un 20% de descuento cuando pagas anualmente. Puedes ver esta opción al seleccionar tu plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">¿Hay período de prueba gratuito?</h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos 14 días de prueba gratuita para todos los planes. No necesitas tarjeta de crédito para empezar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                ¿Listo para empezar?
              </h2>
              <p className="mb-8 text-xl text-primary-100">
                Únete a más de 500 negocios que ya venden más rápido con Klara POS
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Comenzar prueba gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900" asChild>
                  <Link href="/contact">
                    Hablar con ventas
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-200">
                14 días gratis • Sin tarjeta de crédito • Configuración en 5 minutos
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo className="mb-4" />
              <p className="text-gray-400 mb-4">
                La plataforma antifraude más confiable para PYMEs mexicanas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#beneficios" className="hover:text-white">Beneficios</Link></li>
                <li><Link href="/#como-funciona" className="hover:text-white">Cómo funciona</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Precios</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Centro de ayuda</Link></li>
                <li><Link href="/docs" className="hover:text-white">Documentación</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contactar soporte</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacidad</Link></li>
                <li><Link href="/terms" className="hover:text-white">Términos</Link></li>
                <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AlertAi. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
