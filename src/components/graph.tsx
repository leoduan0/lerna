"use client"

import { Parser } from "expr-eval"
import { Coordinates, LaTeX, Mafs, Plot, Point } from "mafs"
import "mafs/core.css"
import { Fragment, useMemo } from "react"

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

export function Graph({
  annotations,
  expressions,
  points,
  subdivisions,
  type,
  viewBox,
}: GraphProps) {
  const parsedExpressions = useMemo(() => {
    const parser = new Parser()

    return expressions
      .map((expression) => {
        try {
          const normalizedExpression = expression.math
            .trim()
            .replace(/^\(?\s*x\s*\)?\s*=>\s*/, "")
            .replaceAll("Math.", "")
            .replaceAll("**", "^")
          const compiledExpression = parser.parse(normalizedExpression)

          return {
            ...expression,
            evaluate: (x: number) => compiledExpression.evaluate({ x }),
          }
        } catch (error) {
          console.error(`Invalid math expression: ${expression.math}`, error)
          return null
        }
      })
      .filter((expression) => expression !== null)
  }, [expressions])

  return (
    <Mafs viewBox={viewBox}>
      {type === "cartesian" ? (
        <Coordinates.Cartesian subdivisions={subdivisions} />
      ) : (
        <Coordinates.Polar subdivisions={subdivisions} />
      )}
      {parsedExpressions.map((expression) => (
        <Fragment key={expression.math}>
          <Plot.OfX y={expression.evaluate} color={expression.color} />
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
