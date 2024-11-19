import Align from '@/components/Align'
import Audio from '@/components/Audio'
import Block from '@/components/Block'
import Code from '@/components/Code'
import CommonQuestion from '@/components/CommonQuestion'
import Figure from '@/components/Figure'
import Graph from '@/components/Graph'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Link from '@/components/Link'
import MDX from '@/components/MDX'
import Math from '@/components/Math'
import MusicScore from '@/components/MusicScore'
import Pagination from '@/components/Pagination'
import Problem from '@/components/Problem'
import Proofs from '@/components/Proofs'
import Rule from '@/components/Rule'
import Showcase from '@/components/Showcase'
import UnderConstruction from '@/components/UnderConstruction'
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
    Math: Math,
    MDX: MDX,
    MusicScore: MusicScore,
    Pagination: Pagination,
    Problem: Problem,
    Proofs: Proofs,
    Rule: Rule,
    Showcase: Showcase,
    UnderConstruction: UnderConstruction,
    ...components,
  }
}
