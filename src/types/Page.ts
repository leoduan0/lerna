export type Page = {
  title: string
  type: 'link' | 'page' | 'section'
  href?: string
  icon?: React.ReactNode
  children?: Page[]
}
