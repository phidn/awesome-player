import { usePlayerStore } from '../store/usePlayerStore'
import { Video } from '../types/player.type'
import CardPreview from './CardPreview'

function TableContents() {
  const files = usePlayerStore((state) => state.files) as Video[]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-8 md:pt-10">
        <div className="flex flex-col items-center justify-center mb-8">
          {files?.map((file, index) => (
            <CardPreview key={file.name} {...file} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TableContents
