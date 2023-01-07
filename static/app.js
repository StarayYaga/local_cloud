import { io } from "socket.io-client";
const socket = io();


socket.on('dataFolders', (msg) => {
  console.log(msg);
});


const array = ''
let count = 1

function addFolder (path, name, type){
    const workSpace = document.querySelector('.folderConteiner')
    const divFolder = document.createElement('div')
    const button = document.createElement('a')
    button.href = path
    button.className = 'FolderBTN'
    const image = document.createElement('img')
    image.className = 'folderImage'
    if (type == 'file'){
        image.src = '/document.png'
    } else if (type == 'folder'){
        image.src = '/folder.png'
    }
    button.appendChild(image)
    const nameFolder = document.createElement('h3')
    divFolder.className = 'divFolder'
    nameFolder.innerHTML = name
    divFolder.appendChild(button)
    divFolder.appendChild(nameFolder)
    workSpace.appendChild(divFolder)
}


for (let item of array){
    if (count % 5 == 0) {
        addFolder(item.path, item.nameFolde, item.type)
        document.querySelector('.folderConteiner').className = ('full')
        const workSpace = document.createElement('div')
        workSpace.className = 'folderConteiner'
        document.querySelector('.main-window').appendChild(workSpace)
    } else {
        addFolder(item.path, item.nameFolde, item.type)
    }
    count+=1
}