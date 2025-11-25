import * as yaml from 'js-yaml';
console.log('yaml module:', yaml);
try {
  console.log('load function:', yaml.load);
} catch (e) {
  console.error(e);
}
