import {IO} from '../io';

let promisify = require('promisify-node');
let readdir   = promisify('recursive-readdir');
let mkdirp    = promisify('mkdirp');
let path      = require('path');
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
  let data = Object.create(null);
  data.contents = await fs.readFile(filePath);
  return data;
}

async function writeFile(data, to) {
  return await fs.writeFile(to, data.contents);
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

  async write(to, files) {
    let filePaths = Object.keys(files);
    console.log('will write', files);
    let asyncBulkWriter = asyncBulkWriterFactory(writeFile, to, files);
    let writerResult = filePaths.map(asyncBulkWriter);
    console.log(`Almost there!`, writerResult);
    await Promise.all(writerResult);
    return true
  }
}