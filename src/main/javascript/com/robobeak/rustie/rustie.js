import {Pipeline} from '/com/robobeak/rustie/pipeline';

export class Rustie {
  constructor(reader, writer) {
    this._reader = reader;
    this._writer = writer;
    this._pipeline = new Pipeline();
  }
  addPlugins(...plugins) {
    this._pipeline.addProcessors(...plugins);
  }
  async build(from, to) {
    let files = await this._reader.read(from);
    let processed = await this._pipeline.process(files);
    return await this._writer.write(to, processed);
  }
}