// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'https://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // recuperamos el texto y la imagen.
  // al ser sencillo, no usamos ningún 'id' y usamos 'page'.
  // esperamos encontrar de 'page' los roles necesarios ('p' e 'img')
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  // recuperamos el contenido del texto y la imagen.
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // esperamos que el contenido no sea 'null' ni el largo menor a cero.
  await expect(textContent?.length).toBeGreaterThan(0)
  // esperamos que el contenido tenga como prefijo la url deseada y confiable. 
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

// las constantes como 'text' o 'image' son sencillas debido a la simplicidad de la aplicación.
