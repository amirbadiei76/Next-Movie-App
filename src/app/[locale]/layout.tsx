import type { Metadata } from "next";
import Layout from "@/src/components/shared/layout/Layout";
import "./globals.css";
import { MovieContextProvider } from "@/src/context/MovieContext";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';
import QueryProvider from "@/src/react-query/QueryProvider";
 

export const metadata: Metadata = {
  title: "Movie App",
  description: "Get Latest Movies with best quality",
};

export default async function LocaleLayout({
  // children,
  children,
  params
}:
  {
    children: React.ReactNode;
    params: Promise<{locale: string}>;
  }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
      <html
        lang={locale}
        dir={`${locale === 'fa' ? 'rtl' : 'ltr'}`}
      >
          <head>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
          </head>
          <body>
              <NextIntlClientProvider>
                  <QueryProvider>
                      <MovieContextProvider>
                          <Layout >
                              {children}
                          </Layout>
                      </MovieContextProvider>
                  </QueryProvider>
              </NextIntlClientProvider>
          </body>
      </html>
  );
}
