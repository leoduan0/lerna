import NextLink from 'next/link'

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  href: string
}

export default function Link({ href, ...props }: LinkProps): React.ReactNode {
  return <NextLink href={href} {...props} />
}
