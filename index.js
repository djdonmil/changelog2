var fs = require(`fs`);
var showdown = require('showdown')


var template = fs.readFileSync(`CHANGELOG.md`, 'utf8');
    converter = new showdown.Converter(),
    text = template,
    html = converter.makeHtml(text);

    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

var QRCode = require('qrcode')

for (let i = 1; i <= 1000; i++) {
  const path = `./qrcodes/loba-${i}.png`
  QRCode.toFile(path, (makeid(5) + new Date().getTime()).toString(), {
    // color: {
    //   dark: '#00F', // Blue modules
    //   light: '#0000' // Transparent background
    // }
  }, function (err) {
    if (err) throw err
    console.log('saved.---',i)
  })
}
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}
