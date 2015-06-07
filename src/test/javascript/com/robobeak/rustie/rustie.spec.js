import {Rustie} from '/com/robobeak/rustie/rustie';

let expect  = require('chai').expect;
let path    = require('path');


describe('rustie', () => {
  let fixture = path.resolve.bind(path, __dirname, 'fixtures');

  describe('#ctor', () => {
    it('should initialize pipeline and io', () => {
      let rustie = new NodeRustie();
      expect(rustie._reader).to.exist;
      expect(rustie._writer).to.exist;
    });
  });
  describe('#build', () => {
    it('should copy files', (done) => {

      let from = path.resolve(fixture('basic'), 'src');
      let to = path.resolve(fixture('basic'), 'build');

      let rustie = new NodeRustie();
      rustie.build(from, to).then(result => {
        expect(result).to.be.true;
        done();
      });
    });
  });
});