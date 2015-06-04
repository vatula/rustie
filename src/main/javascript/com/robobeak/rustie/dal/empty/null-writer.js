import {Writer} from '../writer';

export class NullWriter extends Writer {
  //noinspection JSMethodCanBeStatic
  async write(/*to, files*/) { return super.write(); }
}