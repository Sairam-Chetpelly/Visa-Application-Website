import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visa Application Website',
  description: 'Explore global destinations with confidence. Our visa guides and travel tips help you plan better and travel smarter.',
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