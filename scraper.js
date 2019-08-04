
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.alibaba.com/catalog/cosmetics-packaging_cid231903?spm=a2700.details.scGlobalHomeHeader.512.5a9f6588y6UAEr')
  await page.screenshot({path: 'example.png'})

  await browser.close();

})();
