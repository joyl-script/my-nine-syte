import './image.scss'
import Gta from './../../../public/img/GTA 6 banner.png'
import HomePage from '../HomePage/HomePage';


const Main = () => {
  return (
    <div className="main">
      <img src={Gta} alt="" className='gta' />
      <HomePage />
    </div>
  );
}

export default Main;