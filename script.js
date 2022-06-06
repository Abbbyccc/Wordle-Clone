const letterbox = document.querySelector(".letter-container")
const keybox = document.querySelector(".key-container")

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<',
]

const letterBoxRow = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
]
let curRow = 0
let curBox = 0

letterBoxRow.forEach((rows, rowIndex) => {
    const boxRow = document.createElement('div')
    boxRow.setAttribute('id', 'row_' + rowIndex)

    rows.forEach((boxs, boxIndex) => {
        const boxElement = document.createElement('div')
        boxElement.setAttribute('id', 'row_' + rowIndex + '-Box_' + boxIndex)
        boxElement.classList.add('box')
        boxRow.append(boxElement)
    })
    letterbox.append(boxRow)
})

keys.forEach(key => {
    const keybutton = document.createElement('button')
    keybutton.textContent = key
    keybutton.setAttribute('id', key)
    keybutton.addEventListener('click', () => handleClick(key))
    keybox.append(keybutton)
})

const handleClick = (key) => {
    if (key === '<') {
        deleteKey()
        return
    }
    addWord(key)
}

function addWord(key) {
    if (curRow < 5 || curBox < 5) {
        const box = document.getElementById('row_' + curRow + '-Box_' + curBox)
        box.textContent = key
        curBox++
        // letterBoxRow[curRow][curBox] = key
    }
}

const deleteKey = () => {
    if (curBox > 0) {
        curBox--
        const box = document.getElementById('row_' + curRow + '-Box_' + curBox)
        box.textContent = ""
    }
}

const checkKey= ()=>{
    
}