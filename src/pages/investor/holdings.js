import React from "react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import IndexComponent from "@/components/dashboard/holdings/IndexComponent";

export default function Holdings() {
  return (
    <DashboardLayout>
      <IndexComponent />
    </DashboardLayout>
  );
}
