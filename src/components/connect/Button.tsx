'use client'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi'
import { useAuthRequestChallengeEvm } from '@moralisweb3/next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function ConnectButton() {
  const { connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()
  const { isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const { requestChallengeAsync } = useAuthRequestChallengeEvm()
  const { push } = useRouter()

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync()
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    })

    const res = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    })

    const message = res?.message ?? ''

    const signature = await signMessageAsync({ message })

    const data = await signIn('moralis-auth', {
      message,
      signature,
      redirect: false,
      callbackUrl: '/account',
    })
    console.log('connect:', signature, message, data)
    if (data?.url) {
      push(data.url)
    }
  }

  return (
    <div>
      <button
        className='bg-blue-600 mx-2 text-white rounded p-2 px-6 hover:bg-blue-500'
        onClick={handleAuth}
      >
        Authenticate via Metamask
      </button>
    </div>
  )
}

export default ConnectButton
