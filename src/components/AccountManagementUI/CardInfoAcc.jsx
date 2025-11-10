import '../DashboardUI/CardInfo.css'
import iconImg from '../../assets/img/iconTitel.png'
import plusImg from '../../assets/img/plusSquare.png'
import creditImg from '../../assets/img/creditCardEdit.png'
import fileImg from '../../assets/img/fileExport.png'
import logoImg from '../../assets/img/imgLogo.png'
import EyeImg from '../../assets/img/EyeSlashLcon.png'
import dollarImg from '../../assets/img/dollarSendCircle.png'
import LineImg from '../../assets/img/Line.png'
import fileListImg from '../../assets/img/fileListCheck.png'
import menuImg from '../../assets/img/menu.png'
export default function CardInfoAcc() {
  return (
    <>
        <div className="titele">
          <img src={iconImg} alt="icon-titel" />
          <h2>مدیریت حساب</h2>
        </div>
        <div className="cards">
          <div className="cards-header">
            <h2>سپرده</h2>
            <div className="option">
              <div className="icon-Button"><img src={plusImg} alt="" /></div>
              <div className="icon-Button"><img src={creditImg} alt="" /></div>
              <div className="icon-Button"><img src={fileImg} alt="" /></div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-number">
                <img src={logoImg} alt="" />
                <span>۲۳۹۴  ۱۴۷۸  ۳۲۵۶  ۹۰۶۵</span>
              </div>
              <div className="balance">
                <div className="balance-info-container">
                  <span>موجودی</span>
                  <img src={EyeImg} alt="" />
                </div>
                <div className="card-balance">
                  <span>۱۷۵,۰۸۷,۰۰۰</span>
                  <span>ریال</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-buttons">
                <button>
                  <img src={dollarImg} alt="" />
                  <span>سایر</span>
                </button>
                <img src={LineImg} alt="" />
                <button>
                  <img src={fileListImg} alt="" />
                    <span>قبض</span>
                </button>
                <img src={LineImg} alt="" />
                <button>
                  <img src={menuImg} alt="" />
                  <span>انتقال</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}