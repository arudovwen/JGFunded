import React from "react";
import DashboardLayout from "@/components/layouts/StartUpDashboardLayout";
import IndexComponent from "@/components/startup-dashboard/investor/IndexComponent";

export default function InvestorFinder() {
  return (
    <DashboardLayout>
      <IndexComponent />
    </DashboardLayout>
  );
}
