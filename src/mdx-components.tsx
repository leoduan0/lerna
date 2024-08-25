import type { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import {
  Align,
  Audio,
  Block,
  Code,
  CommonQuestion,
  Figure,
  Graph,
  Heading,
  Image,
  MDX,
  Math,
  MusicScore,
  Problem,
  Rule,
  Showcase,
} from '@/components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <NextLink
        className="text-blue-500 hover:underline"
        href={props.href ? props.href : ''}
        rel="noopener noreferrer"
      >
        {props.children}
      </NextLink>
    ),
    Align: Align,
    Audio: Audio,
    Block: Block,
    code: (props) => {
      const match = /language-(\w+)/.exec(props.className || '')
      return (
        <Code language={match ? match[1] : ''}>
          {String(props.children).replace(/\n$/, '')}
        </Code>
      )
    },
    CommonQuestion: CommonQuestion,
    Figure: Figure,
    Graph: Graph,
    h1: (props) => <Heading level={1}>{props.children}</Heading>,
    h2: (props) => <Heading level={2}>{props.children}</Heading>,
    h3: (props) => <Heading level={3}>{props.children}</Heading>,
    h4: (props) => <Heading level={4}>{props.children}</Heading>,
    h5: (props) => <Heading level={5}>{props.children}</Heading>,
    Image: Image,
    MDX: MDX,
    Math: Math,
    MusicScore: MusicScore,
    p: (props) => <p className="text-theme text-base">{props.children}</p>,
    Problem: Problem,
    Rule: Rule,
    Showcase: Showcase,
    ...components,
  }
}
