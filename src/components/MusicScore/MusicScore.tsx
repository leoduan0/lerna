'use client'

import { useEffect, useRef } from 'react'
import abcjs from 'abcjs'

export default function MusicScore(props: { musicString: string }) {
  const musicRef = useRef(null)

  useEffect(() => {
    if (musicRef.current) {
      abcjs.renderAbc(musicRef.current, props.musicString)
    }
  }, [props.musicString])

  return <div ref={musicRef} className="bg-white w-fit rounded-xl"></div> // w-fit doesn't work
}
