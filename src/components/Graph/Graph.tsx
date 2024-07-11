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
  expressions: { math: string; color: string }[]
  subdivisions: number
  annotations?: { text: string; position: [x: number, y: number] }[]
  points?: { x: number; y: number; color: string }[]
}): React.ReactNode {
  return (
    <Mafs viewBox={props.viewBox}>
      {props.type == 'cartesian' ? (
        <Coordinates.Cartesian subdivisions={props.subdivisions} />
      ) : (
        <Coordinates.Polar subdivisions={props.subdivisions} />
      )}
      {props.expressions.map((expression, index) => (
        <Plot.OfX
          key={index}
          y={eval(expression.math)}
          color={expression.color}
        />
      ))}
      {props.annotations?.map((annotation, index) => (
        <LaTeX key={index} at={annotation.position} tex={annotation.text} />
      ))}
      {props.points?.map((point, index) => (
        <Point key={index} x={point.x} y={point.y} color={point.color} />
      ))}
    </Mafs>
  )
}
