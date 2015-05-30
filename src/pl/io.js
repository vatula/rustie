import {RustieAbstractClassError} from '../errors';

class IO {

  constructor() {
    if (this.constructor === IO) {
      throw new RustieAbstractClassError('cannot instantiate class IO. IO is an abstract class');
    }
  }

  //noinspection JSMethodCanBeStatic
  async read(/*from*/) { return []; }

  //noinspection JSMethodCanBeStatic
  async write(/*to, files*/) { return true; }
}