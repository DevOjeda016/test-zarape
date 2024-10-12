import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://elzarape.github.io/admin/modules/users/view/user.html');
});

test('Busqueda usuarios', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await page.getByLabel('Usuario:').click();
  await page.getByLabel('Usuario:').fill('Admin');
});


test.describe('Validacion de campos', () => {
  test('Campos de nuevo registro', async ({ page }) => {
    await page.getByRole('button', { name: 'Crear nuevo registro' }).click();
    await page.getByLabel('Nombre(s)').fill('Admin');
    const nameField = page.getByLabel('Nombre(s)');
    const name = await nameField.inputValue();
    await page.getByLabel('Apellido paterno').fill('Admin');
    const lastName1Field = page.getByLabel('Nombre(s)');
    const lastName1 = await lastName1Field.inputValue();
    await page.getByLabel('Apellido materno').fill('Admin');
    const lastName2Field = page.getByLabel('Nombre(s)');
    const lastName2 = await lastName2Field.inputValue();
    await page.getByLabel('Telefono').fill('477647274');
    const phoneField = page.getByLabel('Telefono');
    const phone = await phoneField.inputValue();
    expect(!isNaN(phone) && phone.trim() !== '').toBe(true);
    if (!isNaN(phone) && phone.trim() !== '') {
      console.log('El campo contiene un número válido:', phone);
    } else {
      console.error('El campo no contiene un número válido.');
    }
    await page.getByLabel('Sucursal').selectOption('3');
    await page.getByLabel('Usuario', { exact: true }).fill('Daniel Ojeda ');
    await page.getByRole('button', { name: 'Generar contraseña' }).click();
    const passField = page.getByLabel('Nueva contraseña', { exact: true }); 
    const pass = await passField.inputValue();
    console.log('valor del campo', pass);
    const confirmPassField = page.getByLabel('Confirmar Nueva contraseña');
    const passConfirmed = await confirmPassField.inputValue();
    expect(pass === passConfirmed).toBe(true);
    if (pass === passConfirmed) {
      console.log('La verificacion de la contraseña son validas');
    } else {
      console.error('La verificacion de la contraseña no son validas\n', `Pass: ${pass}\n`, `Pass confrimada: ${passConfirmed}`);
    }
    await page.getByRole('button', { name: 'Registrar' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await expect(page.getByLabel(`Vista previa ${name} ${lastName1} ${lastName2}`)).toBeVisible();
    const txtNumber = page.getByText('Número telefónico: 477647273');
  })
}); 
