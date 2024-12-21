import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [['rehype-katex', { strict: true, throwOnError: true }]],
    remarkPlugins: [
      //      ['remark-frontmatter', { strict: true, throwOnError: true }],
      ['remark-gfm', { strict: true, throwOnError: true }],
      ['remark-math', { strict: true, throwOnError: true }],
    ],
  },
})

export default withMDX(nextConfig)
