import { getImage } from "astro:assets"
import type { ImageMetadata } from "astro"

export type OptimizedImageResult = {
  src: string;
  width: number;
};

export async function optimizeMyImage(
  src: ImageMetadata | string,
  width?: number, //= 800,
  widths = [320, 500, 800, 1080, 1600, 2000 /*img.width*/],
  format = "webp",
  quality = 80,
):Promise<OptimizedImageResult[]> {


   // Generowanie różnych wersji obrazów
  const images = await Promise.all(
    widths.map((width) =>
      getImage({
        src,
        width,
        format,
        quality,
      })
    )
  );

  // Zwrócenie tablicy z obiektami obrazów
  return images.map((image, index) => ({
    src: image.src,
    width: widths[index] ?? 0,
  }));
}
