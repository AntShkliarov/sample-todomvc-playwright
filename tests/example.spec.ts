import { test, expect } from '@playwright/test';
import { Sample } from '../sample';


test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  //cy.visit()
  //cy.get...
  //cy.get().should..
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  //cy.get(element).click().should('be.enabled')

  //create a locator
  //cy.get(element)
  const getStarted = page.locator('text=Get Started')

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*introooo/);
});
