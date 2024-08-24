import NextImage from 'next/image'

interface ImageProps extends React.ComponentProps<typeof NextImage> {
  src: string
  width: number
  height: number
  alt: string
}

export default function Image({
  src,
  width,
  height,
  alt,
  ...props
}: ImageProps): React.ReactNode {
  return (
    <NextImage src={src} width={width} height={height} alt={alt} {...props} />
  )
}
