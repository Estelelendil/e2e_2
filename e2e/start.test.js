/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer';

describe('Page start', () => {
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
  test('page start', async () => {
    await page.goto('http://localhost:8888');
    await page.waitForSelector('body');
  });
  afterAll(async () => {
    await browser.close();
  });
});
