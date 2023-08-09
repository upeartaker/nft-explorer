import React from 'react'
import { NftHistoryTable } from './HistoryTable'

export default function NftDescriptionModal({
  nftName,
  nftDescription,
  handleShowModal,
  token_address,
  tokenId
}: {
  nftName: string
  nftDescription: string
  handleShowModal: () => void
  token_address: string
  tokenId:string
}) {
  return (
    <React.Fragment>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-5'>
        <div className='relative my-6 mx-auto w-9/12 max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg dark:bg-gray-700 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-3xl font-semibold dark:text-white capitalize'>
                {nftName}
              </h3>
              <button
                className='p-1 ml-auto dark:bg-gray-700 bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={handleShowModal}
              >
                <span className='bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <p className='my-4 dark:text-white text-lg leading-relaxed'>
                {nftDescription}
              </p>
            </div>
            <h3 className='p-5 text-2xl font-semibold dark:text-white'>
              NFT Histories
            </h3>
            <div className='p-6 border-t border-solid border-blueGray-200 rounded-b'>
              <NftHistoryTable nftAddress={token_address} tokenId={tokenId} />
            </div>
            <button
              className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              type='button'
              onClick={handleShowModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </React.Fragment>
  )
}
