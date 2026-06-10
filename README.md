# FDveloper - Web

Sitio web de presentación y captación de clientes para **FDveloper**, un servicio de desarrollo web con IA integrada orientado al mercado argentino.

## Descripción

Es una **single-page application (SPA)** de una sola página (`app/page.tsx`) que funciona como landing comercial. El sitio presenta los servicios, portfolio, proceso de trabajo, planes de precios y preguntas frecuentes, con llamados a la acción (CTA) directos a WhatsApp y un chatbot integrado.

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.9 | Framework React (App Router) |
| [React](https://react.dev) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Utility-first CSS (v4, con `@theme`) |
| [Framer Motion](https://www.framer.com/motion/) | ^12.40 | Animaciones y transiciones |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | - | Tipografía (Google Fonts) |
| [Chatbase](https://www.chatbase.co) | - | Chatbot con IA embebido |

## Estructura del proyecto

```
fdveloper/
├── app/
│   ├── layout.tsx        # Layout raíz, metadata SEO, Schema.org, script Chatbase
│   ├── page.tsx          # Página principal (ensambla todos los componentes)
│   └── globals.css       # Estilos globales, theme variables (v4), scrollbar, selección
├── components/
│   ├── Navbar.tsx        # Barra de navegación
│   ├── Hero.tsx          # Sección hero principal
│   ├── Servicios.tsx     # Listado de servicios ofrecidos
│   ├── Portfolio.tsx     # Proyectos realizados
│   ├── Proceso.tsx       # Flujo de trabajo / proceso de desarrollo
│   ├── Precios.tsx       # Tabla de planes y precios
│   ├── FAQ.tsx           # Preguntas frecuentes
│   ├── Footer.tsx        # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp con animación
├── data/
│   ├── servicios.ts      # Datos de servicios (landing, sitio completo, IA, mantenimiento)
│   └── proyectos.ts      # Datos de proyectos del portfolio
├── public/               # Assets estáticos (imágenes de proyectos)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

## Funcionalidades

- **Sección de servicios**: Landing pages, sitios completos, integración con IA y mantenimiento mensual.
- **Portfolio**: Proyectos realizados con tecnología, descripción y enlace al deploy.
- **Planes y precios**: Tres tiers con lista de features y CTA a WhatsApp.
- **FAQ**: Preguntas frecuentes para resolver dudas comunes.
- **Botón flotante de WhatsApp**: Acceso directo al número de contacto con animación (Framer Motion).
- **Chatbot IA (Chatbase)**: Widget embebido para atención automatizada las 24hs.
- **SEO on-page**: Metadata completa, Open Graph y schema.org (`ProfessionalService`).
- **Diseño dark theme**: Paleta oscura con acentos violeta (`#6C47FF`) y cyan (`#00D4FF`).
- **Smooth scroll**: Navegación fluida entre secciones.
- **Responsive**: Layout adaptable a mobile, tablet y desktop.

## Arranque local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start

# Lint
npm run lint
```

El servidor de desarrollo queda disponible en [http://localhost:3000](http://localhost:3000).

## Deploy

El proyecto está configurado para deploy en [Vercel](https://vercel.com). El dominio de producción es [fdveloper.dev](https://fdveloper.dev).
