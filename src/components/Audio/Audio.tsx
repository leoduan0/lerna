export default function Audio(props: {
  source: string
  type: 'mp3' | 'wav' | 'ogg'
}): React.ReactNode {
  return (
    <audio controls>
      <source src={props.source} type={`audio/${props.type}`} />
      Your browser does not support the audio element.
    </audio>
  )
}
