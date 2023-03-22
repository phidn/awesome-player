// get thumbnail of video
export const getThumbnailForVideo = async (videoUrl: string) => {
  const video = document.createElement('video')
  const canvas = document.createElement('canvas')
  video.style.display = 'none'
  canvas.style.display = 'none'

  await new Promise((resolve, reject) => {
    video.addEventListener('loadedmetadata', () => {
      video.width = video.videoWidth
      video.height = video.videoHeight
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      video.currentTime = video.duration * 0.25
    })
    video.addEventListener('seeked', () => resolve(true))
    video.src = videoUrl
  })

  canvas
    ?.getContext('2d')
    ?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
  const imageUrl = canvas.toDataURL('image/png')
  return imageUrl
}

// second to HH:MM:SS
const secondToHHMMSS = (_seconds: number) => {
  const secNum = parseInt(_seconds.toString(), 10)
  const hours = Math.floor(secNum / 3600)
  const minutes = Math.floor((secNum - hours * 3600) / 60)
  const seconds = secNum - hours * 3600 - minutes * 60

  let hoursStr = hours.toString()
  let minutesStr = minutes.toString()
  let secondsStr = seconds.toString()
  if (hours < 10) {
    hoursStr = `0${hours}`
  }
  if (minutes < 10) {
    minutesStr = `0${minutes}`
  }
  if (seconds < 10) {
    secondsStr = `0${seconds}`
  }
  return `${hoursStr}:${minutesStr}:${secondsStr}`
}

// get duration of video
export const getDuration = async (videoUrl: string) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const video = document.createElement('video')
      video.addEventListener('loadedmetadata', () => {
        resolve(secondToHHMMSS(video.duration))
      })
      video.src = videoUrl
    } catch (error) {
      reject(error)
    }
  }).catch(() => '00:00:00')
}

// get info for video
type VIDEO_INFO = {
  thumbnail: string
  duration: string
}
export const getVideoInfo = async (videoUrl: string): Promise<VIDEO_INFO> => {
  const video = document.createElement('video')
  const canvas = document.createElement('canvas')
  video.style.display = 'none'
  canvas.style.display = 'none'

  await new Promise((resolve, reject) => {
    video.addEventListener('loadedmetadata', () => {
      video.width = video.videoWidth
      video.height = video.videoHeight
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      video.currentTime = video.duration * 0.25
    })
    video.addEventListener('seeked', () => resolve(true))
    video.src = videoUrl
  })

  canvas
    ?.getContext('2d')
    ?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
  const imageUrl = canvas.toDataURL('image/png')

  return {
    thumbnail: imageUrl,
    duration: secondToHHMMSS(video.duration),
  }
}
