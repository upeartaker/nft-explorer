import React from 'react'
import { NftCard } from './Card'
import { EvmNft } from 'moralis/common-evm-utils'

export const NftCardContainer = ({
  searchResult,
  loading,
}: {
  searchResult: Array<EvmNft>
  loading: boolean
}) => {
  return (
    <React.Fragment>
      <section
        className={`grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
       ${loading ? 'opacity-5 transition-opacity' : null}`}
      >
        {searchResult?.length > 0 ? (
          searchResult?.map((nft, index) => <NftCard data={nft} key={index} />)
        ) : (
          <h3 className='dark:text-gray-400 mx-2'>
            No Result found. Try `apes`
          </h3>
        )}
      </section>
    </React.Fragment>
  )
}
