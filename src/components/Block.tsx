import Heading from "./Heading"

interface BlockProps {
  children: React.ReactNode
  text?: string
}

function Block({ children, text }: BlockProps) {
  return (
    <div className="w-full space-y-2 rounded-xl border border-WIDGET_BORDER-light bg-WIDGET-light p-4 dark:border-WIDGET_BORDER-dark dark:bg-WIDGET-dark">
      {text && <Heading level={5}>{text}</Heading>}
      {children}
    </div>
  )
}

export default Block
