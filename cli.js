#!/usr/bin/env node

process.title = 'project-name';

var name = require('./')(process.cwd());
console.log(name);
