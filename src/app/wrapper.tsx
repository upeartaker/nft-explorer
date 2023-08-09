'use client'

import { createConfig, configureChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { SessionProvider } from 'next-auth/react'
import { mainnet } from 'wagmi/chains'

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <SessionProvider refetchInterval={0}>
        {children}
      </SessionProvider>
    </WagmiConfig>
  )
}

export default Wrapper
