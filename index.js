var fs = require(`fs`);

var template = fs.readFileSync(`CHANGELOG.md`, 'utf8');
var showdown = require('showdown'),
    converter = new showdown.Converter(),
    text = template,
    html = converter.makeHtml(text);
    console.log("==>>>", html)

    fs.writeFile('newfile.html', html, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });