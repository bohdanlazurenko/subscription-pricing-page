import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subscription Pricing Page',
  description: 'A beautiful pricing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}