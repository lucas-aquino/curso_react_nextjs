import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <p>Bienvenido :D</p>
      <Link href='/usuarios'>usuarios</Link>
    </div>
  )
}
