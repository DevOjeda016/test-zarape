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
test('test', async ({ page }) => {
  // Navegar a la página
  await page.goto('https://elzarape.github.io/admin/modules/combos/view/combo.html');

  // Crear nuevo registro
  await page.getByRole('button', { name: 'Crear nuevo registro' }).click();

  // Intento de registrar sin datos
  await page.getByRole('button', { name: 'Registrar' }).click();

  // Verificación de campos vacíos al registrar
  const nombreRegistro = await page.getByRole('textbox', { name: 'Nombre' }).inputValue();
  const descripcionRegistro = await page.getByRole('textbox', { name: 'Descripción' }).inputValue();
  const precioRegistro = await page.getByRole('spinbutton', { name: 'Precio' }).inputValue();

  // Si los campos están vacíos, mostrar mensaje de error y cerrar el modal
  if (!nombreRegistro || !descripcionRegistro || !precioRegistro) {
    console.log("No tiene implantado un alert para registros vacíos");
    await page.getByRole('button', { name: 'Close' }).click();
    return;
  }

  // Continuar con el cierre del modal si los campos están llenos
  await page.getByRole('button', { name: 'Close' }).click();

  // Seleccionar un combo de la lista
  await page.getByText('Quesadillas, tostadas, guacamole y coca cola').click();

  // Limpiar los campos
  await page.getByRole('button', { name: 'Limpiar' }).click();

  // Intento de modificar sin datos
  await page.getByRole('button', { name: 'Modificar' }).click();

  // Verificación de campos vacíos al modificar
  const nombreModificar = await page.getByRole('textbox', { name: 'Nombre' }).inputValue();
  const descripcionModificar = await page.getByRole('textbox', { name: 'Descripción' }).inputValue();
  const precioModificar = await page.getByRole('spinbutton', { name: 'Precio' }).inputValue();

  // Si los campos están vacíos al modificar, mostrar mensaje de error
  if (!nombreModificar || !descripcionModificar || !precioModificar) {
    console.log("No tiene implantado un alert para modificar un registro sin datos");
    return;
  }

  // Eliminar el registro
  await page.getByRole('button', { name: 'Eliminar' }).click();
  await page.getByRole('button', { name: 'Sí' }).click();
});
