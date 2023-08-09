import React, { useMemo, useState } from 'react'
import NftDescriptionModal from './DescriptionModal'
import { DateFormatter, resolveIPFS } from './help'
import { EvmNftData } from 'moralis/common-evm-utils'
import Image from 'next/image'

export const NftCard = ({ data }: { data: EvmNftData }) => {
  const { metadata, tokenAddress , tokenId } = data
  const {
    name,
    image_url_png,
    image_data,
    image,
    children,
    birthday,
    description,
    generation,
  } = metadata as Record<string, any>

  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const isMp4 = useMemo(() => {
    return (image as string).endsWith('.mp4')
  }, [image])

  return (
    <React.Fragment>
      <div
        className='max-w-sm bg-white m-2 rounded shadow-md dark:bg-gray-700 dark:border-gray-400'
        onClick={handleShowModal}
      >
        {isMp4 ? (
          <video
            className='p-8 h-64 w-full'
            src={image_url_png || image_data || resolveIPFS(image)}
          />
        ) : (
          <img
            className='p-8 h-64 w-full'
            src={image_url_png || image_data || resolveIPFS(image)}
            alt={name}
          />
        )}
        <div className='px-5 pb-5'>
          <h5 className='text-xl capitalize h-16 font-semibold tracking-tight text-gray-900 dark:text-white'>
            {name.slice(0, 50)}
          </h5>

          {generation ? (
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-gray-800'>
              Generation {generation}
            </span>
          ) : null}

          <div className='flex flex-wrap justify-between items-center mt-5'>
            {children && (
              <span className='text-md font-bold text-gray-900 dark:text-white'>
                Children: {children?.length}
              </span>
            )}

            {birthday && (
              <div className='text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-600 dark:focus:ring-blue-300'>
                <span className='ml-2'>
                  {DateFormatter.yearMonthDate(birthday)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nft description modal */}
      {showModal && (
        <NftDescriptionModal
          token_address={tokenAddress.checksum}
          nftName={name}
          nftDescription={description}
          handleShowModal={handleShowModal}
          tokenId={tokenId.toString() ?? ''}
        />
      )}
    </React.Fragment>
  )
}
