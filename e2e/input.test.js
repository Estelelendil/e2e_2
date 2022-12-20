/* eslint-disable no-unused-vars */
import puppeteer from 'puppeteer';
import { fork } from 'node:child_process';

jest.setTimeout(30000);

describe('Input', () => {
  let browser;
  let page;
  let server = null;
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);

    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await server.kill();
    await browser.close();
  });
  test('page start', async () => {
    await page.goto('http://localhost:8888');
    await page.waitForSelector('body');
  });
  test('Input should render on page start', async () => {
    await page.goto('http://localhost:8888');
    await page.waitForSelector('.input');
  });
  test('cardMir should remove blur class if input value start from 2', async () => {
    await page.goto('http://localhost:8888');
    await page.waitForSelector('.input');
    const input = await page.$('.input');
    const button = await page.$('.button');
    await input.type('2222222222222222');
    await button.click();

    const hasBlur = await page.$eval('.mir', (el) => el.classList.contains('blur'));

    expect(hasBlur).toBe(false);
  });
});
