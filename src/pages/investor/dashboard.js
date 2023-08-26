import DashboardLayout from "@/components/layouts/DashboardLayout";
import React from "react";
import IndexComponent from "@/components/dashboard/overview/IndexComponent";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <IndexComponent />
    </DashboardLayout>
  );
}
