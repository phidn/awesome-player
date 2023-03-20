import Header from '../components/Header'
import HeroHome from '../components/HeroHome'

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <HeroHome />
    </div>
  )
}

export default HomePage
