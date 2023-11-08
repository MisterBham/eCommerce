const express = require('express');
const db = require('./server-config/connection');
const routes = require('./src/controllers');

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

// app.use((req, res) => {
//   res.status(404).end();
// });

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });  
});

