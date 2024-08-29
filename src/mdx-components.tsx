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
  Link,
  MDX,
  Math,
  MusicScore,
  Problem,
  Rule,
  Showcase,
} from '@/components'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => (
      <Link
        href={props.href ? props.href : ''}
        className="text-blue-500 hover:underline"
        newTab
      >
        {props.children}
      </Link>
    ),
    code: (props) => {
      const match = /language-(\w+)/.exec(props.className || '')
      return (
        <Code language={match ? match[1] : ''}>
          {String(props.children).replace(/\n$/, '')}
        </Code>
      )
    },
    h1: (props) => <Heading level={1}>{props.children}</Heading>,
    h2: (props) => <Heading level={2}>{props.children}</Heading>,
    h3: (props) => <Heading level={3}>{props.children}</Heading>,
    h4: (props) => <Heading level={4}>{props.children}</Heading>,
    h5: (props) => <Heading level={5}>{props.children}</Heading>,
    p: (props) => <p className="text-theme text-base">{props.children}</p>,
    Align: Align,
    Audio: Audio,
    Block: Block,
    CommonQuestion: CommonQuestion,
    Figure: Figure,
    Graph: Graph,
    Image: Image,
    MDX: MDX,
    Math: Math,
    MusicScore: MusicScore,
    Problem: Problem,
    Rule: Rule,
    Showcase: Showcase,
    ...components,
  }
}
