import { Fragment } from 'react';

const SearchBar = () => {
    return (
        <Fragment>
            <div className="bg-[#212121] flex justify-between w-screen ">
                <div className="flex">
            <img src="hamburger.svg" alt="menu" className="  cursor-pointer"/>
            <img src="youtube.svg" alt="menu" className="cursor-pointer"/>
            </div>
            <div className="flex ">
            <input type="text" class=" text-lg border-gray-200rounded p-0.5 px-20 bg-[#121212] " placeholder="Search" required/>
            <img src="search.svg" alt="menu" className="cursor-pointer"/>
            <div className="px-2">
            <img src="mic.svg" alt="menu" className="w-10 h-10 object-scale-down cursor-pointer rounded-full bg-black"/>
            </div>
        </div>
        <div className="p-2">
            Canal
        </div>
        </div>
    
            
        </Fragment>
    )
}

export default SearchBar;