'use client'
import React, { useState, useEffect, ChangeEvent, useMemo } from 'react'
import { NftSearchBar } from '@/components/nft/SearchBar'
import { useEvmSearchNFTs } from '@moralisweb3/next'
import { EvmChain } from 'moralis/common-evm-utils'
import { NftCardContainer } from '@/components/nft/CardContainer'

const NftExplore = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [preSearchQuery, setPreSearchQuery] = useState('')
  const [searchTrigger, setSearchTrigger] = useState(0)

  const [chain, _] = useState(EvmChain.ETHEREUM.apiHex)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreSearchQuery(e?.target?.value ?? '')
  }

  useEffect(() => {
    if (preSearchQuery.length <= 3) return
    setSearchQuery(preSearchQuery)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTrigger])

  const { data, isFetching } = useEvmSearchNFTs({
    q: searchQuery || 'bored',
    chain: chain,
    filter: 'name',
    limit: 30,
  })

  const searchNfts = () => {
    setSearchTrigger((pre) => ++pre)
  }

  const searchResult = useMemo(() => {
    return data?.map((d) => d.token) || []
  }, [data])

  return (
    <React.Fragment>
      {/* NFT search bar section */}
      <NftSearchBar
        searchQuery={preSearchQuery}
        handleChange={handleChange}
        searchNFTs={searchNfts}
      />
      <NftCardContainer searchResult={searchResult} loading={isFetching} />
    </React.Fragment>
  )
}

export default NftExplore
