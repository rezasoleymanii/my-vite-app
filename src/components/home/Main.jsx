import '../home/Main.css'
import SideBar from '../home/SideBar'
import MainCenterDashboard from '../home/MainCenterDashboard'
export default function Main() {
    return(
        <div className='center'>
            <SideBar />
            <MainCenterDashboard />
        </div>
    )
}