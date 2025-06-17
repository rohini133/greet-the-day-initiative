
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    // Add dark class to html element for dark mode
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0F1026';
    
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0F1026] font-montserrat">
      <Header />
      <main className="flex-grow bg-[#0F1026]">{children}</main>
      <Footer />
    </div>
  );
}
