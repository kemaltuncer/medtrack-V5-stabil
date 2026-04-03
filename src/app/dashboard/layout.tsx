import ModernNavbar from "@/components/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020408]">
      <ModernNavbar />
      <div className="pt-32">
        {children}
      </div>
    </div>
  );
}
