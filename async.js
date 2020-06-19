const { performance } = require('perf_hooks')

const { createDummyStream } = require('./stream')

const RUNS = 10000

const main = async () => {
  for (const x of Array.from(new Array(RUNS))) {
    const start = performance.now()

    for await (chunk of createDummyStream()) {
      // nothing
    }

    const end = performance.now()
    console.log(`${end - start}`)
  }
}

main().catch(err => { console.error(err); process.exit(1) })
