import {Rustie}         from './rustie';
import {FrontMatter}    from './plugins/front-matter/index';
import {Markdown}       from './plugins/markdown/index';
import {NodeFileReder}  from './dal/node/file-reader';
import {NodeFileWriter} from './dal/node/file-writer';


export class NodeRustie extends Rustie {

  constructor() {
    super(new NodeFileReder(), new NodeFileWriter());
    this.addPlugins(new FrontMatter(), new Markdown());
  }
}