import { test as base } from '@playwright/test';
import logger from "../utils/LoggerUtil";

// ✅ Create extended test
export const test = base.extend({});

// ✅ Re-export expect from extended test
export const expect = test.expect;


// 🔹 Global Hooks

test.beforeAll(async ({ browser }) => {
  logger.info("Before All - Starting Test Suite");
});

test.beforeEach(async ({ page }) => {
  logger.info("Navigating to base URL");
  await page.goto("/");
});

test.afterEach(async ({ page }) => {
  logger.info("After Each - Closing Page");
  await page.close(); // must await
});

test.afterAll(async () => {
  logger.info("After All - Test Suite Finished");
});
