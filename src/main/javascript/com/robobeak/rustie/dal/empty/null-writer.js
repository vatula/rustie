import {Writer} from '../../index';

export class NullWriter extends Writer {
  //noinspection JSMethodCanBeStatic
  async write(/*to, files*/) { return super.write(); }
}