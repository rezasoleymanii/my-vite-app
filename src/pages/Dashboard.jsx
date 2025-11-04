import './Dashboard.css'
import Header from '../components/DashboardUI/Header'
import Sidebar from '../components/DashboardUI/Sidebar'
import CardInfo from '../components/DashboardUI/CardInfo'
import Transactions from '../components/DashboardUI/Transactions'
import LoanStatusCard from '../components/DashboardUI/LoanStatusCard'
import SummaryCard from '../components/DashboardUI/SummaryCard'
export default function Dashboard() {
  return (
    <>
      <Header />
      <div className='center'>
        <Sidebar />
        <div className="min-center">
          <CardInfo />
          <Transactions />

          <div className="loan-banner-summary">
            <div className="container">
              <LoanStatusCard />
            </div>

            <div className="history-banner">
              <SummaryCard />
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
