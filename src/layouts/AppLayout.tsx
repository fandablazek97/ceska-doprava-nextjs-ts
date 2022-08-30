import { Footer } from "@components/root/footer";
import { Head } from "@components/root/head";
import { Navbar } from "@components/root/navbar";
import { SkipToContent } from "@components/root/skipToContent";

type AppShellOptions = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppShellOptions) {
  return (
    <>
      <header>
        <SkipToContent />
        <Head />
        <Navbar />
      </header>
      <main id="main" className="relative">
        <div className="pointer-events-none absolute top-0 right-0 -z-10 h-screen w-screen bg-gradient-to-tr from-body via-body to-secondary opacity-30 md:w-[90vw] lg:h-[1200px] 2xl:h-[1600px]"></div>
        {children}
      </main>
      <Footer />
    </>
  );
}
