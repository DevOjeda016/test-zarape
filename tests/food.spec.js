import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/foods/view/food.html');
});

test('Boton busqueda', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Alimentos:').click();
  await page.getByLabel('Alimentos:').fill('Tacos');
  await page.getByRole('cell', { name: 'Tacos al Pastor' }).click();
});
test.describe('Mensajes de validacion de campos de nuevo registro', () => {
  test.beforeEach(async ({ page }) => {
    await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
  })
  test('Campo vacio nombre', async ({ page }) => {
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese un nombre')).toBeVisible();
  });
  test('Campo vacio registrar', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Pastel');
  await page.getByRole('button', { name: 'Registrar' }).click();
  await expect(page.getByText('Ingrese descripcion')).toBeVisible();
  });
  test('Campo vacio categoria', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Pastel');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Pastel de pastel');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione una categoria')).toBeVisible();
  });
  test('Campo vacio precio', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Pastel');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Pastel de pastel');
    await page.getByLabel('Crear nuevo registro Nombre').getByLabel('Categoria').selectOption('2');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el precio del producto')).toBeVisible();
  });
  test('Campo vacioi imagen', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Pastel');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Pastel de pastel');
    await page.getByLabel('Crear nuevo registro Nombre').getByLabel('Categoria').selectOption('2');
    await page.getByRole('spinbutton', { name: 'Precio' }).fill('15');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese imagen del producto')).toBeVisible();
  });