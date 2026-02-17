import { Align } from "./align"
import { Block } from "./block"

interface FigureProps {
  image: React.ReactNode
  number?: number
  text?: React.ReactNode
}

export function Figure({ image, number, text }: FigureProps) {
  return (
    <Block>
      <Align type="center">
        {image}
        <Align type="center">
          {(text || number) && (
            <p className="text-foreground">
              {number && <strong>Figure {number}</strong>}
              {text && <strong>: {text}</strong>}
            </p>
          )}
        </Align>
      </Align>
    </Block>
  )
}
