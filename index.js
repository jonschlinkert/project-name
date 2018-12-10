'use strict';

const fs = require('fs');
const path = require('path');
const repo = require('git-repo-name');

module.exports = cwd => {
  return pkgname(cwd) || gitname(cwd) || path.basename(cwd);
};

function pkgname(cwd = '') {
  let pkgPath = path.resolve(process.cwd(), cwd);

  if (!pkgPath.endsWith('package.json')) {
    pkgPath = path.join(pkgPath, 'package.json');
  }

  if (fs.existsSync(pkgPath)) {
    let pkg = JSON.parse(fs.readFileSync(pkgPath));
    return pkg.name;
  }
}

function gitname(cwd = '.') {
  try {
    return repo.sync({ cwd: path.resolve(cwd) });
  } catch (err) {}
}
