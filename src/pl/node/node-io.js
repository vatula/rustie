import promisify  from 'promisify-node';
import path       from 'path';
import {Data}     from '../../data';
import {IO}       from '../io';

let readdir   = promisify('recursive-readdir');
let mkdirp    = promisify('mkdirp');
let fs        = promisify('fs');

function memoizerFactory(from, files) {
  return function memoizer(memo, filePath, i) {
    let file = path.relative(from, filePath);
    memo[file] = files[i];
    return memo;
  }
}

function asyncBulkWriterFactory(writer, to, files) {
  return async function asyncBulkWriter(filePath) {
    let file = path.resolve(to, filePath);
    await mkdirp(to);
    return await writer(files[filePath], file);
  }
}

async function readFile(filePath) {
  let contents = await fs.readFile(filePath);
  return new Data(new Uint8Array(contents));
}

/**
 * @param   {Data}    data
 * @param   {String}  to
 * @returns {Promise}
 */
async function writeFile(data, to) {
  return await fs.writeFile(to, new Buffer(data.content));
}

export class NodeIO extends IO {

  constructor() {
    super();
  }

  async read(from) {
    let filePaths = (await readdir(from)).reduce((result, item) => result.concat(item), []);
    let files = await Promise.all(filePaths.map(readFile));
    let memoizer = memoizerFactory(from, files);
    return filePaths.reduce(memoizer, Object.create(null));
  }

  async write(to, files = Object.create(null)) {
    let filePaths = Object.keys(files);
    let asyncBulkWriter = asyncBulkWriterFactory(writeFile, to, files);
    let writerResult = filePaths.map(asyncBulkWriter);
    await Promise.all(writerResult);
    return true
  }
}