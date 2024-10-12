import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('Mensaje de fallo de autenticacion', async ({ page }) => {
  await page.getByLabel('Usuario').click();
  await page.getByLabel('Usuario').fill('Admin.invitad'); //Usuario incorrecto
  await page.getByLabel('Contraseña').click();
  await page.getByLabel('Contraseña').fill('AdminInvitado16*');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await expect(page.getByText('Usuario o contraseña')).toBeVisible();
});

test('Inicio de sesion', async ({ page }) => {
  await page.getByLabel('Usuario').click();
  await page.getByLabel('Usuario').fill('Admin.invitado');
  await page.getByLabel('Contraseña').click();
  await page.getByLabel('Contraseña').fill('AdminInvitado16*');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await expect(page).toHaveURL('https://elzarape.github.io/admin/panel.html');
});



