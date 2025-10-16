"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertBanner } from "@/components/ui/alert-banner";
import { 
  ArrowLeft, 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Building, 
  Smartphone,
  CreditCard,
  Bell,
  CheckCircle,
  Shield,
  Zap,
  MessageSquare
} from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Paso 1: Información básica
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    
    // Paso 2: Terminales de pago
    paymentGateways: {
      clip: { enabled: false, apiKey: "", publicKey: "" },
      conekta: { enabled: false, apiKey: "", publicKey: "" },
      mercadopago: { enabled: false, accessToken: "" }
    },
    
    // Paso 3: Configuración de alertas
    alertSettings: {
      telegram: { enabled: false, botToken: "", chatId: "" },
      whatsapp: { enabled: false, phoneNumber: "" },
      email: { enabled: true }
    }
  });

  const steps = [
    { number: 1, title: "Información básica", description: "Cuéntanos sobre ti y tu empresa" },
    { number: 2, title: "Terminales de pago", description: "Conecta tus métodos de pago" },
    { number: 3, title: "Alertas", description: "Configura cómo quieres recibir notificaciones" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child, subchild] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: subchild ? {
            ...prev[parent][child],
            [subchild]: type === 'checkbox' ? checked : value
          } : (type === 'checkbox' ? checked : value)
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
          setError("Por favor completa todos los campos obligatorios");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Las contraseñas no coinciden");
          return false;
        }
        if (formData.password.length < 8) {
          setError("La contraseña debe tener al menos 8 caracteres");
          return false;
        }
        if (!formData.acceptTerms) {
          setError("Debes aceptar los términos y condiciones");
          return false;
        }
        return true;
      
      case 2:
        const hasPaymentGateway = Object.values(formData.paymentGateways).some(gateway => gateway.enabled);
        if (!hasPaymentGateway) {
          setError("Debes configurar al menos un terminal de pago");
          return false;
        }
        return true;
      
      case 3:
        const hasAlertChannel = Object.values(formData.alertSettings).some(alert => alert.enabled);
        if (!hasAlertChannel) {
          setError("Debes configurar al menos un canal de alertas");
          return false;
        }
        return true;
      
      default:
        return true;
    }
  };

  const handleNext = () => {
    setError("");
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (validateStep(currentStep)) {
      try {
        // TODO: Integrar con Supabase Auth
        console.log("Datos del formulario:", formData);
        
        // Simular registro exitoso
        setTimeout(() => {
          setSuccess(true);
          setIsLoading(false);
        }, 2000);
        
      } catch (err) {
        setError("Error al crear la cuenta. Por favor intenta de nuevo.");
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              ¡Cuenta creada exitosamente!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tu cuenta ha sido creada. Ahora puedes iniciar sesión y comenzar a proteger tu negocio.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/login">Iniciar sesión</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl"></div>
      
      {/* Header */}
      <header className="relative p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Volver al inicio
            </Link>
            <Button variant="outline" asChild className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
              <Link href="/login">Iniciar sesión</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number 
                      ? 'bg-primary-500 border-primary-500 text-white' 
                      : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="font-semibold">{step.number}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      currentStep > step.number 
                        ? 'bg-primary-500' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {steps[currentStep - 1].title}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {steps[currentStep - 1].description}
              </p>
            </CardHeader>
            <CardContent>
              {error && (
                <AlertBanner type="error" className="mb-6">
                  {error}
                </AlertBanner>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Paso 1: Información básica */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Nombre de la empresa *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password">Contraseña *</Label>
                        <div className="relative mt-1">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirmar contraseña *</Label>
                        <div className="relative mt-1">
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <Label htmlFor="acceptTerms" className="text-sm">
                        Acepto los{" "}
                        <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                          términos y condiciones
                        </Link>{" "}
                        y la{" "}
                        <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                          política de privacidad
                        </Link>
                      </Label>
                    </div>
                  </div>
                )}

                {/* Paso 2: Terminales de pago */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <Shield className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Conecta tus terminales de pago
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Configura al menos un terminal para monitorear transacciones
                      </p>
                    </div>

                    {/* Clip */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Clip</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Terminal físico y digital</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="paymentGateways.clip.enabled"
                            checked={formData.paymentGateways.clip.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        
                        {formData.paymentGateways.clip.enabled && (
                          <div className="space-y-3 pl-13">
                            <div>
                              <Label htmlFor="clipApiKey">API Key</Label>
                              <Input
                                id="clipApiKey"
                                name="paymentGateways.clip.apiKey"
                                type="password"
                                value={formData.paymentGateways.clip.apiKey}
                                onChange={handleChange}
                                placeholder="Ingresa tu API Key de Clip"
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="clipPublicKey">Public Key</Label>
                              <Input
                                id="clipPublicKey"
                                name="paymentGateways.clip.publicKey"
                                type="password"
                                value={formData.paymentGateways.clip.publicKey}
                                onChange={handleChange}
                                placeholder="Ingresa tu Public Key de Clip"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Conekta */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Conekta</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Pagos en línea</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="paymentGateways.conekta.enabled"
                            checked={formData.paymentGateways.conekta.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        
                        {formData.paymentGateways.conekta.enabled && (
                          <div className="space-y-3 pl-13">
                            <div>
                              <Label htmlFor="conektaApiKey">Private Key</Label>
                              <Input
                                id="conektaApiKey"
                                name="paymentGateways.conekta.apiKey"
                                type="password"
                                value={formData.paymentGateways.conekta.apiKey}
                                onChange={handleChange}
                                placeholder="Ingresa tu Private Key de Conekta"
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="conektaPublicKey">Public Key</Label>
                              <Input
                                id="conektaPublicKey"
                                name="paymentGateways.conekta.publicKey"
                                type="password"
                                value={formData.paymentGateways.conekta.publicKey}
                                onChange={handleChange}
                                placeholder="Ingresa tu Public Key de Conekta"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* MercadoPago */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">MercadoPago</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Pagos móviles y en línea</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="paymentGateways.mercadopago.enabled"
                            checked={formData.paymentGateways.mercadopago.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        
                        {formData.paymentGateways.mercadopago.enabled && (
                          <div className="pl-13">
                            <div>
                              <Label htmlFor="mpAccessToken">Access Token</Label>
                              <Input
                                id="mpAccessToken"
                                name="paymentGateways.mercadopago.accessToken"
                                type="password"
                                value={formData.paymentGateways.mercadopago.accessToken}
                                onChange={handleChange}
                                placeholder="Ingresa tu Access Token de MercadoPago"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Paso 3: Configuración de alertas */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <Bell className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Configura tus alertas
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Elige cómo quieres recibir notificaciones de transacciones sospechosas
                      </p>
                    </div>

                    {/* Telegram */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Telegram</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Notificaciones instantáneas</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="alertSettings.telegram.enabled"
                            checked={formData.alertSettings.telegram.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        
                        {formData.alertSettings.telegram.enabled && (
                          <div className="space-y-3 pl-13">
                            <div>
                              <Label htmlFor="telegramBotToken">Bot Token</Label>
                              <Input
                                id="telegramBotToken"
                                name="alertSettings.telegram.botToken"
                                type="password"
                                value={formData.alertSettings.telegram.botToken}
                                onChange={handleChange}
                                placeholder="Ingresa el token de tu bot de Telegram"
                                className="mt-1"
                              />
                            </div>
                            <div>
                              <Label htmlFor="telegramChatId">Chat ID</Label>
                              <Input
                                id="telegramChatId"
                                name="alertSettings.telegram.chatId"
                                value={formData.alertSettings.telegram.chatId}
                                onChange={handleChange}
                                placeholder="Ingresa tu Chat ID de Telegram"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* WhatsApp */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Mensajes directos</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="alertSettings.whatsapp.enabled"
                            checked={formData.alertSettings.whatsapp.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        
                        {formData.alertSettings.whatsapp.enabled && (
                          <div className="pl-13">
                            <div>
                              <Label htmlFor="whatsappPhone">Número de WhatsApp</Label>
                              <Input
                                id="whatsappPhone"
                                name="alertSettings.whatsapp.phoneNumber"
                                type="tel"
                                value={formData.alertSettings.whatsapp.phoneNumber}
                                onChange={handleChange}
                                placeholder="+52 55 1234 5678"
                                className="mt-1"
                              />
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Email */}
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">Reportes por correo</p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            name="alertSettings.email.enabled"
                            checked={formData.alertSettings.email.enabled}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary-600"
                          />
                        </div>
                        <div className="pl-13">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Las alertas se enviarán a: <strong>{formData.email}</strong>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <div>
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={handlePrev}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Anterior
                      </Button>
                    )}
                  </div>
                  
                  <div>
                    {currentStep < 3 ? (
                      <Button type="button" onClick={handleNext}>
                        Siguiente
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Creando cuenta..." : "Crear cuenta"}
                      </Button>
                    )}
                  </div>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}