import DashBoard from './components/Dashboard'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import TopMenu from './components/TopMenu'


export default function Home() {
  return (
    <div className="">
         <SearchBar/>
             <div className="flex">
             <Sidebar/>
             <div className="">
             <TopMenu/>
             <DashBoard/>
             </div>
           
    </div>
    </div>
  )
  
}
