import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { Header } from '@/src/components/header/header';

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["cyrillic"],
});

const SfPro = localFont({
    src: [
        {
            path: '../public/fonts/sfpro-regular.woff2',
            weight: '400',
        }
    ],
    display: 'swap',
    variable: '--font-sf-pro'
})

export const metadata: Metadata = {
  title: "Домашки по NextJs",
  description: "Учебный проект по NextJs в PurpleSchool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
        <body className={`${OpenSans.variable} ${SfPro.variable}`}>
            <Header />
            <main>
                {children}
            </main>
        </body>
    </html>
  );
}
