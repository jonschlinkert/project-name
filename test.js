'use strict';

require('mocha');
var assert = require('assert');
var name = require('./');

describe('project-name', function() {
  it('should return the name from package.json', function() {
    assert.equal(name(), 'project-name');
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

  it('should fall back to path.basename(process.cwd())', function() {
    const cwd = process.cwd();
    try {
      process.chdir('./fixtures/foo');
      assert.equal(name(), 'foo');
    } catch (error) {
      throw error;
    } finally {
      process.chdir(cwd);
    }
  })
});
