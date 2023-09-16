#!/usr/bin/env node

import stripAnsi from 'strip-ansi'

const {
  openStdin,
  stdout
} = process

let collector = Buffer.from('')

openStdin()
  .on('data', (buffer) => {
    collector = Buffer.concat([collector, buffer])
  })
  .on('end', () => {
    stdout.write(stripAnsi(collector.toString('utf8')))
  })
