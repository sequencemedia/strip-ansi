#!/usr/bin/env node

import stripAnsi from 'strip-ansi'

const {
  stdin,
  stdout
} = process

let collector = Buffer.from('')

stdin
  .on('data', (buffer) => {
    collector = Buffer.concat([collector, buffer])
  })
  .on('end', () => {
    stdout.write(stripAnsi(collector.toString('utf8')))
  })
