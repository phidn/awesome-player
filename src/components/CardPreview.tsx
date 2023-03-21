import { useState } from 'react'
import clsx from 'clsx'
import { Video } from '../types/player.type'
import { usePlayerStore } from '../store/usePlayerStore'

function CardPreview(video: Video) {
  const { name, thumbnail, duration, url } = video
  const [isFavorite, setIsFavorite] = useState(false)
  const setVideoSelected = usePlayerStore((state) => state.setVideoSelected)
  const videoSelected = usePlayerStore((state) => state.videoSelected) as Video
  const isPreviewSelected = videoSelected?.url === url

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setIsFavorite((prev) => !prev)
  }

  return (
    <div className="relative w-full" onClick={() => setVideoSelected(video)}>
      <div
        className={clsx(
          'shadow-lg rounded-lg mt-6 cursor-pointer transition-colors text-gray-500 group',
          {
            'cursor-default': isPreviewSelected,
          }
        )}
      >
        <div className="flex">
          <div className="w-48 h-28 overflow-hidden">
            <img
              className={clsx(
                'w-full h-full object-cover rounded hidden md:block hover:scale-110 transform transition duration-500 cursor-pointer',
                {
                  'cursor-default': isPreviewSelected,
                }
              )}
              src={thumbnail}
            />
          </div>
          <div className="w-full px-8">
            <h3
              className={clsx(
                'text-2xl font-medium line-clamp-2 group-hover:text-gray-400',
                {
                  'text-gray-400 cursor-text': isPreviewSelected,
                }
              )}
            >
              {name}
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex items-center justify-between pl-48 pr-8 text-gray-500">
          <div className="flex space-x-1 my-4 items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-md">{duration}</p>
          </div>
          <button
            className={clsx({
              'hover:text-red-500': !isFavorite,
              'text-red-500': isFavorite,
            })}
            onClick={handleFavorite}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPreview
