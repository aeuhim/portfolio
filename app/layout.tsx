import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aeuhim',
  description: 'A curious individual with a deep passion for philosophy, science, and technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
