import AppLayout from "@layouts/AppLayout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Fonts
import "@fontsource/bebas-neue";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

// Styles
import "../styles/main.css";

// Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("route-change-scroll-disabled");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("route-change-scroll-disabled");
    });
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes();
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
