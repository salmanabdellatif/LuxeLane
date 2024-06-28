import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// get full path for this module.
const __filename = fileURLToPath(import.meta.url)
// get directory path for this module, not contains the module name.
const __dirname = path.dirname(__filename)

const fileRemover = filename => {
  fs.unlink(path.join(__dirname, '../uploads', filename), function (err) {
    if (err && err.code == 'ENOENT') {
      // file doesn't exist
      console.log(`File ${filename} doesn't exist, won't remove it.`)
    } else if (err) {
      console.log(err.message)
      console.log(`Error occured while trying to remove file ${filename}`)
    } else {
      console.log(`removed ${filename}`)
    }
  })
}

export { fileRemover }
