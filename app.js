const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
