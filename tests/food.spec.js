import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('test', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Alimentos:').click();
  await page.getByLabel('Alimentos:').fill('Tacos');
  await page.getByRole('cell', { name: 'Tacos al Pastor' }).click();
});