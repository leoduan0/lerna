import NextLink from 'next/link'

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  href: string
}

export default function Link({ href, ...props }: LinkProps): React.ReactNode {
  return (
    <NextLink
      href={href}
      className="text-blue-500 hover:underline"
      rel="noopener noreferrer"
      {...props}
    />
  )
}
