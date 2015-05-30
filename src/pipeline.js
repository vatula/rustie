export class Pipeline {
  constructor() {
    this._processors = [];
  }
  addProcessors(...plugins) {
    this._processors.push(...plugins);
  }
  async process(files) {
    let list = Object.assign(Object.create(null), files);
    for (let processor of this._processors) {
      list = await processor(list);
    }
    return list;
  }
}