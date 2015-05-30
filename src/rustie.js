import {Pipeline} from './pipeline';

export class Rustie {
  constructor(io) {
    this._io = io;
    this._pipeline = new Pipeline();
  }
  addPlugins(...plugins) {
    this._pipeline.addProcessors(...plugins);
  }
  async build(from, to) {
    let files = await this._io.read(from);
    let processed = await this._pipeline.process(files);
    return await this._io.write(to, processed);
  }
}