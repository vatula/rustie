import {RustieAbstractClassError} from './errors';

export class Plugin {
  constructor() {
    if (this.constructor === Plugin) {
      throw new RustieAbstractClassError('cannot instantiate class Plugin. Plugin is an abstract class');
    }
  }

  //noinspection JSMethodCanBeStatic
  async process(files) { return files; }
}