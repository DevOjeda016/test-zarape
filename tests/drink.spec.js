import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('test', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Bebidas:').click();
  await page.getByLabel('Bebidas:').fill('caf');
  await page.getByRole('cell', { name: 'Café', exact: true }).click();
});