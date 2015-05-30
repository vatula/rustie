import {Rustie} from '../src/rustie';
import {Pipeline} from '../src/pipeline';
import {NodeIO} from '../src/pl/node/node-io';

let expect  = require('chai').expect;
let path    = require('path');


describe('rustie', () => {
  let fixture = path.resolve.bind(path, __dirname, 'fixtures');

  describe('#ctor', () => {
    it('should initialize pipeline and io', () => {
      let io = Object.create(null);
      let rustie = new Rustie(io);
      expect(rustie._io).to.equal(io);
    });
  });
  describe('#build', () => {
    it('should copy files', (done) => {

      let from = path.resolve(fixture('basic'), 'src');
      let to = path.resolve(fixture('basic'), 'build');

      let rustie = new Rustie(new NodeIO());
      rustie.build(from, to).then(result => {
        expect(result).to.be.true;
        done();
      });
    });
  });
});