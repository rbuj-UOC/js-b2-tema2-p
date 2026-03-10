// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u3e1.md / Enunciat disponible a u3e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
import { Validator } from './u1e1.js';

export class NumberValidator extends Validator {
  #min;
  #max;

  constructor(
    fieldName = 'none',
    value = '',
    min = undefined,
    max = undefined
  ) {
    super(fieldName ?? 'none', value);
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  set min(v) {
    this.#min = v;
  }

  get max() {
    return this.#max;
  }
  set max(v) {
    this.#max = v;
  }

  checkNumber() {
    const value = this.value;
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return `ERROR_NUMBER. ${this.field} NO es de tipo número o un número válido ${value}.`;
    }
    if (this.#max !== undefined && value > this.#max) {
      return `ERROR_MAX. ${this.field} supera el valor máximo asignado.`;
    }
    if (this.#min !== undefined && value < this.#min) {
      return `ERROR_MIN. ${this.field} no alcanza el valor máximo asignado.`;
    }
    return true;
  }

  isValid() {
    if (this.required && this.isEmpty()) {
      return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`;
    }
    if (!this.isEmpty()) {
      return this.checkNumber();
    }
    return true;
  }

  isEmpty() {
    return this.value === '' || this.value === null || this.value === undefined;
  }
}
