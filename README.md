# TaskFlow - CRUD App con IA

## Descripción
TaskFlow es una aplicación web moderna de gestión de tareas diarias que permite a los usuarios aplicar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre sus pendientes del día. El desarrollo de este proyecto se guió al 100% mediante el uso de Inteligencia Artificial, optimizando los tiempos de maquetación, depuración de errores y refactorización de código.

## Tecnologías Usadas
* **HTML5:** Estructura semántica de la interfaz de usuario.
* **CSS3:** Diseño responsivo y moderno basado en variables y flexbox.
* **JavaScript (ES6+):** Lógica del CRUD, manipulación del DOM y funciones flecha.
* **Web Storage API (LocalStorage):** Persistencia local de los datos en el navegador del usuario (sin base de datos tradicional).

## Instrucciones para Ejecutar el Proyecto
1. Clona este repositorio o descarga los archivos fuente.
2. Abre el archivo `index.html` directamente en tu navegador web de preferencia (Chrome, Edge, Firefox, etc.) o utilízalo mediante la extensión *Live Server* de VS Code.
3. ¡Comienza a gestionar tus tareas! Los datos persistirán incluso si recargas la página.

## Listado de Prompts Utilizados y Explicación

### 1. Estructura Base e Interfaz (HTML y CSS)
* **Prompt:** *"Actúa como un desarrollador experto en frontend. Necesito crear la estructura HTML5 y los estilos CSS3 en archivos separados para una aplicación web de lista de tareas (To-Do List). Debe tener un diseño moderno, limpio, responsivo y centrado en la pantalla..."*
* **Explicación:** Se utilizó para generar toda la base visual limpia de la aplicación (los formularios, inputs y contenedores) antes de acoplar la lógica.

### 2. Lógica del CRUD y LocalStorage (JavaScript)
* **Prompt:** *"Ahora escribe el archivo app.js para conectar con el HTML anterior. Necesito implementar las funciones CRUD usando el localStorage del navegador..."*
* **Explicación:** Con este prompt la IA programó las funciones básicas encargadas de capturar el formulario (`Create`), listar las tareas (`Read`), tacharlas al completarlas (`Update`) y removerlas (`Delete`).

### 3. Depuración de Errores (Soporte Técnico)
* **Prompt:** *(Se compartió captura de pantalla de la Consola con el error TypeError: Cannot read properties of null)*
* **Explicación:** Se usó la IA para diagnosticar un error de carga asíncrona de scripts en el DOM, sugiriendo la implementación del atributo `defer` en la etiqueta script y la estandarización de los selectores IDs entre el HTML y el JS.

### 4. Refactorización bajo Estándares ES6+
* **Prompt:** *"El código del CRUD con LocalStorage funciona perfectamente. Ahora, actúa como un Ingeniero de Software Senior y ayúdame a refactorizar el archivo app.js aplicando mejores prácticas de programación moderna..."*
* **Explicación:** Se utilizó para optimizar el rendimiento del sistema cambiando la estructura clásica a funciones flecha, agrupando los selectores del DOM en un objeto config y limpiando la delegación de eventos.
