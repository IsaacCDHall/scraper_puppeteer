const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.alibaba.com/catalog/cosmetics-packaging_cid231903?spm=a2700.details.scGlobalHomeHeader.512.5a9f6588y6UAEr"
  );
  const screenshot = await page.screenshot({ path: "example.png" });

  const titles = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h2.title")).map(item =>
      item.innerText.trim()
    )
  );
  const imgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("div.img-inner-wrapper>a>img")).map(
      img => img.src
    )
  );
  console.log(titles);
  console.log(imgs);
  await browser.close();
})();
