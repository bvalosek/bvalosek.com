var express = require('express');
var favicons = require('connect-favicons');
var exphbs = require('express-handlebars');
var version = require('../package.json').version;
var path = require('path');
var os = require('os');

// TODO: remove this damn node app and just make this a jekyll site served by
// nginx

var app = express();

// shh
app.disable('x-powered-by');

// handlebars life
app.engine('.hbs.html', exphbs({
  defaultLayout: 'default',
  extname: '.hbs.html',
  layoutsDir: path.join(__dirname, './views/layouts'),
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', '.hbs.html');

// cute icons
app.use(favicons(path.join(__dirname, './icons')));

app.get('/', function (req, res) {
  var year = new Date().getFullYear();
  var hostname = os.hostname();
  res.render('index', {hostname, version, year});
});

// everything else is static
app.use(express.static(path.join(__dirname, './static')));

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('listening on port', port);
});



