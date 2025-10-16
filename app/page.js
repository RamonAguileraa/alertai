"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerChildren } from "@/components/ui/stagger-children";
import DynamicImport from "@/components/ui/dynamic-import";
import { Shield, Zap, Smartphone, BarChart3, Users, Clock, ArrowRight, Star, CheckCircle } from "lucide-react";
import ButtonSignin from "@/components/ButtonSignin";

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#beneficios" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Beneficios
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Cómo funciona
            </Link>
            <Link href="#precios" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Precios
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Ver planes
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <ButtonSignin text="Iniciar Sesión" />
            <Button asChild>
              <Link href="/signup">Comenzar gratis</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 lg:py-32">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative">
            <DynamicImport>
              <FadeIn className="mx-auto max-w-5xl text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-teal-100 dark:from-primary-900/30 dark:to-teal-900/30 border border-primary-200/50 dark:border-primary-700/50 mb-8">
                  <Shield className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                    Punto de Venta para Restaurantes y Retail
                  </span>
                </div>
                
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                  Vende más rápido
                  <span className="block bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
                    antes de que afecten
                  </span>
                  tu negocio
                </h1>
                
                <p className="mb-10 text-xl text-gray-600 dark:text-gray-300 md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Klara POS optimiza tus ventas con un POS moderno, analytics en tiempo real y digitalización de menú con IA, todo en una experiencia rápida y elegante.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                    <Link href="/signup">
                      <Zap className="mr-2 h-5 w-5" />
                      Comenzar gratis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300" asChild>
                    <Link href="#como-funciona">
                      Ver demo en vivo
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sin tarjeta de crédito
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-500 mr-2" />
                    Configuración en 5 minutos
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Soporte en español
                  </div>
                </div>
              </FadeIn>
            </DynamicImport>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <DynamicImport>
              <StaggerChildren className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">500+</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">PYMEs protegidas</div>
                    </div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">99.9%</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">Precisión en detección</div>
                    </div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">2.5s</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">Tiempo de respuesta</div>
                    </div>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2">24/7</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">Monitoreo continuo</div>
                    </div>
                  </div>
                </div>
              </StaggerChildren>
            </DynamicImport>
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200/50 dark:border-primary-700/50 mb-6">
                <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                  ✨ Características principales
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                ¿Por qué elegir <span className="bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">Klara POS</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                La plataforma más completa y confiable para proteger tu negocio contra fraudes con tecnología de vanguardia
              </p>
            </div>
            <DynamicImport>
              <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl w-fit mb-6">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Protección en tiempo real</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Monitorea todas tus transacciones las 24 horas del día y recibe alertas instantáneas cuando detectamos actividad sospechosa.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-2xl w-fit mb-6">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Alertas instantáneas</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Recibe notificaciones inmediatas por WhatsApp o Telegram para que puedas actuar rápidamente ante cualquier amenaza.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl w-fit mb-6">
                          <BarChart3 className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Analytics avanzados</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Dashboard completo con métricas, gráficos y reportes detallados para entender mejor el comportamiento de tus clientes.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl w-fit mb-6">
                          <Smartphone className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Multiplataforma</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Compatible con todos los principales gateways de pago mexicanos: Clip, Conekta, MercadoPago y más.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-indigo-500 to-blue-500 p-3 rounded-2xl w-fit mb-6">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Soporte en español</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Nuestro equipo de soporte está disponible para ayudarte en español, con respuesta rápida y soluciones efectivas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="group">
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardContent className="p-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-2xl w-fit mb-6">
                          <Clock className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Configuración rápida</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Configura Klara POS en minutos. Crea tu menú, añade productos y comienza a cobrar.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </StaggerChildren>
            </DynamicImport>
          </div>
        </section>

        {/* Cómo funciona Section */}
        <section id="como-funciona" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Cómo funciona Klara POS
              </h2>
              <p className="text-lg text-gray-600">
                Tres pasos simples para proteger tu negocio
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Conecta tu gateway</h3>
                <p className="text-gray-600">
                  Crea tu primer restaurante y agrega tu catálogo de productos. Opcional: integra impresora de tickets.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Configura tus alertas</h3>
                <p className="text-gray-600">
                  Personaliza impuestos, propinas y métodos de pago: efectivo, tarjeta, transferencia.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Recibe protección 24/7</h3>
                <p className="text-gray-600">
                  Empieza a vender en el POS y mira analytics en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-lg text-gray-600">
                Negocios que ya confían en Klara POS para crecer sus ventas
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600">
                    "AlertAi nos ayudó a detectar y prevenir más de 15 intentos de fraude en nuestro primer mes. ¡Increíble!"
                  </p>
                  <div className="font-semibold">María González</div>
                  <div className="text-sm text-gray-500">Tienda Online de Ropa</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600">
                    "La integración fue súper fácil y las alertas llegan instantáneamente. Ahora dormimos más tranquilos."
                  </p>
                  <div className="font-semibold">Carlos Mendoza</div>
                  <div className="text-sm text-gray-500">Electrónica Digital</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600">
                    "El dashboard es muy intuitivo y nos da visibilidad completa de todas nuestras transacciones."
                  </p>
                  <div className="font-semibold">Ana Rodríguez</div>
                  <div className="text-sm text-gray-500">Restaurante Delivery</div>
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
                ¿Listo para proteger tu negocio?
              </h2>
              <p className="mb-8 text-xl text-primary-100">
                Únete a más de 500 PYMEs que ya confían en AlertAi para proteger sus ventas
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Comenzar gratis ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900" asChild>
                  <Link href="/contact">
                    Hablar con un experto
          </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-200">
                Sin compromiso • Configuración en 5 minutos • Soporte en español
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
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#beneficios" className="hover:text-white">Beneficios</Link></li>
                <li><Link href="#como-funciona" className="hover:text-white">Cómo funciona</Link></li>
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
