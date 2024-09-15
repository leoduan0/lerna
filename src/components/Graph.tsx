'use client'

import { Coordinates, LaTeX, Mafs, Plot, Point } from 'mafs'
import 'mafs/core.css'
import { Fragment } from 'react'

interface GraphProps {
  annotations?: { text: string; position: [x: number, y: number] }[]
  expressions: { math: string; color: string }[]
  points?: { x: number; y: number; color: string }[]
  subdivisions: number
  type: 'cartesian' | 'polar'
  viewBox: {
    x: [x: number, y: number]
    y: [x: number, y: number]
  }
}

function Graph({
  annotations,
  expressions,
  points,
  subdivisions,
  type,
  viewBox,
}: GraphProps) {
  return (
    <Mafs viewBox={viewBox}>
      {type == 'cartesian' ? (
        <Coordinates.Cartesian subdivisions={subdivisions} />
      ) : (
        <Coordinates.Polar subdivisions={subdivisions} />
      )}
      {expressions.map((expression, index) => (
        <Fragment key={index}>
          <Plot.OfX y={eval(expression.math)} color={expression.color} />
        </Fragment>
      ))}
      {annotations?.map((annotation, index) => (
        <Fragment key={index}>
          <LaTeX key={index} at={annotation.position} tex={annotation.text} />
        </Fragment>
      ))}
      {points?.map((point, index) => (
        <Fragment key={index}>
          <Point key={index} x={point.x} y={point.y} color={point.color} />
        </Fragment>
      ))}
    </Mafs>
  )
}

export default Graph
