'use client'

import abcjs from 'abcjs'
import { useEffect, useRef } from 'react'

export default function MusicScore(props: { musicString: string }) {
  const musicRef = useRef(null)

  useEffect(() => {
    if (musicRef.current) {
      abcjs.renderAbc(musicRef.current, props.musicString)
    }
  }, [props.musicString])

  return <div ref={musicRef} className="w-fit rounded-xl bg-white"></div> // w-fit doesn't work
}
