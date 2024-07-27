import { Block } from '@/components'
import Item from './Item'

export type TQA = {
  question: React.ReactNode
  answer: React.ReactNode
}

export default function CommonQuestion(props: { qas: TQA[] }): React.ReactNode {
  return (
    <Block
      text={props.qas.length == 1 ? 'Common Question' : 'Common Questions'}
    >
      <div className="divide-y divide-neutral-300 dark:divide-neutral-600">
        {props.qas.map((qa) => {
          return <Item qa={qa} /> // Keys not added
        })}
      </div>
    </Block>
  )
}
