export default function Href(text: string): string {
  return encodeURIComponent(
    text.replace(/ /g, '-').replace(/'/g, ''),
  ).toLowerCase()
}
