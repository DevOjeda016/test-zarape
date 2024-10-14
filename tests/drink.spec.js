import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/drinks/view/drink.html');
});

test('Boton de busqueda', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Bebidas:').click();
  await page.getByLabel('Bebidas:').fill('caf');
  await page.getByRole('cell', { name: 'Café', exact: true }).click();
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
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Refresco');
  await page.getByRole('button', { name: 'Registrar' }).click();
  await expect(page.getByText('Ingrese descripcion')).toBeVisible();
  });
  test('Campo vacio categoria', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Refresco');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Bebida carbonatada');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Seleccione una categoria')).toBeVisible();
  });
  test('Campo vacio precio', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Refresco');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Bebida carbonatada');
    await page.getByLabel('Crear nuevo registro Nombre').getByLabel('Categoria').selectOption('2');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese el precio del producto')).toBeVisible();
  });
  test('Campo vacioi imagen', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Refresco');
    await page.getByRole('textbox', { name: 'Descripción' }).fill('Bebida carbonatada');
    await page.getByLabel('Crear nuevo registro Nombre').getByLabel('Categoria').selectOption('2');
    await page.getByRole('spinbutton', { name: 'Precio' }).fill('15');
    await page.getByRole('button', { name: 'Registrar' }).click();
    await expect(page.getByText('Ingrese imagen del producto')).toBeVisible();
  })
})

  
  test.describe('Automatizacion CRUD', () => {
    test('Crear', async ({ page }) => {
      await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
      await page.getByRole('textbox', { name: 'Nombre' }).fill('agua');
      await page.getByRole('textbox', { name: 'Descripción' }).fill('agua simple');
      await page.getByLabel('Crear nuevo registro Nombre').getByLabel('Categoria').selectOption('4');
      await page.getByRole('spinbutton', { name: 'Precio' }).fill('1');
      await page.getByRole('textbox', { name: 'Imagen' }).setInputFiles('Sin título.jpg');
      await page.getByRole('button', { name: 'Registrar' }).click();
      await page.getByRole('button', { name: 'Sí' }).click();
    });
    test('Actualizar', async ({ page }) => {

    });
    test('Limpiar', async ({ page }) => {
      await page.getByRole('cell', { name: 'agua' }).nth(4).click();
      await page.getByRole('button', { name: 'Limpiar' }).click();
      await page.getByRole('button', { name: 'Close' }).click();
    });
  });
  
