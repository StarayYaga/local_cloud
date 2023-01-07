const express = require('express')
const router = require('./router/routes.js')
const path = require('path')

const app = express()

app.use(express.json())
app.use(router)

app.use('/fileIcon', express.static(path.join(__dirname, 'states', 'file.png')))
app.use('/folderIcon', express.static(path.join(__dirname, 'states', 'folder.png')))

app.use('/', express.static(path.join(__dirname, 'build')))

app.listen(3005, ()=>console.log('Cloud was started http://localhost:3005'))
