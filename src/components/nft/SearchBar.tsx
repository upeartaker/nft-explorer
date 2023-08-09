import React, { ChangeEventHandler } from 'react'

export const NftSearchBar = ({
  searchQuery,
  searchNFTs,
  handleChange,
}: {
  searchQuery: string
  searchNFTs?: () => void
  handleChange: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <React.Fragment>
      <div className='shadow p-4 flex mx-2 dark:bg-gray-700 rounded'>
        <span className='w-auto flex justify-center items-center text-grey p-2'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='search'
            className='w-4 text-gray-300'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
            />
          </svg>
        </span>
        <input
          className='w-full rounded p-2 dark:bg-gray-800 dark:text-white focus:bg-gray-200 outline-none'
          type='text'
          value={searchQuery}
          placeholder="Try 'Apes' or 'Mimir Assault'"
          onChange={handleChange}
        />
        <button
          className='bg-blue-600 mx-2 text-white rounded p-2 px-6 hover:bg-blue-500'
          onClick={searchNFTs}
        >
          <p className='font-medium text-lg'>Search</p>
        </button>
      </div>
    </React.Fragment>
  )
}
