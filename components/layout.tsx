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
      <div className="bg-zinc-100 w-lvw h-lvh md:p-3">
        <main className="container-fluid mx-auto bg-zinc-100 w-full h-full rounded-2xl md:border-2 border-zinc-300 overflow-hidden flex flex-col">
          <Navbar />

          <div className="flex flex-1 p-3 md:p-0">
            <Sidebar />

            <div className="flex-1 flex flex-col">
              <PageTransition>{children}</PageTransition>

              <Footer />
            </div>
          </div>
        </main>
      </div>
    );
}
