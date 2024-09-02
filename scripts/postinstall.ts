import { grab } from 'grab-github-release'
import fs from 'node:fs'

async function main() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'))

  await grab({
    name: 'pg-schema-diff',
    repository: 'pg-nano/pg-schema-diff',
    version,
    platformSuffixes: {
      darwin: ['Darwin'],
      linux: ['Linux'],
      win32: ['Windows'],
    },
    archSuffixes: {
      arm64: [],
      ia32: ['i386'],
      x64: ['x86_64'],
    },
    unpackExecutable: true,
    verbose: true,
  })
}

main()
