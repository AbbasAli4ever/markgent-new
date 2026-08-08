const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport:{width:1280,height:900}, deviceScaleFactor:2 })).newPage();
  await p.goto('http://localhost:3000/blogs/ecommerce-growth-system', { waitUntil:'networkidle' });
  await p.waitForTimeout(1500);

  // Walk down the page so every trigger fires, then count revealed lines.
  for (let i = 1; i <= 12; i++) {
    await p.evaluate(f => window.scrollTo(0, document.body.scrollHeight * f), i / 12);
    await p.waitForTimeout(450);
  }
  await p.waitForTimeout(1200);

  const s = await p.evaluate(() => {
    const lines = [...document.querySelectorAll('.line-reveal')];
    const vis = lines.filter(l => +getComputedStyle(l).opacity > 0.9).length;
    return { total: lines.length, revealed: vis, hidden: lines.length - vis };
  });
  console.log(`lines total=${s.total}  revealed=${s.revealed}  still-hidden=${s.hidden}`);
  console.log(s.hidden === 0 ? 'PASS: every line revealed after scrolling through' : 'some lines never revealed');

  await p.evaluate(() => window.scrollTo(0,0));
  await p.waitForTimeout(900);
  await p.screenshot({ path:'/tmp/blog-top.png' });
  await b.close();
})();
