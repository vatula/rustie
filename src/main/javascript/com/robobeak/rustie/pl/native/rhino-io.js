import {Data}     from '../../data';
import {IO}       from '../io';

export class RhinoIO extends IO {

  constructor() {
    super();
  }

  async read(from) {
    return super.read();
  }

  async write(to, files = Object.create(null)) {
    return super.write();
  }
}