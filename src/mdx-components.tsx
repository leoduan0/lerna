import type { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import {
  Align,
  Block,
  Figure,
  Graph,
  Heading,
  Image,
  Math,
  Problem,
  Rule,
  Showcase,
  Term,
} from '@/components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <NextLink
        className="text-blue-500 hover:underline"
        href={props.href ? props.href : ''}
      >
        {props.children}
      </NextLink>
    ),
    h1: (props) => <Heading level={1}>{props.children}</Heading>,
    h2: (props) => <Heading level={2}>{props.children}</Heading>,
    h3: (props) => <Heading level={3}>{props.children}</Heading>,
    h4: (props) => <Heading level={4}>{props.children}</Heading>,
    h5: (props) => <Heading level={5}>{props.children}</Heading>,
    p: (props) => <p className="text-theme text-base">{props.children}</p>,
    Align: Align,
    Block: Block,
    Figure: Figure,
    Graph: Graph,
    Image: Image,
    Math: Math,
    Problem: Problem,
    Rule: Rule,
    Showcase: Showcase,
    Term: Term,
    ...components,
  }
}
