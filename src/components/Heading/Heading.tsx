import NextLink from 'next/link'

export default function Heading(props: {
  level: 1 | 2 | 3 | 4 | 5
  clickable?: boolean
  children: React.ReactNode
}): React.ReactNode {
  const text: string | undefined = props.children?.toString()
  const link: React.ReactNode =
    props.clickable == false ? (
      text
    ) : (
      <NextLink href={`#${text}`} rel="noopener noreferrer">
        {text}
      </NextLink>
    )

  const style: string =
    props.clickable == false
      ? 'text-theme font-bold'
      : 'text-theme font-bold transition hover:text-blue-500'

  switch (props.level) {
    case 1:
      return (
        <h1 className={`${style} text-4xl`} id={text}>
          {link}
        </h1>
      )
    case 2:
      return (
        <h2 className={`${style} text-3xl`} id={text}>
          {link}
        </h2>
      )
    case 3:
      return (
        <h3 className={`${style} text-2xl`} id={text}>
          {link}
        </h3>
      )
    case 4:
      return (
        <h4 className={`${style} text-xl`} id={text}>
          {link}
        </h4>
      )
    case 5:
      return (
        <h5 className={`${style} text-lg`} id={text}>
          {link}
        </h5>
      )
  }
}
