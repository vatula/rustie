import {RustieAbstractClassError} from '../errors';

export class Writer {

  constructor() {
    if (this.constructor === Writer) {
      throw new RustieAbstractClassError('cannot instantiate class Writer. Writer is an abstract class');
    }
  }

  //noinspection JSMethodCanBeStatic
  async write(/*to, files*/) { return true; }
}