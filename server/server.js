const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

//decode urlencoded
app.use(express.urlencoded());

app.get('/', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Server started and listening at http://localhost:${port}`);
})