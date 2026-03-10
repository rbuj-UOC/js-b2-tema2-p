// T2. Trabajo experto con clases
// U2. Polimorfismo
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
import { EmailValidator } from '../u1/u1e2';
import { NumberValidator } from '../u1/u1e3';

export class FormValidator {
  #fieldList;

  constructor() {
    this.#fieldList = [];
  }

  addField(field) {
    if (
      !(field instanceof EmailValidator || field instanceof NumberValidator)
    ) {
      return "ERROR_TYPE. The object's type to be added is not supported.";
    }
    if (this.#fieldList.some((current) => current.field === field.field)) {
      return `ERROR_DUPLICATE. Ya existe un campo con el nombre ${field.field}`;
    }
    this.#fieldList.push(field);
    return true;
  }

  removeField(fieldName) {
    this.#fieldList = this.#fieldList.filter(
      (current) => current.field !== fieldName
    );
  }

  nFields() {
    return this.#fieldList.length;
  }

  validate() {
    if (this.#fieldList.length === 0) {
      return 'ERROR_EMPTY. El formulario no dispone de campos a validar';
    }
    for (const field of this.#fieldList) {
      const result = field.isValid();
      if (result !== true) {
        return result;
      }
    }
    return true;
  }
}
