"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AlertBanner } from "@/components/ui/alert-banner";
import { 
  Settings, 
  Bell, 
  Smartphone, 
  MessageSquare,
  Mail,
  Key,
  Shield,
  Save,
  TestTube,
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  AlertTriangle,
  Info,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("alerts");
  const [isLoading, setIsLoading] = useState(false);
  const [testResult, setTestResult] = useState(null);
  
  // Estado para configuración de alertas mejorada
  const [alertConfig, setAlertConfig] = useState({
    telegram: {
      enabled: true,
      botToken: "",
      chatId: "",
      sendImmediate: true,
      sendDaily: false
    },
    whatsapp: {
      enabled: false,
      phoneNumber: "",
      sendImmediate: true,
      sendDaily: false
    },
    email: {
      enabled: true,
      address: "usuario@empresa.com",
      sendImmediate: false,
      sendDaily: true
    }
  });
  
  // Configuración de umbrales de riesgo
  const [riskThresholds, setRiskThresholds] = useState({
    low: { amount: 1000, transactions: 5 },
    medium: { amount: 5000, transactions: 10 },
    high: { amount: 10000, transactions: 20 }
  });

  const handleAlertConfigChange = (channel, field, value) => {
    setAlertConfig(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [field]: value
      }
    }));
  };

  const handleRiskThresholdChange = (level, field, value) => {
    setRiskThresholds(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        [field]: parseInt(value) || 0
      }
    }));
  };

  const testAlert = async (channel) => {
    setIsLoading(true);
    setTestResult(null);
    
    try {
      // TODO: Implementar test real de alertas
      await new Promise(resolve => setTimeout(resolve, 2000));
      setTestResult({ success: true, channel });
    } catch (error) {
      setTestResult({ success: false, channel, error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    setIsLoading(true);
    try {
      // TODO: Guardar configuración en la base de datos
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Configuración guardada exitosamente");
    } catch (error) {
      alert("Error al guardar la configuración");
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: "alerts", label: "Alertas", icon: Bell },
    { id: "risk", label: "Umbrales de Riesgo", icon: Shield },
    { id: "gateways", label: "Terminales", icon: Smartphone }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configuración</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Personaliza cómo recibes alertas y configuras la protección de tu negocio
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "alerts" && (
        <div className="space-y-6">
          {/* Información sobre alertas */}
          <AlertBanner type="info">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 mt-0.5" />
              <div>
                <strong>¿Cómo funcionan las alertas?</strong>
                <p className="text-sm mt-1">
                  Recibe notificaciones instantáneas cuando detectemos transacciones sospechosas. 
                  Puedes configurar múltiples canales para asegurar que nunca te pierdas una alerta importante.
                </p>
              </div>
            </div>
          </AlertBanner>

          {/* Configuración de Telegram */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Telegram</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Notificaciones instantáneas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {alertConfig.telegram.enabled && (
                    <Badge variant="secondary">Activo</Badge>
                  )}
                  <input
                    type="checkbox"
                    checked={alertConfig.telegram.enabled}
                    onChange={(e) => handleAlertConfigChange('telegram', 'enabled', e.target.checked)}
                    className="w-4 h-4 text-primary-600"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            {alertConfig.telegram.enabled && (
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telegram-bot-token">Bot Token</Label>
                    <Input
                      id="telegram-bot-token"
                      type="password"
                      value={alertConfig.telegram.botToken}
                      onChange={(e) => handleAlertConfigChange('telegram', 'botToken', e.target.value)}
                      placeholder="Ingresa tu Bot Token de Telegram"
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Obtén tu token creando un bot con @BotFather
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="telegram-chat-id">Chat ID</Label>
                    <Input
                      id="telegram-chat-id"
                      value={alertConfig.telegram.chatId}
                      onChange={(e) => handleAlertConfigChange('telegram', 'chatId', e.target.value)}
                      placeholder="Ingresa tu Chat ID"
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Envía un mensaje a tu bot y usa @userinfobot para obtener tu ID
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Configuración de envío</Label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.telegram.sendImmediate}
                        onChange={(e) => handleAlertConfigChange('telegram', 'sendImmediate', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Alertas inmediatas</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.telegram.sendDaily}
                        onChange={(e) => handleAlertConfigChange('telegram', 'sendDaily', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Resumen diario</span>
                    </label>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={() => testAlert('telegram')}
                  disabled={isLoading || !alertConfig.telegram.botToken || !alertConfig.telegram.chatId}
                >
                  <TestTube className="w-4 h-4 mr-2" />
                  Probar alerta
                </Button>
              </CardContent>
            )}
          </Card>

          {/* Configuración de WhatsApp */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Mensajes directos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {alertConfig.whatsapp.enabled && (
                    <Badge variant="secondary">Activo</Badge>
                  )}
                  <input
                    type="checkbox"
                    checked={alertConfig.whatsapp.enabled}
                    onChange={(e) => handleAlertConfigChange('whatsapp', 'enabled', e.target.checked)}
                    className="w-4 h-4 text-primary-600"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            {alertConfig.whatsapp.enabled && (
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="whatsapp-phone">Número de WhatsApp</Label>
                  <Input
                    id="whatsapp-phone"
                    type="tel"
                    value={alertConfig.whatsapp.phoneNumber}
                    onChange={(e) => handleAlertConfigChange('whatsapp', 'phoneNumber', e.target.value)}
                    placeholder="+52 55 1234 5678"
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Incluye el código de país (ej: +52 para México)
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Label>Configuración de envío</Label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.whatsapp.sendImmediate}
                        onChange={(e) => handleAlertConfigChange('whatsapp', 'sendImmediate', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Alertas inmediatas</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.whatsapp.sendDaily}
                        onChange={(e) => handleAlertConfigChange('whatsapp', 'sendDaily', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Resumen diario</span>
                    </label>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={() => testAlert('whatsapp')}
                  disabled={isLoading || !alertConfig.whatsapp.phoneNumber}
                >
                  <TestTube className="w-4 h-4 mr-2" />
                  Probar alerta
                </Button>
              </CardContent>
            )}
          </Card>

          {/* Configuración de Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Reportes por correo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {alertConfig.email.enabled && (
                    <Badge variant="secondary">Activo</Badge>
                  )}
                  <input
                    type="checkbox"
                    checked={alertConfig.email.enabled}
                    onChange={(e) => handleAlertConfigChange('email', 'enabled', e.target.checked)}
                    className="w-4 h-4 text-primary-600"
                  />
                </div>
              </CardTitle>
            </CardHeader>
            {alertConfig.email.enabled && (
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="email-address">Dirección de correo</Label>
                  <Input
                    id="email-address"
                    type="email"
                    value={alertConfig.email.address}
                    onChange={(e) => handleAlertConfigChange('email', 'address', e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Recibirás reportes detallados en este correo
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Label>Configuración de envío</Label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.email.sendImmediate}
                        onChange={(e) => handleAlertConfigChange('email', 'sendImmediate', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Alertas inmediatas</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={alertConfig.email.sendDaily}
                        onChange={(e) => handleAlertConfigChange('email', 'sendDaily', e.target.checked)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm">Resumen diario</span>
                    </label>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={() => testAlert('email')}
                  disabled={isLoading || !alertConfig.email.address}
                >
                  <TestTube className="w-4 h-4 mr-2" />
                  Probar alerta
                </Button>
              </CardContent>
            )}
          </Card>

          {/* Resultado de prueba */}
          {testResult && (
            <AlertBanner type={testResult.success ? "success" : "error"}>
              <div className="flex items-center space-x-2">
                {testResult.success ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <span>
                  {testResult.success 
                    ? `Alerta de prueba enviada exitosamente por ${testResult.channel}`
                    : `Error al enviar alerta por ${testResult.channel}: ${testResult.error}`
                  }
                </span>
              </div>
            </AlertBanner>
          )}
        </div>
      )}

      {activeTab === "risk" && (
        <div className="space-y-6">
          <AlertBanner type="info">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 mt-0.5" />
              <div>
                <strong>Configuración de umbrales de riesgo</strong>
                <p className="text-sm mt-1">
                  Define cuándo consideramos que una transacción es sospechosa basándose en el monto y la frecuencia.
                </p>
              </div>
            </div>
          </AlertBanner>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Riesgo Bajo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="secondary">Bajo</Badge>
                  <span>Riesgo Bajo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="low-amount">Monto máximo (MXN)</Label>
                  <Input
                    id="low-amount"
                    type="number"
                    value={riskThresholds.low.amount}
                    onChange={(e) => handleRiskThresholdChange('low', 'amount', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="low-transactions">Transacciones por hora</Label>
                  <Input
                    id="low-transactions"
                    type="number"
                    value={riskThresholds.low.transactions}
                    onChange={(e) => handleRiskThresholdChange('low', 'transactions', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Transacciones dentro de estos límites se consideran normales
                </p>
              </CardContent>
            </Card>

            {/* Riesgo Medio */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline">Medio</Badge>
                  <span>Riesgo Medio</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="medium-amount">Monto máximo (MXN)</Label>
                  <Input
                    id="medium-amount"
                    type="number"
                    value={riskThresholds.medium.amount}
                    onChange={(e) => handleRiskThresholdChange('medium', 'amount', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="medium-transactions">Transacciones por hora</Label>
                  <Input
                    id="medium-transactions"
                    type="number"
                    value={riskThresholds.medium.transactions}
                    onChange={(e) => handleRiskThresholdChange('medium', 'transactions', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Requiere atención y monitoreo adicional
                </p>
              </CardContent>
            </Card>

            {/* Riesgo Alto */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="destructive">Alto</Badge>
                  <span>Riesgo Alto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="high-amount">Monto máximo (MXN)</Label>
                  <Input
                    id="high-amount"
                    type="number"
                    value={riskThresholds.high.amount}
                    onChange={(e) => handleRiskThresholdChange('high', 'amount', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="high-transactions">Transacciones por hora</Label>
                  <Input
                    id="high-transactions"
                    type="number"
                    value={riskThresholds.high.transactions}
                    onChange={(e) => handleRiskThresholdChange('high', 'transactions', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Bloqueo automático y alerta inmediata
                </p>
              </CardContent>
            </Card>
          </div>

          <AlertBanner type="warning">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 mt-0.5" />
              <div>
                <strong>Recomendaciones</strong>
                <p className="text-sm mt-1">
                  Los umbrales deben ajustarse según el tipo de negocio. 
                  Consulta con tu equipo financiero para establecer límites apropiados.
                </p>
              </div>
            </div>
          </AlertBanner>
        </div>
      )}

      {activeTab === "gateways" && (
        <div className="space-y-6">
          <AlertBanner type="info">
            <div className="flex items-start space-x-3">
              <Zap className="w-5 h-5 mt-0.5" />
              <div>
                <strong>Terminales de pago conectados</strong>
                <p className="text-sm mt-1">
                  Gestiona las conexiones con tus terminales de pago para monitorear transacciones en tiempo real.
                </p>
              </div>
            </div>
          </AlertBanner>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Clip */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>Clip</span>
                  </div>
                  <Badge variant="secondary">Activo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Terminal físico y digital conectado
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Reconfigurar
                </Button>
              </CardContent>
            </Card>

            {/* MercadoPago */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span>MercadoPago</span>
                  </div>
                  <Badge variant="secondary">Activo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Pagos en línea y móviles
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Reconfigurar
                </Button>
              </CardContent>
            </Card>

            {/* Conekta */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-gray-400" />
                    </div>
                    <span>Conekta</span>
                  </div>
                  <Badge variant="outline">Inactivo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  No conectado
                </p>
                <Button size="sm" className="w-full">
                  Conectar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Botón de guardar */}
      <div className="flex justify-end">
        <Button onClick={saveSettings} disabled={isLoading}>
          <Save className="w-4 h-4 mr-2" />
          {isLoading ? "Guardando..." : "Guardar configuración"}
        </Button>
      </div>
    </div>
  );
}