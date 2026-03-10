const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/insights', { waitUntil: 'networkidle0' });

  const hasButton = await page.evaluate(() => document.body.innerText.includes('모든 AI & 기술'));
  console.log('Has button:', hasButton);

  const aiPosts = await page.evaluate(() => {
    const aiHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('AI & 기술'));
    if (!aiHeading) return 0;
    const container = aiHeading.parentElement.parentElement;
    return container.querySelectorAll('.group.cursor-pointer').length;
  });
  console.log('AI posts count:', aiPosts);

  await browser.close();
})();
