import Logo from './../../../public/icons/Logo (4).svg'
import { BiSolidBasket } from "react-icons/bi";
const style = { color: "white" };
import Nav from '../Nav/Nav';
import './header.scss'
import { BiColor } from 'react-icons/bi';
import Basket from './../Basket/Basket'
import { useState } from 'react';

const Header = () => {

  const [click, setClick] = useState(false)

  return (
    <header className='header'>
      <div className="container header__container">
        <a href="#"><img src={Logo} alt="logo" className="logo" /></a>
        <Nav />
        <div className="icons">
          <BiSolidBasket onClick={() => setClick(true)} style={style} className="icons-basket" />
        </div>
      </div>
      {click && <Basket setClick={setClick} />}
    </header>
  );
}

export default Header;