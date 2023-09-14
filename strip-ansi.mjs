#!/usr/bin/env node

import stripAnsi from 'strip-ansi'

const {
  stdin,
  stdout
} = process

stdin
  .on('data', (data) => {
    stdout.write(stripAnsi(data.toString('utf8')))
  })
