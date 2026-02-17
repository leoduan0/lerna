import type { MDXComponents } from "mdx/types"
import { Align } from "@/components/align"
import { Block } from "@/components/block"
import { Code } from "@/components/code"
import { CommonQuestion } from "@/components/common-question"
import { Figure } from "@/components/figure"
import { Graph } from "@/components/graph"
import { Image } from "@/components/image"
import { Link } from "@/components/link"
import { MathExpression } from "@/components/math-expression"
import { MDX } from "@/components/mdx"
import { Pagination } from "@/components/pagination"
import { Problem } from "@/components/problem"
import { Proofs } from "@/components/proofs"
import { Rule } from "@/components/rule"
import { Showcase } from "@/components/showcase"
import { UnderConstruction } from "@/components/under-construction"

const components: MDXComponents = {
  a: (props) => (
    <Link
      href={props.href ? props.href : ""}
      className="text-blue-500 hover:underline"
      newTab
    >
      {props.children}
    </Link>
  ),
  code: (props) => {
    const match = /language-(\w+)/.exec(props.className || "")
    return (
      <Code language={match ? match[1] : ""}>
        {String(props.children).replace(/\n$/, "")}
      </Code>
    )
  },
  h1: (props) => <h1 className="normal">{props.children}</h1>,
  h2: (props) => <h2 className="normal">{props.children}</h2>,
  h3: (props) => <h3 className="normal">{props.children}</h3>,
  h4: (props) => <h4 className="normal">{props.children}</h4>,
  h5: (props) => <h5 className="normal">{props.children}</h5>,
  Align: Align,
  Block: Block,
  CommonQuestion: CommonQuestion,
  Figure: Figure,
  Graph: Graph,
  Image: Image,
  MathExpression: MathExpression,
  MDX: MDX,
  Pagination: Pagination,
  Problem: Problem,
  Proofs: Proofs,
  Rule: Rule,
  Showcase: Showcase,
  UnderConstruction: UnderConstruction,
}

export function useMDXComponents(): MDXComponents {
  return components
}
