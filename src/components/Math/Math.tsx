import 'katex/dist/katex.min.css'
import dynamic from 'next/dynamic'

const BlockMath = dynamic(() =>
  import('react-katex').then((mod) => mod.BlockMath),
)
const InlineMath = dynamic(() =>
  import('react-katex').then((mod) => mod.InlineMath),
)

export default function Math(props: {
  math: string
  type: 'block' | 'inline'
}): React.ReactNode {
  switch (props.type) {
    case 'block':
      return (
        <div className="w-full overflow-x-auto">
          <div className="w-fit text-black dark:text-white">
            <BlockMath math={props.math} />
          </div>
        </div>
      )
    case 'inline':
      return (
        <span className="text-black dark:text-white">
          <InlineMath math={props.math} />
        </span>
      )
  }
}
