import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeKatex,
      // ['rehype-katex', { strict: true, throwOnError: true }]
    ],
    remarkPlugins: [
      remarkFrontmatter,
      remarkGfm,
      remarkMath,
      // ['remark-frontmatter', { strict: true, throwOnError: true }],
      // ['remark-gfm', { strict: true, throwOnError: true }],
      // ['remark-math', { strict: true, throwOnError: true }],
    ],
  },
})

export default withMDX(nextConfig)
