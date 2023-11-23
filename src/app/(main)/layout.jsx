import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import User from '@/components/User'
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
                <User>
                    <Header />
                    {children}
                </User>
                <Footer />
                <Nav />
            </body>
        </html>
    )
}
