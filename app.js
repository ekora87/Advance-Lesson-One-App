//dependencies from node
const http = require('http');
const path = require ('path');

//dependencies from npm (package.json)
const express = require ('express');

//Initialize our app
const app = express();

//Get Github Avatar
const ghAvatar = require ('gh-avatar');

//Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
  ghAvatar('ekora87').then(url => {
    res.render('index.ejs', {
      avatar : url,
      name: 'Neo Pham',
      location: 'Austin, TX',
      job: 'Purchaser',
      skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
      hobbies: ['Tennis', 'Cars', 'Piano']
    });
  });
});

//Set up our server
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
