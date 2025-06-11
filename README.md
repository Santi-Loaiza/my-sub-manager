# 📂 My SubManager
My SubManager es una aplicación web diseñada para gestionar las suscripciones digitales de los usuarios de forma centralizada, clara y eficiente.

## 📌 Descripción
Esta app permite a los usuarios autenticados registrar y controlar sus suscripciones a diferentes servicios (como Netflix, Spotify, YouTube, etc.), con información relevante. Permite visualizar, agregar, editar y eliminar suscripciones con una interfaz moderna e intuitiva.

Ideal para personas que desean llevar el control de sus pagos digitales mensuales y acceder rápidamente al estado de cada servicio.

## 🛠️ Tecnologías utilizadas
- **React JS** – Biblioteca principal para la interfaz de usuario
- **JSON-Server** – Simulación de API REST con datos en formato JSON
- **React Router DOM** – Ruteo dinámico entre vistas
- **Fetch API** – Alternativa para peticiones HTTP
- **SweetAlert2** – Alertas modernas y estilizadas
- **Heroicons** – Iconografía para una interfaz más visual
- **CSS** – Estilos personalizados
- **HTML** – Estructura base del proyecto

## 🎨 Paleta de colores
- #0d1031
- #1E0038
- #261552
- #033A82
- #2643e8
- #7a8efa

##🔤 Tipografías
- **Poppins** – Títulos y botones

- **Roboto** – Contenido general

##🚀 Ejecución del proyecto
El proyecto se ejecuta con dos servicios en paralelo:

```
Backend: JSON-Server (puerto por defecto: http://localhost:3000)
Frontend: Vite + React (puerto por defecto: http://localhost:5173)
```

##💾 Instalación
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

```
# 1. Clona el repositorio
git clone https://github.com/Santi-Loaiza/my-sub-manager.git
cd my-sub-manager

# 2. Instala las dependencias del frontend
npm install

# 3. Inicia el servidor JSON (backend simulado)
npm json-server --watch db.json --port 3000

# 4. En una nueva terminal, inicia el frontend con Vite
npm run dev
```

## 🧩 Modelo de datos (NoSQL)

### Usuarios
```
{
      "id": "1",
      "nombres": "Santiago",
      "apellidos": "Loaiza",
      "usuario": "usuariosanti",
      "contraseña": "contraseñasanti",
      "historialLogin": [
        "2025-06-06T19:05:45.570Z"
      ]
    }
```
### Suscripciones
```
{
      "id": "sub7",
      "usuarioId": "b23d",
      "nombre": "Duolingo Plus",
      "precio": 7,
      "frecuencia": "mensual",
      "descripcion": "Aprende sin anuncios",
      "categoria": "Educación",
      "fechaInicio": "2025-06-03",
      "renovacionAutomatica": true,
      "estado": "activa"
    }
```
🔗 Cada suscripción está asociada a un usuario autenticado y puede ser gestionada completamente desde la interfaz.

🗂️ Estructura propuesta del proyecto
```
my-sub-manager/
│
├── public/                         # Archivos públicos
│
├── src/
│   ├── assets/                     # Imágenes, íconos, fuentes, etc.
│
│   ├── components/                 # Componentes reutilizables
│   │   ├── Contenido/              # Subcomponente específico
│   │   │   ├── Contenido.jsx
│   │   │   └── Contenido.css
│   │   ├── NavBar/                 # Menú de navegación
│   │   │   ├── NavBar.jsx
│   │   │   └── NavBar.css
│   │   └── RutaProtegida.jsx       # Componente de protección de rutas
│
│   ├── pages/                      # Páginas o vistas principales
│   │   ├── AgregarSuscripcion/
│   │   │   ├── AgregarSuscripcion.jsx
│   │   │   └── AgregarSuscripcion.css
│   │   ├── EditarSuscripcion/
│   │   │   └── EditarSuscripcion.jsx
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   │   └── Login.css
│   │   ├── Register/
│   │   │   └── Register.jsx
│   │   │   └── Register.css
│   │   ├── PanelPrincipal/
│   │   │   └── PanelPrincipal.jsx
│   │   │   └── PanelPrincipal.css
│   │   ├── Suscripciones/
│   │   │   └── Suscripciones.jsx
│   │   │   └── Suscripciones.css
│   │   └── Usuario/
│   │       └── Usuario.jsx
│   │       └── Usuario.css
│
│   ├── router/
│   │   └── Enrutador.jsx          # Archivo de rutas (React Router)
│
│   ├── services/                  # Lógica de conexión con APIs
│   │   ├── suscripcionesAPI.js    # Lógica fetch/axios (renombra `fake-api.json`)
│   │   └── authAPI.js             # (opcional) Servicios relacionados con usuario
│
│   ├── helpers/                   # Funciones utilitarias
│   │   ├── functions.jsx
│
│   ├── main.jsx                   # Punto de entrada principal
│   └── index.css                    # Estilos globales
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 📫 Autor
Desarrollado por Santiago Loaiza
Estudiante de Desarrollo de Software
🚀 ¡Gracias por visitar este proyecto!
