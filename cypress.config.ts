import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, 'Backend/.env') })

export default defineConfig({
  env: {
    MAILSLURP_API_KEY: process.env.CYPRESS_MAILSLURP_API_KEY || process.env.MAILSLURP_API_KEY
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    baseUrl: "http://localhost:5173",
    tsConfig: "tsconfig.cypress.json",
    setupNodeEvents(on, config) {},},
    chromeWebSecurity: false,
})
