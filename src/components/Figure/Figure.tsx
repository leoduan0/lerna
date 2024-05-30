import { Align, Block } from '../'

export default function Figure(props: {
  image: React.ReactNode
  number?: number
  text?: React.ReactNode
}): React.ReactNode {
  return (
    <Block>
      <Align type={'center'}>
        {props.image}
        {props.text && (
          <p className="text-theme">
            {props.number && <strong>Figure {props.number}:</strong>}{' '}
            {props.text}
          </p>
        )}
      </Align>
    </Block>
  )
}
