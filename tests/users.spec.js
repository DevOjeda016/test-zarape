import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('Busqueda usuarios', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('Admin');
});

/* 
test('Validacion de campos'), async ({ page }) => {
  await 
} */