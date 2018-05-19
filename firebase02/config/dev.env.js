'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const dotenv = require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: JSON.stringify(dotenv.parsed.API_KEY),
  AUTH_DOMAIN: JSON.stringify(dotenv.parsed.AUTH_DOMAIN),
  DATABASE_URL: JSON.stringify(dotenv.parsed.DATABASE_URL),
  PROJECT_ID: JSON.stringify(dotenv.parsed.PROJECT_ID),
  STORAGE_BUCKET: JSON.stringify(dotenv.parsed.STORAGE_BUCKET),
  MESSAGING_SENDER_ID: JSON.stringify(dotenv.parsed.MESSAGING_SENDER_ID)
})
