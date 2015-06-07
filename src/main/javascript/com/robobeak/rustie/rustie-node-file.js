import {Rustie as RustieBase}   from './rustie';
import {process as FrontMatter} from './plugins/front-matter/index';
import {process as MarkDown}    from './plugins/markdown/index';
import {NodeFileReder}          from './dal/node/file-reader';
import {NodeFileWriter}         from './dal/node/file-writer';


export class Rustie {
  constructor() {
    let rustie = new RustieBase(new NodeFileReder(), new NodeFileWriter());
    rustie.addPlugins(FrontMatter, MarkDown);
    return rustie;
  }
}