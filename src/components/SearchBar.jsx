function SearchBar(){
    return <div>
        <div className="w-[550px] rounded-[40px] relative bg-transparent">
            <input type="text" placeholder="Search" className=" bg-transparent w-[550px] h-10 rounded-[40px] ps-4 font-roboto font-normal placeholder-gray-500 text-gray-500 border-[1px] border-gray-200 border-solid text-[16px]" />
            <div className="absolute top-0 right-0 h-10 w-16 bg-gray-100 z-[-10] rounded-tr-[40px] rounded-br-[40px] border-l-[1px] border-solid border-gray-200 flex justify-center items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    </div>
}

export default SearchBar;