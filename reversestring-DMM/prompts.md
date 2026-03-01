# AI4Devs — Reverse String (HTML + JS)

## Chatbot utilizado
ChatGPT

## Prompts usados (en orden)

### Prompt 1
# Ejercicio AI4Devs — Reverse String (HTML + JS)

Necesito resolver un ejercicio sencillo usando **un chatbot** (ChatGPT / Gemini / Claude) y apoyándome en los **seed files** que ya existen dentro de la carpeta `template` (al menos `index.html` y `script.js`).

## Reglas y entrega (OBLIGATORIO)
- La solución debe ser **HTML + JavaScript vanilla** (sin frameworks, sin librerías externas).
- Debo **copiar** la carpeta `template` y crear una nueva carpeta llamada: `reversestring-XXX` (XXX son mis iniciales, por ejemplo `reversestring-ARM`).
- Debes indicarme exactamente qué cambios aplicar en los archivos del seed.
- En la carpeta `reversestring-XXX` debe existir un archivo `prompts.md` que incluya:
  - El **chatbot utilizado** (por ejemplo: ChatGPT)
  - **Todos los prompts** usados (si solo es uno, solo este), en orden
  - El **prompt final** claramente marcado
- Al entregar, abriré una **Pull Request** y debo pegar el **prompt final** también en el comentario/descripcion de la PR.

## Objetivo del ejercicio
Crear una página web con lógica en JavaScript que **invierta el orden de una cadena de texto**.

Ejemplo:
- Si el usuario introduce `AI4Devs`, la salida debe ser exactamente: `sveD4IA`.

## Requisitos funcionales
### UI (interfaz)
- Un input de texto donde el usuario escribe la cadena.
- Un botón (texto: **"Invertir"**) que al pulsarlo invierte la cadena.
- Un área visible para mostrar el resultado (texto invertido).
- Extra recomendado: permitir que al pulsar **Enter** también se ejecute la inversión.

### Lógica
- Implementa una función pura: `reverseString(str)` que devuelva el string invertido.
- Debe funcionar con:
  - Cadena vacía
  - Cadenas con espacios
  - Letras + números (ej. `AI4Devs`)
- Sin dependencias externas.

## Integración con el seed (template)
- Reutiliza al máximo el HTML existente en `template/index.html` (no reescribir todo si no hace falta).
- Implementa la lógica y el “wiring” del DOM en `template/script.js`.
- Mantén el código simple, legible y orientado a principiantes.

## Criterios de aceptación
- Dado el input `AI4Devs`
  - Cuando pulso el botón “Invertir” (o Enter)
  - Entonces se muestra `sveD4IA` exactamente.
- Sin errores en consola.
- Debe funcionar abriendo `index.html` directamente en un navegador moderno.

## Formato de salida que necesito que me generes
1) Pasos breves para hacerlo en el repo (copiar template, renombrar carpeta, etc.).
2) Contenido completo final para estos archivos dentro de `reversestring-XXX/`:
   - `index.html`
   - `script.js`
   - `prompts.md`
3) Un texto corto para el comentario/descripcion de la Pull Request que incluya:
   - El nombre de la carpeta (`reversestring-XXX`)
   - El chatbot usado
   - El **prompt final** (este prompt) para pegarlo tal cual en la PR

---

### Prompt 2
Vamos a implementar funciones extra que han pedido en el ejercicio:

------

Si lograste alcanzar a cumplir el objetivo del reto sin problemas y quieres subir un poco más el nivel, implementa las siguientes funciones: 

El botón debe aparecer cuando haya texto suficiente, más de 3 letras

Que te de la cadena en tiempo real, que no dependa del botón.

------

para la opción en tiempo real, que haya algún selector o switch, para que se pueda elegir o convertir en tiempo real, o usar el botón (teniendo en cuenta el tamaño mínimo de 3 carácteres para activar el botón).

---

### Prompt 3
# Ejercicio AI4Devs — Reverse String (Mejora UI/UX como diseñador + maquetador web)

Ya tengo (o voy a tener) el ejercicio funcional de invertir una cadena usando el seed `template/index.html` + `template/script.js`.  
Ahora necesito que actúes como **diseñador UI/UX y maquetador web** para **mejorar la interfaz** sin romper la lógica existente.

## Reglas y restricciones (OBLIGATORIO)
- Mantener **HTML + CSS + JavaScript vanilla**. Sin frameworks, sin librerías externas.
- Seguir usando el seed del repo: `index.html` y `script.js` dentro de la carpeta copiada `reversestring-XXX/`.
- No cambies el objetivo: invertir un string (ej. `AI4Devs` -> `sveD4IA`).
- No añadas assets externos (sin imágenes remotas, sin CDNs, sin fuentes externas). Todo debe funcionar offline abriendo `index.html`.
- El resultado final debe ser **responsive** (móvil + desktop).
- Accesibilidad básica: buen contraste, labels, focus visible, navegación por teclado.

## Objetivo de diseño
Quiero una interfaz:
- Moderna, limpia, minimalista.
- Con una “card” central alineada y con buen espaciado.
- Tipografía del sistema (system font stack).
- Microinteracciones sutiles (hover/focus/active) sin exagerar.
- Mensajes claros y un feedback visual agradable.

## Requisitos UI/UX concretos
1) **Layout**
   - Fondo suave (color plano o degradado muy sutil).
   - Card centrada con borde redondeado y sombra ligera.
   - Máximo ancho razonable (ej. 520–640px) y padding generoso.

2) **Componentes**
   - Título: “Invertir cadena”
   - Subtítulo corto de ayuda: “Escribe un texto y pulsa Invertir (o Enter).”
   - Campo de texto con label (no solo placeholder).
   - Botón primario “Invertir”.
   - Botón secundario opcional “Limpiar”.
   - Área de resultado con estilo tipo “output” (monoespaciada opcional) y botón pequeño “Copiar” opcional.

3) **Estados**
   - Estado vacío: si no hay texto, mostrar un mensaje suave (ej. “Introduce un texto para ver el resultado”).
   - Validación ligera: si el usuario intenta invertir vacío, muestra un aviso no intrusivo.
   - Animación sutil al actualizar el resultado (ej. fade/slide muy leve).

4) **Accesibilidad**
   - Labels asociados (for/id).
   - `aria-live` para el resultado (polite).
   - Focus ring claro.
   - Tamaños de click cómodos en móvil.

## Integración técnica
- Preferible: añadir estilos en un `<style>` en `index.html` (o un `styles.css` local si el seed lo permite).
- Mantén `reverseString(str)` en `script.js` tal cual o compatible.
- Si introduces “Limpiar” o “Copiar”, implementa su lógica en `script.js` sin complicarlo.

## Formato de salida que necesito
1) Explica brevemente qué cambios hiciste (lista corta).
2) Devuélveme el **contenido completo final** de:
   - `reversestring-XXX/index.html`
   - `reversestring-XXX/script.js`
   - (si aplica) `reversestring-XXX/styles.css`
3) Asegúrate de que el ejemplo `AI4Devs` produce `sveD4IA` y que no hay errores en consola.

---

### Prompt 4 (FINAL)
El botón debe aparecer, pero desactivado, solo se activa cuando el texto introducido tiene más de 3 carácteres.

## ChatGPT - Link

[Link a la conversación](https://chatgpt.com/share/69a4bc54-bd6c-8007-94bf-a0f2824793e7)