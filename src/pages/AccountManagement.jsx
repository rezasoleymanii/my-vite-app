import './Dashboard.css'
import Header from '../components/DashboardUI/Header'
import Sidebar from '../components/DashboardUI/Sidebar'
import CardInfoAcc from '../components/AccountManagementUI/CardInfoAcc'
import ActivityChart from '../components/AccountManagementUI/ActivityChart'
import  TransactionsTable from '../components/AccountManagementUI/TransactionsTable'
export default function AccountManagement() {
  return (
    <>
      <Header />
      <div className='center'>
        <Sidebar />
        <div className="min-center">
          <CardInfoAcc />
          <ActivityChart />
          <TransactionsTable />
        </div>
      </div>  
    </>
  )
}
