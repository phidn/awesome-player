import { useEffect, useRef } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { Video as VideoType } from '../types/player.type'
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'

function PlayerHome() {
  const playerRef = useRef<APITypes>(null)

  const videoSelected = usePlayerStore(
    (state) => state.videoSelected
  ) as VideoType
  const setVideoSelected = usePlayerStore((state) => state.setVideoSelected)

  const files = usePlayerStore((state) => state.files)

  useEffect(() => {
    if (files.length > 0) {
      setVideoSelected(files[0])
    }
  }, [files])

  const handleNext = () => {
    const index = files.findIndex((file: VideoType) => file.url === videoSelected?.url)
    if (index < files.length - 1) {
      setVideoSelected(files[index + 1])
    }
  }

  const handlePrev = () => {
    const index = files.findIndex((file: VideoType) => file.url === videoSelected?.url)
    if (index > 0) {
      setVideoSelected(files[index - 1])
    }
  }

  return videoSelected?.thumbnail ? (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-8 md:pt-10">
        {/* title of video */}
        <div className="pb-4 md:pb-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            {videoSelected.name}
          </h1>
        </div>

        <div className="relative">
          <Plyr
            ref={playerRef}
            source={{
              type: 'video',
              sources: [
                {
                  src: videoSelected.url,
                  type: 'video/mp4',
                },
              ],
            }}
            options={{
              autoplay: true,
              keyboard: {
                focused: true,
                global: true,
              },
            }}
          />
          <div>
            <button
              type="button"
              className="flex absolute top-1/2 transform -translate-y-1/2 left-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
              onClick={handlePrev}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex absolute top-1/2 transform -translate-y-1/2 right-0 z-30 justify-center items-center px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={handleNext}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default PlayerHome
