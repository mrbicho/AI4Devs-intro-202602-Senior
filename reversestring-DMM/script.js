'use strict';

const MIN_CHARS_FOR_BUTTON = 4; // "más de 3" => >= 4 caracteres

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
  const realtimeToggleEl = document.getElementById('realtimeToggle');

  const reverseBtn = document.getElementById('reverseBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');

  const resultEl = document.getElementById('result');
  const statusEl = document.getElementById('status');
  const toastEl = document.getElementById('toast');

  function setStatus(message, type) {
    statusEl.textContent = message || '';
    statusEl.classList.toggle('warn', type === 'warn');
  }

  function setEmptyState() {
    resultEl.innerHTML =
      '<span class="empty">Introduce un texto para ver el resultado</span>';
  }

  function setResult(text) {
    resultEl.textContent = text;

    // micro-animación
    resultEl.classList.remove('bump');
    void resultEl.offsetWidth; // reflow
    resultEl.classList.add('bump');
  }

  function hasMinChars(text) {
    return text.length >= MIN_CHARS_FOR_BUTTON;
  }

  function updateReverseButtonState() {
    const text = inputEl.value;

    // En modo tiempo real: ocultamos el botón (no es necesario)
    const showButton = !realtimeToggleEl.checked;
    reverseBtn.style.display = showButton ? 'inline-block' : 'none';

    // Si está visible, se habilita/deshabilita según mínimo
    if (showButton) {
      reverseBtn.disabled = !hasMinChars(text);
    }
  }

  function renderFromInput() {
    setResult(reverseString(inputEl.value));
  }

  function invertNowWithValidation() {
    const text = inputEl.value;

    if (!text) {
      setStatus('Introduce un texto antes de invertir.', 'warn');
      setEmptyState();
      return;
    }

    if (!hasMinChars(text)) {
      setStatus('Escribe al menos 4 caracteres para invertir.', 'warn');
      return;
    }

    setStatus('', '');
    renderFromInput();
  }

  function handleInput() {
    const text = inputEl.value;

    // Actualiza botón (visible/disabled)
    updateReverseButtonState();

    // Limpia warnings si el usuario está corrigiendo
    if (statusEl.classList.contains('warn') && text) {
      setStatus('', '');
    }

    // Estado vacío
    if (!text) {
      setEmptyState();
      return;
    }

    // Tiempo real: actualiza siempre (aunque sea corto)
    if (realtimeToggleEl.checked) {
      renderFromInput();
    }
  }

  function handleToggleChange() {
    updateReverseButtonState();

    // Si activas tiempo real, render inmediato si hay texto
    if (realtimeToggleEl.checked && inputEl.value) {
      setStatus('', '');
      renderFromInput();
    }

    // Si desactivas tiempo real y está vacío, vuelve al empty state
    if (!realtimeToggleEl.checked && !inputEl.value) {
      setEmptyState();
    }
  }

  function clearAll() {
    inputEl.value = '';
    setStatus('', '');
    setEmptyState();
    updateReverseButtonState();
    inputEl.focus();
  }

  async function copyResult() {
    if (!inputEl.value) {
      setStatus('No hay resultado para copiar todavía.', 'warn');
      return;
    }

    try {
      await navigator.clipboard.writeText(resultEl.textContent || '');
      setStatus('', '');
      toastEl.classList.add('show');
      window.setTimeout(() => toastEl.classList.remove('show'), 900);
    } catch {
      setStatus(
        'No se pudo copiar automáticamente. Copia manualmente el texto.',
        'warn'
      );
    }
  }

  // Estado inicial
  setEmptyState();
  setStatus('', '');
  updateReverseButtonState();

  // Eventos
  inputEl.addEventListener('input', handleInput);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      // Enter solo cuando el botón está visible y habilitado (modo botón + mínimo)
      if (!realtimeToggleEl.checked && !reverseBtn.disabled) {
        e.preventDefault();
        invertNowWithValidation();
      }
    }
  });

  realtimeToggleEl.addEventListener('change', handleToggleChange);

  reverseBtn.addEventListener('click', invertNowWithValidation);
  clearBtn.addEventListener('click', clearAll);
  copyBtn.addEventListener('click', copyResult);
});