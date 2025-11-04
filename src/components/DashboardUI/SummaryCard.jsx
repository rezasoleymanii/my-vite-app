import './SummaryCard.css'
import moneyImg from '../../assets/img/MoneyBillReceive.png'
import walletImg from '../../assets/img/wallet.png'
import GroupImg from '../../assets/img/Group.png'
import Group2Img from '../../assets/img/Group2.png'
import Group6Img from '../../assets/img/Group6.png'
export default function SummaryCard() {
  return (
    <>
      <div className="history">
        <h3>خلاصه کارکرد</h3>
        <div className="data">
          <div className="total-row-black">
            <div className="title">
              <img src={moneyImg} alt="" />
              <span>واریز</span>
            </div>
            <div className="price">
              <span>۱۲۰,۰۰۰,۰۰۰</span>
              <span>ریال</span>
            </div>
          </div>
          <div className="total-row-black">
            <div className="title">
              <img src={moneyImg} alt="" />
              <span>برداشت</span>
            </div>
            <div className="price">
              <span>۱۲۰,۰۰۰,۰۰۰</span>
              <span>ریال</span>
            </div>
          </div>
          <div className="total-row-black">
            <div className="title">
              <img src={walletImg} alt="" />
              <span>پس انداز</span>
            </div>
            <div className="price">
              <span>۱۲۰,۰۰۰,۰۰۰</span>
              <span>ریال</span>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="ad">
            <img src={GroupImg} alt="" />
            <span>بانک اروند؛ امنیت مالی، آسایش فردا</span>
          </div>
          <div className="download-app">
            <span>دریافت مستقیم اروند همراه</span>
            <a href="https://sibapp.com/"><img src={Group6Img} alt="" /></a>
            <a href="https://myket.ir/"><img src={Group2Img} alt="" /></a>
          </div>
        </div>
      </div>
      
    </>
  )
}