# 🎁 CHALLENGE AMIGO SECRETO

## 📋 Descripción del Proyecto
Aplicación web interactiva desarrollada como parte de la formación inicial en Alura Latam. El sistema automatiza el proceso tradicional del sorteo de "Amigo Secreto", permitiendo a los usuarios gestionar listas de participantes de forma dinámica y realizar una selección aleatoria transparente y libre de errores.

---

## 🎯 Desafío Propuesto
El objetivo principal es desarrollar una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto", bajo las siguientes reglas de negocio:

1. **Sin Duplicados:** Antes de iniciar debe tener en cuenta que no se permiten nombres duplicados.
2. **Gestión Dinámica:** El usuario ingresa un nombre, presiona "Añadir" y la lista se visualiza inmediatamente debajo del cuadro de ingreso de nombres.
3. **Flujo de Sorteo:** Una vez que se haya completado el listado, se puede comenzar con el sorteo presionando el boton de sorteo.
4. **Control de Estado:** El sistema realiza un seguimiento del flujo del juego,, al finalizar y sortear todos los nombres, el sistema notifica de manera inteligente que ya no quedan participantes pendientes.

---

## 🚀 Características Clave y Lógica Aplicada
* **Validación de Entradas:** Implementación de lógica de control para evitar la inserción de nombres duplicados o campos vacíos, garantizando la integridad de los datos desde el ingreso.
* **Manipulación Dinámica del DOM:** Renderizado en tiempo real de la lista de participantes debajo del cuadro de texto mediante JavaScript vanilla, optimizando la experiencia de usuario (UX).
* **Algoritmo de Sorteo Aleatorio:** Uso de funciones matemáticas (`Math.random` y `Math.floor`) para asegurar una selección completamente aleatoria y equitativa.
* **Control de Estado Completo:** El sistema realiza un seguimiento del flujo del juego, notificando de manera inteligente al usuario cuando todos los nombres de la lista han sido sorteados.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructuración semántica de la interfaz web.
* **CSS3:** Diseño visual adaptivo y estilizado para una experiencia limpia.
* **JavaScript (ES6+):** Lógica del negocio, manejo de arreglos (arrays), estructuras condicionales y manipulación de elementos de la interfaz.
