import Heading from "./Heading"

interface BlockProps {
  children: React.ReactNode
  text?: string
}

function Block({ children, text }: BlockProps) {
  return (
    <div className="w-full space-y-2 rounded-xl border border-widget-border bg-widget p-4">
      {text && <Heading level={5}>{text}</Heading>}
      {children}
    </div>
  )
}

export default Block
