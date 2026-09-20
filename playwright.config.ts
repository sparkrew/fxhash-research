import { defineConfig, devices } from "@playwright/test";

// Serves the projects/ folder over http (reusing our Python server) and runs
// each artwork as a test, so `npx playwright test --ui` lets you click any
// project and watch it run with full Log / Console / Network / Errors panels.
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8080",
    viewport: { width: 900, height: 900 },
    trace: "on",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "python -m http.server 8080 --directory projects",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: true,
    timeout: 30000,
  },
});
