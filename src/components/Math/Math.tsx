import dynamic from 'next/dynamic'
import 'katex/dist/katex.min.css'
import { BlockMath, InlineMath } from 'react-katex'

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
