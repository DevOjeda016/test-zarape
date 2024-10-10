import { test, expect } from '@playwright/test';

test('Busqueda usuarios', async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('Admin');
});