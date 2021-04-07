import React, { FC } from 'react'
import { AiOutlineSearch } from "react-icons/ai"


interface Props{
  setSearchValue: (args: string) => void;
}

const SearchInput:FC<Props> = ({setSearchValue}) => {


  return (
    <div className="bg-white dark:bg-gray-500 shadow p-2 md:p-4 w-full md:w-2/4 flex my-2 mx-auto rounded-lg">
      <span className="w-auto flex justify-end items-center text-gray-500 dark:text-white p-2">
        <AiOutlineSearch className="text-3xl" />
      </span>
      <input className="w-full rounded p-2" type="text" placeholder="Start Searching topic" onChange={(e) => setSearchValue(e.target.value) } />
      <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
        <p className="font-semibold text-xs ">Search</p>
      </button>
    </div>
  )
}

export default SearchInput
