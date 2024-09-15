function Href(text: string) {
  return encodeURIComponent(
    text.replace(/ /g, '-').replace(/'/g, ''),
  ).toLowerCase()
}

export default Href
