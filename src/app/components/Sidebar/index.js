"use client"; // This is a client component 👈🏽
import { Fragment, useState } from "react";

function Sidebar () {
const [isOpen,setIsOpen] = useState(false);
    return(
        <Fragment>
            <div className="flex flex-col h-screen px-6 bg-[#212121]">
                <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                    <img src="home.svg" alt="menu" className="w-6 h-6"/>
                    <h1 className="px-6">Home</h1>
                        </div>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="explore.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Explore</h1>
                        </div>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="subscriptions.svg" alt="subscription" className="w-6 h-6 "/>
                        <h1 className="px-6">Subscription</h1>
                        </div>
                        <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="library.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Library</h1>
                        </div>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="history.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">History</h1>
                        </div>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="watchLater.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Watch Later</h1>
                        </div>
                        <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="liked.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Liked Videos</h1>
                        </div>
                        <div className=" relative flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                        <img onClick={() => setIsOpen((prev) => !prev )} src="arrowBottom.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Show More</h1>
                        </div>
                        <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="flex">
                            <span className="text-neutral-600 font-bold">Subscription</span>
                        </div>



                        </div>
        



        </Fragment>
    )
}

export default Sidebar;