"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import PageTransition from "./pageTransition";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
      <div className="w-full h-screen bg-zinc-100 md:p-3">
        <main className="h-full bg-zinc-100 rounded-2xl md:border-2 border-zinc-300 flex flex-col overflow-hidden">
          <Navbar />

          <div className="flex flex-1 overflow-hidden">
            <Sidebar />

            <div className="flex-1 overflow-y-auto">
              <PageTransition>{children}</PageTransition>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    );
}
