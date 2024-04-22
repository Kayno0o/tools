import fs from 'node:fs'

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();


  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

const [targetFile, ...sourceFiles] = process.argv.slice(2);

if (!targetFile || sourceFiles.length < 1) {
  console.error('Usage: node merge-json.js targetFile.json sourceFile1.json sourceFile2.json ...');
  process.exit(1);
}

const target = JSON.parse(fs.readFileSync(targetFile, 'utf8'))
const sources = sourceFiles.map(file => JSON.parse(fs.readFileSync(file, 'utf8')))

const mergedObject = mergeDeep(target, ...sources);

try {
  fs.writeFileSync(targetFile, JSON.stringify(mergedObject, null, 2));
  console.log(`Merged JSON saved to ${targetFile}`);
} catch (err) {
  console.error(`Error writing to file ${targetFile}: ${err.message}`);
}
