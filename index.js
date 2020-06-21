const http = require('http');
var fs = require('fs');
var path = require('path');




const hostname = '127.0.0.1';
const port = 3000;
const time = Date.now();
const server = http.createServer((req, res) => {
    
    if (req.url == '/') { //check the URL of the current request
          
     
          // set response header
          res.writeHead(200, { 'Content-Type': 'text/html' }); 
          let myHomePage = fs.createReadStream(__dirname + '/home.html','utf8');
    
          // set response content    
          myHomePage.pipe(res);
        //   var fileContents = fs.readFileSync('./public/stylesheet.css', {encoding: 'utf8'});
        //   response.write(fileContents);
     
      
      }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.jpg")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);

    }else if(req.url.match("\.jpeg")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        fileStream.pipe(res);

    }else if(req.url.match("\.svg")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/svg+xml"});
        fileStream.pipe(res);

    }else if(req.url.match("\.js$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": " text/javascript"});
        fileStream.pipe(res);
    } else if (req.url == "/student") {
          
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><body><p>This is student Page.</p></body></html>');
          res.end();
      
      }
      else if (req.url == "/admin") {
          
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><body><p>This is admin Page.</p></body></html>');
          res.end();
      
      }
      else
          res.end('Invalid Request!');
  });
  

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
