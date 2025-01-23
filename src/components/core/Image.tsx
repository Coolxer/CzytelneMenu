"use client"

import type { OptimizedImageResult } from "@utils/utils"

type Props = {
  astroImage: OptimizedImageResult[]
  alt?: string

  width?: number
  height?: number
  sizes?: string

  loading?: "lazy" | "eager"
  layout?: "object-cover" | "object-contain" | "object-fill"
  className?: string
}

export type ImageProps = React.ComponentPropsWithoutRef<"img"> & Partial<Props>

export const Image = (props: ImageProps) => {
  const {
    astroImage,
    alt,
    width,
    height,
    sizes = `(max-width: 480px) 320px, (max-width: 768px) 500px, (max-width: 992px) 800px, (max-width: 1280px) 1080px, (max-width: 1600px) 1600px, 2000px`,
    loading = "lazy",
    layout = "object-cover",
    className,
  } = props

  return (
    astroImage && (
      <img
        src={astroImage[0]?.src}
        alt={alt}
        width={width ? width : undefined}
        height={height ? height : undefined}
        sizes={width ? undefined : sizes ? sizes : undefined}
        srcSet={astroImage
          .map((image) => `${image.src} ${image.width}w`)
          .join(", ")}
        loading={loading}
        className={"" + layout + " " + className}
      />
    )
  )
}
