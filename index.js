var express = require('express');
var app = express();
var path = require('path');

const { httpretreievecomments } = require("./youtube.controller")
const PORT = process.env.PORT || 8000;
const  YOUTUBE_API_KEY = 'AIzaSyDZoa4WKx8_Swd-jrBmDNMp7AIlNE9Eahk';
var public = path.join(__dirname, 'public');
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(YoutubeRouter);

app.get('/comment', function(request, response) {
  const comments = httpretreievecomments();
  response.render('dashboard.ejs', { comments: comments });
});

// app.listen(8000);

// app.post('/myaction', function(req, res) {
//     console.log('You sent the name "' + req.body + '".');
// });


if(!YOUTUBE_API_KEY) {
  throw new Error("No API key is provided");
}

  
async function startServer(){
  app.listen(PORT, ()=>{
      console.log(`Listening on port ${PORT}...`)
  });
}

startServer();
