const
    express = require("express"),
    router = express.Router();
    fsС = require('../controllers/fsController.js')
    url = require('url');
    bodyParser = require('body-parser')
    fs = require('fs')
    path = require('path')
    cors = require('cors')
const multer = require('multer')
let upload = multer({ dest: 'upload/'})

router.use(cors({
    origin: 'http://localhost:3000'
}))




router.get('/user/*/*', (req, res)=>{
    const id = url.parse(req.url, true).path.split('/')[2]
    const name = url.parse(req.url, true).path.split('/')[3]
    const fs = new fsС ()
    res.download(fs.getFileOfUser(id, name).resolve, function(err) {
        if(err) {
            console.log(err);
        }
    })
})

router.get('/api/listFiles', (req, res)=>{
    const fs = new fsС ()
    return res.send({data: fs.getFiles()})
})

router.get('/download/*', (req, res)=>{
    const name = url.parse(req.url, true).path.split('/')[2]
    const fs = new fsС ().getFile(name)
    res.download(fs, function(err) {
        if(err) {
            console.log(err);
        }
    })
})

router.post("/upload", upload.single('File'), (req, res)=>{
    fs.rename(req.file.path, 'data/download/'+req.file.originalname, function (err) {
        if (err) throw err;
    });
    res.redirect('http://localhost:3000/upload')
    res.end()
});



module.exports = router