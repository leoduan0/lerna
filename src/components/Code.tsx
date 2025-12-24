import { Prism } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeProps {
  language: string
  children: React.ReactNode
}

function Code({ children, language }: CodeProps) {
  return (
    <Prism language={language} style={vscDarkPlus} className="rounded-xl">
      {String(children).replace(/\n$/, "")}
    </Prism>
  )
}

export default Code
