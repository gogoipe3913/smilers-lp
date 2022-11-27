const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sharp = require('sharp');

glob('tmp/img/**/*.jpg', {}, (err, matches) => {
  matches.forEach(async (match) => {
    if (match.indexOf('.') > -1) {
      const dirs = match.split('/');
      dirs.shift();
      dirs.shift();
      const last = dirs.pop();
      const [basename] = last.split('.');
      const dist = `src/images/${dirs.join('/')}/${basename}.jpg`;
      await sharp(match).jpeg(80)
          .resize(1920)
          .toFile(dist);
      console.log(dist);
    }
  })
});