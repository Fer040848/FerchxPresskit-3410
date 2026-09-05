# FERCHX — Press Kit

Electronic press kit (EPK) bilingüe ES/EN para **FerchX**, DJ y productor de Saltillo, México.
Tech house · melodic house. Sitio de una sola página: bio, sets, galería, rider y booking.

Dirección de diseño en [`design.md`](./design.md).

## Requisitos

- [Bun](https://bun.sh) 1.3+

## Desarrollo

```bash
bun install
bun run dev
```

Abre el puerto definido en `__ports.cjs` (por defecto `4200`).

## Build

```bash
bun run build:web
```

## Producción

```bash
bun run build:web
bun run start   # pm2
bun run stop
```

## Estructura

- `packages/web` — app React + Vite + Hono (API + frontend)
