if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE

app.get('/getAlbums', async (req, res) => {
  console.log('hello?');
  const apiKey = 523532;
  try {
    const resp = await axios.get(
      `theaudiodb.com/api/v1/json/${apiKey}/mostloved.php?format=album`
    );
    console.log(resp);
    // FIX ME, something needs a little bit of tweaking
  } catch (e) {
    console.log(e.message);
  }
});
// app.get('/api/demo', (request, response) => {
//   response.json({
//     message: 'Hello from server.js'`
//   });
// });
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
