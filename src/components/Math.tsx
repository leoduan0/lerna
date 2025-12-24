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

function Math({ math, type }: MathProps) {
  switch (type) {
    case "block":
      return (
        <div className="w-full overflow-x-auto">
          <div className="w-fit text-theme">
            <BlockMath math={math} />
          </div>
        </div>
      )
    case "inline":
      return (
        <span className="text-theme">
          <InlineMath math={math} />
        </span>
      )
  }
}

export default Math
