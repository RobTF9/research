/** @type {import('next').NextConfig} */
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const { default: next } = require('next')

dotenvLoad()

const withEnv = nextEnv()

module.exports = withEnv({
  ...next,
  reactStrictMode: true,
})
