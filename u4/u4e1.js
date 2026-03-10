// T2. Trabajo experto con clases
// U4. Interfaces
// Enunciado disponible en u4e1.md / Enunciat disponible a u4e1.md

// Escribe aquí tu solución / escriviu aquí la vostra solució:
export const IPrintable = {
  print() {}
};

Object.defineProperty(Object.prototype, 'implements', {
  value: function (interf) {
    for (const key in interf) {
      if (typeof interf[key] === 'function') {
        if (typeof this[key] !== 'function') {
          return false;
        }
      }
    }
    return true;
  },
  enumerable: false
});

export class Message {
  constructor(text) {
    this.text = text;
    if (!this.implements(IPrintable)) {
      throw new Error(
        "ERROR_IMPLEMENTS. This class doesn't implements the interface IPrintable."
      );
    }
  }

  print() {
    console.log(this.text);
  }
}
