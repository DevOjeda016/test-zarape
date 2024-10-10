import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/drinks/view/drink.html');
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Bebidas:').click();
  await page.getByLabel('Bebidas:').fill('caf');
  await page.getByRole('cell', { name: 'Café', exact: true }).click();
});