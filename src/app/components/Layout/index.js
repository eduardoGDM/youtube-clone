import { Fragment } from "react";
import SearchBar from './SearchBar';
import SideBar from './Sidebar';
const App = () => {
    return (
        <div>
            <Fragment>
                <div>
                <SearchBar/>
                </div>
               <div className="h-screen justify-start">
                     <SideBar/>
               </div>
                
            </Fragment>
        </div>
    )
}

export default App();