import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/combos/view/combo.html');
});
//Boton de busqueda
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
test.describe('Automatizacion CRUD', () => {
test('Crear', async ({ page }) => {
  await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
  await page.getByRole('textbox', { name: 'Nombre del Combo:' }).fill('combo');
  await page.getByRole('textbox', { name: 'Descripción:' }).fill('Descripcion combo');
  await page.getByLabel('Crear Combo Nombre del Combo').getByText('Tacos al Pastor').click();
  await page.getByLabel('Crear Combo Nombre del Combo').getByText('Café Americano').click();
  await page.getByRole('spinbutton', { name: 'Precio:' }).fill('12');
  await page.getByLabel('Imagen:', { exact: true }).setInputFiles('WhatsApp Image 2024-10-12 at 10.41.19 PM(1).jpeg');
  await page.getByRole('button', { name: 'Registrar' }).click();
  await page.getByRole('button', { name: 'Sí' }).click();
});
test('Actualizar', async ({ page }) => {
  await page.getByText('combo', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Nombre del Combo:' }).click();
  await page.getByRole('textbox', { name: 'Nombre del Combo:' }).fill('ombo2');
  await page.getByRole('textbox', { name: 'Descripción:' }).click();
  await page.getByRole('textbox', { name: 'Descripción:' }).fill('Descripcion combo2');
  await page.getByLabel('Modificar Combo #: Nombre del').getByText('Tamales').click();
  await page.getByLabel('Modificar Combo #: Nombre del').getByText('Sopes').click();
  await page.getByLabel('Modificar Combo #: Nombre del').getByText('Chocolate', { exact: true }).click();
  await page.getByRole('spinbutton', { name: 'Precio:' }).fill('13');
  await page.getByLabel('Imagen del Combo:', { exact: true }).click();
  await page.getByRole('button', { name: 'Modificar' }).click();
  await page.getByRole('button', { name: 'Sí' }).click();
});

test('Eliminar', async ({ page }) => {
  await page.getByRole('cell', { name: 'Descripcion combo' }).click();
  await page.getByRole('button', { name: 'Eliminar' }).click();
  await page.getByRole('button', { name: 'Sí' }).click();
});
});
