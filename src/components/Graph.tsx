"use client"

import { Coordinates, LaTeX, Mafs, Plot, Point } from "mafs"
import "mafs/core.css"
import { Fragment } from "react"

interface GraphProps {
  annotations?: { text: string; position: [x: number, y: number] }[]
  expressions: { math: string; color: string }[]
  points?: { x: number; y: number; color: string }[]
  subdivisions: number
  type: "cartesian" | "polar"
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
      {type === "cartesian" ? (
        <Coordinates.Cartesian subdivisions={subdivisions} />
      ) : (
        <Coordinates.Polar subdivisions={subdivisions} />
      )}
      {expressions.map((expression) => (
        <Fragment key={expression.math}>
          <Plot.OfX y={eval(expression.math)} color={expression.color} />
        </Fragment>
      ))}
      {annotations?.map((annotation) => (
        <Fragment key={annotation.text}>
          <LaTeX at={annotation.position} tex={annotation.text} />
        </Fragment>
      ))}
      {points?.map((point) => (
        <Fragment key={point.x + point.y + point.color}>
          <Point x={point.x} y={point.y} color={point.color} />
        </Fragment>
      ))}
    </Mafs>
  )
}

export default Graph
