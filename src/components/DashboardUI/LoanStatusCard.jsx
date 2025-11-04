import './LoanStatusCard.css'
import CalendarImg from '../../assets/img/CalendarIcon.png'
export default function LoanStatusCard() {
  return (
    <>
      <div className="header-section">
        <h3>وضعیت وام</h3>
        <ul>
          <li>
            <span>وام مسکن</span>
          </li>
          <li>
            <span>وام ازدواج</span>
          </li>
          <li>
            <span>وام قرض الحسنه</span>
          </li>
        </ul>
      </div>
      <div className="content-section">
          <div class="chart-container">
          </div>
          <div className="loan-details">
            <div className="details-text">
              <div className="detail-row">
                <span>مبلغ تسویه نشده</span>
                <div className="price-details">
                  <span>۴۵۰,۰۰۰,۰۰۰</span>
                  <span>ریال</span>
                </div>
              </div>
              <div className="detail-row">
                <span>مهلت تسویه</span>
                <div className="price-details">
                  <span>۱۴</span>
                  <span>روز</span>
                  <img src={CalendarImg} alt="" />
                </div>
              </div>
              <div className="detail-row">
                <span>دفعات بازپرداخت مرحله‌ای</span>
                <div className="price-details">
                  <span>۲ از ۳</span>
                </div>
              </div>
            </div>
            <a href="#">
              <button>پرداخت قسط</button>
            </a>
          </div>
      </div>
    </>
  )
}