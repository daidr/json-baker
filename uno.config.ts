import fs from 'node:fs/promises'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  theme: {
    colors: {
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        mingcute: () => import('@iconify-json/mingcute/icons.json').then(i => i.default),
        custom: {
          'json-baker': () => fs.readFile('./design/logo-compressed.svg', 'utf-8'),
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
