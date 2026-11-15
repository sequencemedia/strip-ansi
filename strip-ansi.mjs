#!/usr/bin/env node

import {
  stripVTControlCharacters as stripAnsi
} from 'node:util'

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
