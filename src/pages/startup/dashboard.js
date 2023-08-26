import React from "react";
import DashboardLayout from "@/components/layouts/StartUpDashboardLayout";
import IndexComponent from "@/components/startup-dashboard/overview/IndexComponent";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <IndexComponent />
    </DashboardLayout>
  );
}
