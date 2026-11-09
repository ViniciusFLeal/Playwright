import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.goto('https://www.google.com/?zx=1793975573674');
  await page.getByRole('combobox', { name: 'Pesquisar' }).click();
  await page.getByRole('combobox', { name: 'Pesquisar' }).fill('teste de velocidade');
});