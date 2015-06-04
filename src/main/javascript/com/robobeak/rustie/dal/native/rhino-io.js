import {Data} from '../../data';
import {IO}   from './io';

async function readdir(path) {
  let result = [];
  let stack = [new java.io.File(path)];
  while (stack.length) {
    let entry = stack.shift();
    if (entry.isDirectory()) {
      for (let iterator = entry.listFiles().iterator(); iterator.hasNext();) {
        stack.push(iterator.next());
      }
    } else {
      result.push(entry.getAbsoluteFile());
    }
  }

  return result;
}

function memoizerFactory(from, files) {
  return function memoizer(memo, filePath, i) {
    let file = new java.io.File(from).toURI().relativize(new java.io.File(filePath).toURI()).getPath();
    memo[file] = files[i];
    return memo;
  }
}

async function readFileContent(filePath) {
  return java.nio.file.Files.readAllBytes(java.nio.file.Paths.get(filePath));
}

async function readFile(filePath) {
  let contents = await readFileContent(filePath);
  return new Data(new Uint8Array(contents));
}

function asyncBulkWriterFactory(writer, to, files) {
  return async function asyncBulkWriter(filePath) {
    let file = java.nio.file.FileSystems.getDefault().getPath(to).resolve(filePath).normalize();
    (new java.io.File(to)).mkdirs();
    return await writer(files[filePath], file);
  }
}

async function writeFile(data, to) {
  java.nio.file.Files.write(java.nio.file.Paths.get(to), data.content);
  return true;
}


export class RhinoIO extends IO {

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
    return true;
  }
}