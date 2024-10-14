import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('Busqueda usuarios', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('Admin');
});


test.describe('Mensajes de validacion de campos de nuevo registro', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
  })
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese un nombre')).toBeVisible();
  })
  test('Campo vacio apellido paterno', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el apellido paterno')).toBeVisible();
  })
  test('Campo vacio apellido materno', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el apellido materno')).toBeVisible();
  })
  test('Campo vacio telefono', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el numero de telefono')).toBeVisible();
  })
  test('Selector default sucursal', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione un sucursal')).toBeVisible();
  })
  test('Campo vacio usuario', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el usuario')).toBeVisible();
  })
  test('Campo vacio contraseña', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('DevOjeda016');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la contraseña')).toBeVisible();
  })
  test('Campo vacio confirmar contraseña', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('DevOjeda016');
    await page.getByLabel('Nueva contraseña', { exact: true }).fill('AdminInvitado016*');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la confirmacion de contraseña')).toBeVisible();
  })
})

test.describe('Mensajes de validacion de campos de actualizar registro', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('cell', { name: 'Admin', exact: true }).click();
    await page.getByLabel('Nombre(s)').fill('');
    page.getByText('Apellido paterno').fill('');
    page.getByText('Apellido materno').fill('');
    await page.getByLabel('Telefono').fill('');
    await page.getByLabel('Sucursal').selectOption('');
    await page.getByLabel('Usuario', { exact: true }).fill('');
    await page.getByRole('button', { name: 'Modificar constraseña' }).click();
    await page.getByLabel('Nueva contraseña', { exact: true }).fill('');
    await page.getByLabel('Confirmar Nueva contraseña').fill('');
    await page.getByLabel('Estatus').selectOption('');
  })
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese un nombre')).toBeVisible();
  })
  test('Campo vacio apellido paterno', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el apellido paterno')).toBeVisible();
  })
  test('Campo vacio apellido materno', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el apellido materno')).toBeVisible();
  })
  test('Campo vacio telefono', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el numero de telefono')).toBeVisible();
  })
  test('Selector default sucursal', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione un sucursal')).toBeVisible();
  })
  test('Campo vacio usuario', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el usuario')).toBeVisible();
  })
  test('Campo vacio contraseña', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('DevOjeda016');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la contraseña')).toBeVisible();
  })
  test('Campo vacio confirmar contraseña', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('DevOjeda016');
    await page.getByLabel('Nueva contraseña', { exact: true }).fill('AdminInvitado016*');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la confirmacion de contraseña')).toBeVisible();
  })
  test('Seleccionar estado', async ({ page }) => {
    await page.getByLabel('Nombre(s)').fill('Daniel');
    page.getByText('Apellido paterno').fill('Ojeda');
    page.getByText('Apellido materno').fill('Luna');
    await page.getByLabel('Telefono').fill('477647274');
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('DevOjeda016');
    await page.getByLabel('Nueva contraseña', { exact: true }).fill('AdminInvitado016*');
    await page.getByLabel('Confirmar Nueva contraseña').fill('AdminInvitado016*');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione un estado')).toBeVisible();
  })
})

