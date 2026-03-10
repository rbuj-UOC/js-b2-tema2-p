// T2. Trabajo experto con clases
// U3. Clases abstractas
// Enunciado disponible en u3e2.md / Enunciat disponible a u3e2.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
import { Shape } from './u3e1';

export class Rectangle extends Shape {
  #base;
  #height;

  constructor(base = 0, height = 0) {
    super(2);

    this.#base = base;
    this.#height = height;
  }

  get base() {
    return this.#base;
  }

  get height() {
    return this.#height;
  }

  set base(newBase) {
    this.#base = newBase;
  }

  set height(newHeight) {
    this.#height = newHeight;
  }

  getArea() {
    return this.#height * this.#base;
  }

  isSquare() {
    return this.#height === this.#base;
  }
}
