import NextLink from 'next/link'

export default function Heading(props: {
  level: 1 | 2 | 3 | 4 | 5
  children: React.ReactNode
}): React.ReactNode {
  const text: string | undefined = props.children?.toString()
  const link: React.ReactNode = <NextLink href={`#${text}`}>{text}</NextLink>

  switch (props.level) {
    case 1:
      return (
        <h1
          className="text-theme text-4xl font-bold transition hover:text-blue-500"
          id={text}
        >
          {link}
        </h1>
      )
    case 2:
      return (
        <h2
          className="text-theme text-3xl font-bold transition hover:text-blue-500"
          id={text}
        >
          {link}
        </h2>
      )
    case 3:
      return (
        <h3
          className="text-theme text-2xl font-bold transition hover:text-blue-500"
          id={text}
        >
          {link}
        </h3>
      )
    case 4:
      return (
        <h4
          className="text-theme text-xl font-bold transition hover:text-blue-500"
          id={text}
        >
          {link}
        </h4>
      )
    case 5:
      return (
        <h5
          className="text-theme text-lg font-bold transition hover:text-blue-500"
          id={text}
        >
          {link}
        </h5>
      )
  }
}
