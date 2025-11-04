import'./Header.css'
import LogoImg from '../../assets/img/Logo.png'
import serchImg from '../../assets/img/serch.png'
import setingsImg from '../../assets/img/setings.png'
import bellImg from '../../assets/img/bell.png'
import BadgeImg from '../../assets/img/Badge.png'
import ProfileImg from '../../assets/img/Profile.png'
import VectorImg from '../../assets/img/Vector.png'
export default function Header() {
  return (
        <>
          <div className="header">
            <div className="Header-box">
                <div className="logo"><img src={LogoImg} alt=""/></div>
                <form className="input-box" action="file:///C:/Users/Megabox/Desktop/arvand/arvand-Bank.html#" method="POST">
                    <img src={serchImg} alt=""/>
                    <input type="search" id="query" placeholder="جستجو"/>
                </form>
            </div>
              <div className="Profile-box">
                <div className="Profile">
                    <div className="icon-Buttoms">
                        <div className="settings">
                            <img src={setingsImg} alt=""/>
                        </div>
                        <div className="box-bell">
                            <img src={bellImg} alt=""/>
                            <div className="badge"><img src={BadgeImg} alt=""/></div>
                        </div>
                    </div>
                    <div className="Specifications">
                        <img src={ProfileImg} alt="عکس کاربر"/>
                        <div className="box-name">
                            <div className="name">
                                <p>علی محمدی</p>
                                <div className="angle-down">
                                    <img src={VectorImg} alt=""/>
                                </div>
                            </div>
                            <p>کاربر عادی</p>
                        </div>
                  </div>
                </div>
              </div>
          </div>
        </>
  )
}