const phantom = require('phantom');

(async function() {
  const instance = await phantom.create();
  const page = await instance.createPage();
//   page.on('onConsoleMessage', function(msg) {
//     console.log(`msg: ${msg}`);
//   });
  await page.property('settings', {
    javascriptEnabled: true,
    loadImages: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
  });
  await page.property('viewportSize', { width: 375, height: 667 });
  const status = await page.open('http://6.2.2.44:8888/smart-seires/');
  console.log(`[STATUS]: ${status}`);
  const num = await page.evaluate(function() {
      window.document.body.scrollTop = window.document.body.scrollHeight;
      return '1';
    //   console.log('from page');
    //   var totalHeight = 0;
    //   var timer = window.setInterval(function() {
    //     window.scrollTo({
    //         top: 100,
    //     });
    //     totalHeight += 100;
    //     console.log('totalHeight:' + totalHeight);
    //     if (totalHeight >= window.document.body.scrollHeight) {
    //         window.clearInterval(timer);
    //         console.log('reached to bottom');
    //     }
    //   }, 500);
  });
  console.log(`num${num}`);
  try {
    setTimeout(async () => {
        await page.render('test122.png');
        console.log(`sss`);
        await instance.exit();
    }, 5000);
  } catch (e) {
    console.log(`exception: ${JSON.stringify(e)}`);
  }
})();