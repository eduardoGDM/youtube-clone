import React,{Fragment} from "react";
import SideBar from './Sidebar';
import SearchBar from './SearchBar';
const App = () => {
    return (
        <div>
            <Fragment>
                <SearchBar/>
                <SideBar/>
            </Fragment>
        </div>
    )
}

export default App();