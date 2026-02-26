import { test, expect } from '@playwright/test';
import { LoginPage  } from '../pages/login.page';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.userName.fill('standard_user');
  await loginPage.password.fill('secret_sauce');
  await loginPage.loginButton.click();

  await page.locator('[data-test="inventory-item-description"]').first().click();
  await page.locator('[data-test="item-4-img-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="checkout"]').click();


  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('61183');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="inventory-item-price"]').click();
  await page.locator('[data-test="subtotal-label"]').click();
  await page.locator('[data-test="tax-label"]').click();
  await page.locator('[data-test="total-label"]').click();
  
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="pony-express"]').click();
  await page.locator('[data-test="complete-header"]').click();
  await page.locator('[data-test="complete-text"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});