import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/branch-offices/view/branch-office.html');
});

test('Boton busqueda', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Sucursal:').click();
  await page.getByLabel('Sucursal:').fill('Reforma');
  await page.getByRole('cell', { name: 'Sucursal Reforma' }).click();
});
test.describe('Mensajes de validacion de campos de nuevo registro', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
  })
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese un nombre')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese nombre de la calle')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese numero exterior')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la colonia')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese codigo postal')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione un estado')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByLabel('Estado').selectOption('GTO');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la latitud')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByLabel('Estado').selectOption('GTO');
    await page.getByLabel('Latitud').fill('12-22');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la longitud')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByLabel('Estado').selectOption('GTO');
    await page.getByLabel('Latitud').fill('12-22');
    await page.getByLabel('Longitud').fill('22-12');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese una imagen')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByLabel('Estado').selectOption('GTO');
    await page.getByLabel('Latitud').fill('12-22');
    await page.getByLabel('Longitud').fill('22-12');
    await page.getByLabel('Imagen').setInputFiles('Sin título.jpg');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese la URL del sitio')).toBeVisible();
  });
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByLabel('Nombre de la Sucursal').fill('Sucursal');
    await page.getByLabel('Calle').fill('Calle de la sucursal ');
    await page.getByLabel('Numero Exterior').fill('12');
    await page.getByLabel('Colonia o barrio').fill('Colonia de la Sucursal');
    await page.getByLabel('Código postal').fill('37008');
    await page.getByLabel('Estado').selectOption('GTO');
    await page.getByLabel('Latitud').fill('12-22');
    await page.getByLabel('Longitud').fill('22-12');
    await page.getByLabel('Imagen').setInputFiles('Sin título.jpg');
    await page.getByLabel('URL').fill('url.sucrsal');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese un nombre')).toBeVisible();
  })
})
