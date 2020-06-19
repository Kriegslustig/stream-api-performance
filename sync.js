const { performance } = require('perf_hooks')

const { createDummyStream } = require('./stream')

const RUNS = 10000

let count = 0
const run = () => {
  if (count >= RUNS) return
  count += 1

  const start = performance.now()

  createDummyStream()
    .on('end', run)
    .on('data', () => {})
    .on('error', err => { console.error(err); process.exit(1) })

  const end = performance.now()
  console.log(`${end - start}`)
}

run()
