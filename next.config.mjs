import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
  options: {
    rehypePlugins: ["rehype-katex"],
    remarkPlugins: ["remark-frontmatter", "remark-gfm", "remark-math"],
  },
})

export default withMDX(nextConfig)
