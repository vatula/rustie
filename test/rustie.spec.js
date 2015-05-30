import {Rustie} from '../src/rustie';
import {Pipeline} from '../src/pipeline';

let expect = require('chai').expect;

describe('rustie', () => {
  describe('#ctor', () => {
    it('should initialize pipeline and io', () => {
      let io = Object.create(null);
      let rustie = new Rustie(io);
      expect(rustie._io).to.equal(io);
    });
  });
});