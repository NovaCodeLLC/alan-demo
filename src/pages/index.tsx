import { Inter } from 'next/font/google'
import Header from '@components/components/Header';
import {HomePage} from '@components/styles/home-page';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${HomePage} ${inter.className}`}>
        Home Page
      </main>
    </>
  )
}
