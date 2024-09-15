'use client'

import abcjs from 'abcjs'
import { useEffect, useRef } from 'react'

interface MusicProps {
  music: string
}

function MusicScore({ music }: MusicProps) {
  const musicRef = useRef(null)

  useEffect(() => {
    if (musicRef.current) {
      abcjs.renderAbc(musicRef.current, music)
    }
  }, [music])

  return <div ref={musicRef} className="w-fit rounded-xl bg-white"></div> // w-fit doesn't work
}

export default MusicScore
