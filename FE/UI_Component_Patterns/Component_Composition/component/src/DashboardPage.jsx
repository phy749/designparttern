import DashboardLayout from "./DashboardLayout";
import { Sidebar } from "./Sidebar";
import { Card } from "./Card";

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.Sidebar>
        <Sidebar />
      </DashboardLayout.Sidebar>

      <div className="flex-1 flex flex-col">
        <DashboardLayout.Header>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </DashboardLayout.Header>

        <DashboardLayout.Content>
          <div className="grid grid-cols-3 gap-4">
            <Card title="Users">128</Card>
            <Card title="Revenue">$3,200</Card>
            <Card title="Orders">45</Card>
          </div>
        </DashboardLayout.Content>
      </div>
    </DashboardLayout>
  );
};
