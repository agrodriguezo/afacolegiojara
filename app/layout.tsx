import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { League_Spartan } from 'next/font/google'
import FormbricksProvider from "@/utils/formbricks";
import Image from "next/image";
import LogoFT from '@/lib/images/LogoFT.png'
import CookieBanner from "@/components/cookieBanner";
import { Suspense } from 'react'

const league_Spartan = League_Spartan({
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan',
})


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AFA Colegio Jara",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={'font-leaguespartan ' + league_Spartan.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
          <FormbricksProvider />
          </Suspense>
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-2 items-center">
              <div className="w-full border-b border-b-foreground/10 h-16">
                <nav className="sm:container flex justify-between items-center h-16">
                    <div className=" flex justify-between items-center p-3 px-5 text-sm">
                      <div className="flex gap-8 justify-center items-center">
                        <div className="flex flex-col items-center font-leaguespartan font-semibold text-3xl text-[#373F4E] ">
                          <Link href={"/"} className="shdow leading-[1]">A<span className="text-[#FFD701]">F</span>A</Link>
                          <div className="flex items-center gap-2 text-sm leading-[1]">
                            Colegio Jara
                          </div>
                        </div>

                      </div>
                      {/*!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />*/}
                    </div>
                    <ul className="flex flex-row gap-6 pr-4">
                      <li>
                        <Link href="#quees">¿Qué es la AFA?</Link>
                      </li>
                      <li>
                        <Link href="#inscribirse">Inscribirse</Link>
                      </li>
                    </ul>
                </nav>
              </div>
              <div className="w-full flex flex-col gap-20 sm:p-5">
                {children}
              </div>
              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16 bg-[#363e4f] text-[#ffffff]">
                <ul className="flex flex-row gap-6">
                  <li><Link href="/politica-privacidad">Política de privacidad</Link></li>
                  <li><Link href="politica-de-cookies">Política de cookies</Link></li>

                </ul>
              </footer>
            </div>
          </main>
          <CookieBanner />
        </ThemeProvider>
        
      </body>
    </html>
  );
}
