export default function Align(props: {
  type: 'center'
  children: React.ReactNode
}): React.ReactNode {
  switch (props.type) {
    case 'center':
      return (
        <div className="flex w-full justify-center">
          <div className="space-y-2">{props.children}</div>
        </div>
      )
  }
}
