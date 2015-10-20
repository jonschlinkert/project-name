require('mocha');
var assert = require('assert');
var name = require('./');

describe('project-name', function () {
  it('should return the name from package.json', function () {
    assert(name(), 'project-name');
  });

  it('should return the name from a filepath', function () {
    assert(name('fixtures/foo/a.txt'), 'foo');
  });

  it('should return the name from a directory', function () {
    assert(name('fixtures/foo'), 'foo');
  });

  it('should return the name from a git config', function () {
    assert(name('fixtures/foo'), 'foo');
  });
});
