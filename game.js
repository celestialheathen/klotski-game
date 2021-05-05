let dataTrans = new DataTransfer()
const exitCell1 = document.getElementById("22")
const exitCell2 = document.getElementById("23")


// 1x1 pawn piece
const pawn = document.createElement('div')
pawn.style.width = "80%"
pawn.style.height = "80%"
pawn.style.backgroundColor = "aqua"
pawn.id = "pawn"
pawn.className = "pawn"
pawn.innerText = "PAWN"
pawn.draggable = "true"
pawn.style.position = "relative"
pawn.style.left = "25px"

pawn.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
}
pawn.ondrag = function (event) {
  drag(event)
}

pawn.ontouchstart = function (event) {
  event.target.parentElement.className = "empty"
}

pawn.ontouchmove = function (event) {
  drag(event)
}

pawn.ontouchend = function (event) {
  event.preventDefault()
}


// Second 1x1 pawn piece
const pawn2 = document.createElement('div')
pawn2.style.width = "80%"
pawn2.style.height = "80%"
pawn2.style.backgroundColor = "aqua"
pawn2.id = "pawn2"
pawn2.className = "pawn"
pawn2.innerText = "PAWN"
pawn2.draggable = "true"
pawn2.style.position = "relative"
pawn2.style.left = "25px"

pawn2.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
}
pawn2.ondrag = function (event) {
  drag(event)
}

// Third 1x1 pawn piece
const pawn3 = document.createElement('div')
pawn3.style.width = "80%"
pawn3.style.height = "80%"
pawn3.style.backgroundColor = "aqua"
pawn3.id = "pawn3"
pawn3.className = "pawn"
pawn3.innerText = "PAWN"
pawn3.draggable = "true"
pawn3.style.position = "relative"
pawn3.style.left = "25px"

pawn3.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
}
pawn3.ondrag = function (event) {
  drag(event)
}

// Fourth 1x1 pawn piece
const pawn4 = document.createElement('div')
pawn4.style.width = "80%"
pawn4.style.height = "80%"
pawn4.style.backgroundColor = "aqua"
pawn4.id = "pawn4"
pawn4.className = "pawn"
pawn4.innerText = "PAWN"
pawn4.draggable = "true"
pawn4.style.position = "relative"
pawn4.style.left = "25px"

pawn4.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
}
pawn4.ondrag = function (event) {
  drag(event)
}


// 2x1 rook piece
const rook = document.createElement('div')
rook.style.width = "140%"
rook.style.height = "95%"
rook.style.backgroundColor = "aqua"
rook.id = "rook"
rook.className = "rook"
rook.innerText = "ROOK"
rook.draggable = "true"
rook.style.position = "relative"
rook.style.left = "50px"

rook.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  event.target.parentElement.nextElementSibling.className = "empty"
}
rook.ondrag = function (event) {
  drag(event)
}

// 1x2 knight piece
const knight = document.createElement('div')
knight.style.width = "95%"
knight.style.height = "140%"
knight.style.backgroundColor = "aqua"
knight.id = "knight"
knight.className = "knight"
knight.innerText = "KNIGHT"
knight.draggable = "true"
knight.style.position = "relative"
knight.style.top = "60px"

knight.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "empty" 
}
knight.ondrag = function (event) {
  drag(event)
}

// Second 1x2 knight piece
const knight2 = document.createElement('div')
knight2.style.width = "95%"
knight2.style.height = "140%"
knight2.style.backgroundColor = "aqua"
knight2.id = "knight2"
knight.className = "knight"
knight2.innerText = "KNIGHT"
knight2.draggable = "true"
knight2.style.position = "relative"
knight2.style.top = "60px"

knight2.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "empty" 
}
knight2.ondrag = function (event) {
  drag(event)
}

// Third 1x2 knight piece
const knight3 = document.createElement('div')
knight3.style.width = "95%"
knight3.style.height = "140%"
knight3.style.backgroundColor = "aqua"
knight3.id = "knight3"
knight.className = "knight"
knight3.innerText = "KNIGHT"
knight3.draggable = "true"
knight3.style.position = "relative"
knight3.style.top = "60px"

knight3.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "empty" 
}
knight3.ondrag = function (event) {
  drag(event)
}

// Fourth 1x2 knight piece
const knight4 = document.createElement('div')
knight4.style.width = "95%"
knight4.style.height = "140%"
knight4.style.backgroundColor = "aqua"
knight4.id = "knight4"
knight.className = "knight"
knight4.innerText = "KNIGHT"
knight4.draggable = "true"
knight4.style.position = "relative"
knight4.style.top = "60px"

