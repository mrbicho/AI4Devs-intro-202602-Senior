'use strict';

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

  function renderResult() {
    const reversed = reverseString(inputEl.value);
    resultEl.textContent = reversed;
  }

  buttonEl.addEventListener('click', renderResult);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      renderResult();
    }
  });

  resultEl.textContent = '';
});