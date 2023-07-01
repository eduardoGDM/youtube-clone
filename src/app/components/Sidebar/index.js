import React,{Fragment} from "react";

const Sidebar = () => {
    return(
        <Fragment>
            <div className="h-52 w-56 ">
                 <div className="flex flex-col w-6 h-6">
                        <div className="flex">
                    <img src="home.svg" alt="menu"/>oi
                    <img src="explore.svg" alt="explore"/>
                    <img src="subscriptions.svg" alt="subscription"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;