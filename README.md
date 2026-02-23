# Portfolio Landing Page

Este proyecto es una landing page profesional diseñada para una ingeniera ambiental con una maestría en administración integral del ambiente. La página destaca sus habilidades, proyectos y formación académica, utilizando un diseño moderno y limpio que refleja la sostenibilidad.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
# Stephanie Elizabeth Medina Ponce — Portfolio Landing Page

Landing page estática creada para una profesional en Ingeniería Ambiental. Diseño minimalista, accesible y mobile-first.

## Descripción rápida

Esta versión incluye una refactorización del HTML y CSS para mejorar la experiencia UX/UI, accesibilidad y rendimiento.

### Cambios clave (antes → ahora)

- Encabezado: introducción del nombre completo y CTA accesible en primer pliegue.
- Estilos: sistema de variables CSS, tipografías `Inter` (cuerpo) y `Montserrat` (títulos), y espaciado uniforme.
- Contenido: añadidas habilidades técnicas (AutoCAD, QGIS, ArcMap, Estudios de Impacto Ambiental, Inglés C1) y formación académica; eliminada la sección de proyectos destacados.

## Estructura del proyecto

```
portfolio-landing-page
├── src/
│   ├── index.html        # HTML principal (semántico, mobile-first)
│   ├── styles/           # CSS por secciones (main.css + específicas)
│   ├── js/               # Scripts (main, scroll, form)
│   ├── data/             # JSON de datos (skills, projects)
│   └── assets/           # Imágenes y fuentes
├── package.json
└── README.md
```

## Cómo ver localmente

1. Abrir `src/index.html` directamente en el navegador, o usar un servidor local para rutas correctas:

```bash
# con Python 3 en la carpeta raíz del proyecto
python -m http.server 8000
# o con npm (si tienes `serve` instalado)
npx serve .
```

Visita `http://localhost:8000/src/index.html` si usas `http.server`.

## Despliegue a GitHub Pages (sugerencia)

1. Crear repositorio en GitHub.
2. Añadir remoto y pushear:

```bash
git remote add origin git@github.com:TU_USUARIO/REPO.git
git push -u origin main
```

3. En la configuración del repositorio, activar GitHub Pages desde la rama `main` y la carpeta `/` o `/src` según prefieras.

## Notas técnicas & guía rápida de estilos

- Paleta: fondo neutro, `--accent: #0ea5a4` para CTAs, texto oscuro para contraste.
- Tipografías: `Inter` para cuerpo, `Montserrat` para títulos (importadas desde Google Fonts).
- Breakpoints: mobile-first (480px, 768px, 1024px).
- Accesibilidad: enfoque visible, `prefers-reduced-motion`, y contrastes pensados para WCAG AA.
- Performance: evitar librerías pesadas; optimizar imágenes antes del despliegue.

## Antes / Después (resumen: 3 mejoras visibles)

1. Claridad del CTA — ahora visible en primer pliegue con botón con alto contraste.
2. Jerarquía tipográfica — títulos y cuerpos diferenciados por familia y peso.
3. Espaciado y legibilidad — más espacio en blanco y anchura de lectura limitada.

## Contribuir

Si quieres contribuir, abre un issue o envía un pull request. Para cambios grandes, crea una rama descriptiva y añade notas de prueba manual (contraste, foco, navegación por teclado).

## Licencia

Proyecto con licencia MIT.

---
Actualizado: 22 de febrero de 2026
