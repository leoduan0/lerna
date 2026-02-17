import NextLink from "next/link"

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  href: string
  newTab?: boolean
  noColor?: boolean
  noHoverUnderline?: boolean
}

export function Link({
  href,
  newTab,
  noColor,
  noHoverUnderline,
  ...rest
}: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`${noColor ? "" : "text-primary"} ${noHoverUnderline ? "" : "hover:underline"}`}
      target={newTab ? "_blank" : ""}
      rel="noopener noreferrer"
      {...rest}
    />
  )
}
