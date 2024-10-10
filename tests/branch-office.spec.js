import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/branch-offices/view/branch-office.html');
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Sucursal:').click();
  await page.getByLabel('Sucursal:').fill('Reforma');
  await page.getByRole('cell', { name: 'Sucursal Reforma' }).click();
});