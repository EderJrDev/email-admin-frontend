"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@radix-ui/themes/styles.css";
import "@/css/satoshi.css";
import "@/css/style.css";

import React, { useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

import Loader from "@/components/common/Loader";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <Theme>
            <QueryClientProvider client={queryClient}>
              <NextAuthSessionProvider>
                {loading ? <Loader /> : children}
              </NextAuthSessionProvider>
            </QueryClientProvider>
          </Theme>
        </div>
      </body>
    </html>
  );
}
