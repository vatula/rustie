export class Data {
  /**
   *
   * @param {Uint8Array} content
   */
  constructor(content) {
    this._content = content;
    this._metadata = Object.create(null);
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get metadata() {
    return this._metadata;
  }
}