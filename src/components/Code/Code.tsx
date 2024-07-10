import { Prism } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Code(props: {
  language: string
  children: React.ReactNode
}): React.ReactNode {
  return (
    <Prism
      language={props.language}
      style={vscDarkPlus}
      className={'rounded-xl'}
    >
      {String(props.children).replace(/\n$/, '')}
    </Prism>
  )
}
