import rss from "@astrojs/rss"

export function GET(context) {
  return rss({
    // Pole `<title>` w wyjściowym XML
    title: "Blog Buzza",
    // Pole `<description>` w wyjściowym XML
    description: "Skromny przewodnik Astronauty po gwiazdach",
    // Pobiera "site" Twojego projektu z kontekstu endpointa
    // https://docs.astro.build/pl/reference/api-reference/#contextsite
    site: context.site,
    // Tablica `<item>` w wyjściowym XML
    // Zobacz sekcję "Generowanie items" dla przykładów użycia zbiorów treści i importów glob
    items: [],
    // (opcjonalnie) wstrzyknij niestandardowy xml
    customData: `<language>pl</language>`,
  })
}
