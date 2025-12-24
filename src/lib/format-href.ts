export function formatHref(text: string) {
  return encodeURIComponent(
    text.replace(/ /g, "-").replace(/'/g, ""),
  ).toLowerCase()
}
