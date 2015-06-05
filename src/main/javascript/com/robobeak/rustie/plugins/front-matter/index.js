import jsyaml from './js-yaml';


function uint8ToString(u8a) {
  let CHUNK_SZ = 0x8000;
  let c = [];
  for (let i = 0, j = u8a.length; i < j; i += CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)));
  }
  return c.join('');
}

function stringToUint8(str) {
  let result = new Uint8Array(str.length);
  for (let i = 0, j = str.length; i < j; ++i) {
    result[i] = str.charCodeAt(i);
  }
  return result;
}

function getPosition(str, m, i) {
  return str.split(m, i).join(m).length;
}

export async function process(files) {
  let delimiter = '---', yamlSnippet;
  Object.keys(files).forEach(path => {
    let frontmatter = Object.create(null);
    let file = files[path];
    let contentString = uint8ToString(file.content);
    let lastDelimiter = getPosition(contentString, delimiter, 2);
    if (lastDelimiter) {
      yamlSnippet = contentString.substring(delimiter.length, lastDelimiter);
      frontmatter = jsyaml.load(yamlSnippet);
      contentString = contentString.substring(lastDelimiter + delimiter.length).trim();
    }
    file.content = stringToUint8(contentString);
    file.metadata.frontmatter = frontmatter;
  });
  return files;
}