import './globals.css'

export const metadata = {
  title: 'Adlytics Dashboard',
  description: 'Marketplace Analytics Dashboard',
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
