// @ts-check

import path from "path"
import { fileURLToPath } from "url"

import { defineConfig } from "astro/config"

import react from "@astrojs/react"

import partytown from "@astrojs/partytown"

import sitemap from "@astrojs/sitemap"

import tailwind from "@astrojs/tailwind"

import data from "./data.json"

import icon from "astro-icon";


const __dirname = path.dirname(fileURLToPath(import.meta.url))


// https://astro.build/config
export default defineConfig({
  site: data.site.domain,
  base: "",
  trailingSlash: data.site.trailingSlash as 'always' | 'never' | 'ignore',
  output: "static",
  compressHTML: true,
  scopedStyleStrategy: "class",
  build: {
    format: "directory",
    assets: "_astro",
    inlineStylesheets: "auto",
    assetsPrefix: "",
  },
  integrations: [react(), sitemap({
    filter: (page) =>
      page !== `${data.site.domain}/stylebook/` &&
      page !== `${data.site.domain}/polityka-prywatnosci/`,
  }), tailwind({ applyBaseStyles: false }), icon({
      iconDir: "src/assets/icons",
      include: {
        tabler: ["*"],
      },
    }), partytown({
      config: {
        debug: false,
        forward: ["dataLayer.push"],
        ignoreUnused: true,
      },
    }),],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
  server: {
    port: 4321,
    host: false,
    headers: {
      "Strict-Transport-Security":
        "max-age=63072000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "0",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "upgrade-insecure-requests",
    },
  },
  redirects: {},
  devToolbar: {
    enabled: false,
  },
})