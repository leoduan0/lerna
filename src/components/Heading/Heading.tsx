import NextLink from 'next/link'

export default function Heading(props: {
  level: 1 | 2 | 3 | 4 | 5
  children: string
}): React.ReactNode {
  switch (props.level) {
    case 1:
      return (
        <h1
          className="text-theme text-4xl font-bold transition hover:text-blue-500"
          id={props.children}
        >
          <NextLink href={`#${props.children}`}>{props.children}</NextLink>
        </h1>
      )
    case 2:
      return (
        <h2
          className="text-theme text-3xl font-bold transition hover:text-blue-500"
          id={props.children}
        >
          <NextLink href={`#${props.children}`}>{props.children}</NextLink>
        </h2>
      )
    case 3:
      return (
        <h3
          className="text-theme text-2xl font-bold transition hover:text-blue-500"
          id={props.children}
        >
          <NextLink href={`#${props.children}`}>{props.children}</NextLink>
        </h3>
      )
    case 4:
      return (
        <h4
          className="text-theme text-xl font-bold transition hover:text-blue-500"
          id={props.children}
        >
          <NextLink href={`#${props.children}`}>{props.children}</NextLink>
        </h4>
      )
    case 5:
      return (
        <h5
          className="text-theme text-lg font-bold transition hover:text-blue-500"
          id={props.children}
        >
          <NextLink href={`#${props.children}`}>{props.children}</NextLink>
        </h5>
      )
  }
}
