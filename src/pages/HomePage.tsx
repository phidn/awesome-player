import DragZoneHome from '../components/DragZoneHome'
import Header from '../components/Header'
import HeroHome from '../components/HeroHome'
import PlayerHome from '../components/PlayerHome'
import TableContents from '../components/TableContents'
import { usePlayerStore } from '../store/usePlayerStore'

function HomePage() {
  const files = usePlayerStore((state) => state.files)

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {files.length === 0 && <HeroHome />}
        {files.length === 0 && <DragZoneHome />}
        {files.length !== 0 && <PlayerHome />}
        {files.length !== 0 && <TableContents />}
      </main>
    </div>
  )
}

export default HomePage
