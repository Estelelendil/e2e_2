/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer';

describe('Input', () => {
  let browser;
  let page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  test('Input should render on page start', async () => {
    await page.goto('http://localhost:8888');
    await page.waitFor('.input');
  });
  test('cardMir should remove blur class if input value start from 2', async () => {
    await page.goto('http://localhost:8888');
    await page.waitFor('.input');
    const mir = await page.$('.mir');
    const input = await page.$('.input');
    const button = await page.$('.button');
    await input.type('2222222222222222');
    await button.click();
    await page.waitFor('.img .mir');
  });
  afterEach(async () => {
    await browser.close();
  });
});
