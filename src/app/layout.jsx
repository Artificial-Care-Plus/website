import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Artificial Care Plus',
    description: 'O seu lifestyle fitness mais inteligente',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body
                className={inter.className + ' flex flex-col justify-between'}
            >
                {children}
            </body>
        </html>
    )
}
