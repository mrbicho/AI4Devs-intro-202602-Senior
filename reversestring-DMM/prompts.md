# AI4Devs — Reverse String (HTML + JS)

## Chatbot utilizado
ChatGPT

## Prompts usados (en orden)

### Prompt 1 (FINAL)
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

## ChatGPT - Link

[Link a la conversación](https://chatgpt.com/share/69a4bc54-bd6c-8007-94bf-a0f2824793e7)