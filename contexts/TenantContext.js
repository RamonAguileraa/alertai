"use client";

import { createContext, useContext, useMemo, useState } from "react";

const TenantContext = createContext(undefined);

export function TenantProvider({ children }) {
  const [restaurants, setRestaurants] = useState([
    {
      id: "rest-1",
      name: "Cafetería Aurora",
      address: "Av. Reforma 123, CDMX",
      type: "cafeteria",
      settings: { currency: "MXN", taxRate: 0.16, tipDefault: 0.1 },
      createdAt: new Date().toISOString(),
    },
    {
      id: "rest-2",
      name: "Tacos El Sol",
      address: "Insurgentes 456, CDMX",
      type: "restaurant",
      settings: { currency: "MXN", taxRate: 0.16, tipDefault: 0.1 },
      createdAt: new Date().toISOString(),
    },
  ]);

  const [currentRestaurantId, setCurrentRestaurantId] = useState(null);

  const currentRestaurant = useMemo(
    () => restaurants.find((r) => r.id === currentRestaurantId) || null,
    [restaurants, currentRestaurantId]
  );

  const selectRestaurant = (restaurantId) => {
    setCurrentRestaurantId(restaurantId);
  };

  const value = {
    restaurants,
    setRestaurants,
    currentRestaurant,
    currentRestaurantId,
    selectRestaurant,
  };

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
}

export function useTenant() {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used within a TenantProvider");
  return ctx;
}