knight4.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "empty" 
}
knight4.ondrag = function (event) {
  drag(event)
}

// 2x2 king piece
const king = document.createElement('div')
king.style.width = "140%"
king.style.height = "140%"
king.style.backgroundColor = "gray"
king.id = "king"
king.innerText = "KING"
king.draggable = "true"
king.style.position = "relative"
king.style.top = "60px"
king.style.left = "60px"

king.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  event.target.parentElement.nextElementSibling.className = "empty"
  document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "empty" 
  document.getElementById(String(parseInt(event.target.parentElement.id) + 5)).className = "empty" 
}
king.ondrag = function (event) {
  drag(event)
}

const cell2 = document.getElementById("2")
const cell3 = document.getElementById("3")
const cell6 = document.getElementById("6")
const cell7 = document.getElementById("7")
cell2.appendChild(king)
cell2.className = "occupied"
cell3.className = "occupied"
cell6.className = "occupied"
cell7.className = "occupied"

const cell1 = document.getElementById("1")
const cell5 = document.getElementById("5")
cell1.appendChild(knight)
cell1.className = "occupied"
cell5.className = "occupied"

const cell4 = document.getElementById("4")
const cell8 = document.getElementById("8")
cell4.appendChild(knight2)
cell4.className = "occupied"
cell8.className = "occupied"

const cell9 = document.getElementById("9")
const cell13 = document.getElementById("9")
cell9.appendChild(knight3)
cell9.className = "occupied"
cell13.className = "occupied"

const cell12 = document.getElementById("12")
const cell16 = document.getElementById("16")
cell12.appendChild(knight4)
cell12.className = "occupied"
cell16.className = "occupied"

const cell10 = document.getElementById("10")
const cell11 = document.getElementById("11")
cell10.appendChild(rook)
cell10.className = "occupied"
cell11.className = "occupied"

const cell14 = document.getElementById("14")
cell14.appendChild(pawn)
cell14.className = "occupied"

const cell15 = document.getElementById("15")
cell15.appendChild(pawn2)
cell15.className = "occupied"

const cell17 = document.getElementById("17")
cell17.appendChild(pawn3)
cell17.className = "occupied"

const cell20 = document.getElementById("20")
cell20.appendChild(pawn4)
cell20.className = "occupied"



function drop(event) {
  event.preventDefault()

  // A piece might be dropped and appended to the div of another piece instead of the td, check if the target is indeed a td
  if (event.target.className === "occupied" || event.target.tagName != "TD") {
    return
  } else {
    let data = dataTrans.getData("text")
    event.target.appendChild(document.getElementById(data))

    switch (data) {
      case "pawn": 
        event.target.className = "occupied"
        break;
      case "rook": 
        event.target.className = "occupied"
        event.target.nextElementSibling.className = "occupied"
        break;
      case "knight":
        event.target.className = "occupied"
        const verticalElement = parseInt(event.target.id) + 4
        document.getElementById(String(verticalElement)).className = "occupied" 
        break;
      case "knight2":
        event.target.className = "occupied"
        const verticalElement2 = parseInt(event.target.id) + 4
        document.getElementById(String(verticalElement2)).className = "occupied" 
        break;
      case "knight3":
        event.target.className = "occupied"
        const verticalElement3 = parseInt(event.target.id) + 4
        document.getElementById(String(verticalElement3)).className = "occupied" 
        break;
      case "knight4":
        event.target.className = "occupied"
        const verticalElement4 = parseInt(event.target.id) + 4
        document.getElementById(String(verticalElement4)).className = "occupied" 
        break;
      case "king":
        event.target.className = "occupied"
        event.target.nextElementSibling.className = "occupied"
        document.getElementById(String(parseInt(event.target.parentElement.id) + 4)).className = "occupied" 
        document.getElementById(String(parseInt(event.target.parentElement.id) + 5)).className = "occupied" 
        break;
    }
  }
}

function allowDrop(event) {
  event.preventDefault()
}

function drag(event) {
  dataTrans.setData("text", event.target.id)
}

exitCell1.ondrop = function (event) {
  let data = dataTrans.getData("text")
  if (data != "king") {
    return
  } else {
    alert("You have won the game!")
  }
}

exitCell2.ondrop = function (event) {
  let data = dataTrans.getData("text")
  if (data != "king") {
    return
  } else {
    alert("You have won the game!")
  }
}