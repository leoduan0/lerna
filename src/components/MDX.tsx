import "katex/dist/katex.min.css"
import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"

interface MDXProps {
  source: string
}

function MDX({ source }: MDXProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {source}
    </Markdown>
  )
}

export default MDX
