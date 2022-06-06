const letterbox = document.querySelector(".letter-container")
const keybox = document.querySelector(".key-container")
const msgArea = document.querySelector(".msg-container")
let wordle = 'SUPER'
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
let isGameOver = true

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
        console.log(letterBoxRow)
        return
    }
    if (key === 'ENTER') {
        checkKey()
        return
    }
    addWord(key)
}

function addWord(key) {
    if (curRow < 5 || curBox < 5) {
        const box = document.getElementById('row_' + curRow + '-Box_' + curBox)
        box.textContent = key
        letterBoxRow[curRow][curBox] = key
        curBox++

    }
}

const deleteKey = () => {
    if (curBox > 0) {
        curBox--
        const box = document.getElementById('row_' + curRow + '-Box_' + curBox)
        box.textContent = ""
        letterBoxRow[curRow][curBox] = ""
    }
}

const checkKey = () => {
    const guess = letterBoxRow[curRow].join('')
    if (curBox === 5 && guess === wordle) {
        // showMsg('the guess is' + wordle + 'you won')
        showMsg("you win the word is" + wordle)
        isGameOver
        return
    } else {
        if (curRow >= 4) {
            showMsg("Reach guess limits")
            isGameOver
            return
        }
        if (curRow < 4 && curBox == 5) {
            curRow++
            curBox = 0
            showMsg("guess again!")
            console.log('guess again!')
            return
        }
    }
}

const showMsg = (text) => {
    const msg_element = document.createElement('p')
    msg_element.setAttribute('id', 'msg')
    msg_element.textContent = text
    msgArea.append(msg_element)
    setTimeout(() => msgArea.removeChild(msg_element), 2000)
}
