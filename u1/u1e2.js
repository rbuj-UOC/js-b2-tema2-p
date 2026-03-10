// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
import { Validator } from './u1e1';

export class EmailValidator extends Validator {
  constructor(fieldName = 'none', value = '') {
    super(fieldName ?? 'none', value);
  }

  checkEmailAddress() {
    const error = `ERROR_EMAIL. ${this.field} NO es una dirección de correo válida.`;
    const parts = String(this.value).split('@');
    if (parts.length !== 2 || parts[0].length < 1) {
      return error;
    }
    const domain = parts[1].split('.');
    if (domain.length != 2 || domain[0].length < 2 || domain[1].length < 2) {
      return error;
    }
    return true;
  }

  isValid() {
    if (this.required && this.value.length <= 0) {
      return `ERROR_REQUIRED. ${this.field} no puede ser vacío si es obligatorio.`;
    }
    if (this.value.length > 0) {
      return this.checkEmailAddress();
    }
    return true;
  }
}
