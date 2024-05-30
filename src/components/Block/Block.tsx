export default function Block(props: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <div className="space-y-2 rounded-xl bg-neutral-100 p-4 dark:bg-neutral-800">
      {props.children}
    </div>
  )
}
