const fs = require('fs')
const path = require('path')

class ControllerFS {
    constructor () {
        this.path_download = path.resolve(__dirname, '..', 'data', 'download')
        this.path_to_download = path.resolve(__dirname, '..', 'load')

 
        // if (!fs.existsSync(this.resolve)) {
        //     fs.mkdirSync(String(this.resolve), err=>console.log(err))
        // }
    }

    getFiles(){
        const data = []
        fs.readdirSync(this.path_download).forEach(file => {
            data.push({'nameFile':file, "pathDownload":'/download/'+file, "file": path.parse(file).ext?true:false})

        });
        return data
    }

    getFile(nameFile){
       return path.resolve(this.path_download, nameFile)
    }
    getFileOfUser(id, nameFile){
        this.id = id
        this.name = nameFile
        this.resolve = path.resolve(__dirname, '..', 'data', `${this.id}`,`${this.name}`)
        
    }   
 
}

module.exports = ControllerFS
