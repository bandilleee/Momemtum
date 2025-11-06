import { SessionNavBar } from "@/components/layout/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {children}
      </main>
    </div>
  );
}