"use client";

import { useState } from "react";
import { MetricCard } from "@/components/ui/metric-card";
import { Chart } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertBanner } from "@/components/ui/alert-banner";
import TransactionVisualization from "@/components/ui/transaction-visualization";
import ActivityTimeline from "@/components/ui/activity-timeline";
import TransactionDetailModal from "@/components/ui/transaction-detail-modal";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Zap,
  DollarSign,
  Smartphone,
  MessageSquare,
  ArrowRight,
  Bell,
  Mail
} from "lucide-react";

export default function DashboardPage() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionFilter, setTransactionFilter] = useState('all');

  // Datos mock para demostración
  const metrics = [
    {
      title: "Transacciones Monitoreadas",
      value: "1,247",
      change: "+12%",
      changeType: "increase",
      icon: <Shield className="w-5 h-5" />,
      color: "primary",
      description: "Últimas 24 horas"
    },
    {
      title: "Alertas Enviadas",
      value: "23",
      change: "-5%",
      changeType: "decrease",
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "warning",
      description: "Transacciones sospechosas"
    },
    {
      title: "Fraudes Detectados",
      value: "3",
      change: "+2",
      changeType: "increase",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "success",
      description: "Bloqueados exitosamente"
    },
    {
      title: "Ahorro Estimado",
      value: "$45,230",
      change: "+18%",
      changeType: "increase",
      icon: <DollarSign className="w-5 h-5" />,
      color: "success",
      description: "Pesos mexicanos"
    }
  ];

  const suspiciousTransactions = [
    {
      id: "TXN-001",
      amount: "$2,500",
      customer: "Juan Pérez",
      method: "Clip",
      status: "Sospechoso",
      risk: "Alto",
      reason: "Monto inusual para este cliente",
      time: "Hace 15 min",
      action: "Requiere revisión"
    },
    {
      id: "TXN-002",
      amount: "$890",
      customer: "María González",
      method: "MercadoPago",
      status: "Sospechoso",
      risk: "Medio",
      reason: "Horario inusual (3:00 AM)",
      time: "Hace 2 horas",
      action: "Monitoreando"
    },
    {
      id: "TXN-003",
      amount: "$1,200",
      customer: "Carlos López",
      method: "Conekta",
      status: "Normal",
      risk: "Bajo",
      reason: "Patrón normal del cliente",
      time: "Hace 4 horas",
      action: "Aprobado"
    }
  ];

  const recentAlerts = [
    {
      id: "ALT-001",
      type: "Telegram",
      message: "🚨 Transacción sospechosa detectada: $2,500 de Juan Pérez",
      time: "Hace 15 min",
      status: "Enviado",
      icon: MessageSquare
    },
    {
      id: "ALT-002",
      type: "WhatsApp",
      message: "⚠️ Actividad inusual: 3 transacciones en 10 minutos",
      time: "Hace 1 hora",
      status: "Enviado",
      icon: Smartphone
    },
    {
      id: "ALT-003",
      type: "Email",
      message: "📊 Reporte diario: 23 alertas, 3 fraudes bloqueados",
      time: "Hace 6 horas",
      status: "Enviado",
      icon: MessageSquare
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Sospechoso":
        return <Badge variant="destructive">Sospechoso</Badge>;
      case "Normal":
        return <Badge variant="secondary">Normal</Badge>;
      case "Revisar":
        return <Badge variant="outline">Revisar</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRiskBadge = (risk) => {
    switch (risk) {
      case "Alto":
        return <Badge variant="destructive">Alto</Badge>;
      case "Medio":
        return <Badge variant="outline">Medio</Badge>;
      case "Bajo":
        return <Badge variant="secondary">Bajo</Badge>;
      default:
        return <Badge variant="secondary">{risk}</Badge>;
    }
  };

  const getActionBadge = (action) => {
    switch (action) {
      case "Requiere revisión":
        return <Badge variant="destructive">Requiere revisión</Badge>;
      case "Monitoreando":
        return <Badge variant="outline">Monitoreando</Badge>;
      case "Aprobado":
        return <Badge variant="secondary">Aprobado</Badge>;
      default:
        return <Badge variant="secondary">{action}</Badge>;
    }
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleTransactionAction = (transactionId, action) => {
    console.log(`Acción ${action} en transacción ${transactionId}`);
    // TODO: Implementar acciones reales
  };

  const handleFilterChange = (filter) => {
    setTransactionFilter(filter);
  };

  const getFilteredTransactions = () => {
    switch (transactionFilter) {
      case 'suspicious':
        return suspiciousTransactions.filter(t => t.status === 'Sospechoso');
      case 'normal':
        return suspiciousTransactions.filter(t => t.status === 'Normal');
      case 'pending':
        return suspiciousTransactions.filter(t => t.status === 'Pendiente');
      default:
        return suspiciousTransactions;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con resumen ejecutivo */}
      <div className="bg-gradient-to-r from-primary-50 to-teal-50 dark:from-primary-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Protección Antifraude en Tiempo Real
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Tu negocio está protegido las 24 horas. Aquí tienes un resumen de la actividad reciente.
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 dark:text-gray-400">Estado del sistema</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">Activo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alertas importantes */}
      <AlertBanner type="warning">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-5 h-5" />
          <div>
            <strong>3 transacciones requieren tu atención</strong>
            <p className="text-sm mt-1">Revisa las transacciones marcadas como "Sospechoso" en la tabla de abajo.</p>
          </div>
        </div>
      </AlertBanner>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            changeType={metric.changeType}
            icon={metric.icon}
            color={metric.color}
            description={metric.description}
          />
        ))}
      </div>

      {/* Gráfico de actividad */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Actividad de Transacciones (Últimas 24 horas)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <Chart />
          </div>
        </CardContent>
      </Card>

      {/* Timeline de actividad */}
      <ActivityTimeline />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visualización de transacciones mejorada */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <span>Transacciones Recientes</span>
                </div>
                <Button variant="outline" size="sm">
                  Ver todas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TransactionVisualization 
                transactions={getFilteredTransactions()}
                onTransactionClick={handleTransactionClick}
                onFilterChange={handleFilterChange}
                currentFilter={transactionFilter}
              />
            </CardContent>
          </Card>
        </div>

        {/* Alertas recientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-blue-500" />
              <span>Alertas Enviadas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <alert.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {alert.type}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" size="sm" className="w-full">
                Ver historial completo de alertas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estado de terminales conectados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-green-500" />
            <span>Terminales Conectados</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100">Clip</h4>
                  <p className="text-sm text-green-700 dark:text-green-200">Terminal físico</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Activo</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100">MercadoPago</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200">Pagos en línea</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Activo</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Conekta</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">No conectado</p>
                </div>
              </div>
              <div className="text-right">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Inactivo</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal de detalles de transacción */}
      <TransactionDetailModal
        transaction={selectedTransaction}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAction={handleTransactionAction}
      />
    </div>
  );
}