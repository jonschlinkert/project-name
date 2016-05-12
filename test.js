'use strict';

require('mocha');
var assert = require('assert');
var name = require('./');

describe('project-name', function() {
  it('should return the name from package.json', function() {
    assert.equal(name(), 'project-name');
  });

  it('should return the name from a filepath', function() {
    assert.equal(name('fixtures/foo/a.txt'), 'foo');
  });

  it('should return the name from a directory', function() {
    assert.equal(name('fixtures/foo'), 'foo');
  });

  it('should return the name from an empty directory', function() {
    assert.equal(name('fixtures/foo/bar'), 'bar');
  });

  it('should return the name from a git config', function() {
    assert.equal(name('fixtures/foo'), 'foo');
  });
});
