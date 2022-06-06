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

letterBoxRow.forEach((rows, rowIndex) => {
    const boxRow = document.createElement('div')
    boxRow.setAttribute('id', 'row_' + rowIndex)

    rows.forEach((boxs, boxIndex) => {
        const boxElement = document.createElement('div')
        boxElement.setAttribute('id', 'row_' + rowIndex + '-Box_' + boxIndex)
        boxRow.append(boxElement)
    })
    letterbox.append(boxRow)
})

keys.forEach(key => {
    const keybutton = document.createElement('button')
    keybutton.textContent = key
    keybutton.setAttribute('id', key)
    keybutton.addEventListener('click', () => console.log('clicked'))
    keybox.append(keybutton)
})