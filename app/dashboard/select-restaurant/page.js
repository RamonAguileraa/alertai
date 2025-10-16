"use client";

import { useRouter } from "next/navigation";
import { useTenant } from "@/contexts/TenantContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImprovedLayout from "@/components/ui/improved-layout";
import { Store } from "lucide-react";

export default function SelectRestaurantPage() {
  const router = useRouter();
  const { restaurants, selectRestaurant } = useTenant();

  const handleSelect = (id) => {
    selectRestaurant(id);
    router.push("/dashboard");
  };

  return (
    <ImprovedLayout currentPage="dashboard">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Selecciona tu negocio</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Administra múltiples restaurantes y sucursales con Klara POS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurants.map((r) => (
            <Card key={r.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <Store className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{r.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{r.address}</p>
                    <div className="mt-2">
                      <Badge variant="secondary">{r.type}</Badge>
                    </div>
                  </div>
                </div>
                <Button onClick={() => handleSelect(r.id)}>Entrar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </ImprovedLayout>
  );
}



