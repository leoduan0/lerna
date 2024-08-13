'use client'

import { Coordinates, LaTeX, Mafs, Plot, Point } from 'mafs'
import 'mafs/core.css'
import React from 'react'

export default function Graph(props: {
  type: 'cartesian' | 'polar'
  viewBox: {
    x: [x: number, y: number]
    y: [x: number, y: number]
  }
  expressions: Array<{ math: string; color: string }>
  subdivisions: number
  annotations?: Array<{ text: string; position: [x: number, y: number] }>
  points?: Array<{ x: number; y: number; color: string }>
}): React.ReactNode {
  return (
    <Mafs viewBox={props.viewBox}>
      {props.type == 'cartesian' ? (
        <Coordinates.Cartesian subdivisions={props.subdivisions} />
      ) : (
        <Coordinates.Polar subdivisions={props.subdivisions} />
      )}
      {props.expressions.map(
        (
          expression: { math: string; color: string },
          index: number,
        ): React.ReactNode => (
          <Plot.OfX
            key={index}
            y={eval(expression.math)}
            color={expression.color}
          />
        ),
      )}
      {props.annotations?.map(
        (
          annotation: {
            text: string
            position: [x: number, y: number]
          },
          index: number,
        ): React.ReactNode => (
          <LaTeX key={index} at={annotation.position} tex={annotation.text} />
        ),
      )}
      {props.points?.map(
        (
          point: { x: number; y: number; color: string },
          index: number,
        ): React.ReactNode => (
          <Point key={index} x={point.x} y={point.y} color={point.color} />
        ),
      )}
    </Mafs>
  )
}
