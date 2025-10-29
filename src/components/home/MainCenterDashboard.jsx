import '../../components/home/Dashboard.css'
import iconTitelImg from '../../assets/img/iconTitel.png'
import creditCardEditImg from '../../assets/img/creditCardEdit.png'
import plusSquareImg from '../../assets/img/plusSquare.png'
import fileExportImg from '../../assets/img/fileExport.png'
import imgLogoImg from '../../assets/img/imgLogo.png'
import EyeSlashLconImg from '../../assets/img/EyeSlashLcon.png'
import DoollarSendCircleImg from '../../assets/img/DoollarSendCircle.png'
import LineImg from '../../assets/img/Line.png'
import fileListCheckImg from '../../assets/img/fileListCheck.png'
import menuImg from '../../assets/img/menu.png'
import CalendarIconImg from '../../assets/img/CalendarIcon.png'
import MoneyBillReceiveImg from '../../assets/img/MoneyBillReceive.png'
import walletImg from '../../assets/img/wallet.png'
import GroupImg from '../../assets/img/Group.png'
import Group6Img from '../../assets/img/Group6.png'
import Group2Img from '../../assets/img/Group2.png'
export default function MainCenterDashboard() {
    return(
        <div className='min-center'>
            <div className="titele">
                    <img src={iconTitelImg} alt="icon-titel" />
                    <h2>داشبورد</h2>
                </div>
                <div className="cards">
                    <div className="cards-header">
                        <h2>کارت‌ها</h2>
                        <div className="option">
                            <div className="icon-Button"><img src={creditCardEditImg} alt="" /></div>
                            <div className="icon-Button"><img src={plusSquareImg} alt="" /></div>
                            <div className="icon-Button"><img src={fileExportImg} alt="" /></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-number">
                                <img src={imgLogoImg} alt="" />
                                <span>۲۳۹۴  ۱۴۷۸  ۳۲۵۶  ۹۰۶۵</span>
                            </div>
                            <div className="balance">
                                <div className="balance-info-container">
                                    <span>موجودی</span>
                                    <img src={EyeSlashLconImg} alt="" />
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
                                    <img src={DoollarSendCircleImg} alt="" />
                                    <span>سایر</span>
                                </button>
                                <img src={LineImg} alt="" />
                                <button>
                                    <img src={fileListCheckImg} alt="" />
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
                <div className="table">
                    <div className="header-table">
                        <h2>تراکنش‌های اخیر</h2>
                        <a href="#">مشاهده بیشتر</a>
                    </div>
                    <div className="transaction">
                        <table>
                        <tbody>
                            <tr>
                                <th>نوع تراکنش</th>
                                <th>مبلغ</th>
                                <th>تاریخ</th>
                                <th>وضعیت</th>
                            </tr>
                            <tr>
                                <td>
                                    <span>واریز</span>
                                </td>
                                <td>
                                    <span>۳۱۱٬۴۴۰٬۰۰۰</span>
                                    <span>ریال</span>
                                </td>
                                <td>
                                    <span>۱۴۰۳/۲/۶  ۲۱:۱۵</span>
                                </td>
                                <td className="true">
                                    <span>موفق</span>
                                </td>
                                
                                {/* <td className="false">
                                    <span>ناموفق</span>
                                </td>
                                */}
                                
                            </tr>
                            <tr>
                                <td>
                                    <span>برداشت</span>
                                </td>
                                <td>
                                    <span>۳۹٬۱۱۰٬۰۰۰</span>
                                    <span>ریال</span>
                                </td>
                                <td>
                                    <span>۱۴۰۳/۱/۶  ۱۵:۱۳</span>
                                </td>
                                <td className="true">
                                    <span>موفق</span>
                                </td>
                                
                                {/* <td className="false">
                                    <span>ناموفق</span>
                                </td> */}
                            
                            </tr>
                            <tr>
                                <td>
                                    <span>برداشت</span>
                                </td>
                                <td>
                                    <span>۱۹۲٬۳۵۰٬۰۰۰</span>
                                    <span>ریال</span>
                                </td>
                                <td>
                                    <span>۱۴۰۳/۴/۳  ۱۲:۱۲</span>
                                </td>
                                <td className="false">
                                    <span>ناموفق</span>
                                </td>

                                {/* <td className="true">
                                    <span>موفق</span>
                                </td> */}
                                
                                
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <div className="loan-banner-summary">
                    <div className="container">
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
                            <div className="chart-container">
                                <canvas id="loanProgressChart"></canvas>
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
                                            <img src={CalendarIconImg} alt="" />
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
                    </div>
                    <div className="history-banner">
                        <div className="history">
                            <h3>خلاصه کارکرد</h3>
                            <div className="data">
                                <div className="total-row-black">
                                    <div className="title">
                                        <img src={MoneyBillReceiveImg} alt="" />
                                        <span>واریز</span>
                                    </div>
                                    <div className="price">
                                        <span>۱۲۰,۰۰۰,۰۰۰</span>
                                        <span>ریال</span>
                                    </div>
                                </div>
                                <div className="total-row-black">
                                    <div className="title">
                                        <img src={MoneyBillReceiveImg} alt="" />
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
                </div>
        </div>
    )
}