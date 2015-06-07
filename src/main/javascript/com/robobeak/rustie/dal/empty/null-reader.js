import {Reader} from '../../index';

export class NullReader extends Reader {
  //noinspection JSMethodCanBeStatic
  async read(/*from*/) { return super.read(); }
}