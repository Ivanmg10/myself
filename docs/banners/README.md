# Banners de proyectos

Fuentes de los banners 1200×630 de las cards de proyectos. Cada uno usa el logo, la tipografía y los colores de su producto.

| Fuente | Salida |
|---|---|
| `cheevovault.html` | `public/images/cheevovault-es.webp` |
| `cheevovault.html?lang=en` | `public/images/cheevovault-en.webp` |
| `eden.html` (usa `eden-rotulo.png`, copiado de `~/jen/src/assets/eden-rotulo-transparente.png`) | `public/images/eden.webp` |

## Regenerar

1. Sirve esta carpeta: `python -m http.server 8765` (las fuentes se cargan de Google Fonts y el rótulo por ruta relativa).
2. Abre cada URL con la ventana a 1200×630 y haz una captura PNG del viewport (Playwright, o las DevTools del navegador con "Capture screenshot").
3. Convierte a WebP con `sharp`, que ya está en `node_modules`:

```bash
node -e "require('sharp')('captura.png').webp({quality:88}).toFile('public/images/<nombre>.webp')"
```
