import { Heading } from '../'

export default function Block(props: {
  text?: string
  children: React.ReactNode
}): React.ReactNode {
  return (
    <div className="w-full space-y-2 rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800">
      {props.text && (
        <Heading level={5} clickable={false}>
          {props.text}
        </Heading>
      )}
      {props.children}
    </div>
  )
}
