import {Rustie as RustieBase} from './rustie';
import {NodeFileReder}        from './dal/node/file-reader';
import {NodeFileWriter}       from './dal/node/file-writer';


export class Rustie {
  constructor() {
    return new RustieBase(new NodeFileReder(), new NodeFileWriter());
  }
}