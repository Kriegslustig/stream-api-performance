const { Readable } = require('stream')
const { createHash } = require('crypto')

class DummyStream extends Readable {
  _read() {
    while(true) {
      if (this.count >= 10000) {
        this.push(null)
        break
      }

      const hash = createHash('sha256')
      hash.update(Math.random().toString())
      const buf = hash.digest()
      const shouldContinue = this.push(buf)
      this.count = (this.count || 0) + 1
      if (!shouldContinue) break
    }
  }
}

const createDummyStream = () =>
  new DummyStream()

module.exports = { createDummyStream }
