export default function Heading(props: {
  level: 1 | 2 | 3 | 4 | 5
  children: React.ReactNode
}): React.ReactNode {
  switch (props.level) {
    case 1:
      return <h1 className="text-theme text-4xl font-bold">{props.children}</h1>
    case 2:
      return <h2 className="text-theme text-3xl font-bold">{props.children}</h2>
    case 3:
      return <h3 className="text-theme text-2xl font-bold">{props.children}</h3>
    case 4:
      return <h4 className="text-theme text-xl font-bold">{props.children}</h4>
    case 5:
      return <h5 className="text-theme text-lg font-bold">{props.children}</h5>
  }
}
