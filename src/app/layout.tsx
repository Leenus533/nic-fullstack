import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "What's On at the National Ice Centre - National Ice Centre",
  description:
    "See what's on at the National Ice Centre during the year, including skating lessons, theme parties, ice sports, clinics and more!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="https://kit.fontawesome.com/a44ee0c224.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
