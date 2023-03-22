import { useState } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { getVideoInfo } from '../utils/video'
import Loading from './Loading'

function DragZoneHome() {
  const files = usePlayerStore((state) => state.files)
  const setFiles = usePlayerStore((state) => state.setFiles)

  const [loading, setLoading] = useState(false)

  const handleFiles = async (_files: FileList | null) => {
    if (_files) {
      setLoading(true)
      const result = []
      for (let i = 0; i < _files.length; i++) {
        const file: File = _files[i]
        const url = URL.createObjectURL(file)
        const { thumbnail, duration } = await getVideoInfo(url)

        result.push({
          name: file.name,
          url,
          thumbnail,
          duration: duration,
        })
      }
      setFiles(result)
      Array.from(files).map((file: any) => URL.revokeObjectURL(file))
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-8 md:pt-10 relative">
        <div className="flex items-center justify-center">
          {loading && <Loading />}
        </div>
        <div className="border border-dashed border-gray-500 relative">
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            multiple
            className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
            <h4>
              Drop files anywhere to upload
              <br />
              or
            </h4>
            <p>Select Files</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DragZoneHome
