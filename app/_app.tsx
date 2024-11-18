// other import
import { useRouter } from "next/router";
import { useEffect } from "react";
import formbricks from "@formbricks/js";
import type { AppProps } from 'next/app';
import React from 'react';
import CookieBanner from "@/components/cookieBanner";

if (typeof window !== "undefined") {
    formbricks.init({
        environmentId: "cm3dcqe5n000ibdyttbzj3ez4", 
        apiHost: "https://forms.orenyi.com",
    });
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange;
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return  (
    <>
        <Component {...pageProps} />
        <CookieBanner />
    </>
  );
}
