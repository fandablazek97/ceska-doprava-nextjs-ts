import { Footer } from "@/layouts/footer";
import { Head } from "@/layouts/head";
import { Navbar } from "@/layouts/navbar";
import { SkipToContent } from "@/layouts/skipToContent";

type AppShellOptions = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellOptions) {
  return (
    <>
      <header>
        <SkipToContent />
        <Head />
        <Navbar />
      </header>
      <main id="reveal-app">{children}</main>
      <Footer />
    </>
  );
}
