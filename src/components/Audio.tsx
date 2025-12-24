interface AudioProps {
  source: string
  type: "mp3" | "wav" | "ogg"
}

function Audio({ source, type }: AudioProps) {
  return (
    <audio controls>
      <source src={source} type={`audio/${type}`} />
      Your browser does not support the audio element.
    </audio>
  )
}

export default Audio
