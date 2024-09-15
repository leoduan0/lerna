import Align from './Align'
import Block from './Block'

interface FigureProps {
  image: React.ReactNode
  number?: number
  text?: React.ReactNode
}

function Figure({ image, number, text }: FigureProps) {
  return (
    <Block>
      <Align type="center">
        {image}
        {text && (
          <p className="text-theme">
            {number && <strong>Figure {number}:</strong>} {text}
          </p>
        )}
      </Align>
    </Block>
  )
}

export default Figure
