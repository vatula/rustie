import {RustieAbstractClassError} from '/com/robobeak/rustie/errors';

export class Reader {

  constructor() {
    if (this.constructor === Reader) {
      throw new RustieAbstractClassError('cannot instantiate class Reader. Reader is an abstract class');
    }
  }

  //noinspection JSMethodCanBeStatic
  async read(/*from*/) { return Object.create(null); }
}