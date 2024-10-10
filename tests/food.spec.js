import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/foods/view/food.html');
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Alimentos:').click();
  await page.getByLabel('Alimentos:').fill('Tacos');
  await page.getByRole('cell', { name: 'Tacos al Pastor' }).click();
});