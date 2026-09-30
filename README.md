# Barbara Quintero Estudio

Aplicación web de reservas para Barbara Quintero Estudio.

## Stack

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router
- Lucide React
- Google Apps Script
- Google Sheets

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Arquitectura

El frontend utiliza una capa `bookingApi` que puede trabajar con un adapter mock durante el desarrollo o con Google Apps Script cuando `VITE_GOOGLE_SCRIPT_URL` está configurada.

## Estado actual

Este repositorio es un esqueleto arquitectónico para revisar antes de implementar la lógica completa de reservas.
