import ConnectButton from '@/components/connect/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <Link href={'/nft-explorer'}>NFT浏览器</Link>
     <ConnectButton />
    </main>
  )
}
