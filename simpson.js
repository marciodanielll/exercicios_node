const { readFile } = require('fs').promises;

const path = './simpsons.json';

const getSimpsonById = async (id)  => {
  const content = await readFile(path, 'utf-8')
  const arr = JSON.parse(content);
  const simpson = arr.find((e) => Number(e.id) === Number(id));
  return simpson;
}

getSimpsonById('1').then(console.log);