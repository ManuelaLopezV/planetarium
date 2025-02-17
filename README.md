# 🌌 Planetarium App

¡Bienvenido a Planetarium App! 🚀 Este proyecto es una aplicación interactiva que te permite explorar el universo y aprender sobre diferentes planetas. Este README está diseñado para guiarte a través de la configuración del proyecto, la estructura de carpetas, las tecnologías utilizadas y cómo usamos Zustand con persistencia para mantener tu planeta favorito.

## 🛠️ Tecnologías Utilizadas

- **Next.js** Framework de React para manejo de rutas, server components, server actions y mucho mas
- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Zustand**: Biblioteca para el manejo del estado global.
- **Zustand Persist**: Middleware para persistir el estado en el almacenamiento local.
- **TailwindCSS**: Para el estilizado de componentes.

## 🚀 Iniciando el Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/planetarium-app.git
   cd planetarium-app
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:

   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y navega a `http://localhost:3000` para ver la aplicación en acción.

## 📂 Estructura de Carpetas

La estructura de carpetas del proyecto es la siguiente:

```
planetarium-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

- **public/**: Archivos estáticos.
- **src/**: Código fuente de la aplicación.
  - **assets/**: Imágenes y otros recursos.
  - **components/**: Componentes reutilizables.
  - **hooks/**: Custom hooks.
  - **pages/**: Páginas de la aplicación.
  - **store/**: Configuración de Zustand.
  - **styles/**: Archivos de estilos.

## 🌟 Uso de Zustand con Persistencia

Para mantener el estado del planeta favorito, utilizamos Zustand junto con el middleware de persistencia. Esto nos permite recordar el planeta favorito del usuario incluso después de cerrar el navegador.

## 📞 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [mi correo electrónico](mailto:tu-email@example.com).

¡Gracias por visitar Planetarium App! 🌠
