const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Route handler for any GET request
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.url);

  // Check if the requested file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('404 Not Found');
  }
});

const port = process.env.PORT || 4444;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// // server.js

// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route handler for any GET request
// app.get('*', (req, res) => {
//   const filePath = path.join(__dirname, 'public', req.url);
  
//   // Check if the requested file exists
//   if (fs.existsSync(filePath)) {
//     res.sendFile(filePath);
//   } else {
//     res.status(404).send('404 Not Found');
//   }
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// server set up

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const notifier = require("node-notifier");
// const $ = require('jquery');
// const Backbone = require('backbone');
// const _ = require('underscore');
// const express = require('express');
// const mirador = require('mirador');

// const port = 4444;


// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const extension = path.extname(url);
//   let filePath = path.join(__dirname, 'index.html');
//   let contentType = 'text/html';
  
//   if (extension === '.json') {
//     filePath = path.join(__dirname, url);
//     contentType = 'application/json';
//   } else if (extension === '.jpg') {
//     filePath = path.join(__dirname, url);
//     contentType = 'image/jpeg';
//   } else if (extension === '.tif') {
//     filePath = path.join(__dirname, url)
//     contentType = 'image/tif';
//   } else if (extension === '.mp4') {
//     filePath = path.join(__dirname, url);
//     contentType = 'video/mp4';
//   } else if (extension === '.js') {
//     filePath = path.join(__dirname, url);
//     contentType = 'text/javascript';
//   }

//   fs.readFile(filePath, (err, data) => {

//     if (err) {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('404 Not Found');
//     } else {

//       res.statusCode = 200;
//       res.setHeader('Content-Type', contentType);
//       res.end(data);
//     }
//   });
// });


// server.listen(port, () => {
//   console.log('Server running at http://localhost:' + port +'/');

// });


// // mirador

// // const notifier = require("node-notifier");
// // const $ = require('jquery');
// // const Backbone = require('backbone');
// // const _ = require('underscore');
// // const mImageTool = require('mirador-image-tools');
// // // Load Mirador
// // const Mirador = require('mirador');

// // // Create a new Mirador viewer instance
// // const miradorInstance = Mirador.viewer({
// //   id: 'my-mirador'
// // });


// var a = 1;

// console.log(a);
