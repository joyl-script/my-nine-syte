import './footer.scss'
import Logo from './../../../public/icons/_847692912.svg'
import Twitter from './../../../public/icons/twitter (1).svg'
import Instagram from './../../../public/icons/instagram (1).svg'
import Twitch from './../../../public/icons/twitch.svg'
import Youtube from './../../../public/icons/youtube.svg'
import Facebook from './../../../public/icons/facebook.svg'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer-section">
          <a href="#"><img src={Logo} alt="logo" className='footer__img' /></a>
          <div className="footer-contact">
            <div className="footer-hed">
              <a href='#' className="footer-hed__title">CONTATO</a>
              <a href='#' className="footer-hed__title">SOBRE</a>
              <a href='#' className="footer-hed__title">SUPORTE</a>
              <a href='#' className="footer-hed__title">Empregos</a>
            </div>
            <p className="footer-concat__desc">©2023 Rockstar Games, Inc.    -    YWR Studio.  </p>
          </div>
          <div className="footer-coz">
            <a href="#"><img src={Twitch} alt="" /></a>
            <a href="#"><img src={Instagram} alt="" /></a>
            <a href="#"><img src={Twitter} alt="" /></a>
            <a href="#"><img src={Youtube} alt="" /></a>
            <a href="#"><img src={Facebook} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;