# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Reclutadores, responsables técnicos y posibles clientes que llegan desde LinkedIn, GitHub o el CV y quieren saber rápido quién es Iván, qué ha construido y cómo contactarle.

## Product Purpose

Portfolio personal de Iván Márquez García, desarrollador frontend senior. Éxito: el visitante ve sus dos productos en producción y su experiencia sin navegar, y abre el CV, GitHub o LinkedIn.

## Positioning

No enseña ejercicios: enseña dos productos reales que Iván mantiene (CheevoVault, producto propio; Eden Psicología, web de una clienta) y experiencia en banca (seguros MyBox de CaixaBank, vía Capgemini) y en una herramienta interna de gestión de equipos (Sngular).

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS v4, Jest y Testing Library.
- Una sola página bilingüe: inglés en `/` (idioma principal) y español en `/es`, con selector `en / es` y redirección según el idioma del navegador. Sin formulario, sin email público, sin blog.
- El cliente del proyecto de Sngular no se nombra.
- Tema claro u oscuro según el sistema, sin selector.
- "Book a call" (Cal.com) está desactivado hasta que se aclare la cuenta (#12).

## Brand Commitments

- Marca personal: la palmera, como favicon (`src/app/[lang]/icon.png`, blanca sobre círculo `#0a0a0a`).
- Foto: `public/images/avatar.jpg` (mirador en Asturias), ubicación mostrada: Oviedo.
- Los banners de proyecto usan la identidad de cada producto (logo, tipografía y colores de CheevoVault y de Eden), no la del portfolio.
- Referencia de tono elegida por Iván: portfolio minimalista de una columna (avatar, nombre, rol, bio corta, botones, experiencia en filas). Simple, sin complicaciones.

## Evidence on Hand

- Textos aprobados en los comentarios `## Design` y `## Brief` de la issue #10 (inglés y español), en `src/data/content.ts`.
- Logos: CheevoVault (`~/achivements/docs/brand/cheevovault-logo.svg`), Eden (`~/jen/src/assets/eden-rotulo-transparente.png`).
- CV en `public/cv.pdf`, pendiente de actualizar (#11).
- No hay cifras, testimonios ni métricas: no se inventan.

## Product Principles

- Lo real primero: productos en producción antes que adjetivos.
- Poco texto: cada frase dice un hecho.
- Todo cabe en un scroll, sin navegación.

## Accessibility & Inclusion

WCAG AA en los dos temas, uso completo con teclado y respeto a `prefers-reduced-motion`.
