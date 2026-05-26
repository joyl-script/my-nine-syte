import { useState, useEffect } from 'react';
import { BiSolidBasket } from "react-icons/bi";
import './cartGames.scss';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

const style = { color: "white", width: '40px', cursor: 'pointer' };

const CartGames = (props) => {
  const {
    visibleCount = 5,
    title = 'New Game',
    apiParams = ''
  } = props;

  const [startIndex, setStartIndex] = useState(0);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const VISIBLE_COUNT = visibleCount;

  async function getGames() {
    setLoading(true);
    try {
      const url = apiParams || 'https://www.freetogame.com/api/games';
      const resp = await fetch(url);
      const data = await resp.json();

      const gamesData = data.map(game => ({
        id: game.id,
        image: game.thumbnail,
        name: game.name,
      }));

      setGames(gamesData);
    } catch (error) {
      console.error('Ошибка загрузки игр:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getGames();
  }, [apiParams]);

  function nextSlide() {
    if (startIndex + VISIBLE_COUNT < games.length) {
      setStartIndex(startIndex + 1);
    }
  }

  function prevSlide() {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  }

  const visibleGames = games.slice(startIndex, startIndex + VISIBLE_COUNT);

  function addToBasket(gameId) {
    console.log('Добавлено в корзину:', gameId);
    // Здесь будет логика добавления в корзину
  }

  if (loading) {
    return <div className="cart">Загрузка...</div>;
  }

  return (
    <div className="cart">
      <div className="container cart__container">
        <h1 className="cart__title">{title}</h1>
        <div className="cart-wrapper">
          <button className='arrow' onClick={prevSlide}>
            <GrFormPreviousLink className='arrow-prev' style={style} />
          </button>

          <div className="cart-block">
            {visibleGames.map((game) => (
              <div key={game.id} className="game-card">
                <div className="game-image-wrapper">
                  <img
                    src={game.image}
                    className='cart__img'
                    alt={game.name}
                  />
                  <p>{game.name}</p>
                  <button
                    className='cart__basket-btn'
                    onClick={() => addToBasket(game.id)}
                  >
                    <BiSolidBasket className='cart__basket' />
                  </button>
                </div>
                <p className="cart__name">{game.name}</p>
              </div>
            ))}
          </div>

          <button className='arrow' onClick={nextSlide}>
            <GrFormNextLink className='arrow-next' style={style} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartGames;