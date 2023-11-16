import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Artificial Care Plus',
    description: 'O seu lifestyle fitness mais inteligente',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
