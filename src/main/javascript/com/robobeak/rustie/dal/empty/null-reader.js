import {Reader} from '../reader';

export class NullReader extends Reader {
  //noinspection JSMethodCanBeStatic
  async read(/*from*/) { return super.read(); }
}