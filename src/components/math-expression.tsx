import "katex/dist/katex.min.css"
import dynamic from "next/dynamic"

const BlockMath = dynamic(() =>
  import("react-katex").then((mod) => ({
    default: mod.BlockMath,
  })),
)
const InlineMath = dynamic(() =>
  import("react-katex").then((mod) => ({
    default: mod.InlineMath,
  })),
)

interface MathProps {
  math: string
  type: "block" | "inline"
}

export function MathExpression({ math, type }: MathProps) {
  switch (type) {
    case "block":
      return (
        <div className="w-full overflow-x-auto">
          <div className="w-fit text-foreground">
            <BlockMath math={math} />
          </div>
        </div>
      )
    case "inline":
      return (
        <span className="text-foreground">
          <InlineMath math={math} />
        </span>
      )
  }
}
