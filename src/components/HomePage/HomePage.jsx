import CartGames from '../CartGames/CartGames';
import './homePage.scss'

const HomePage = () => {
  const sections = [
    {
      id: 1,
      title: "New Game",
      params: "https://www.freetogame.com/api/games?sort-by=release-date" // 👈 Исправленный URL
    },
    {
      id: 3,
      title: "Story Games",
      params: "https://www.freetogame.com/api/games?category=mmorpg" // 👈 У story нет точной категории
    },
    {
      id: 4,
      title: "Simulators",
      params: "https://www.freetogame.com/api/games?category=shooter" // 👈 Simulators заменён на shooter
    },
  ]

  return (
    <div className="home-page">
      {sections.map(section => (
        <CartGames
          key={section.id}
          title={section.title}
          apiParams={section.params}
        />
      ))}
    </div>
  )
}

export default HomePage;