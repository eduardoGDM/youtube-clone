"use client"; // This is a client component 👈🏽
import { Fragment, useState } from "react";

function Sidebar () {
const [isOpen,setIsOpen] = useState(false);
    return(
        <Fragment>
            <div className="flex flex-col text-sm  h-screen px-6 bg-[#212121]">
                <div className="flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                    <img src="home.svg" alt="menu" className="w-6 h-6"/>
                    <h1 className="px-6">Home</h1>
                        </div>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="explore.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Explore</h1>
                        </div>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="subscriptions.svg" alt="subscription" className="w-6 h-6 "/>
                        <h1 className="px-6">Subscription</h1>
                        </div>
                        <hr className="h-px bg-zinc-600 border-0"></hr>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="library.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Library</h1>
                        </div>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="history.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">History</h1>
                        </div>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="watchLater.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Watch Later</h1>
                        </div>
                        <div className="flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="liked.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Liked Videos</h1>
                        </div>
                        <div className=" relative flex py-2  hover:bg-zinc-500 rounded cursor-pointer">
                        <img onClick={() => setIsOpen((prev) => !prev )} src="arrowBottom.svg" alt="explore" className="w-6 h-6"/>
                        <h1 className="px-6">Show More</h1>
                        </div>
                        <hr className="h-px bg-zinc-600 border-0"></hr>
                        <div className="flex">
                            <span className="text[#AAAAAA] font-bold p-2 ">Subscription</span>
                        </div>
                        <div className="font-sans text-sm cursor-pointer ">
                            <div className="flex hover:bg-zinc-500">
                            <img src="iconUser.svg"/>
                            <h1 className="px-4 py-2">James Marcus</h1>
                            </div>
                            <div className="flex hover:bg-zinc-500">
                            <img src="iconUser.svg"/>
                            <h1 className="px-4 py-2">James Marcus</h1>
                            </div>
                            <div className="flex hover:bg-zinc-500">
                            <img src="iconUser.svg"/>
                            <h1 className="px-4 py-2">James Marcus</h1>
                            </div>
                            <div className="flex hover:bg-zinc-500">
                            <img src="iconUser.svg"/>
                            <h1 className="px-4 py-2">James Marcus</h1>
                            </div>
                            <div className="flex hover:bg-zinc-500">
                            <img src="iconUser.svg"/>
                            <h1 className="px-4 py-2">James Marcus</h1>
                            </div>
                            <div className=" relative flex py-3  hover:bg-zinc-500 rounded cursor-pointer">
                                      <img src="arrowBottom.svg" alt="explore" className="w-6 h-6"/>
                                      <h1 className="px-6">Show 13 more</h1>
                        </div>
                        <hr className="h-px bg-zinc-600 border-0"></hr>
                    </div>
                    <div className="">
                        <h1 className="text[#AAAAAA] font-bold p-2">More from Youtube</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src ="premium.svg"/>
                        <h1 className="p-2 text-">Youtube Premium</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src ="gaming.svg"/>
                        <h1 className="p-2 text-">Gaming</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src ="live.svg"/>
                        <h1 className="p-2 text-">Live</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src ="sports.svg"/>
                        <h1 className="p-2 text-">Sports</h1>
                    </div>
                    <div>
                    <hr className="h-px bg-zinc-600 border-0"></hr>
                    </div>
                    <div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="settings.svg"/>
                        <h1 className="p-2">Settings</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="report.svg"/>
                        <h1 className="p-2">Report history</h1>
                    </div>
                    <div className="flex hover:bg-zinc-500 rounded cursor-pointer">
                        <img src="help.svg"/>
                        <h1 className="p-2">Help</h1>
                    </div>
                    <div className="flex ">
                        <img className="px-1"src="feedback.svg"/>
                        <h1 className="p-2">Send Feedback</h1>
                    </div>
                    
                    </div>
                    <div>
                    <hr className="h-px  bg-zinc-600 border-0"></hr>
                 </div>
                    
                    
                </div>


        </Fragment>
    )
}

export default Sidebar;