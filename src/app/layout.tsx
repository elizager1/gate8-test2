import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow V4.0',
  description: 'Autonomous multi-agent development powered by AI',
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
