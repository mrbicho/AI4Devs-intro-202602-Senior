'use strict';

const MIN_CHARS_FOR_BUTTON = 4; // "más de 3 letras" => >= 4 caracteres

/**
 * Pure function: returns the reversed version of the input string.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  const s = String(str);
  return s.split('').reverse().join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('textInput');
  const buttonEl = document.getElementById('reverseBtn');
  const resultEl = document.getElementById('result');
  const realtimeToggleEl = document.getElementById('realtimeToggle');

  function shouldShowButton(text) {
    // Botón visible solo si:
    // - NO estamos en modo tiempo real
    // - y el texto tiene mínimo MIN_CHARS_FOR_BUTTON
    return !realtimeToggleEl.checked && text.length >= MIN_CHARS_FOR_BUTTON;
  }

  function updateButtonVisibility(text) {
    buttonEl.style.display = shouldShowButton(text) ? 'inline-block' : 'none';
  }

  function renderResultFromInput() {
    const text = inputEl.value;
    resultEl.textContent = reverseString(text);
  }

  function handleInputChange() {
    const text = inputEl.value;

    // Siempre actualizamos visibilidad del botón según las reglas
    updateButtonVisibility(text);

    // Si está activado "Tiempo real", actualizamos resultado en cada cambio
    if (realtimeToggleEl.checked) {
      renderResultFromInput();
    }
  }

  function handleReverseClick() {
    // En modo botón, por seguridad, solo actuamos si cumple mínimos y no es realtime
    if (shouldShowButton(inputEl.value)) {
      renderResultFromInput();
    }
  }

  // Inicial
  resultEl.textContent = '';
  updateButtonVisibility(inputEl.value);

  // Eventos
  inputEl.addEventListener('input', handleInputChange);

  realtimeToggleEl.addEventListener('change', () => {
    // Al cambiar el modo, recalculamos visibilidad del botón
    updateButtonVisibility(inputEl.value);

    // Si activas tiempo real, pinta inmediatamente el resultado actual
    if (realtimeToggleEl.checked) {
      renderResultFromInput();
    }
  });

  buttonEl.addEventListener('click', handleReverseClick);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // Enter solo aplica cuando el botón está disponible (modo botón + mínimo)
      if (shouldShowButton(inputEl.value)) {
        e.preventDefault();
        renderResultFromInput();
      }
    }
  });
});