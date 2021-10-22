const express = require('express')
const app = express()
const port = 3000

/* Register middleware */
app.use(express.static('client/dist'))
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));