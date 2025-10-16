"use client";

import ImprovedLayout from "@/components/ui/improved-layout";

export default function DashboardLayout({ children }) {
  return (
    <ImprovedLayout currentPage="dashboard">
      {children}
    </ImprovedLayout>
  );
}