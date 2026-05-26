
import './basket.scss'
import { RxCross2 } from "react-icons/rx";

const Basket = ({ setClick, image }) => {
  return (
    <div className="basket">
      <div className="basket__container">
        <RxCross2 onClick={() => setClick(false)} className='basket__cross' />
      </div>
    </div>
  );
}

export default Basket;