# Caicedo Network · IZZY — Contenido

Piezas para redes sociales (Instagram, Facebook, LinkedIn) con el sistema visual de la marca.

| Carpeta | Qué es |
|---|---|
| `carrusel-licencia-y-ahora-que/` | Carrusel 1 · "Sacaste tu licencia… ¿y ahora qué?" + caption, alt text, texto y PDF para LinkedIn |
| `historias-licencia-y-ahora-que/` | 3 historias 9:16 para promocionar el carrusel 1 |
| `carrusel-el-camino/` | Carrusel 2 (borrador) · las 6 etapas del camino |
| `_plantilla/` | Plantilla para nuevos carruseles (ver su README) |
| `_marca/` | Estilos compartidos y logos sin fondo |

Los archivos listos para publicar están en `export/` dentro de cada carpeta.

## Exportar
Requiere Node y Playwright (`npm i playwright`).
```
node render.mjs carrusel-<tema> --pdf
```
Genera PNG, JPEG, contact sheet y PDF, y valida que ningún texto se salga del área segura.
