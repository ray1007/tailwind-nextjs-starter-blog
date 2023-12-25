'use client'

import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'

const isVimeo = (url) => {
  if (typeof url !== 'string') {
    return false
  }
  return url.includes('vimeo.com')
}

export default function EmbedVideo({ url, startSec, endSec, caption }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const playerEl = useRef<ReactPlayer>(null)
  const [playing, setPlaying] = useState(false)

  const mm = ('0' + Math.floor(startSec / 60).toString()).slice(-2)
  const ss = ('0' + (startSec % 60).toString()).slice(-2)

  const handleTimestampClick = (e) => {
    e.preventDefault()
    setPlaying(true)
    playerEl.current?.seekTo(startSec, 'seconds')
  }

  const handleProgress = ({ playedSeconds }) => {
    if (playedSeconds > endSec) {
      setPlaying(false)
    }
  }

  return (
    <figure ref={ref}>
      <div className="relative bg-gray-400 pb-9/16">
        <div className="absolute inset-0 h-full w-full">
          {inView && (
            <ReactPlayer
              ref={playerEl}
              width="100%"
              height="100%"
              url={url}
              config={{
                youtube: {
                  playerVars: {
                    start: startSec,
                  },
                },
              }}
              controls
              playing={playing}
              onReady={() => {
                if (isVimeo(url)) {
                  playerEl.current?.seekTo(startSec, 'seconds')
                }
              }}
              onStart={() => {
                setPlaying(true)
              }}
              onEnded={() => {
                setPlaying(false)
              }}
              onProgress={handleProgress}
            />
          )}
        </div>
      </div>
      <figcaption className="italic">
        <button className="text-primary-500" onClick={handleTimestampClick}>
          {mm}:{ss}
        </button>
        {caption && <>：{caption}</>}
      </figcaption>
    </figure>
  )
}
