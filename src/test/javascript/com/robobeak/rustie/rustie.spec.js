import {Rustie} from '../../../../../../src/main/javascript/com/robobeak/rustie/rustie-node-file';

let expect  = require('chai').expect;
let path    = require('path');


describe('rustie', () => {
  let fixture = path.resolve.bind(path, __dirname, 'fixtures');

  describe('#ctor', () => {
    it('should initialize pipeline and io', () => {
      let rustie = new Rustie();
      expect(rustie._reader).to.exist;
      expect(rustie._writer).to.exist;
    });
  });
  describe('#build', () => {
    it('should copy files', (done) => {

      let from = path.resolve(fixture('basic'), 'src');
      let to = path.resolve(fixture('basic'), 'build');

      let rustie = new Rustie();
      rustie.build(from, to).then(result => {
        expect(result).to.be.true;
        done();
      });
    });
  });
});