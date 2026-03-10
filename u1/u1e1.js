// T2. Trabajo experto con clases
// U1. Herencia
// Enunciado disponible en u1e1.md / Enunciat disponible a u1e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
export class Validator {
  #field;
  #value;
  #required = false;

  constructor(field = undefined, value = undefined) {
    this.#field = field ?? '';
    this.value = value ?? '';
  }

  get field() {
    return this.#field;
  }

  get value() {
    return this.#value;
  }

  get required() {
    return this.#required;
  }

  set field(newField) {
    this.#field = newField;
  }

  set value(newValue) {
    this.#value = newValue;
  }

  set required(newRequired) {
    this.#required = newRequired;
  }

  isEmpty() {
    return this.#value.length <= 0;
  }

  isValid() {
    return !this.required || !this.isEmpty();
  }
}
