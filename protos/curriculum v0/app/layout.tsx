import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Lora, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const sans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' })
const serif = Lora({ subsets: ['latin'], variable: '--font-lora' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-plex-mono' })

export const metadata: Metadata = {
  title: '[Votre nom] — Conseiller pédagogique universitaire',
  description: "Conseil pédagogique, technopédagogie et intégration raisonnée du numérique et de l'IA dans l'enseignement supérieur.",
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="bg-background"><body className={`${sans.variable} ${serif.variable} ${mono.variable} font-sans antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
