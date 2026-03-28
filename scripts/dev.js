import { spawn } from 'node:child_process'
import process from 'node:process'

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'

function run(args) {
  const child = spawn(npmCommand, args, {
    stdio: 'inherit',
    shell: false,
  })

  child.on('exit', (code) => {
    if (code && code !== 0) {
      process.exitCode = code
    }
  })

  return child
}

const server = run(['run', 'server'])
const vite = run(['run', 'dev'])

function shutdown() {
  server.kill()
  vite.kill()
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
