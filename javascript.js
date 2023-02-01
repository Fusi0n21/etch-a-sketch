
let gridSize = 16
let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
let rainbow = false
let opac = false
const container = document.querySelector('.main')

function initiate(gridSize){
    for(let x=0;x<gridSize;x++){
        const rowBlock = document.createElement('div')
        rowBlock.classList.add('row')
        container.appendChild(rowBlock)

        for(let y=0;y<gridSize;y++){
            const etchBlock  = document.createElement('div')
            etchBlock.classList.add('block')
            etchBlock.style.backgroundColor = "rgb(255, 255, 255)";
            rowBlock.appendChild(etchBlock)
            etchBlock.addEventListener('mouseover', onHover)
        }
    }
}
initiate(gridSize)
function onHover(){
    if(rainbow){
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else if(opac){
        let col = (this.style.backgroundColor)

        col = col.substring(4, col.indexOf(","))
        col = col - 25
        if (col >=0){
            this.style.backgroundColor = `rgb(${col}, ${col}, ${col})`
        }
        else{
            col = 0
            this.style.backgroundColor = `rgb(${col}, ${col}, ${col})`
        }

    }


    else {
        this.style.backgroundColor = "rgb(0, 0, 0)"
    }
}

const button = document.querySelector('.reset')
button.addEventListener('click', buttonClick)

function buttonClick(){
    gridSize = prompt()
    container.textContent = ''
    initiate(gridSize)
}

const button2 = document.querySelector('.rainbow')
button2.addEventListener('click', toggleRainbow)

function toggleRainbow(){
    rainbow = !rainbow
    opac = false
    updateButtonColor(this, rainbow)
    updateButtonColor(button3, opac)
}

const button3 = document.querySelector('.opacity')
button3.addEventListener('click', toggleOpacity)

function toggleOpacity(){
    rainbow = false
    opac = !opac
    updateButtonColor(this, opac)
    updateButtonColor(button2, rainbow)
}
function updateButtonColor(button, value){

    if(value){
        button.style.backgroundColor = 'black'
    }else         button.style.backgroundColor = ''
}