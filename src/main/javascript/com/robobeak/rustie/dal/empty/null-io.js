import {IO} from '../io';

export class NullIO extends IO {
  constructor(from, to) {
    super(from, to);
  }
}