import DashBoard from './components/Dashboard'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'


export default function Home() {
  return (
    <div className="">
         <SearchBar/>
             <div className="flex">
             <Sidebar/>
            <DashBoard/>
    </div>
    </div>
  )
  
}
