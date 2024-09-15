import Heading from './Heading'

interface BlockProps {
  children: React.ReactNode
  text?: string
}

function Block({ children, text }: BlockProps) {
  return (
    <div className="w-full space-y-2 rounded-xl border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-600 dark:bg-neutral-800">
      {text && <Heading level={5}>{text}</Heading>}
      {children}
    </div>
  )
}

export default Block
