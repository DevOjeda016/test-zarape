import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/combos/view/combo.html');
});

test('test', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByRole('textbox', { name: 'Nombre del Combo:' }).click();
  await page.getByRole('textbox', { name: 'Nombre del Combo:' }).fill('Quesadillas');
  await page.getByLabel('Alimentos:', { exact: true }).click();
  await page.getByLabel('Alimentos:', { exact: true }).fill('Quesadillas');
  await page.getByLabel('Bebidas:', { exact: true }).click();
  await page.getByLabel('Bebidas:', { exact: true }).fill('Coca');
  await page.getByLabel('Bebidas:', { exact: true }).press('Enter');
  await page.getByRole('cell', { name: 'Quesadillas crujientes,' }).dblclick();
});