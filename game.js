let dataTrans = new DataTransfer()

// 1x1 pawn piece
const pawn = document.createElement('div')
pawn.style.width = "90%"
pawn.style.height = "90%"
pawn.style.backgroundColor = "aqua"
pawn.id = "pawn"
pawn.innerText = "PAWN"
pawn.draggable = "true"

pawn.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
}
pawn.ondrag = function (event) {
  drag(event)
}

// 2x1 rook piece
const rook = document.createElement('div')
rook.style.width = "200%"
rook.style.height = "95%"
rook.style.backgroundColor = "aqua"
rook.id = "rook"
rook.innerText = "ROOK"
rook.draggable = "true"
rook.style.position = "relative"

rook.ondragstart = function (event) {
  event.target.parentElement.className = "empty"
  event.target.parentElement.nextElementSibling.className = "empty"
}
rook.ondrag = function (event) {
  drag(event)
}

// 1x2 knight piece
const knight = document.createElement('div')
knight.style.width = "100%"
knight.style.height = "200%"
knight.style.backgroundColor = "aqua"
knight.id = "knight"
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

// 2x2 king piece
const king = document.createElement('div')
king.style.width = "200%"
king.style.height = "200%"
king.style.backgroundColor = "gray"
king.id = "king"
king.innerText = "KING"
king.draggable = "true"
king.style.position = "relative"
king.style.top = "60px"

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

const cell10 = document.getElementById("10")
const cell11 = document.getElementById("11")
cell10.appendChild(rook)
cell10.className = "occupied"
cell11.className = "occupied"

const cell20 = document.getElementById("20")
cell20.appendChild(pawn)
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

// Known issues:
// Once you start dragging, the table cells class will become "empty", even if you decided not to move a piece